"use client";

import * as React from "react";
import Image from "next/image";
import { Info, Phone, ArrowRight, Swords } from "lucide-react";
import { trainingPrograms, historicalServices, onboardingSteps } from "@/content/training";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AnswerBlock } from "@/components/seo/AnswerBlock";

const programImages: Record<string, string> = {
  "strength-training":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9dfs7RVLP8bKB6CjDrJghHpPm2D4EDD3kWiQkuW2F9Mln-aRfX-5lUBM5OyNDXCxfYG6RvlakMuql71pUwcYYmcus7PsSNCXKBlF_x5KDlieRa_rUhSF0IrFJ6o0QYRKrz8pgh60TIoAYbK-80Xgaq2BYbUAMzKjAHEFryOLMTgihMVw2vpKbBLyRa1uXQtgq2u7aCqUdE5yLo7jO8xDrNuxRJbMrHSj54AJDpL4",
  "cardio-training":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHS3IG33_ARO2Q-XbrLMWLyRCnXTAmV3rL77LmLssuxyx_cF3PgJrG4gtpxhRfmMkqtniykf4_sTz9GIcZKK9a8hYw7PYZi07ZLLh2F0jy3ZibBnMa7Ro753FlqB398mCDIrvaQtO1FeiZSIKN8KeBTtqo9z5i4nEMDpcEy0eMtfN-h1y29MdMK1jIN0T7eckDqNVilHNsvSARDFXTxJsOQbeAvdP2R2di6JHBQEs",
  "personal-training":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcctVIam03ibvGiB9N8R6sD76O9MWWewts09huYLipB8_Iry8b5DydtfKKeaCNphajAEuNaWv-rwF077qA8to4c4JYG_VgKjwwFrlATc9nBWi79n-eL-5gVAry25kGKcukXOGcLv2svctsd14HZEF7l45Tr2QqyJwt1dBEqN75zmvd0PeKJmvw0nXWZGLXWoIYmsq2i9Xf5pNbOO3NTd4gi9mn-6_uZ-Co2_P4gsA",
  "yoga-group-training":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBsU-MLH9SQYBYX341LhJnxwaO8OMsUF0KHQW3Xt2B49paabqYzjCkFxcaI1vS618iWSoChPaku_w7ZpT2NeKEs_0cmKISi6nrjSmyq41x4qxJx32hqIRJUGSvnszR9g9UqIOrpUUCV5O0X9zRdPUH9JDihKIGWHb_vRlZLwnqPOveXyRi_7j3EsVuDllbKtzQBhoL1dek2koWKRlbTT_VqEOh5VxYlV6TGb2zQmr8",
};

const goalMap: Record<string, "strength" | "fatloss" | "performance" | "coaching" | "general"> = {
  "strength-training": "strength",
  "cardio-training": "fatloss",
  "personal-training": "coaching",
  "yoga-group-training": "general",
};

