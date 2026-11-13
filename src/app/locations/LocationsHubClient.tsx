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
  Compass,
  ArrowRight,
  Sparkles,
  Building,
  Dumbbell,
  Train,
} from "lucide-react";
import { branches } from "@/content/branches";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { trackCallClick, trackWhatsAppClick, trackDirectionsClick } from "@/lib/analytics";

export function LocationsHubClient() {
  const [selectedBranch, setSelectedBranch] = React.useState<"nerul" | "airoli">("nerul");

  const scrollToBranch = (branchId: string) => {
    setSelectedBranch(branchId as "nerul" | "airoli");
    const el = document.getElementById(`branch-card-${branchId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-20 sm:px-6">
      {/* 1. TOP BREADCRUMB & STATUS TELEMETRY */}
      <section className="flex items-center justify-between pt-2">
        <nav
          aria-label="Breadcrumb"
          className="font-display text-text-muted flex items-center gap-2 text-xs tracking-wider uppercase"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            HOME
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-accent font-semibold">LOCATIONS</span>
        </nav>

        <div className="bg-card flex items-center gap-2 rounded-full border border-white/5 px-3 py-1 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
          </span>
          <span className="font-display text-[11px] font-semibold tracking-wider text-white uppercase">
            2 HUBS ACTIVE
          </span>
        </div>
      </section>

      {/* 2. EDITORIAL HERO SECTION */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="bg-accent h-0.5 w-6" />
          <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
            NAVI MUMBAI ATHLETIC CENTERS
          </span>
        </div>

        <h1 className="font-display text-4xl leading-none font-bold tracking-tight text-white uppercase sm:text-6xl">
          TWO LOCATIONS.
          <br />
          <span className="text-accent">ONE FITNESS SPIRIT.</span>
        </h1>

        <p className="text-text-muted max-w-xl text-sm leading-relaxed sm:text-base">
          Engineered for uncompromising athletic performance. Explore our state-of-the-art training
          spaces located strategically in Nerul and Airoli.
        </p>

        {/* Transit Connectivity Chip */}
        <div className="bg-card mt-2 flex items-center gap-3 rounded-xl border border-white/5 p-3.5 shadow-md">
          <div className="bg-bg-2 text-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
            <Train className="h-5 w-5" />
          </div>
          <p className="text-text-muted text-xs leading-snug sm:text-sm">
            Direct transit connectivity across the{" "}
            <strong className="text-white">Navi Mumbai corridor</strong> via Thane-Belapur Rd &amp;
            Sion-Panvel Expy.
          </p>
        </div>

        <AnswerBlock
          question="Where are the OCTACORE Fitness locations in Navi Mumbai?"
          answer="OCTACORE Fitness operates two premium athletic clubs in Navi Mumbai: the Nerul branch at Plot No. 781, Sector 1, Shiravane, Near Jain Mandir, Nerul (400706), and the Airoli branch at Unit D-1, Reliable Tech Park, Thane-Belapur Road, MIDC Airoli (400708). Both feature professional strength equipment, certified trainers, and dedicated parking."
        />
      </section>

      {/* 3. SEGMENTED SELECTOR & TACTICAL MAP */}
      <section className="flex flex-col gap-4">
        {/* Toggle Pills */}
        <div className="bg-card grid grid-cols-2 gap-1 rounded-xl border border-white/5 p-1.5">
          <button
            type="button"
            onClick={() => scrollToBranch("nerul")}
            className={`font-display flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-all ${
              selectedBranch === "nerul"
                ? "bg-accent text-bg shadow-md"
                : "text-text-muted hover:bg-white/5 hover:text-white"
            }`}
          >
            <Dumbbell className="h-4 w-4" />
            <span>NERUL HUB</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToBranch("airoli")}
            className={`font-display flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-all ${
              selectedBranch === "airoli"
                ? "bg-accent text-bg shadow-md"
                : "text-text-muted hover:bg-white/5 hover:text-white"
            }`}
          >
            <Building className="h-4 w-4" />
            <span>AIROLI HUB</span>
          </button>
        </div>

        {/* Simulated Map Container with Tactical Radar Visual */}
        <div className="bg-card relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-80">
          <div
            className="h-full w-full bg-cover bg-center opacity-40 contrast-125 grayscale"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6mJ0-LguNNcfRbKPTSBIVbrV0qlQwxb_8cel7J0iD3epzxcv5lQomkZfnO1hAA2GKwUAgL1xCY0W3kviBqy7CezQX55qmgLW55IaGqX90LrIfg36oM9ri6XS6f6q23MnZgEvtiSksZhcqkfrQ0R5nMAgJTad099jCFZvr7nRueEKyxDh38Ja21AlwggYd7E5RlBtMQROH6EFHzxhA2kQVZvJYZJI_F3e4uWncIUM')`,
            }}
          />

          <div className="from-bg via-bg/40 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />

          {/* Radar Circles */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
            <svg
              className="text-accent h-64 w-64 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="45" strokeDasharray="3 3" strokeWidth="0.7" />
              <circle cx="50" cy="50" r="30" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="15" strokeWidth="1" />
              <line strokeWidth="0.5" x1="50" x2="50" y1="0" y2="100" />
              <line strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50" />
            </svg>
          </div>

          {/* Tactical Pin 1: Nerul */}
          <div
            onClick={() => scrollToBranch("nerul")}
            className="group absolute bottom-8 left-8 z-20 flex cursor-pointer flex-col items-center transition-transform active:scale-95 sm:bottom-12 sm:left-14"
          >
            <div className="relative flex items-center justify-center">
              <span className="bg-accent absolute inline-flex h-8 w-8 animate-ping rounded-full opacity-50" />
              <div className="bg-card border-accent text-accent flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_0_15px_#ff8500]">
                <Dumbbell className="h-5 w-5" />
              </div>
            </div>
            <div className="bg-bg/90 mt-1.5 flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 shadow-md backdrop-blur-md">
              <span className="bg-accent h-1.5 w-1.5 rounded-full" />
              <span className="font-display text-[11px] font-semibold text-white uppercase">
                NERUL · SEC 1
              </span>
            </div>
          </div>

          {/* Tactical Pin 2: Airoli */}
          <div
            onClick={() => scrollToBranch("airoli")}
            className="group absolute top-8 right-8 z-20 flex cursor-pointer flex-col items-center transition-transform active:scale-95 sm:top-12 sm:right-14"
          >
            <div className="relative flex items-center justify-center">
              <span className="bg-accent-2 absolute inline-flex h-8 w-8 animate-ping rounded-full opacity-50" />
              <div className="bg-card border-accent-2 text-accent-2 flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_0_15px_#f5a623]">
                <Building className="h-5 w-5" />
              </div>
            </div>
            <div className="bg-bg/90 mt-1.5 flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 shadow-md backdrop-blur-md">
              <span className="bg-accent-2 h-1.5 w-1.5 rounded-full" />
              <span className="font-display text-[11px] font-semibold text-white uppercase">
                AIROLI · MIDC
              </span>
            </div>
          </div>

          {/* Satellite Telemetry Ribbon */}
          <div className="bg-card/85 text-text-muted absolute right-2 bottom-2 left-2 flex items-center justify-between rounded-xl border border-white/5 px-3 py-2 text-xs backdrop-blur-md">
            <span className="text-accent font-display flex items-center gap-1.5 text-[11px] tracking-wider uppercase">
              <Compass className="h-3.5 w-3.5" />
              <span>SATELLITE TELEMETRY</span>
            </span>
            <span className="font-display text-[11px] tracking-wider text-white uppercase">
              TAP PINS TO INSPECT
            </span>
          </div>
        </div>
      </section>

      {/* 4. DUAL BRANCH CARDS STACK */}
      <section className="flex flex-col gap-8">
        {/* CARD 1: NERUL */}
        <article
          id="branch-card-nerul"
          className={`bg-card overflow-hidden rounded-2xl border shadow-2xl transition-all ${
            selectedBranch === "nerul" ? "border-accent/40 ring-accent/20 ring-1" : "border-white/5"
          }`}
        >
          <div className="bg-card relative h-56 w-full overflow-hidden sm:h-64">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCggJty4ALx0Q1HE_rfEP8JzxlXynGnPVLrN8GlPU0a3XUMWq-Bo3Omn19yy1aYS38NGDJcXWxWG13l682AVHjZzffebQ4oTYCjxlFSST-XSx0qn6_Gf-_AAIO0Zi82uzT9vlfG2BvXB7PAccliWCk50RnFVelETCFZE1wIZP897SMdlHkFAYqppJJ0R-g9Ypvx9269hcl_0ziC2c4_dbz4OWSbZnXJY7EMs3Ffphk"
              alt="OCTACORE Nerul gym interior"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
            <div className="from-card via-card/40 absolute inset-0 bg-gradient-to-t to-transparent" />

            <div className="bg-accent text-bg font-display absolute top-4 left-4 flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>FLAGSHIP CLUB</span>
            </div>

            <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
              <div>
                <span className="font-display text-accent text-xs tracking-wider uppercase">
                  FACILITY 01
                </span>
                <h2 className="font-display text-3xl font-bold text-white uppercase">NERUL HUB</h2>
              </div>
              <div className="bg-bg/90 rounded-lg border border-white/10 px-3 py-1.5 text-right backdrop-blur-md">
                <span className="font-display text-text-muted block text-[10px] uppercase">
                  STATUS
                </span>
                <span className="font-display text-accent text-xs font-bold uppercase">
                  OPEN TODAY
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-6">
            {/* Address */}
            <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
              <MapPin className="text-accent mt-0.5 h-5 w-5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-display text-text-muted text-[11px] tracking-wider uppercase">
                  LOCATION COORDINATES
                </span>
                <p className="mt-0.5 text-sm leading-relaxed font-medium text-white">
                  {branches.nerul.fullAddress}
                </p>
                <p className="text-accent mt-1 text-xs">
                  Landmark: {branches.nerul.addressParts.landmark}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-bg-2/70 flex items-center justify-between rounded-xl border border-white/5 p-4 text-sm">
              <div className="text-text-muted flex items-center gap-2">
                <Clock className="text-accent h-4 w-4" />
                <span>Mon – Sat: 6:00 AM – 11:00 PM | Sun: 7:00 AM – 11:00 AM</span>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <a
                href={`tel:${branches.nerul.phone}`}
                onClick={() => trackCallClick("nerul", branches.nerul.phone)}
                className="bg-bg-2 hover:bg-card font-display flex items-center justify-center gap-2 rounded-xl border border-white/5 px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
              >
                <Phone className="text-accent h-4 w-4" />
                <span>Call Desk</span>
              </a>

              <a
                href={`https://wa.me/${branches.nerul.whatsappNumber}?text=${encodeURIComponent(
                  branches.nerul.whatsappPrefillText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("nerul", branches.nerul.whatsappNumber)}
                className="bg-bg-2 hover:bg-card font-display flex items-center justify-center gap-2 rounded-xl border border-white/5 px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={branches.nerul.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick("nerul")}
                className="bg-bg-2 hover:bg-card font-display col-span-2 flex items-center justify-center gap-2 rounded-xl border border-white/5 px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95 sm:col-span-1"
              >
                <Navigation className="text-accent h-4 w-4" />
                <span>Directions</span>
              </a>
            </div>

            {/* Profile Link */}
            <Link
              href="/locations/nerul"
              className="bg-accent hover:bg-accent-2 text-bg font-display flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(255,133,0,0.3)] transition-all active:scale-[0.98]"
            >
              <span>EXPLORE NERUL BRANCH PROFILE</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        {/* CARD 2: AIROLI */}
        <article
          id="branch-card-airoli"
          className={`bg-card overflow-hidden rounded-2xl border shadow-2xl transition-all ${
            selectedBranch === "airoli"
              ? "border-accent/40 ring-accent/20 ring-1"
              : "border-white/5"
          }`}
        >
          <div className="bg-card relative h-56 w-full overflow-hidden sm:h-64">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHS3IG33_ARO2Q-XbrLMWLyRCnXTAmV3rL77LmLssuxyx_cF3PgJrG4gtpxhRfmMkqtniykf4_sTz9GIcZKK9a8hYw7PYZi07ZLLh2F0jy3ZibBnMa7Ro753FlqB398mCDIrvaQtO1FeiZSIKN8KeBTtqo9z5i4nEMDpcEy0eMtfN-h1y29MdMK1jIN0T7eckDqNVilHNsvSARDFXTxJsOQbeAvdP2R2di6JHBQEs"
              alt="OCTACORE Airoli gym interior"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
            <div className="from-card via-card/40 absolute inset-0 bg-gradient-to-t to-transparent" />

            <div className="bg-accent-2 text-bg font-display absolute top-4 left-4 flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-md">
              <Building className="h-3.5 w-3.5" />
              <span>CORPORATE CAMPUS</span>
            </div>

            <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
              <div>
                <span className="font-display text-accent-2 text-xs tracking-wider uppercase">
                  FACILITY 02
                </span>
                <h2 className="font-display text-3xl font-bold text-white uppercase">AIROLI HUB</h2>
              </div>
              <div className="bg-bg/90 rounded-lg border border-white/10 px-3 py-1.5 text-right backdrop-blur-md">
                <span className="font-display text-text-muted block text-[10px] uppercase">
                  STATUS
                </span>
                <span className="font-display text-accent-2 text-xs font-bold uppercase">
                  OPEN TODAY
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-6">
            {/* Address */}
            <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
              <MapPin className="text-accent-2 mt-0.5 h-5 w-5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-display text-text-muted text-[11px] tracking-wider uppercase">
                  LOCATION COORDINATES
                </span>
                <p className="mt-0.5 text-sm leading-relaxed font-medium text-white">
                  {branches.airoli.fullAddress}
                </p>
                <p className="text-accent-2 mt-1 text-xs">
                  Landmark: {branches.airoli.addressParts.landmark}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-bg-2/70 flex items-center justify-between rounded-xl border border-white/5 p-4 text-sm">
              <div className="text-text-muted flex items-center gap-2">
                <Clock className="text-accent-2 h-4 w-4" />
                <span>Mon – Sat: 6:00 AM – 11:00 PM | Sun: Closed (Rest)</span>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <a
                href={`tel:${branches.airoli.phone}`}
                onClick={() => trackCallClick("airoli", branches.airoli.phone)}
                className="bg-bg-2 hover:bg-card font-display flex items-center justify-center gap-2 rounded-xl border border-white/5 px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
              >
                <Phone className="text-accent-2 h-4 w-4" />
                <span>Call Desk</span>
              </a>

              <a
                href={`https://wa.me/${branches.airoli.whatsappNumber}?text=${encodeURIComponent(
                  branches.airoli.whatsappPrefillText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("airoli", branches.airoli.whatsappNumber)}
                className="bg-bg-2 hover:bg-card font-display flex items-center justify-center gap-2 rounded-xl border border-white/5 px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={branches.airoli.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick("airoli")}
                className="bg-bg-2 hover:bg-card font-display col-span-2 flex items-center justify-center gap-2 rounded-xl border border-white/5 px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95 sm:col-span-1"
              >
                <Navigation className="text-accent-2 h-4 w-4" />
                <span>Directions</span>
              </a>
            </div>

            {/* Profile Link */}
            <Link
              href="/locations/airoli"
              className="bg-accent hover:bg-accent-2 text-bg font-display flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(255,133,0,0.3)] transition-all active:scale-[0.98]"
            >
              <span>EXPLORE AIROLI BRANCH PROFILE</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </section>

      {/* 5. ENQUIRY FORM SECTION */}
      <section id="locations-enquiry" className="pt-4">
        <EnquiryForm defaultBranch="nerul" showDirectWhatsApp={true} />
      </section>
    </div>
  );
}
