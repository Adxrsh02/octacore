import { z } from "zod";

/**
 * Normalizes and validates Indian mobile phone numbers.
 * Supports:
 * - 10 digits starting with 6, 7, 8, or 9 (e.g. 9876543210)
 * - +91 prefixed (e.g. +91 98765 43210 or +919876543210)
 * - 0 prefixed (e.g. 09876543210)
 */
export function cleanIndianMobile(value: string): string {
  // Remove all non-digits except a leading plus
  let cleaned = value.trim().replace(/[\s\-()]/g, "");

  if (cleaned.startsWith("+91")) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith("91") && cleaned.length === 12) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith("0") && cleaned.length === 11) {
    cleaned = cleaned.slice(1);
  }

  return cleaned;
}

export function isValidIndianMobile(value: string): boolean {
  const cleaned = cleanIndianMobile(value);
  // Must be exactly 10 digits and start with 6, 7, 8, or 9
  return /^[6-9]\d{9}$/.test(cleaned);
}

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name cannot exceed 100 characters" })
    .regex(/^[a-zA-Z\s.'-]+$/, {
      message: "Name contains invalid characters",
    }),

  mobileNumber: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid 10-digit mobile number" })
    .refine(isValidIndianMobile, {
      message: "Please enter a valid Indian mobile number (starts with 6-9)",
    })
    .transform(cleanIndianMobile),

  preferredBranch: z.enum(["nerul", "airoli"], {
    errorMap: () => ({ message: "Please select a preferred branch" }),
  }),

  fitnessGoal: z.enum(["strength", "fatloss", "performance", "coaching", "general"], {
    errorMap: () => ({ message: "Please select your fitness goal" }),
  }),

  membershipInterest: z.enum(["annual", "quarterly", "monthly", "corporate", "exploring"], {
    errorMap: () => ({ message: "Please select your membership preference" }),
  }),

  preferredContactTime: z.enum(["morning", "afternoon", "evening", "anytime"], {
    errorMap: () => ({ message: "Please select a contact window" }),
  }),

  consent: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to our privacy policy to proceed",
    }),
  }),

  // Honeypot field - must be empty
  honeypot: z.string().optional(),

  // Cloudflare Turnstile verification token
  turnstileToken: z.string().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
export type EnquiryInput = z.input<typeof enquirySchema>;

export const FITNESS_GOALS = [
  { value: "strength", label: "Strength & Hypertrophy" },
  { value: "fatloss", label: "Fat Loss & Conditioning" },
  { value: "performance", label: "Athletic Performance" },
  { value: "coaching", label: "1-on-1 Personal Coaching" },
  { value: "general", label: "General Fitness & Longevity" },
] as const;

export const MEMBERSHIP_INTERESTS = [
  { value: "annual", label: "Annual Pass (All-Inclusive)" },
  { value: "quarterly", label: "Quarterly Protocol" },
  { value: "monthly", label: "Monthly Session Pass" },
  { value: "corporate", label: "Corporate Wellness Pass" },
  { value: "exploring", label: "Tour & Consultation First" },
] as const;

export const CONTACT_WINDOWS = [
  { value: "morning", label: "Morning", hours: "8 AM – 12 PM" },
  { value: "afternoon", label: "Afternoon", hours: "12 PM – 5 PM" },
  { value: "evening", label: "Evening", hours: "5 PM – 9 PM" },
  { value: "anytime", label: "Anytime", hours: "Flexible" },
] as const;