export function TrainingClient() {
  const [selectedGoal, setSelectedGoal] = React.useState<
    "strength" | "fatloss" | "performance" | "coaching" | "general"
  >("strength");

  const handleEnquireProtocol = (programSlug: string) => {
    const goal = goalMap[programSlug] || "strength";
    setSelectedGoal(goal);
    const formEl = document.getElementById("training-enquiry");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-20 sm:px-6">
      {/* 1. HERO SECTION */}
      <section className="bg-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-2xl sm:p-8">
        <div className="bg-accent/15 pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full blur-3xl" />

        <div className="bg-bg-2 text-accent inline-flex items-center gap-2 self-start rounded-full border border-white/5 px-3 py-1 text-xs">
          <span className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full" />
          <span className="font-display font-semibold tracking-widest uppercase">
            Curated Disciplines • Tailored Progression
          </span>
        </div>

        <h1 className="font-display text-4xl leading-none font-bold tracking-wider text-white uppercase sm:text-6xl">
          Find Your <span className="text-accent">Strength.</span>
        </h1>

        <p className="text-text-muted max-w-md text-sm leading-relaxed sm:text-base">
          Engineered for absolute output. Select your pathway, adapt the protocol, and redefine your
          physiological threshold.
        </p>

        {/* Quick Metrics Telemetry Ribbon */}
        <div className="grid grid-cols-3 gap-2 pt-2 sm:gap-3">
          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
              Discipline
            </span>
            <span className="font-display mt-0.5 text-lg font-bold text-white uppercase sm:text-xl">
              04 Core
            </span>
          </div>

          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
              Modality
            </span>
            <span className="font-display text-accent mt-0.5 text-lg font-bold uppercase sm:text-xl">
              Scalable
            </span>
          </div>

          <div className="bg-bg-2/80 flex flex-col rounded-xl border border-white/5 p-3">
            <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
              Floor Tier
            </span>
            <span className="font-display text-accent-2 mt-0.5 text-lg font-bold uppercase sm:text-xl">
              Elite
            </span>
          </div>
        </div>

        <AnswerBlock
          question="What training programs are offered at OCTACORE Fitness?"
          answer="OCTACORE Fitness offers four specialized training programs across Nerul and Airoli: Heavy Strength & Hypertrophy (Olympic barbells, competition racks), High-Output Cardio Conditioning (intervals, curved runners, turf sprints), 1-on-1 Certified Personal Coaching (periodized progression), and Mobility, Core & Yoga Sessions (functional recovery)."
        />
      </section>

      {/* 2. CORE PROGRAMS STACK */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
            Core <span className="text-accent">Programs</span>
          </h2>
          <span className="font-display text-text-muted text-xs tracking-widest uppercase">
            01 — 04
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {trainingPrograms.map((program) => (
            <article
              key={program.id}
              className="bg-card group hover:border-accent/30 flex flex-col overflow-hidden rounded-2xl border border-white/5 shadow-xl transition-all"
            >
              <div className="bg-card relative h-56 w-full overflow-hidden sm:h-64">
                <Image
                  src={programImages[program.slug] || programImages["strength-training"]}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-card via-card/40 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />

                <div className="bg-bg/80 absolute top-3 right-3 rounded-full border border-white/10 px-3 py-1 backdrop-blur-md">
                  <span className="font-display text-accent text-[11px] font-semibold tracking-wider uppercase">
                    {program.tagline}
                  </span>
                </div>

                <div className="absolute right-4 bottom-3 left-4">
                  <span className="font-display text-text-muted text-[11px] font-semibold tracking-wider uppercase">
                    {program.protocolNumber}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
                    {program.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5 sm:p-6">
                <p className="text-text-muted text-sm leading-relaxed">{program.description}</p>

                {/* Best For Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-text-muted mr-1 text-xs tracking-wider uppercase">
                    Best for:
                  </span>
                  {program.bestFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-bg-2 text-text rounded-full border border-white/5 px-3 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Key Outcomes */}
                <div className="text-text-muted grid grid-cols-2 gap-2 border-t border-white/5 pt-2 text-xs">
                  {program.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="bg-accent h-1.5 w-1.5 rounded-full" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Enquire Button */}
                <button
                  type="button"
                  onClick={() => handleEnquireProtocol(program.slug)}
                  className="bg-bg-2 hover:bg-accent hover:text-bg font-display mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition-all active:scale-[0.98]"
                >
                  <span>Enquire Protocol</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. EXTENDED ROSTER: COMBAT & FUNCTIONAL DISCIPLINES */}
      <section className="bg-card relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-xl sm:p-8">
        <div className="bg-accent/10 pointer-events-none absolute -right-16 -bottom-16 h-44 w-44 rounded-full blur-2xl" />

        <div className="flex flex-col gap-1">
          <div className="text-accent flex items-center gap-2">
            <Swords className="text-accent h-5 w-5" />
            <span className="font-display text-xs font-semibold tracking-wider uppercase">
              Extended Roster
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold text-white uppercase">
            Specialized Combat &amp; Functional Disciplines
          </h2>
        </div>

        {/* Prominent Availability Notice Badge */}
        <div className="bg-bg-2 border-accent/30 flex items-center gap-2.5 rounded-xl border p-3 text-white">
          <Info className="text-accent h-5 w-5 shrink-0" />
          <p className="text-xs font-medium sm:text-sm">
            Availability to be confirmed • Enquire at branch desk
          </p>
        </div>

        {/* Discipline Badges Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {historicalServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-bg-2/80 flex items-center gap-2.5 rounded-xl border border-white/5 p-3"
            >
              <span className="bg-accent h-2 w-2 rounded-full" />
              <span className="text-xs font-semibold text-white sm:text-sm">{service.name}</span>
            </div>
          ))}
        </div>

        <div className="text-text-muted flex flex-col items-start justify-between gap-2 pt-2 text-xs sm:flex-row sm:items-center">
          <span>Session rosters rotate periodically based on coaching availability.</span>
          <a
            href="tel:+919069819090"
            className="text-accent font-display flex items-center gap-1 text-xs font-semibold uppercase transition-colors hover:text-white"
          >
            <span>Ask Front Desk</span>
            <Phone className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* 4. ONBOARDING SEQUENCE (HOW TO START) */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
            Onboarding Sequence
          </span>
          <h2 className="font-display text-2xl font-bold text-white uppercase sm:text-3xl">
            How To <span className="text-accent">Start</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {onboardingSteps.map((step) => (
            <div
              key={step.step}
              className="bg-card flex items-start gap-4 rounded-2xl border border-white/5 p-5 shadow-sm"
            >
              <div className="bg-bg-2 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-white/5">
                <span className="font-display text-text-muted text-[10px] uppercase">STEP</span>
                <span className="font-display text-accent text-base leading-none font-bold">
                  {step.step}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-base font-bold tracking-wide text-white uppercase sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ENQUIRY FORM */}
      <section id="training-enquiry" className="pt-4">
        <EnquiryForm defaultGoal={selectedGoal} showDirectWhatsApp={true} />
      </section>
    </div>
  );
}
