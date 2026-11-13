import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { branches } from "@/content/branches";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBranchHealthClubSchema, getBreadcrumbSchema } from "@/lib/seo-schema";
import { LocationsHubClient } from "./LocationsHubClient";

export const metadata: Metadata = {
  title: "Gym Locations in Nerul & Airoli, Navi Mumbai | OCTACORE Fitness",
  description:
    "Find an OCTACORE Fitness club near you in Navi Mumbai. Explore our athletic facilities in Nerul (Sector 1, Shiravane) and Airoli (Reliable Tech Park, MIDC). Call +91 90698 19090.",
  keywords: [
    "gym locations navi mumbai",
    "gym nerul",
    "gym airoli",
    "octacore branches",
    "gym near me navi mumbai",
    "fitness clubs near me",
  ],
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
  openGraph: {
    title: "OCTACORE Fitness Locations | Nerul & Airoli, Navi Mumbai",
    description:
      "Two premier athletic clubs across Navi Mumbai. Explore training facilities, floor equipment, hours, and direct hotline details.",
    url: `${siteConfig.url}/locations`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: "OCTACORE Fitness Locations Hub",
      },
    ],
  },
};

export default function LocationsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
  ];

  return (
    <>
      <JsonLd data={getBranchHealthClubSchema(branches.nerul)} />
      <JsonLd data={getBranchHealthClubSchema(branches.airoli)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <LocationsHubClient />
    </>
  );
}
