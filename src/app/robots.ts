import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dev/"],
      },
      // Allow reputable AI and LLM answer-engine crawlers
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Applebot", "CCBot"],
        allow: "/",
        disallow: ["/api/", "/dev/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
