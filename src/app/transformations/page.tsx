import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schema";
import { TransformationsClient } from "./TransformationsClient";

export const metadata: Metadata = {
  title: "Member Transformations & Athletic Results | OCTACORE Fitness",
  description:
    "Explore documented physical conditioning progress and transformations at OCTACORE Fitness in Nerul and Airoli, Navi Mumbai. Results vary by individual effort and lifestyle. Call +91 90698 19090.",
  keywords: [
    "gym transformations navi mumbai",
    "fat loss results nerul",
    "body transformation gym airoli",
    "fitness before and after navi mumbai",
    "octacore results",
  ],
  alternates: {
    canonical: `${siteConfig.url}/transformations`,
  },
  openGraph: {
    title: "OCTACORE Fitness Transformations & Athletic Conditioning",
    description:
      "Real athletic progress and physical conditioning breakthroughs from OCTACORE members in Nerul and Airoli.",
    url: `${siteConfig.url}/transformations`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: "OCTACORE Fitness Member Transformations",
      },
    ],
  },
};

export default function TransformationsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Transformations", url: `${siteConfig.url}/transformations` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <TransformationsClient />
    </>
  );
}
