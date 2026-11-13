import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTrainingCatalogSchema, getBreadcrumbSchema } from "@/lib/seo-schema";
import { TrainingClient } from "./TrainingClient";

export const metadata: Metadata = {
  title: "Training Programs & Protocols | OCTACORE Fitness Navi Mumbai",
  description:
    "Explore OCTACORE Fitness training programs: Strength & Hypertrophy, High-Output Cardio, 1-on-1 Personal Coaching, and Yoga & Mobility in Nerul and Airoli. Call +91 90698 19090.",
  keywords: [
    "gym training programs navi mumbai",
    "strength training nerul",
    "personal trainer airoli",
    "cardio workout navi mumbai",
    "functional training gym",
  ],
  alternates: {
    canonical: `${siteConfig.url}/training`,
  },
  openGraph: {
    title: "OCTACORE Fitness Training Programs & Athletic Protocols",
    description:
      "Curated athletic disciplines engineered for maximal physiological progression across Navi Mumbai.",
    url: `${siteConfig.url}/training`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: "OCTACORE Fitness Training Protocols",
      },
    ],
  },
};

export default function TrainingPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Training", url: `${siteConfig.url}/training` },
  ];

  return (
    <>
      <JsonLd data={getTrainingCatalogSchema()} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <TrainingClient />
    </>
  );
}
