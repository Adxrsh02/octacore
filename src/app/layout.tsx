import type { Metadata, Viewport } from "next";
import { inter, bebasNeue, oswald } from "@/styles/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/content/site";
import { SkipToContent, Navbar, BottomActionBar, Footer } from "@/components/layout";
import { CookieConsent } from "@/components/common/CookieConsent";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
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
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.logo.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      process.env.GOOGLE_SITE_VERIFICATION ||
      undefined,
    other: {
      "msvalidate.01":
        process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION || "",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${bebasNeue.variable} ${oswald.variable}`}>
      <head>
        <link rel="preload" as="image" href={siteConfig.logo.url} type="image/jpeg" />
      </head>
      <body className="bg-bg text-text font-body selection:bg-accent selection:text-bg flex min-h-screen flex-col antialiased">
        <SmoothScrollProvider>
          <SkipToContent />
          <Navbar />
          <main id="main-content" className="flex flex-1 flex-col pt-16 pb-20 sm:pt-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <BottomActionBar />
          <CookieConsent />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
