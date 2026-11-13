"use client";

import * as React from "react";
import Link from "next/link";
import { Eye, GripVertical, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function TransformationsSection() {
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
    <section
      className="bg-bg flex flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="transformations-heading"
    >
      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="bg-accent h-2 w-2 rounded-full" />
              <span className="font-display text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                Real Results
              </span>
            </div>
            <h2
              id="transformations-heading"
              className="font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
            >
              EVERY JOURNEY HAS A STORY.
            </h2>
          </div>
        </Reveal>

        {/* Draggable Interactive Comparison Module */}
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
          className="bg-card focus:ring-accent relative h-80 w-full cursor-ew-resize touch-none overflow-hidden rounded-2xl border border-white/5 shadow-2xl select-none focus:ring-2 focus:outline-none sm:h-96 md:h-[420px]"
        >
          {/* AFTER Image (Base Layer) */}
          <div className="absolute inset-0 h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCheq83C2Pru93vjemCzS20ITkcidnlF0pW8xB_SbfVVneTSyw98dv963DxAP8f3nabBGPSDr_81Y6rfvLf2c0NSN-WBtwjCN4WEoC0m2EmH74hL22-M28pSYCUX2lCC1qcu27skNobH5etPMLaH2S7uhvi4jroxQ4bp1U1yIHlnd1o1qmzh-YRiPCVDo3YZ4_zubBhlvXWBvHUnjexuVlvtdScuzuNCkn8vq9-PPA"
              alt="Transformed athlete in gym with dramatic lighting"
              loading="lazy"
              className="pointer-events-none h-full w-full object-cover"
            />
            <span className="font-display text-accent absolute right-3 bottom-3 rounded bg-black/80 px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase backdrop-blur">
              AFTER [PHOTO PLACEHOLDER]
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
                loading="lazy"
                className="pointer-events-none h-full w-full object-cover"
              />
              <span className="font-display text-text-muted absolute bottom-3 left-3 rounded bg-black/80 px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase backdrop-blur">
                BEFORE [PHOTO PLACEHOLDER]
              </span>
            </div>
          </div>

          {/* Central Handle */}
          <div
            className="pointer-events-none absolute inset-y-0 -ml-[2px] flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="bg-accent h-full w-[3px] shadow-[0_0_12px_#ff8500]" />
            <div className="bg-accent text-bg border-bg absolute flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_0_20px_rgba(255,133,0,0.8)]">
              <GripVertical className="h-5 w-5 font-bold" />
            </div>
          </div>
        </div>

        {/* Captions and Instructions */}
        <div className="text-text-muted mt-2 flex items-center justify-between px-1 text-xs">
          <span className="italic">Member stories shared with permission</span>
          <span className="font-display text-accent text-[11px] font-medium tracking-wider uppercase">
            Drag Slider or Use Left/Right Keys
          </span>
        </div>

        {/* Mandatory Transformation Disclaimer Banner */}
        <div className="bg-card text-text-muted mt-4 flex items-start gap-2 rounded-xl border border-white/5 p-3 text-xs">
          <span className="text-accent font-display mt-0.5 shrink-0 text-[10px] font-bold tracking-wider uppercase">
            Disclaimer:
          </span>
          <p className="leading-relaxed">
            Results vary. Individual results depend on consistency, effort and lifestyle.
          </p>
        </div>

        {/* Member Story Quote Card */}
        <div className="bg-card relative mt-4 flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
          <Quote className="text-accent h-8 w-8 opacity-30" />
          <p className="text-sm leading-relaxed text-white italic sm:text-base">
            &ldquo;The consistency and environment at OCTACORE transformed not just my physical
            stamina, but my everyday mental discipline.&rdquo;
          </p>
          <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
            — [OCTACORE Member - Nerul Branch]
          </span>
          <div className="bg-bg-2 text-text-muted rounded border border-white/5 p-2 font-mono text-[11px]">
            [MEMBER STORY PLACEHOLDER - Real verified testimonial to be inserted upon member
            consent]
          </div>
        </div>

        {/* Explore Transformations Button */}
        <div className="mt-6">
          <Link
            href="/transformations"
            className="border-accent/60 text-accent hover:bg-accent/10 font-display flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border bg-transparent text-base font-semibold tracking-wider uppercase transition-all active:scale-[0.98]"
          >
            <span>EXPLORE TRANSFORMATIONS</span>
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TransformationsSection;
