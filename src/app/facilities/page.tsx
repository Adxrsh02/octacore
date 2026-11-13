import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schema";
import { FacilitiesClient } from "./FacilitiesClient";

export const metadata: Metadata = {
  title: "Gym Equipment & Facilities | OCTACORE Fitness Navi Mumbai",
  description:
    "Explore OCTACORE Fitness equipment & athletic facilities across Nerul and Airoli. Calibrated urethane dumbbells up to 50kg, Olympic platforms, sled sprint track, and cardio arsenal.",
  keywords: [
    "gym facilities navi mumbai",
    "gym equipment nerul",
    "gym equipment airoli",
    "heavy dumbbells gym navi mumbai",
    "olympic lifting platform nerul",
    "air conditioned gym navi mumbai",
  ],
  alternates: {
    canonical: `${siteConfig.url}/facilities`,
  },
  openGraph: {
    title: "OCTACORE Fitness Facilities & World-Class Equipment",
    description:
      "Calibrated urethane free weights, Olympic barbell stations, converging machines, and high-density sprint sled tracks in Navi Mumbai.",
    url: `${siteConfig.url}/facilities`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: "OCTACORE Fitness Equipment & Facilities",
      },
    ],
  },
};

export default function FacilitiesPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Facilities", url: `${siteConfig.url}/facilities` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <FacilitiesClient />
    </>
  );
}
