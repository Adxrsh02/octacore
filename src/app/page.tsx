import * as React from "react";
import type { Metadata } from "next";
import {
  HeroSection,
  IntroSection,
  PillarsSection,
  TrainingSection,
  StatsBandSection,
  FacilitiesBentoSection,
  TransformationsSection,
  TestimonialsSection,
  BranchCardsSection,
  FinalCTASection,
} from "@/components/sections";
import { siteConfig } from "@/content/site";
import { globalFaqs } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: {
    absolute: "OCTACORE Fitness | Premium Gym in Nerul & Airoli, Navi Mumbai",
  },
  description:
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
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "OCTACORE Fitness | Premium Gym in Nerul & Airoli, Navi Mumbai",
    description:
      "Discover OCTACORE Fitness in Nerul and Airoli, Navi Mumbai. Explore strength training, cardio, fitness programs and membership enquiries. Start your fitness journey today.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: siteConfig.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCTACORE Fitness | Premium Gym in Nerul & Airoli, Navi Mumbai",
    description:
      "Discover OCTACORE Fitness in Nerul and Airoli, Navi Mumbai. Explore strength training, cardio, fitness programs and membership enquiries.",
    images: [siteConfig.logo.url],
  },
};

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const faqSchema = getFaqSchema(globalFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([{ name: "Home", item: "/" }]);

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-bg text-text flex w-full flex-col">
        {/* 1. Hero with 3D Emblem & Dynamic Reveal */}
        <HeroSection />

        {/* Answer-First Block for Search & AI Engines */}
        <div className="mx-auto my-4 w-full max-w-4xl px-4 sm:px-6">
          <AnswerBlock
            question="Where is OCTACORE Fitness located and what does it offer?"
            answer="OCTACORE Fitness operates two premier athletic gym facilities in Navi Mumbai: our flagship facility in Nerul (Sector 1, Shiravane) and our corporate performance campus in Airoli (Reliable Tech Park). OCTACORE offers 5,000 sq.ft strength decks, urethane dumbbells up to 50kg, Olympic platforms, tactical cardio, and 1-on-1 personal training."
          />
        </div>

        {/* 2. Brand Introduction & Philosophy */}
        <IntroSection />

        {/* 3. The Three Pillars (Fitness, Passion, Spirit) */}
        <PillarsSection />

        {/* 4. Curated Disciplines & Training Carousel */}
        <TrainingSection />

        {/* 5. Animated Verified Stats Band */}
        <StatsBandSection />

        {/* 6. Atmosphere & Equipment Bento Teaser */}
        <FacilitiesBentoSection />

        {/* 7. Real Results & Before/After Comparison Slider */}
        <TransformationsSection />

        {/* 8. Member Voices & Testimonial Carousel */}
        <TestimonialsSection />

        {/* 9. Navi Mumbai Centers (Nerul & Airoli Branches) */}
        <BranchCardsSection />

        {/* 10. Final Call To Action */}
        <FinalCTASection />
      </div>
    </>
  );
}
