"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Clock, Building, Dumbbell } from "lucide-react";
import { branches } from "@/content/branches";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export function ContactClient() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-20 sm:px-6">
      {/* 1. TOP BREADCRUMB */}
      <div className="flex items-center justify-between pt-2">
        <nav
          aria-label="Breadcrumb"
          className="font-display text-text-muted flex items-center gap-2 text-xs tracking-wider uppercase"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            HOME
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-accent font-semibold">CONTACT</span>
        </nav>

        <div className="bg-card flex items-center gap-2 rounded-full border border-white/5 px-3 py-1 shadow-sm">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
          <span className="font-display text-[11px] font-semibold tracking-wider text-white uppercase">
            HUBS ACTIVE
          </span>
        </div>
      </div>

      {/* 2. CINEMATIC EDITORIAL HERO */}
      <section className="bg-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-2xl sm:p-8">
        <div className="bg-accent/15 pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl" />

        <div className="flex items-center gap-2">
          <span className="bg-accent h-0.5 w-6" />
          <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
            CONNECT WITH OCTACORE
          </span>
        </div>

        <h1 className="font-display text-4xl leading-none font-bold tracking-tight text-white uppercase sm:text-6xl">
          LET&apos;S START YOUR <br />
          <span className="text-accent">JOURNEY.</span>
        </h1>

        <p className="text-text-muted max-w-xl text-sm leading-relaxed sm:text-base">
          Have questions regarding membership admissions, biometric performance screenings, or
          facility walkthroughs? Connect directly with our performance directors at Nerul or Airoli.
        </p>

        {/* Fast Metric / Service Level Ribbon */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
              Response Latency
            </span>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="font-display text-xl font-bold text-white sm:text-2xl">
                &lt; 120
              </span>
              <span className="text-accent font-display text-xs font-semibold uppercase">MINS</span>
            </div>
          </div>

          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
              Club Access
            </span>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="font-display text-xl font-bold text-white sm:text-2xl">DUAL</span>
              <span className="text-accent-2 font-display text-xs font-semibold uppercase">
                FACILITIES
              </span>
            </div>
          </div>
        </div>

        <AnswerBlock
          question="How do I contact OCTACORE Fitness in Navi Mumbai?"
          answer="You can contact OCTACORE Fitness Nerul at +91 90698 19090 and OCTACORE Fitness Airoli at +91 89281 49090. Enquiries can also be submitted through WhatsApp or our official website enquiry form. Our desk provides responses within 120 minutes during operational hours."
        />
      </section>

      {/* 3. DUAL BRANCH DIRECT HOTLINE CARDS */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Nerul Direct Card */}
        <div className="bg-card flex flex-col justify-between rounded-2xl border border-white/5 p-5 shadow-xl sm:p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Dumbbell className="text-accent h-5 w-5" />
                <h3 className="font-display text-xl font-bold tracking-wide text-white uppercase">
                  Nerul Flagship Hub
                </h3>
              </div>
              <span className="font-display text-accent bg-accent/15 border-accent/30 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase">
                Sector 1
              </span>
            </div>

            <p className="text-text-muted text-xs leading-relaxed">{branches.nerul.fullAddress}</p>
            <p className="text-accent text-xs">Landmark: {branches.nerul.addressParts.landmark}</p>

            <div className="text-text-muted flex items-center gap-2 border-t border-white/5 pt-1 text-xs">
              <Clock className="text-accent h-4 w-4" />
              <span>Mon – Sat: 6 AM – 11 PM | Sun: 7 AM – 11 AM</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <a
              href={`tel:${branches.nerul.phone}`}
              onClick={() => trackCallClick("nerul", branches.nerul.phone)}
              className="bg-bg-2 hover:bg-card-hover font-display flex items-center justify-center gap-1.5 rounded-xl border border-white/5 px-3 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
            >
              <Phone className="text-accent h-3.5 w-3.5" />
              <span>Call Hotline</span>
            </a>

            <a
              href={`https://wa.me/${branches.nerul.whatsappNumber}?text=${encodeURIComponent(
                branches.nerul.whatsappPrefillText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("nerul", branches.nerul.whatsappNumber)}
              className="bg-bg-2 hover:bg-card-hover font-display flex items-center justify-center gap-1.5 rounded-xl border border-white/5 px-3 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Airoli Direct Card */}
        <div className="bg-card flex flex-col justify-between rounded-2xl border border-white/5 p-5 shadow-xl sm:p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building className="text-accent-2 h-5 w-5" />
                <h3 className="font-display text-xl font-bold tracking-wide text-white uppercase">
                  Airoli Campus Hub
                </h3>
              </div>
              <span className="font-display text-accent-2 bg-accent-2/15 border-accent-2/30 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase">
                Tech Park
              </span>
            </div>

            <p className="text-text-muted text-xs leading-relaxed">{branches.airoli.fullAddress}</p>
            <p className="text-accent-2 text-xs">
              Landmark: {branches.airoli.addressParts.landmark}
            </p>

            <div className="text-text-muted flex items-center gap-2 border-t border-white/5 pt-1 text-xs">
              <Clock className="text-accent-2 h-4 w-4" />
              <span>Mon – Sat: 6 AM – 11 PM | Sun: Closed (Rest)</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <a
              href={`tel:${branches.airoli.phone}`}
              onClick={() => trackCallClick("airoli", branches.airoli.phone)}
              className="bg-bg-2 hover:bg-card-hover font-display flex items-center justify-center gap-1.5 rounded-xl border border-white/5 px-3 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
            >
              <Phone className="text-accent-2 h-3.5 w-3.5" />
              <span>Call Hotline</span>
            </a>

            <a
              href={`https://wa.me/${branches.airoli.whatsappNumber}?text=${encodeURIComponent(
                branches.airoli.whatsappPrefillText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("airoli", branches.airoli.whatsappNumber)}
              className="bg-bg-2 hover:bg-card-hover font-display flex items-center justify-center gap-1.5 rounded-xl border border-white/5 px-3 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. FULL INTERACTIVE ENQUIRY FORM */}
      <section id="contact-enquiry" className="pt-2">
        <EnquiryForm defaultBranch="nerul" showDirectWhatsApp={true} />
      </section>
    </div>
  );
}
