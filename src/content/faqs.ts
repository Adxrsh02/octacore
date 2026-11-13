export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "nerul" | "airoli" | "training";
}

export const globalFaqs: FAQItem[] = [
  {
    id: "g-1",
    category: "general",
    question: "Are OCTACORE programs suitable for complete beginners?",
    answer:
      "Yes. All workout programs, free-weight exercises, and machine setups can be scaled to any experience level. Our on-floor trainers are always available to guide your technique and ensure safe execution.",
  },
  {
    id: "g-2",
    category: "general",
    question: "How do I inquire about membership pricing and plans?",
    answer:
      "Because membership plans vary by duration, branch, and current promotions, all pricing is provided on enquiry. You can submit the quick form on this website, call either branch directly, or message us on WhatsApp for instant details.",
  },
  {
    id: "g-3",
    category: "general",
    question: "Can I access both Nerul and Airoli branches?",
    answer:
      "Multi-club access is included with our Annual Elite memberships and select multi-club passes. Single-branch memberships can also be upgraded at any time by speaking with our front desk concierge.",
  },
  {
    id: "g-4",
    category: "general",
    question: "Do you offer trial or walkthrough sessions?",
    answer:
      "Complimentary floor walkthroughs and single-session trial passes can be scheduled by contacting your preferred branch via phone or WhatsApp prior to visiting.",
  },
  {
    id: "g-5",
    category: "general",
    question: "What amenities are available across OCTACORE facilities?",
    answer:
      "Both facilities feature full climate-controlled air conditioning, private changing rooms, secure storage lockers, 24/7 CCTV security, separate male/female washrooms, and dedicated parking.",
  },
];

export const nerulFaqs: FAQItem[] = [
  {
    id: "n-1",
    category: "nerul",
    question: "Where is the Nerul branch located and what is the landmark?",
    answer:
      "OCTACORE Fitness Nerul is located at Plot No. 781, Sector 1, Shiravane, Nerul, Navi Mumbai 400706. The immediate landmark is near the Jain Mandir in Sector 1 Shiravane.",
  },
  {
    id: "n-2",
    category: "nerul",
    question: "What are the operating hours for the Nerul branch?",
    answer:
      "According to published listings, Monday to Saturday hours are 6:00 AM – 11:00 PM, and Sunday hours are 7:00 AM – 11:00 AM. (Hours are subject to management reconfirmation during national holidays).",
  },
  {
    id: "n-3",
    category: "nerul",
    question: "Is parking available at the Nerul branch?",
    answer:
      "Yes. Dedicated monitored two-wheeler bays and curbside parking spaces for member vehicles are available in Sector 1 Shiravane.",
  },
  {
    id: "n-4",
    category: "nerul",
    question: "How do I call the Nerul branch directly?",
    answer:
      "You can call the Nerul desk directly at +91 90698 19090 or chat with us on WhatsApp using the same number.",
  },
];

export const airoliFaqs: FAQItem[] = [
  {
    id: "a-1",
    category: "airoli",
    question: "Where is the Airoli branch situated in Reliable Tech Park?",
    answer:
      "OCTACORE Fitness Airoli is located at Unit D-1, South Block, Empire, Reliable Tech Park, Thane–Belapur Road, Gavate Wadi, MIDC, Airoli, Navi Mumbai 400708.",
  },
  {
    id: "a-2",
    category: "airoli",
    question: "What are the operational hours for Airoli?",
    answer:
      "Monday to Saturday hours are 6:00 AM – 11:00 PM. Sundays are listed as closed. (Hours are subject to management reconfirmation).",
  },
  {
    id: "a-3",
    category: "airoli",
    question: "Do you offer corporate tie-ups for tech park companies?",
    answer:
      "Yes! We provide corporate group packages and corporate wellness partnerships for companies inside Reliable Tech Park, Mindspace Airoli, and along the Thane-Belapur corridor.",
  },
  {
    id: "a-4",
    category: "airoli",
    question: "How does parking work at Reliable Tech Park for members?",
    answer:
      "Members receive access to designated vehicular parking inside the South Block Empire area of Reliable Tech Park for both four-wheelers and two-wheelers.",
  },
];
