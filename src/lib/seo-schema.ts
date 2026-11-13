import { siteConfig } from "@/content/site";
import { branches, type Branch } from "@/content/branches";
import { trainingPrograms } from "@/content/training";
import type { FAQItem } from "@/content/faqs";

/**
 * Returns Organization JSON-LD Schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo.url,
      width: siteConfig.logo.width,
      height: siteConfig.logo.height,
      caption: siteConfig.logo.alt,
    },
    image: siteConfig.logo.url,
    description: siteConfig.seo.defaultDescription,
    email: siteConfig.email,
    foundingDate: `${siteConfig.establishedYear}-01-01`,
    sameAs: [siteConfig.socials.instagram.url, siteConfig.socials.facebook.url],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: branches.nerul.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
      {
        "@type": "ContactPoint",
        telephone: branches.airoli.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
    ],
  };
}

/**
 * Returns WebSite JSON-LD Schema
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.seo.defaultDescription,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Returns HealthClub + LocalBusiness JSON-LD Schema for a branch.
 * Omit unconfirmed properties (e.g. unconfirmed geo for Airoli).
 */
export function getBranchHealthClubSchema(branch: Branch) {
  const isNerul = branch.slug === "nerul";

  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "LocalBusiness"],
    "@id": `${siteConfig.url}/locations/${branch.slug}/#healthclub`,
    name: branch.name,
    alternateName: `OCTACORE ${branch.name.split(", ")[1]}`,
    description: `${branch.tagline}. ${branch.shortLocation}, Navi Mumbai.`,
    url: `${siteConfig.url}/locations/${branch.slug}`,
    telephone: branch.phone,
    image: siteConfig.logo.url,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.addressParts.street,
      addressLocality: branch.addressParts.city,
      addressRegion: branch.addressParts.state,
      postalCode: branch.addressParts.postalCode,
      addressCountry: "IN",
    },
    areaServed: isNerul
      ? [
          { "@type": "AdministrativeArea", name: "Nerul" },
          { "@type": "AdministrativeArea", name: "Shiravane" },
          { "@type": "AdministrativeArea", name: "Seawoods" },
          { "@type": "AdministrativeArea", name: "Navi Mumbai" },
        ]
      : [
          { "@type": "AdministrativeArea", name: "Airoli" },
          { "@type": "AdministrativeArea", name: "Reliable Tech Park" },
          { "@type": "AdministrativeArea", name: "MIDC Airoli" },
          { "@type": "AdministrativeArea", name: "Navi Mumbai" },
        ],
    hasMap: branch.googleMapsUrl,
    sameAs: [
      siteConfig.socials.instagram.url,
      siteConfig.socials.facebook.url,
      ...(branch.googleBusinessUrl ? [branch.googleBusinessUrl] : []),
    ],
    openingHoursSpecification: branch.operatingHours.schedule
      .filter((s) => !s.isClosed)
      .map((s) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: s.days.includes("Monday")
          ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          : ["Sunday"],
        opens: s.open,
        closes: s.close,
      })),
  };

  // Only include geo if confirmed by public registry / map verification.
  // Nerul is verified; Airoli unconfirmed geo is strictly omitted to avoid guessing.
  if (branch.geo.isConfirmed) {
    baseSchema.geo = {
      "@type": "GeoCoordinates",
      latitude: branch.geo.latitude,
      longitude: branch.geo.longitude,
    };
  }

  return baseSchema;
}

/**
 * Returns Service / OfferCatalog JSON-LD Schema for Training Programs
 */
export function getTrainingCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.url}/training/#catalog`,
    name: "OCTACORE Athletic Training Programs",
    itemListElement: trainingPrograms.map((program, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: program.title,
        description: program.description,
        serviceType: program.category,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: "Navi Mumbai",
        },
      },
      position: index + 1,
    })),
  };
}

/**
 * Returns FAQPage JSON-LD Schema
 */
export function getFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  item?: string;
  url?: string;
}

/**
 * Returns BreadcrumbList JSON-LD Schema
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => {
      const link = crumb.item || crumb.url || "/";
      const fullUrl = link.startsWith("http")
        ? link
        : `${siteConfig.url}${link.startsWith("/") ? "" : "/"}${link}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: fullUrl,
      };
    }),
  };
}
