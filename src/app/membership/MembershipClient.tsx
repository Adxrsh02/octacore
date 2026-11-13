"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Shield, ArrowRight, Phone, MessageCircle, Building } from "lucide-react";
import { membershipTiers } from "@/content/memberships";
import { branches } from "@/content/branches";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { trackWhatsAppClick, trackCallClick } from "@/lib/analytics";

type TierKey = "annual" | "quarterly" | "monthly" | "corporate" | "exploring";

const tierKeyMap: Record<string, TierKey> = {
  monthly: "monthly",
  quarterly: "quarterly",
  annual: "annual",
  corporate: "corporate",
};

export function MembershipClient() {
  const [selectedTier, setSelectedTier] = React.useState<TierKey>("quarterly");

  const handleSelectTier = (tierId: string) => {
    const key = tierKeyMap[tierId] || "annual";
    setSelectedTier(key);
    const formEl = document.getElementById("membership-enquiry");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          <span className="text-accent font-semibold">MEMBERSHIP</span>
        </nav>

        <div className="bg-card flex items-center gap-2 rounded-full border border-white/5 px-3 py-1 shadow-sm">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
          <span className="font-display text-[11px] font-semibold tracking-wider text-white uppercase">
            ADMISSIONS OPEN
          </span>
        </div>
      </div>

      {/* 2. EDITORIAL HERO */}
      <section className="bg-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-2xl sm:p-8">
        <div className="bg-accent/15 pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl" />

        <div className="flex items-center gap-2">
          <span className="bg-accent h-0.5 w-6" />
          <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
            INVEST IN UNCOMPROMISING ATHLETIC PERFORMANCE
          </span>
        </div>

        <h1 className="font-display text-4xl leading-none font-bold tracking-tight text-white uppercase sm:text-6xl">
          CHOOSE YOUR <span className="text-accent">PROTOCOL.</span>
        </h1>

        <p className="text-text-muted max-w-xl text-sm leading-relaxed sm:text-base">
          Structured commitments engineered for progressive athletic adaptation. Every membership
          includes certified coach floor guidance, pristine hygiene, and full club amenities.
        </p>

        {/* Pricing Transparency Ribbon */}
        <div className="bg-bg-2 text-text-muted mt-2 flex items-start gap-3 rounded-xl border border-white/5 p-3.5 text-xs sm:items-center">
          <Shield className="text-accent mt-0.5 h-5 w-5 shrink-0 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-white">Transparent In-Club Pricing:</strong> All tier rates are
            provided upon enquiry to ensure customized coaching onboarding and accurate
            corporate/seasonal promotional packages.
          </p>
        </div>

        <AnswerBlock
          question="What membership options are available at OCTACORE Fitness?"
          answer="OCTACORE Fitness provides four flexible membership tiers across Nerul and Airoli: Monthly Intake, Quarterly Protocol (most popular for physique recomp), Annual Elite Pass (highest value with biometric check-ins), and Corporate Group Wellness Plans. All plans include full floor access, locker facilities, and trainer orientation."
        />
      </section>

      {/* 3. FOUR MEMBERSHIP TIERS GRID */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {membershipTiers.map((tier) => {
          const isSelected = selectedTier === tierKeyMap[tier.id];
          return (
            <div
              key={tier.id}
              className={`bg-card relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-xl transition-all ${
                isSelected
                  ? "border-accent ring-accent shadow-[0_0_24px_rgba(255,133,0,0.2)] ring-1"
                  : tier.isPopular
                    ? "border-accent/60 ring-accent/30 shadow-[0_0_20px_rgba(255,133,0,0.15)] ring-1"
                    : "border-white/5 hover:border-white/20"
              }`}
            >
              {tier.isPopular && (
                <div className="bg-accent text-bg font-display absolute top-0 right-0 rounded-bl-xl px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="font-display text-text-muted text-xs font-semibold tracking-wider uppercase">
                    {tier.duration}
                  </span>
                  <h3 className="font-display mt-0.5 text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
                    {tier.name}
                  </h3>
                  <p className="text-text-muted mt-1 text-xs leading-snug">{tier.tagline}</p>
                </div>

                {/* Price Box */}
                <div className="bg-bg-2 my-2 flex items-baseline justify-between rounded-xl border border-white/5 p-3.5">
                  <div className="flex flex-col">
                    <span className="font-display text-accent text-xl font-bold sm:text-2xl">
                      Price on enquiry
                    </span>
                    <span className="text-text-muted text-[11px]">{tier.pricePeriod}</span>
                  </div>
                  <span className="text-text-muted font-mono text-[11px] uppercase">
                    Official Rate
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="my-2 flex flex-col gap-2.5">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-text-muted flex items-start gap-2.5 text-xs sm:text-sm"
                    >
                      <Check className="text-accent mt-0.5 h-4 w-4 shrink-0" />
                      <span className="leading-snug text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleSelectTier(tier.id)}
                className={`font-display mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs font-bold tracking-wider uppercase transition-all active:scale-[0.98] ${
                  tier.isPopular
                    ? "bg-accent hover:bg-accent-2 text-bg shadow-[0_0_20px_rgba(255,133,0,0.3)]"
                    : "bg-bg-2 hover:bg-card-hover border border-white/10 text-white"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </section>

      {/* 4. PERKS & CORPORATE PARTNERSHIP BANNER */}
      <section className="bg-card flex flex-col gap-5 rounded-2xl border border-white/5 p-6 shadow-xl sm:p-8">
        <div className="flex items-center gap-2">
          <Building className="text-accent h-5 w-5" />
          <h2 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
            Corporate Wellness Partnerships
          </h2>
        </div>

        <p className="text-text-muted text-sm leading-relaxed">
          Does your company operate inside <strong>Reliable Tech Park</strong>,{" "}
          <strong>Mindspace Airoli</strong>, or along the <strong>Thane-Belapur corridor</strong>?
          OCTACORE provides subsidized team memberships, health stipend invoicing, and express
          corporate group training sessions.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={`https://wa.me/${branches.airoli.whatsappNumber}?text=${encodeURIComponent(
              "Hi OCTACORE Airoli, our team would like to enquire about corporate membership tie-ups and group rates."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("airoli", branches.airoli.whatsappNumber)}
            className="bg-bg-2 hover:bg-card font-display flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>Chat On WhatsApp with Corporate Desk</span>
          </a>

          <a
            href={`tel:${branches.airoli.phone}`}
            onClick={() => trackCallClick("airoli", branches.airoli.phone)}
            className="bg-bg-2 hover:bg-card font-display flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
          >
            <Phone className="text-accent h-4 w-4" />
            <span>Call +91 89281 49090</span>
          </a>
        </div>
      </section>

      {/* 5. EMBEDDED ENQUIRY FORM */}
      <section id="membership-enquiry" className="pt-4">
        <EnquiryForm defaultMembership={selectedTier} showDirectWhatsApp={true} />
      </section>
    </div>
  );
}
