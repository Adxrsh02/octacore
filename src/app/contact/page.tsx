import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schema";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact OCTACORE Fitness | Phone, WhatsApp & Enquiries",
  description:
    "Contact OCTACORE Fitness in Nerul (+91 90698 19090) and Airoli (+91 89281 49090). Fast desk response under 120 minutes. Connect via phone, WhatsApp, or online enquiry.",
  keywords: [
    "contact octacore fitness",
    "octacore phone number",
    "octacore whatsapp",
    "gym enquiry nerul",
    "gym contact airoli",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact OCTACORE Fitness | Nerul & Airoli Clubs",
    description:
      "Direct lines, WhatsApp concierge, and membership enquiry desk for OCTACORE Fitness in Navi Mumbai.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: "Contact OCTACORE Fitness",
      },
    ],
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <ContactClient />
    </>
  );
}
