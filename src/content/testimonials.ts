export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  branch: string;
  duration?: string;
  isVerified: boolean;
}

export const transformationDisclaimer =
  "Results vary. Individual results depend on consistency, effort, diet, and lifestyle.";

// Strictly empty by default to prevent inventing fake customer testimonials.
// Verified member stories will be inserted upon explicit member consent.
export const testimonials: Testimonial[] = [];

export const placeholderTestimonial: Testimonial = {
  id: "placeholder-1",
  quote:
    "The dedicated coaching atmosphere and high-end strength equipment transformed both my physical conditioning and daily discipline.",
  author: "[OCTACORE Member - Verified Story Pending]",
  branch: "Nerul Branch",
  duration: "16 Weeks Protocol",
  isVerified: false,
};
