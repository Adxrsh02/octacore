import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation/enquiry";
import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import fs from "fs";
import path from "path";

// In-memory rate limiting map for sliding window
interface RateLimitEntry {
  count: number;
  firstRequestTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up stale rate limit entries periodically
function cleanStaleRateLimits() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction and rate limiting
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "127.0.0.1";

    cleanStaleRateLimits();
    const now = Date.now();
    const existingRate = rateLimitMap.get(ip);

    if (existingRate) {
      if (now - existingRate.firstRequestTime < RATE_LIMIT_WINDOW_MS) {
        if (existingRate.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              message:
                "Too many requests from this address. Please wait a few minutes or reach out to us directly on WhatsApp.",
            },
            { status: 429 }
          );
        }
        existingRate.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    }

    // 2. Parse request JSON
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ success: false, message: "Invalid payload." }, { status: 400 });
    }

    // 3. Honeypot check (Bot trap)
    if (body && typeof body === "object" && "honeypot" in body) {
      const hp = (body as Record<string, unknown>).honeypot;
      if (typeof hp === "string" && hp.trim().length > 0) {
        // Silently return success to bot without sending email
        return NextResponse.json(
          {
            success: true,
            message: "Your enquiry has been received.",
          },
          { status: 200 }
        );
      }
    }

    // 4. Validate with Zod
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const pathKey = issue.path[0]?.toString() || "general";
        fieldErrors[pathKey] = issue.message;
      }
      return NextResponse.json(
        {
          success: false,
          message: "Please review and correct the errors below.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // 5. Cloudflare Turnstile Verification (if secret key configured)
    const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const token = leadData.turnstileToken;
      if (!token) {
        return NextResponse.json(
          {
            success: false,
            message: "Security verification required. Please try again.",
          },
          { status: 403 }
        );
      }

      const turnstileFormData = new URLSearchParams();
      turnstileFormData.append("secret", turnstileSecret);
      turnstileFormData.append("response", token);
      turnstileFormData.append("remoteip", ip);

      const turnstileRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          body: turnstileFormData,
        }
      );

      const turnstileOutcome = (await turnstileRes.json()) as {
        success?: boolean;
      };
      if (!turnstileOutcome.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Security challenge failed. Please refresh and try again.",
          },
          { status: 403 }
        );
      }
    }

    // 6. Generate Lead ID and Timestamp
    const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const timestampISO = new Date().toISOString();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    // 7. Store Lead in Backup Storage (Cloudflare KV & D1 / Local Filesystem)
    try {
      const backupEntry = {
        id: leadId,
        timestamp: timestampISO,
        formattedDate,
        ip,
        ...leadData,
      };

      let storedInCloudflare = false;

      // Persist in Cloudflare KV & D1 if available
      try {
        const { env } = await getCloudflareContext({ async: true });
        const cfEnv = env as {
          OCTACORE_LEADS_KV?: { put: (key: string, value: string) => Promise<void> };
          OCTACORE_DB?: {
            prepare: (query: string) => {
              bind: (...args: unknown[]) => { run: () => Promise<unknown> };
            };
          };
        };

        if (cfEnv?.OCTACORE_LEADS_KV) {
          await cfEnv.OCTACORE_LEADS_KV.put(`lead:${leadId}`, JSON.stringify(backupEntry));
          storedInCloudflare = true;
        }

        if (cfEnv?.OCTACORE_DB) {
          try {
            await cfEnv.OCTACORE_DB.prepare(
              `INSERT INTO leads (id, full_name, mobile_number, preferred_branch, fitness_goal, membership_interest, preferred_contact_time, ip, created_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
            )
              .bind(
                leadId,
                leadData.fullName,
                leadData.mobileNumber,
                leadData.preferredBranch,
                leadData.fitnessGoal,
                leadData.membershipInterest,
                leadData.preferredContactTime,
                ip,
                timestampISO
              )
              .run();
            storedInCloudflare = true;
          } catch (d1Err) {
            console.warn("D1 lead storage warning:", d1Err);
          }
        }
      } catch {
        // Not running in Cloudflare worker context
      }

      // Persistent backup in local development environment
      if (!storedInCloudflare && process.env.NODE_ENV === "development") {
        try {
          const backupDir = path.join(process.cwd(), ".data");
          if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
          }
          const backupFile = path.join(backupDir, "leads.json");
          let leadsList: unknown[] = [];
          if (fs.existsSync(backupFile)) {
            try {
              leadsList = JSON.parse(fs.readFileSync(backupFile, "utf8"));
            } catch {
              leadsList = [];
            }
          }
          leadsList.push(backupEntry);
          fs.writeFileSync(backupFile, JSON.stringify(leadsList, null, 2));
        } catch {
          // Non-fatal filesystem logging
        }
      }
    } catch (storageErr) {
      // Non-fatal logging for storage backup
      console.warn("Backup lead storage note:", storageErr);
    }

    // 8. Send Notification Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const branch = leadData.preferredBranch;
    const recipientEmail =
      branch === "nerul"
        ? process.env.LEAD_EMAIL_NERUL ||
          process.env.LEAD_EMAIL_DEFAULT ||
          "nerul@octacorefitness.com"
        : process.env.LEAD_EMAIL_AIROLI ||
          process.env.LEAD_EMAIL_DEFAULT ||
          "airoli@octacorefitness.com";

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "OCTACORE Fitness <leads@octacorefitness.com>";

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const emailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8" />
              <title>New OCTACORE Lead: ${leadData.fullName}</title>
            </head>
            <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080808; color: #ffffff;">
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 24px; background: linear-gradient(90deg, #1b1b1b 0%, #141414 100%); border-bottom: 2px solid #FF8500;">
                    <h1 style="margin: 0; font-size: 20px; color: #FF8500; text-transform: uppercase; letter-spacing: 2px;">OCTACORE FITNESS</h1>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #a0a0a0; text-transform: uppercase;">New Membership & Training Lead // ${branch.toUpperCase()} BRANCH</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px;">
                    <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px; border-collapse: collapse;">
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <td style="color: #a0a0a0; width: 35%; font-weight: 600;">Lead Reference:</td>
                        <td style="color: #ffffff; font-family: monospace;">${leadId}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <td style="color: #a0a0a0; font-weight: 600;">Full Name:</td>
                        <td style="color: #ffffff; font-size: 16px; font-weight: bold;">${leadData.fullName}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <td style="color: #a0a0a0; font-weight: 600;">Mobile Number:</td>
                        <td>
                          <a href="tel:+91${leadData.mobileNumber}" style="color: #FF8500; font-weight: bold; text-decoration: none;">+91 ${leadData.mobileNumber}</a>
                          <span style="color: #777;"> | </span>
                          <a href="https://wa.me/91${leadData.mobileNumber}?text=Hi%20${encodeURIComponent(leadData.fullName)}%2C%20greetings%20from%20OCTACORE%20Fitness%20${branch.toUpperCase()}" style="color: #25D366; text-decoration: none; font-size: 12px; font-weight: bold;">Chat WhatsApp &rarr;</a>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <td style="color: #a0a0a0; font-weight: 600;">Preferred Branch:</td>
                        <td style="color: #FF8500; font-weight: bold; text-transform: uppercase;">${branch} Branch</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <td style="color: #a0a0a0; font-weight: 600;">Fitness Goal:</td>
                        <td style="color: #ffffff; text-transform: capitalize;">${leadData.fitnessGoal}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <td style="color: #a0a0a0; font-weight: 600;">Tier Interest:</td>
                        <td style="color: #ffffff; text-transform: capitalize;">${leadData.membershipInterest}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <td style="color: #a0a0a0; font-weight: 600;">Preferred Window:</td>
                        <td style="color: #ffffff; text-transform: capitalize;">${leadData.preferredContactTime}</td>
                      </tr>
                      <tr>
                        <td style="color: #a0a0a0; font-weight: 600;">Submission Time:</td>
                        <td style="color: #a0a0a0; font-size: 12px;">${formattedDate}</td>
                      </tr>
                    </table>

                    <div style="margin-top: 24px; padding: 16px; background-color: #1b1b1b; border-radius: 8px; text-align: center;">
                      <a href="https://wa.me/91${leadData.mobileNumber}?text=Hi%20${encodeURIComponent(leadData.fullName)}%2C%20thank%20you%20for%20contacting%20OCTACORE%20Fitness.%20How%20can%20we%20assist%20your%20fitness%20journey%20today%3F" style="display: inline-block; background-color: #FF8500; color: #080808; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 6px; text-transform: uppercase; font-size: 13px; letter-spacing: 1px;">
                        Connect With Candidate
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 24px; background-color: #080808; border-top: 1px solid rgba(255,255,255,0.05); font-size: 11px; color: #666666; text-align: center;">
                    OCTACORE Fitness Automated Notification System · IP: ${ip}
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `;

        await resend.emails.send({
          from: fromEmail,
          to: recipientEmail,
          subject: `[Lead] ${leadData.fullName} — ${branch.toUpperCase()} Branch (${leadData.fitnessGoal})`,
          html: emailHtml,
        });
      } catch (emailError) {
        // Non-fatal logging: lead is already preserved in backup storage
        console.error("Email notification dispatch error:", emailError);
      }
    } else if (process.env.NODE_ENV === "development") {
      console.log(`[Dev Lead Notification] To: ${recipientEmail} | Lead:`, leadData);
    }

    // 9. Clean response to client
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your enquiry has been received. Our branch team will connect with you during your preferred time window.",
        leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    // Never leak stack traces to the public
    console.error("Lead submission unhandled error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit your enquiry at this moment. Please contact us directly via WhatsApp or call our desk.",
      },
      { status: 500 }
    );
  }
}
