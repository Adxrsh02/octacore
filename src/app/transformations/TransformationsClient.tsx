"use client";

import * as React from "react";
import Link from "next/link";
import { GripVertical, ShieldAlert, Flame, Dumbbell, Clock, HeartPulse, Quote } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AnswerBlock } from "@/components/seo/AnswerBlock";

export function TransformationsClient() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPosition(percentage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
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
          <span className="text-accent font-semibold">TRANSFORMATIONS</span>
        </nav>

        <div className="bg-card flex items-center gap-2 rounded-full border border-white/5 px-3 py-1 shadow-sm">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
          <span className="font-display text-[11px] font-semibold tracking-wider text-white uppercase">
            REAL STORIES
          </span>
        </div>
      </div>

      {/* 2. EDITORIAL HERO */}
      <section className="bg-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-2xl sm:p-8">
        <div className="bg-accent/15 pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl" />

        <div className="flex items-center gap-2">
          <span className="bg-accent h-0.5 w-6" />
          <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
            DOCUMENTED ATHLETIC PROGRESSION
          </span>
        </div>

        <h1 className="font-display text-4xl leading-none font-bold tracking-tight text-white uppercase sm:text-6xl">
          EVERY JOURNEY <br />
          <span className="text-accent">HAS A STORY.</span>
        </h1>

        <p className="text-text-muted max-w-xl text-sm leading-relaxed sm:text-base">
          Physical conditioning breakthroughs are forged through consistency, proper mechanical
          form, and nutritional discipline. Explore our interactive progression visualizer below.
        </p>

        <AnswerBlock
          question="How do members achieve transformations at OCTACORE Fitness?"
          answer="OCTACORE Fitness members achieve sustainable body composition and strength transformations through structured progressive resistance training, metabolic conditioning, and personal coaching in Nerul and Airoli. Results vary based on individual consistency, adherence, and nutritional habits."
        />
      </section>

      {/* 3. INTERACTIVE BEFORE/AFTER COMPARISON SLIDER */}
      <section className="flex flex-col gap-3">
        <div
          ref={containerRef}
          role="slider"
          aria-label="Before and after transformation slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="bg-card focus:ring-accent relative h-80 w-full cursor-ew-resize touch-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl select-none focus:ring-2 focus:outline-none sm:h-96 md:h-[460px]"
        >
          {/* AFTER Image (Base Layer) */}
          <div className="absolute inset-0 h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCheq83C2Pru93vjemCzS20ITkcidnlF0pW8xB_SbfVVneTSyw98dv963DxAP8f3nabBGPSDr_81Y6rfvLf2c0NSN-WBtwjCN4WEoC0m2EmH74hL22-M28pSYCUX2lCC1qcu27skNobH5etPMLaH2S7uhvi4jroxQ4bp1U1yIHlnd1o1qmzh-YRiPCVDo3YZ4_zubBhlvXWBvHUnjexuVlvtdScuzuNCkn8vq9-PPA"
              alt="Transformed athlete conditioning result"
              className="pointer-events-none h-full w-full object-cover"
            />
            <span className="font-display text-accent border-accent/30 absolute right-4 bottom-4 rounded-lg border bg-black/80 px-3 py-1.5 text-xs font-bold tracking-wider uppercase shadow-lg backdrop-blur">
              AFTER [PROGRESSION MILESTONE]
            </span>
          </div>

          {/* BEFORE Image (Clipped Layer) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 h-full w-full min-w-[320px] sm:min-w-[640px] md:min-w-[896px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASY89_IQMU8yFiP__6rGcU92ASKIwweEFASo4c-EKf22dmaN9Clp--tkPb6xPKHzrm4O72sQwdw2Txa4L_NEs18N9dviAi8jresSxgrTYNqGaWLFXXbGQqzYXNP2OMddilmoaD07wA6tvppT34WAV9QtwvsBt3xWXR8IrCNiD14BwacZbQ9pgGHdm_T7CtT0BPfu3DHSk68PMyJsKZX6G_MZEasNlPT3yivkZS3-s"
                alt="Member prior to beginning athletic training regimen"
                className="pointer-events-none h-full w-full object-cover"
              />
              <span className="font-display text-text-muted absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/80 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-lg backdrop-blur">
                BEFORE [INTAKE BASELINE]
              </span>
            </div>
          </div>

          {/* Central Handle */}
          <div
            className="pointer-events-none absolute inset-y-0 -ml-[2px] flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="bg-accent h-full w-[3px] shadow-[0_0_12px_#ff8500]" />
            <div className="bg-accent text-bg border-bg absolute flex h-11 w-11 items-center justify-center rounded-full border-2 shadow-[0_0_24px_rgba(255,133,0,0.85)]">
              <GripVertical className="h-5 w-5 font-bold" />
            </div>
          </div>
        </div>

        {/* Captions and Instructions */}
        <div className="text-text-muted flex items-center justify-between px-1 text-xs">
          <span className="italic">Member stories shared with permission</span>
          <span className="font-display text-accent text-[11px] font-semibold tracking-wider uppercase">
            Drag Slider or Use Left/Right Keys
          </span>
        </div>

        {/* MANDATORY DISCLAIMER BANNER (CRITICAL REQUIREMENT) */}
        <div className="bg-card text-text-muted mt-3 flex items-start gap-3 rounded-xl border border-white/10 p-4 text-xs shadow-md sm:text-sm">
          <ShieldAlert className="text-accent mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <span className="font-display text-accent mb-0.5 block text-xs font-bold tracking-wider uppercase">
              Mandatory Disclaimer:
            </span>
            <p className="leading-relaxed">
              <strong>
                Results vary. Individual results depend on consistency, effort and lifestyle.
              </strong>{" "}
              Transformation timeframes, body composition adaptations, and conditioning gains differ
              based on individual genetic baseline, nutrition adherence, and training compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE 4 PILLARS OF OCTACORE PROGRESSION */}
      <section className="bg-card flex flex-col gap-5 rounded-2xl border border-white/5 p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-1">
          <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
            Protocol Architecture
          </span>
          <h2 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
            How Progression Is Engineered
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-bg-2 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Dumbbell className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-base font-bold text-white uppercase">
                01 // Progressive Overload
              </h4>
              <p className="text-text-muted mt-1 text-xs leading-relaxed">
                Systematic micro-increments in barbell loads, rep density, and mechanical tension
                over 8 to 16 week training cycles.
              </p>
            </div>
          </div>

          <div className="bg-bg-2 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <HeartPulse className="text-accent-2 mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-base font-bold text-white uppercase">
                02 // Biometric Screening
              </h4>
              <p className="text-text-muted mt-1 text-xs leading-relaxed">
                Objective baseline assessments measuring body composition, joint mobility
                thresholds, and functional posture.
              </p>
            </div>
          </div>

          <div className="bg-bg-2 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Flame className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-base font-bold text-white uppercase">
                03 // Nutritional Alignment
              </h4>
              <p className="text-text-muted mt-1 text-xs leading-relaxed">
                Sustainable daily macronutrient guidance ensuring adequate protein synthesis and
                continuous metabolic output.
              </p>
            </div>
          </div>

          <div className="bg-bg-2 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Clock className="text-accent-2 mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-base font-bold text-white uppercase">
                04 // Recovery Science
              </h4>
              <p className="text-text-muted mt-1 text-xs leading-relaxed">
                Deload weeks, mobility drills, and sleep hygiene coaching to ensure full central
                nervous system regeneration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED MEMBER STORIES NOTICE */}
      <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6 shadow-md">
        <div className="flex items-center gap-2">
          <Quote className="text-accent h-5 w-5 opacity-60" />
          <h3 className="font-display text-lg font-bold tracking-wide text-white uppercase">
            Verified Member Stories
          </h3>
        </div>
        <p className="text-text-muted text-xs leading-relaxed sm:text-sm">
          At OCTACORE Fitness, we respect member privacy. All documented progress logs, biometric
          case studies, and photographic timelines are shared exclusively with explicit, signed
          member consent. Speak with our floor trainers at Nerul or Airoli to discuss realistic
          timelines for your physical targets.
        </p>
      </section>

      {/* 6. EMBEDDED ENQUIRY FORM */}
      <section id="transformations-enquiry" className="pt-4">
        <EnquiryForm defaultGoal="performance" showDirectWhatsApp={true} />
      </section>
    </div>
  );
}
