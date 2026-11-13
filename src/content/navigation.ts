export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Facilities", href: "/facilities" },
  { label: "Transformations", href: "/transformations" },
  { label: "Locations", href: "/locations" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Training Programs", href: "/training" },
    { label: "Facilities & Hardware", href: "/facilities" },
    { label: "Transformations", href: "/transformations" },
    { label: "Membership Tiers", href: "/membership" },
  ],
  training: [
    { label: "Strength Training", href: "/training#strength-training" },
    { label: "Cardio Protocols", href: "/training#cardio-training" },
    { label: "Personal Training", href: "/training#personal-training" },
    { label: "Yoga & Group", href: "/training#yoga-group-training" },
  ],
  locations: [
    { label: "Locations Hub", href: "/locations" },
    { label: "Nerul Flagship Club", href: "/locations/nerul" },
    { label: "Airoli Tech Park Hub", href: "/locations/airoli" },
    { label: "Contact & Directions", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
