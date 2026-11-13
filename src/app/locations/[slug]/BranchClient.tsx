"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  ChevronRight,
  Maximize2,
  X,
  Dumbbell,
  Building2,
  Compass,
  ArrowUpRight,
  Info,
} from "lucide-react";
import type { Branch } from "@/content/branches";
import type { FAQItem } from "@/content/faqs";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { trackCallClick, trackWhatsAppClick, trackDirectionsClick } from "@/lib/analytics";

interface ZoneItem {
  id: string;
  title: string;
  badge: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
}

interface BranchClientProps {
  branch: Branch;
  faqs: FAQItem[];
  zones: ZoneItem[];
  highlights: {
    category: string;
    title: string;
    subtitle: string;
    icon: string;
    isWide?: boolean;
  }[];
  seoAreas: string[];
}

export function BranchClient({ branch, faqs, zones, highlights, seoAreas }: BranchClientProps) {
  const [activeZone, setActiveZone] = React.useState<ZoneItem | null>(null);

  const isNerul = branch.slug === "nerul";

  const handleCall = () => {
    trackCallClick(branch.slug as "nerul" | "airoli", branch.phone);
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick(branch.slug as "nerul" | "airoli", branch.whatsappNumber);
  };

  const handleDirections = () => {
    trackDirectionsClick(branch.slug as "nerul" | "airoli");
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-20 sm:px-6">
      {/* 1. BREADCRUMBS */}
      <nav
        aria-label="Breadcrumb"
        className="text-text-muted font-display flex items-center gap-2 pt-2 text-xs tracking-wider uppercase"
      >
        <Link href="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <span className="text-white/20">/</span>
        <Link href="/locations" className="hover:text-accent transition-colors">
          Locations
        </Link>
        <span className="text-white/20">/</span>
        <span className="text-accent font-semibold">{branch.name.split(", ")[1]}</span>
      </nav>

      {/* Answer-First Block for Search & AI Engines */}
      <AnswerBlock
        question={
          isNerul
            ? "What facilities and equipment are available at OCTACORE Fitness Nerul?"
            : "Where is OCTACORE Fitness Airoli located and what are its features?"
        }
        answer={
          isNerul
            ? "OCTACORE Fitness Nerul is a flagship 5,000 sq.ft athletic gym located at Plot No. 781, Sector 1, Shiravane, Near Jain Mandir, Nerul, Navi Mumbai 400706. The club features calibrated urethane dumbbells up to 50kg, Olympic power racks, heavy sled sprint turf, air conditioning, and certified trainers."
            : "OCTACORE Fitness Airoli is an athletic facility located at Unit D-1, Reliable Tech Park, Thane-Belapur Road, MIDC Airoli, Navi Mumbai 400708. Designed for corporate professionals, it features biomechanically calibrated selectorized strength machines, curved assault runners, executive shower suites, locker rooms, and desk-to-decompression recovery workouts."
        }
      />

      {/* 2. HERO SECTION */}
      <section className="bg-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-2xl sm:p-8">
        <div className="bg-accent/10 pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl" />

        <div className="flex items-center gap-2">
          <span className="bg-accent h-2.5 w-2.5 animate-pulse rounded-full shadow-[0_0_10px_#ff8500]" />
          <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
            {branch.tagline}
          </span>
        </div>

        <h1 className="font-display text-3xl leading-none font-bold tracking-tight text-white uppercase sm:text-5xl">
          OCTACORE FITNESS, <span className="text-accent">{branch.name.split(", ")[1]}</span>
        </h1>

        <p className="text-text-muted max-w-2xl text-sm leading-relaxed sm:text-base">
          {isNerul
            ? "The center of athletic excellence in Shiravane, Nerul. Over 5,000 sq.ft of precision-engineered training floor calibrated for maximal human performance."
            : "Engineered for high performers, working executives, and tech park teams in Reliable Tech Park, MIDC Airoli. Desk-to-decompression conditioning with executive amenities."}
        </p>

        {/* Floor Metrics Telemetry Strip */}
        <div className="grid grid-cols-3 gap-2 pt-2 sm:gap-3">
          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3 sm:p-4">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase sm:text-xs">
              {isNerul ? "Floor Space" : "Campus Zone"}
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-xl font-bold text-white sm:text-2xl">
                {isNerul ? "5,000" : "MIDC"}
              </span>
              <span className="text-text-muted text-[11px]">{isNerul ? "SQ.FT" : "TECH PARK"}</span>
            </div>
          </div>

          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3 sm:p-4">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase sm:text-xs">
              {isNerul ? "Heavy Dumbbells" : "Strength Arsenal"}
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-accent text-xl font-bold sm:text-2xl">
                {isNerul ? "50" : "PIN"}
              </span>
              <span className="text-text-muted text-[11px]">{isNerul ? "KG MAX" : "SELECTED"}</span>
            </div>
          </div>

          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3 sm:p-4">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase sm:text-xs">
              Biometric Deck
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-accent-2 text-xl font-bold sm:text-2xl">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ESSENTIAL INFO PANEL */}
      <section className="bg-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-xl sm:p-8">
        <div className="from-accent via-accent-2 absolute top-0 right-0 left-0 h-1 bg-gradient-to-r to-transparent" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-bg-2 text-accent flex h-8 w-8 items-center justify-center rounded-lg">
              <MapPin className="h-4 w-4" />
            </div>
            <span className="font-display text-xs font-semibold tracking-wider text-white uppercase">
              Location &amp; Operations
            </span>
          </div>
          <span className="bg-accent/15 border-accent/30 text-accent font-display rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase">
            Hub Verified
          </span>
        </div>

        {/* Address details */}
        <div className="bg-bg-2/70 flex flex-col gap-1.5 rounded-xl border border-white/5 p-4">
          <span className="font-display text-text-muted text-[11px] tracking-wider uppercase">
            Official Address
          </span>
          <p className="text-sm leading-relaxed font-medium text-white sm:text-base">
            {branch.fullAddress}
          </p>
          {branch.addressParts.landmark && (
            <div className="text-accent mt-1 flex items-center gap-1.5 text-xs">
              <Navigation className="h-3.5 w-3.5" />
              <span>Landmark: {branch.addressParts.landmark}</span>
            </div>
          )}
        </div>

        {/* Dedicated Hotline */}
        <div className="bg-bg-2/70 flex items-center justify-between rounded-xl border border-white/5 p-4">
          <div className="flex flex-col">
            <span className="font-display text-text-muted text-[11px] tracking-wider uppercase">
              Dedicated Hotline
            </span>
            <span className="font-display mt-0.5 text-xl font-bold tracking-wide text-white sm:text-2xl">
              {branch.displayPhone}
            </span>
          </div>
          <a
            href={`tel:${branch.phone}`}
            onClick={handleCall}
            aria-label={`Call ${branch.name}`}
            className="bg-accent hover:bg-accent-2 text-bg flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-all active:scale-95"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>

        {/* Operational Schedule Grid */}
        <div className="bg-bg-2/70 flex flex-col gap-2.5 rounded-xl border border-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Clock className="text-accent h-4 w-4" />
              <span className="font-display text-xs font-semibold tracking-wider text-white uppercase">
                Operational Schedule
              </span>
            </div>
            <span className="text-accent-2 font-display flex items-center gap-1.5 text-[11px] tracking-wider uppercase">
              <span className="bg-accent-2 h-1.5 w-1.5 animate-pulse rounded-full" />
              Open Today
            </span>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/5 pt-1 text-sm">
            {branch.operatingHours.schedule.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-1">
                <span className="text-text-muted">{item.days}</span>
                <span className="font-display text-base font-semibold text-white">
                  {item.isClosed ? (
                    <span className="text-error uppercase">Closed (Rest &amp; Sanitization)</span>
                  ) : (
                    `${item.open} – ${item.close}`
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-bg text-text-muted mt-2 flex items-start gap-2 rounded-lg border border-white/5 p-2.5 text-xs">
            <Info className="text-accent mt-0.5 h-4 w-4 shrink-0" />
            <p className="leading-snug">
              *Hours subject to management reconfirmation during national holidays &amp; scheduled
              maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LARGE THUMB-FRIENDLY ACTION BUTTONS */}
      <section aria-label="Direct Quick Contacts" className="flex flex-col gap-3">
        {/* Direct Call */}
        <a
          href={`tel:${branch.phone}`}
          onClick={handleCall}
          className="bg-card hover:bg-card-hover group flex min-h-[56px] items-center justify-between rounded-xl border border-white/10 px-5 text-white shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="bg-bg-2 text-accent group-hover:bg-accent group-hover:text-bg flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-text-muted text-[11px] tracking-wider uppercase">
                Direct Club Line
              </span>
              <span className="font-display text-lg font-bold tracking-wider text-white uppercase">
                Call {branch.displayPhone}
              </span>
            </div>
          </div>
          <ChevronRight className="text-text-muted h-5 w-5 transition-colors group-hover:text-white" />
        </a>

        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${branch.whatsappNumber}?text=${encodeURIComponent(
            branch.whatsappPrefillText
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="bg-card hover:bg-card-hover group flex min-h-[56px] items-center justify-between rounded-xl border border-white/10 px-5 text-white shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="bg-bg-2 flex h-10 w-10 items-center justify-center rounded-lg text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-text-muted text-[11px] tracking-wider uppercase">
                Instant Concierge
              </span>
              <span className="font-display text-lg font-bold tracking-wider text-white uppercase">
                Chat on WhatsApp
              </span>
            </div>
          </div>
          <ArrowUpRight className="text-text-muted h-5 w-5 transition-colors group-hover:text-white" />
        </a>

        {/* Get Directions Solid Orange Button */}
        <a
          href={branch.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDirections}
          className="bg-accent hover:bg-accent-2 text-bg flex min-h-[58px] items-center justify-between rounded-xl px-5 font-bold shadow-[0_0_24px_rgba(255,133,0,0.4)] transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="bg-bg/20 text-bg flex h-10 w-10 items-center justify-center rounded-lg">
              <Navigation className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-bg/80 text-[11px] tracking-wider uppercase">
                Turn-by-turn Navigation
              </span>
              <span className="font-display text-xl font-bold tracking-wider uppercase">
                Get Directions
              </span>
            </div>
          </div>
          <Compass className="text-bg h-6 w-6" />
        </a>
      </section>

      {/* 5. TACTICAL GEO LOCATOR */}
      <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-5 shadow-xl sm:p-6">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <Compass className="text-accent h-5 w-5" />
            <span className="font-display text-xs font-semibold tracking-wider text-white uppercase">
              Tactical Geo Locator
            </span>
          </div>
          <span className="text-text-muted text-xs">{branch.shortLocation}</span>
        </div>

        {/* Map Trigger Frame */}
        <div
          className="group relative flex h-64 w-full flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-cover bg-center p-4 shadow-inner"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsGrG1TacwdI5HXG3gJj0rgxYIodLN-xQY2e3kgfCGkSZT8I48_F5rBitYc14PtE8QIcxI5P2BtbeyuYLmJckowbMMr6gGn4vEvfvKPFsHFYiUInE7zwqLKNCtstD3TB6s4aJc83Dlv9G9WeU3IPtokM5c0rRo2phBU54j6zPWz6qbqiwkVtTLEv6P-G7d2Tt4KSVs77cigJvAWvAlIfQyvTmIE0BDdBbWb8l2kjc')`,
          }}
        >
          <div className="from-bg via-bg/60 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />

          {/* Tactical Pin Marker graphic */}
          <div className="pointer-events-none absolute top-1/3 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <div className="bg-accent/20 absolute flex h-14 w-14 animate-ping items-center justify-center rounded-full" />
            <div className="bg-accent text-bg relative z-10 flex h-11 w-11 items-center justify-center rounded-full font-bold shadow-[0_0_20px_#ff8500]">
              <Dumbbell className="h-6 w-6" />
            </div>
            <div className="bg-bg/90 border-accent/40 text-accent font-display mt-2 rounded-full border px-3 py-0.5 text-[11px] font-semibold tracking-wider uppercase shadow-lg">
              {branch.name}
            </div>
          </div>

          {/* Tactical HUD details overlay */}
          <div className="bg-card/90 relative z-10 flex items-center justify-between rounded-xl border border-white/10 p-3 backdrop-blur-md">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white sm:text-sm">
                {branch.addressParts.area}
              </span>
              <span className="text-text-muted text-[11px]">
                Landmark: {branch.addressParts.landmark || branch.shortLocation}
              </span>
            </div>
            <a
              href={branch.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDirections}
              className="bg-accent hover:bg-accent-2 text-bg font-display flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase shadow-sm transition-all active:scale-95"
            >
              <span>Open Map</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="bg-card mt-2 h-64 w-full overflow-hidden rounded-xl border border-white/10 shadow-lg sm:h-72">
          <iframe
            title={`${branch.name} Interactive Map Location`}
            src={
              isNerul
                ? "https://maps.google.com/maps?q=OCTACORE+Fitness,+Plot+No.+781,+Sector+1,+Shiravane,+Nerul,+Navi+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                : "https://maps.google.com/maps?q=OCTACORE+Fitness,+Reliable+Tech+Park,+Thane-Belapur+Road,+Airoli,+Navi+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
            }
            className="h-full w-full border-0 contrast-125 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* 6. BRANCH ARSENAL & HIGHLIGHTS BENTO GRID */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
            Engineered Performance Floor
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
            {branch.name.split(", ")[1]} Arsenal &amp; Highlights
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`bg-card group relative flex min-h-[140px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 p-4 shadow-sm ${
                item.isWide ? "col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-text-muted text-[10px] tracking-wider uppercase sm:text-xs">
                  {item.category}
                </span>
                <span className="bg-accent h-2 w-2 rounded-full" />
              </div>
              <div className="mt-4 flex flex-col">
                <span className="font-display text-xl leading-tight font-bold text-white uppercase sm:text-2xl">
                  {item.title}
                </span>
                <span className="text-text-muted mt-1 text-xs leading-snug">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VISUAL TOUR / 3 FOCUS ZONES WITH LIGHTBOX */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
              Visual Tour
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
              Inside {branch.name.split(", ")[1]} Hub
            </h2>
          </div>
          <span className="text-text-muted font-display text-xs tracking-wider uppercase">
            3 Focus Zones
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {/* Main Hero Zone */}
          {zones[0] && (
            <div
              onClick={() => setActiveZone(zones[0])}
              className="bg-card group relative h-56 w-full cursor-pointer overflow-hidden rounded-2xl border border-white/5 shadow-xl sm:h-64"
            >
              <Image
                src={zones[0].imageUrl}
                alt={zones[0].imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="from-bg pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-black/20" />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-display text-accent text-[11px] font-semibold tracking-wider uppercase">
                    {zones[0].badge}
                  </span>
                  <span className="font-display text-lg font-bold text-white uppercase sm:text-xl">
                    {zones[0].title}
                  </span>
                </div>
                <div className="bg-card/80 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white backdrop-blur">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </div>
          )}

          {/* Zones 2 & 3 side by side */}
          <div className="grid grid-cols-2 gap-3">
            {zones.slice(1, 3).map((zone) => (
              <div
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                className="bg-card group relative h-44 cursor-pointer overflow-hidden rounded-2xl border border-white/5 shadow-md sm:h-52"
              >
                <Image
                  src={zone.imageUrl}
                  alt={zone.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-bg pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display text-accent text-[10px] font-medium uppercase">
                      {zone.badge}
                    </span>
                    <span className="font-display text-sm font-bold text-white uppercase sm:text-base">
                      {zone.title}
                    </span>
                  </div>
                  <Maximize2 className="text-text-muted h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeZone && (
        <div
          role="dialog"
          aria-modal="true"
          className="animate-fade-in fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-4 backdrop-blur-xl sm:p-6"
        >
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between pt-4">
            <span className="font-display text-sm font-bold tracking-wider text-white uppercase">
              {`${branch.name} // ${activeZone.title}`}
            </span>
            <button
              onClick={() => setActiveZone(null)}
              aria-label="Close Lightbox"
              className="bg-card hover:text-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto my-auto flex w-full max-w-4xl flex-col gap-4">
            <div className="bg-card relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/9]">
              <Image
                src={activeZone.imageUrl}
                alt={activeZone.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
            <div className="bg-card rounded-xl border border-white/5 p-4 text-center">
              <p className="text-text-muted text-sm leading-relaxed">{activeZone.caption}</p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl pb-4">
            <button
              onClick={() => setActiveZone(null)}
              className="bg-card hover:bg-card-hover font-display w-full rounded-xl border border-white/10 py-3 text-xs font-bold tracking-wider text-white uppercase transition-all"
            >
              Return to Branch Overview
            </button>
          </div>
        </div>
      )}

      {/* 8. LOCAL SEO COVERAGE BLOCK */}
      <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6 shadow-xl">
        <div className="flex items-center gap-2">
          <Building2 className="text-accent h-4 w-4" />
          <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
            Gyms Near Me in {branch.name.split(", ")[1]}
          </span>
        </div>
        <h3 className="font-display text-xl leading-tight font-bold text-white uppercase sm:text-2xl">
          Premier Athletic Conditioning in Navi Mumbai
        </h3>
        <p className="text-text-muted text-xs leading-relaxed sm:text-sm">
          {isNerul
            ? "OCTACORE Fitness Nerul serves athletes and fitness enthusiasts from Sector 1, Sector 2, Shiravane, Nerul West, Seawoods, and surrounding Navi Mumbai areas. Designed for lifters who prioritize certified coaching, pristine hygiene, and elite conditioning gear."
            : "OCTACORE Fitness Airoli serves corporate athletes and executives across Reliable Tech Park, MIDC Airoli, Mindspace, and the Thane-Belapur transit corridor. Tailored with high-pressure showers and biomechanically calibrated equipment for seamless before-and-after work training."}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {seoAreas.map((area, idx) => (
            <span
              key={idx}
              className="bg-bg-2 font-display text-text-muted rounded-lg border border-white/5 px-3 py-1 text-xs tracking-wider uppercase"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* 9. LOCATION FAQ ACCORDION */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
            Clarity &amp; Protocol
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
            {branch.name.split(", ")[1]} Location FAQ
          </h2>
        </div>

        <Accordion>
          {faqs.map((f) => (
            <AccordionItem key={f.id} title={f.question}>
              <p>{f.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* 10. ENQUIRY FORM EMBED */}
      <section id="branch-enquiry" className="pt-4">
        <EnquiryForm
          defaultBranch={branch.slug as "nerul" | "airoli"}
          defaultGoal={isNerul ? "strength" : "performance"}
          showDirectWhatsApp={true}
        />
      </section>
    </div>
  );
}
