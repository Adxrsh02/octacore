export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  price: number | null; // null represents 'Price on enquiry'
  pricePeriod: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    id: "monthly",
    name: "Monthly Intake",
    tagline: "Flexible Single-Month Commitment",
    duration: "1 Month",
    price: null,
    pricePeriod: "per month",
    features: [
      "Full floor & equipment access at enrolled branch",
      "Initial coach floor walkthrough",
      "Locker room & shower suite access",
      "Free mobile WiFi & biometric tracking",
    ],
    ctaText: "Enquire Monthly Tier",
  },
  {
    id: "quarterly",
    name: "Quarterly Protocol",
    tagline: "Ideal 90-Day Conditioning Cycle",
    duration: "3 Months",
    price: null,
    pricePeriod: "per 3 months",
    isPopular: true,
    features: [
      "Full floor & equipment access at enrolled branch",
      "Biometric body composition assessment",
      "Tailored progressive routine template",
      "Priority locker room amenities",
      "Complimentary workout trial pass for a guest",
    ],
    ctaText: "Enquire 90-Day Tier",
  },
  {
    id: "annual",
    name: "Annual Elite Pass",
    tagline: "365 Days of Uncompromising Progression",
    duration: "12 Months",
    price: null,
    pricePeriod: "per year",
    features: [
      "Dual-hub access (Nerul & Airoli branches)",
      "Quarterly biomechanical form assessments",
      "Dedicated personal training onboarding session",
      "Exclusive priority concierge support",
      "Freeze privileges up to 30 days",
      "2 Guest passes per quarter",
    ],
    ctaText: "Enquire Annual Pass",
  },
  {
    id: "corporate",
    name: "Corporate Executive Pass",
    tagline: "Tailored for Reliable Tech Park & Corridor Teams",
    duration: "Custom / Group",
    price: null,
    pricePeriod: "custom billing",
    features: [
      "Discounted group enrollment rates",
      "Desk-to-Decompression specialized protocols",
      "Executive shower suite quick-access passes",
      "Direct HR invoice billing & health stipend support",
    ],
    ctaText: "Request Corporate Deck",
  },
];
