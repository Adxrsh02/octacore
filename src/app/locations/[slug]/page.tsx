import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { branches } from "@/content/branches";
import { nerulFaqs, airoliFaqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBranchHealthClubSchema, getFaqSchema, getBreadcrumbSchema } from "@/lib/seo-schema";
import { BranchClient } from "./BranchClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "nerul" }, { slug: "airoli" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const branch = branches[slug];

  if (!branch) {
    return {
      title: "Branch Not Found | OCTACORE Fitness",
    };
  }

  const isNerul = slug === "nerul";
  const title = isNerul
    ? "OCTACORE Fitness Nerul | Best Gym in Shiravane, Sector 1 Navi Mumbai"
    : "OCTACORE Fitness Airoli | Gym at Reliable Tech Park, MIDC Navi Mumbai";

  const description = isNerul
    ? "Train at OCTACORE Fitness Nerul (Sector 1, Shiravane). 5,000 sq.ft athletic facility with 50kg dumbbells, Olympic power cages, sled turf, and certified trainers. Call +91 90698 19090."
    : "Train at OCTACORE Fitness Airoli (Reliable Tech Park, MIDC). Corporate athletic facility with biomechanical selectorized fleet, tactical cardio, and executive showers. Call +91 89281 49090.";

  const url = `${siteConfig.url}/locations/${slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      `gym in ${branch.addressParts.area}`,
      `fitness center ${branch.addressParts.city}`,
      `octacore ${slug}`,
      "gym near me",
      "personal training navi mumbai",
      "strength gym navi mumbai",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: siteConfig.logo.url,
          width: 1080,
          height: 1080,
          alt: `${branch.name} - Athletic Center`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.logo.url],
    },
  };
}

export default async function BranchPage({ params }: PageProps) {
  const { slug } = await params;
  const branch = branches[slug];

  if (!branch) {
    notFound();
  }

  const isNerul = slug === "nerul";
  const branchFaqs = isNerul ? nerulFaqs : airoliFaqs;

  // Visual tour zones
  const zones = isNerul
    ? [
        {
          id: "zone-strength",
          title: "Heavy Strength Arena",
          badge: "Main Floor",
          caption:
            "Olympic lifting platforms and competition plate racks illuminated by industrial rim lights in Sector 1 Shiravane.",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBq4YahOxqXp3iJsP7x_HnVyQw3y3gnD1c2kRZlyb50p7CZh216RZN-NbG-jlTIOnpgA7Md_lNwLbh3eIUIjLdECPehDiTe8BJZygADAxPnOKTwc5dxnLzbC7lhTlrcse0B3bCLsavTF-hIp9CIUoJ1w2_oetaoFJSeibwfqGNXl2I3Rhokpse_Eltvh0hHkweYgU_OABlXuJXMkI65OFYb9EkcURFGTKVxsKELE1w",
          imageAlt:
            "Dark high-end athletic gym strength zone in Nerul featuring matte black Olympic squat racks",
        },
        {
          id: "zone-turf",
          title: "Sprint Lane",
          badge: "Turf",
          caption:
            "Kinetic Sprint Turf: High-density sled push runway with calibrated timer telemetry.",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDH9YoyhZqEsRi4wXOnqVsZzg8cM9ELQovhCQeYJG-mANwDdnK050D0hsCRHVrjGOFcPgtYvXPqpBeXN2kvs_9jbcGn4nQJJ1GoWVV_bxpN_yJSG2VopHJZCgZW9HkX-cOjlWW69U9F636d7bWUoSNLjPXVpHa1D3QfvCp4ZTr2zuzA_GLoB7uaJbycaiuzfL5LlF93CQwLs_ImLbiBxHP6aWnNCRpwoW5I9J0iak0",
          imageAlt: "Black and neon orange high performance indoor sled sprint turf",
        },
        {
          id: "zone-lockers",
          title: "Locker Suite",
          badge: "Wellness",
          caption:
            "Executive Locker Spaces: Obsidian vanity counters, private showers, and secure biometric lockers.",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ston2ZVUL5VNXhTvyS78CfPSoGfBvBqZAu_WfO4cF2dvvpmC5cGMiR8UUiact9Zw1V74S-seN8o8_fKZK9G8iXaTgx-KX9HHA_AhEf7prcu41SSJaym80g5LwYfGw1IopDiKkVzCUBw4amuCj4OmdWKHL3iQ61NbL21s0HKLbgkNgQsvS_uLsrDkmn1F0JTPtVj8YCFiyzmkxz4Qnl_tZwVHNB4waBT7swQmxDk",
          imageAlt: "Luxury gym executive locker room with warm amber illumination",
        },
      ]
    : [
        {
          id: "zone-strength",
          title: "Biomechanical Floor",
          badge: "Tech Park Deck",
          caption:
            "Pin-selected joint-friendly resistance line and calibrated dumbell stations at Reliable Tech Park.",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBq4YahOxqXp3iJsP7x_HnVyQw3y3gnD1c2kRZlyb50p7CZh216RZN-NbG-jlTIOnpgA7Md_lNwLbh3eIUIjLdECPehDiTe8BJZygADAxPnOKTwc5dxnLzbC7lhTlrcse0B3bCLsavTF-hIp9CIUoJ1w2_oetaoFJSeibwfqGNXl2I3Rhokpse_Eltvh0hHkweYgU_OABlXuJXMkI65OFYb9EkcURFGTKVxsKELE1w",
          imageAlt: "High-end machine line with ergonomic biomechanics in Airoli",
        },
        {
          id: "zone-cardio",
          title: "Tactical Cardio Bay",
          badge: "Metabolic",
          caption:
            "Assault runners, rowers, and air-resistance ellipticals for fast corporate lunch & de-stress sessions.",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCHS3IG33_ARO2Q-XbrLMWLyRCnXTAmV3rL77LmLssuxyx_cF3PgJrG4gtpxhRfmMkqtniykf4_sTz9GIcZKK9a8hYw7PYZi07ZLLh2F0jy3ZibBnMa7Ro753FlqB398mCDIrvaQtO1FeiZSIKN8KeBTtqo9z5i4nEMDpcEy0eMtfN-h1y29MdMK1jIN0T7eckDqNVilHNsvSARDFXTxJsOQbeAvdP2R2di6JHBQEs",
          imageAlt: "Curved runners and cardiovascular equipment",
        },
        {
          id: "zone-showers",
          title: "Executive Showers",
          badge: "Corporate",
          caption:
            "High-pressure hot shower suites and secure RFID lockers for smooth desk-to-gym transitions.",
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ston2ZVUL5VNXhTvyS78CfPSoGfBvBqZAu_WfO4cF2dvvpmC5cGMiR8UUiact9Zw1V74S-seN8o8_fKZK9G8iXaTgx-KX9HHA_AhEf7prcu41SSJaym80g5LwYfGw1IopDiKkVzCUBw4amuCj4OmdWKHL3iQ61NbL21s0HKLbgkNgQsvS_uLsrDkmn1F0JTPtVj8YCFiyzmkxz4Qnl_tZwVHNB4waBT7swQmxDk",
          imageAlt: "Corporate shower suites and locker facilities",
        },
      ];

  const highlights = isNerul
    ? [
        {
          category: "Free Weights",
          title: "50 KG",
          subtitle: "Calibrated Dumbbell Matrix",
          icon: "fitness_center",
        },
        {
          category: "Strength Station",
          title: "Olympic",
          subtitle: "Full Power Racks & Deadlift Platforms",
          icon: "fence",
        },
        {
          category: "Kinetic Turf",
          title: "Sprint",
          subtitle: "Heavy Sled Track & Plyometric Lane",
          icon: "sprint",
        },
        {
          category: "Biomechanics",
          title: "Dual Cable",
          subtitle: "Multi-angle Cable Cross Towers",
          icon: "alt_route",
        },
        {
          category: "Competition Spec",
          title: "Calibrated Iron Plates & Sprint Treadmills",
          subtitle:
            "Zero-tolerance competition discs paired with commercial curved runner machines.",
          icon: "speed",
          isWide: true,
        },
      ]
    : [
        {
          category: "Ergonomics",
          title: "Decompress",
          subtitle: "Desk-to-Decompression Mobility & Core Rigs",
          icon: "chair_alt",
        },
        {
          category: "Selectorized",
          title: "Pin Fleet",
          subtitle: "Biomechanical Joint-Friendly Machine Row",
          icon: "precision_manufacturing",
        },
        {
          category: "Tactical Cardio",
          title: "Assault",
          subtitle: "Watt-Calibrated Curved Runners & Rowers",
          icon: "speed",
        },
        {
          category: "Corporate Perks",
          title: "Showers",
          subtitle: "Rain Showers & RFID Lockers for Tech Park Teams",
          icon: "shower",
        },
        {
          category: "Executive Mobility",
          title: "Express Lunch & Post-Shift Protocols",
          subtitle:
            "45-minute high-density workouts designed specifically for Reliable Tech Park schedules.",
          icon: "alarm",
          isWide: true,
        },
      ];

  const seoAreas = isNerul
    ? [
        "Shiravane Sector 1",
        "Nerul East & West",
        "Seawoods Grand Central",
        "LP Junction Corridor",
        "Juinagar",
        "Navi Mumbai",
      ]
    : [
        "Reliable Tech Park",
        "MIDC Airoli",
        "Mindspace Airoli",
        "Thane-Belapur Corridor",
        "Airoli East & West",
        "Digha / Rabale",
      ];

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: branch.name, url: `${siteConfig.url}/locations/${slug}` },
  ];

  return (
    <>
      <JsonLd data={getBranchHealthClubSchema(branch)} />
      <JsonLd data={getFaqSchema(branchFaqs)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <BranchClient
        branch={branch}
        faqs={branchFaqs}
        zones={zones}
        highlights={highlights}
        seoAreas={seoAreas}
      />
    </>
  );
}
