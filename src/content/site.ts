export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  supportingText: string;
  establishedYear: number;
  url: string;
  email: string;
  logo: {
    url: string;
    localPath: string;
    alt: string;
    width: number;
    height: number;
  };
  socials: {
    instagram: {
      url: string;
      handle: string;
    };
    facebook: {
      url: string;
      name: string;
    };
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "OCTACORE Fitness",
  shortName: "OCTACORE",
  tagline: "FITNESS • PASSION • SPIRIT",
  headline: "BUILT THROUGH DISCIPLINE. DEFINED BY STRENGTH.",
  supportingText:
    "Your fitness journey deserves more than an ordinary workout. Discover a training environment where passion meets purpose and every session brings you closer to your goals.",
  establishedYear: 2019,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://octacorefitness.com",
  email: "contact@octacorefitness.com",
  logo: {
    url: "https://res.cloudinary.com/lta722n4/image/upload/v1794503018/Octacore_Fitness_Logo.jpg",
    localPath: "/brand/octacore-fitness-logo.jpg",
    alt: "OCTACORE Fitness Official Logo",
    width: 1080,
    height: 1080,
  },
  socials: {
    instagram: {
      url: "https://www.instagram.com/octacorefitness/",
      handle: "@octacorefitness",
    },
    facebook: {
      url: "https://www.facebook.com/OCTACOREFITNESS",
      name: "OCTACOREFITNESS",
    },
  },
  seo: {
    defaultTitle: "OCTACORE Fitness | Premium Gym in Nerul & Airoli, Navi Mumbai",
    titleTemplate: "%s | OCTACORE Fitness",
    defaultDescription:
      "Discover OCTACORE Fitness in Nerul and Airoli, Navi Mumbai. Explore strength training, cardio, fitness programs and membership enquiries. Start your fitness journey today.",
    keywords: [
      "Gym in Nerul",
      "Best Gym in Nerul",
      "Fitness Centre in Nerul",
      "Gym in Airoli",
      "Best Gym in Airoli",
      "Fitness Centre in Airoli",
      "Strength Training in Nerul",
      "Personal Training in Navi Mumbai",
      "Gym near Reliable Tech Park",
      "OCTACORE Fitness",
      "Navi Mumbai Gyms",
    ],
  },
};
