import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schema";
import { MembershipClient } from "./MembershipClient";

export const metadata: Metadata = {
  title: "Gym Membership Plans & Tiers | OCTACORE Fitness Navi Mumbai",
  description:
    "Explore OCTACORE Fitness membership tiers: Monthly Intake, Quarterly Protocol, Annual Elite Pass, and Corporate Plans in Nerul & Airoli. Transparent pricing upon enquiry. Call +91 90698 19090.",
  keywords: [
    "gym membership navi mumbai",
    "gym fees nerul",
    "gym packages airoli",
    "corporate gym membership navi mumbai",
    "octacore fitness prices",
  ],
  alternates: {
    canonical: `${siteConfig.url}/membership`,
  },
  openGraph: {
    title: "OCTACORE Fitness Membership Tiers & Passes",
    description:
      "Engineered commitments for consistent athletic adaptation. Request your custom rate and tour pass.",
    url: `${siteConfig.url}/membership`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: "OCTACORE Fitness Membership Plans",
      },
    ],
  },
};

export default function MembershipPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Membership", url: `${siteConfig.url}/membership` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <MembershipClient />
    </>
  );
}
