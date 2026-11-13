import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { branches } from "@/content/branches";
import { Phone, ChevronDown, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-2 border-border w-full border-t px-4 pt-14 pb-28 sm:px-6 lg:px-8 lg:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        {/* Top Tier: Brand Info & Branch Hotlines */}
        <div className="border-border/60 grid grid-cols-1 gap-8 border-b pb-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Link
              href="/"
              className="group flex items-center gap-4 transition-transform active:scale-95"
            >
              <div className="border-accent/30 group-hover:border-accent relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border bg-black p-1 shadow-[0_0_25px_rgba(255,133,0,0.25)] transition-all group-hover:shadow-[0_0_30px_rgba(255,133,0,0.4)] sm:h-20 sm:w-20">
                <Image
                  src={siteConfig.logo.url}
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-text text-2xl leading-none font-bold tracking-wider uppercase sm:text-3xl">
                  {siteConfig.name}
                </span>
                <span className="font-display text-accent mt-1.5 text-xs leading-tight font-semibold tracking-widest uppercase sm:text-sm">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>
            <p className="font-body text-text-muted mt-1 max-w-sm text-sm leading-relaxed">
              Navi Mumbai&apos;s premier strength and high-performance athletic facility. Engineered
              for physical elevation and disciplined lifestyle transformations across Nerul and
              Airoli.
            </p>
          </div>

          {/* Direct Hotlines Box */}
          <div className="flex flex-col gap-4 sm:flex-row lg:col-span-7">
            <div className="rounded-card bg-card border-border flex flex-1 flex-col gap-1.5 border p-4">
              <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
                Nerul Flagship Desk
              </span>
              <p className="font-body text-text-muted text-xs leading-snug">
                Plot No. 781, Sector 1, Shiravane, Nerul
              </p>
              <a
                href={`tel:${branches.nerul.phone}`}
                className="text-text hover:text-accent font-display mt-2 flex items-center gap-1.5 text-sm font-bold tracking-wider uppercase transition-colors"
              >
                <Phone className="text-accent h-4 w-4" />
                {branches.nerul.displayPhone}
              </a>
            </div>

            <div className="rounded-card bg-card border-border flex flex-1 flex-col gap-1.5 border p-4">
              <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
                Airoli Tech Park Desk
              </span>
              <p className="font-body text-text-muted text-xs leading-snug">
                Reliable Tech Park, Thane–Belapur Rd, MIDC
              </p>
              <a
                href={`tel:${branches.airoli.phone}`}
                className="text-text hover:text-accent font-display mt-2 flex items-center gap-1.5 text-sm font-bold tracking-wider uppercase transition-colors"
              >
                <Phone className="text-accent h-4 w-4" />
                {branches.airoli.displayPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Middle Tier: Links */}
        {/* Mobile Accordions */}
        <div className="divide-border/60 flex flex-col divide-y lg:hidden">
          <details className="group py-3 select-none">
            <summary className="font-display text-text hover:text-accent flex cursor-pointer list-none items-center justify-between text-base font-semibold tracking-wider uppercase">
              <span>Navigation Pages</span>
              <ChevronDown className="text-accent h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="font-body text-text-muted flex flex-col gap-2 pt-3 pl-2 text-sm">
              {footerLinks.pages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="group py-3 select-none">
            <summary className="font-display text-text hover:text-accent flex cursor-pointer list-none items-center justify-between text-base font-semibold tracking-wider uppercase">
              <span>Training Disciplines</span>
              <ChevronDown className="text-accent h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="font-body text-text-muted flex flex-col gap-2 pt-3 pl-2 text-sm">
              {footerLinks.training.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="group py-3 select-none">
            <summary className="font-display text-text hover:text-accent flex cursor-pointer list-none items-center justify-between text-base font-semibold tracking-wider uppercase">
              <span>Locations & Centers</span>
              <ChevronDown className="text-accent h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="font-body text-text-muted flex flex-col gap-2 pt-3 pl-2 text-sm">
              {footerLinks.locations.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </div>

        {/* Desktop Columns */}
        <div className="hidden grid-cols-3 gap-8 lg:grid">
          <div className="flex flex-col gap-3">
            <span className="font-display text-text text-sm font-bold tracking-wider uppercase">
              Navigation
            </span>
            <div className="font-body text-text-muted flex flex-col gap-2 text-sm">
              {footerLinks.pages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-text text-sm font-bold tracking-wider uppercase">
              Disciplines
            </span>
            <div className="font-body text-text-muted flex flex-col gap-2 text-sm">
              {footerLinks.training.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-text text-sm font-bold tracking-wider uppercase">
              Locations
            </span>
            <div className="font-body text-text-muted flex flex-col gap-2 text-sm">
              {footerLinks.locations.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tier: Socials, Copyright & Legal */}
        <div className="border-border/40 text-text-muted flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
          <div className="text-text-muted flex items-center gap-3">
            <a
              href={siteConfig.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-control bg-card border-border hover:text-accent flex h-9 w-9 items-center justify-center border transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-control bg-card border-border hover:text-accent flex h-9 w-9 items-center justify-center border transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <span className="font-body text-text-muted pl-1">
              {siteConfig.socials.instagram.handle}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-text-muted transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-text-muted transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
