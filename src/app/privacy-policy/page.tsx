import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Privacy Policy | OCTACORE Fitness",
  description:
    "Learn how OCTACORE Fitness collects, uses, and protects your personal information across our Nerul and Airoli gym facilities in Navi Mumbai.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 pb-20 sm:px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="font-display text-text-muted flex items-center gap-2 pt-2 text-xs tracking-wider uppercase"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-accent font-semibold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-accent h-5 w-5" />
            <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
              LEGAL ARCHITECTURE
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-text-muted font-mono text-xs">
            Last Updated: November 2026 • Effective Date: January 1, 2025
          </p>
        </section>

        {/* Content Body */}
        <div className="text-text-muted flex flex-col gap-6 text-sm leading-relaxed sm:text-base">
          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              1. Overview &amp; Scope
            </h2>
            <p>
              OCTACORE Fitness (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
              athletic gym facilities in Navi Mumbai, Maharashtra, including our flagship facility
              in Nerul (Sector 1, Shiravane) and corporate training campus in Airoli (Reliable Tech
              Park). This Privacy Policy explains how we collect, store, utilize, and protect your
              personal information when you use our website ({siteConfig.url}) or submit an enquiry
              for club membership and training services.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              2. Information We Collect
            </h2>
            <p>
              When you interact with our online platform or register an enquiry, we collect only the
              necessary details required to coordinate your training consultation:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-white/90">
              <li>
                <strong>Personal Contact Data:</strong> Full Name and 10-digit Indian mobile number
                (+91).
              </li>
              <li>
                <strong>Enquiry Preferences:</strong> Preferred branch location (Nerul or Airoli),
                primary fitness conditioning goal (Strength, Fat Loss, Performance, Coaching,
                General), membership tier interest (Monthly, Quarterly, Annual, Corporate), and
                preferred contact window.
              </li>
              <li>
                <strong>Technical &amp; Analytics Data:</strong> IP address, device type, browser
                specifications, and anonymous interaction metrics collected via Google Analytics 4
                (only upon user cookie consent).
              </li>
            </ul>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              3. Purpose of Processing &amp; Communication
            </h2>
            <p>
              We utilize collected lead information strictly for legitimate business operations:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-white/90">
              <li>Dispathing your enquiry to the relevant Nerul or Airoli branch desk.</li>
              <li>
                Contacting you via direct telephone call or WhatsApp to schedule a club walkthrough,
                biometric screening, or membership consultation.
              </li>
              <li>Assisting with corporate wellness group arrangements and fee structures.</li>
              <li>
                Maintaining operational club safety and preventing spam through Cloudflare Turnstile
                bot verification.
              </li>
            </ul>
            <p className="mt-1">
              <strong>
                We NEVER sell, trade, or rent your personal data to third-party telemarketers or
                advertisers.
              </strong>
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              4. WhatsApp &amp; SMS Communication
            </h2>
            <p>
              By submitting an online enquiry on this website, you explicitly consent to receive
              transactional communications from OCTACORE Fitness representatives via phone and
              WhatsApp regarding your membership request. You may opt out of future messages at any
              time by simply replying &ldquo;STOP&rdquo; on WhatsApp or letting our front desk
              concierge know during your consultation.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              5. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              We employ modern, privacy-respecting cookies to enhance site navigation and measure
              aggregated engagement metrics across our club pages. In compliance with modern digital
              standards, tracking analytics are gated behind an accessible cookie consent prompt.
              You may accept or decline analytical tracking without affecting your ability to browse
              facility hardware or submit membership requests.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              6. Data Security &amp; Retention
            </h2>
            <p>
              All lead submissions are transmitted over 256-bit SSL/TLS encrypted connections.
              Server-side Route Handlers validate, sanitize, and rate-limit submissions to prevent
              unauthorized data interception. Notification emails are dispatched through Resend with
              strict server-side credentials. Lead backups are retained only as long as necessary
              for administrative intake and verification.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              7. Contact Us &amp; Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal
              records from our enquiry database. For privacy questions, please contact our
              administrative desk:
            </p>
            <div className="bg-bg-2 flex flex-col gap-1 rounded-xl border border-white/5 p-4 text-xs">
              <span className="font-display text-accent font-semibold tracking-wider uppercase">
                OCTACORE Fitness Administration
              </span>
              <span className="text-white">
                Nerul Club: Plot No. 781, Sector 1, Shiravane, Nerul, Navi Mumbai 400706
              </span>
              <span className="text-white">
                Airoli Club: Unit D-1, Reliable Tech Park, MIDC Airoli, Navi Mumbai 400708
              </span>
              <span className="text-text-muted mt-1">
                Direct Hotline: +91 90698 19090 / +91 89281 49090
              </span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
