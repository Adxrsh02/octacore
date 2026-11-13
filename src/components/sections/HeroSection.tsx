"use client";

import * as React from "react";
import Link from "next/link";
import { Compass, Dumbbell } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Hero3DContainer } from "@/components/three/Hero3DContainer";
import { SplitHeading } from "@/components/motion/SplitHeading";

export function HeroSection() {
  const containerRef = React.useRef<HTMLElement>(null);
  const revealLineRef = React.useRef<HTMLDivElement>(null);
  const badgeRef = React.useRef<HTMLDivElement>(null);
  const emblemWrapperRef = React.useRef<HTMLDivElement>(null);
  const ctaGroupRef = React.useRef<HTMLDivElement>(null);
  const bodyTextRef = React.useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = React.useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;

    let isRevealed = false;
    try {
      isRevealed = sessionStorage.getItem("octacore_hero_revealed") === "true";
    } catch {
      isRevealed = false;
    }

    if (isRevealed) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          try {
            sessionStorage.setItem("octacore_hero_revealed", "true");
          } catch {
            // ignore
          }
        },
      });

      // Orange line sweep from center
      if (revealLineRef.current) {
        tl.fromTo(
          revealLineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.inOut" }
        ).to(revealLineRef.current, { opacity: 0.4, duration: 0.4 });
      }

      // Emblem entrance
      if (emblemWrapperRef.current) {
        tl.fromTo(
          emblemWrapperRef.current,
          { scale: 0.82, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.4"
        );
      }

      // Badge, body copy and CTA staggered entrance
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5"
        );
      }

      if (bodyTextRef.current) {
        tl.fromTo(
          bodyTextRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
      }

      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current.children,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );
      }

      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 0.8, duration: 0.6 },
          "-=0.2"
        );
      }

      // Allow skipping the timeline on user interaction
      const skipTimeline = () => {
        tl.progress(1);
        try {
          sessionStorage.setItem("octacore_hero_revealed", "true");
        } catch {
          // ignore
        }
      };

      const container = containerRef.current;
      if (container) {
        container.addEventListener("click", skipTimeline, { once: true });
        return () => {
          container.removeEventListener("click", skipTimeline);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="bg-bg relative flex min-h-[92dvh] w-full flex-col justify-between overflow-hidden px-4 pt-24 pb-16 sm:min-h-[95dvh] sm:px-6 lg:px-8"
      aria-label="OCTACORE Fitness Hero"
    >
      {/* Background Volumetric Image & Scrims */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ff8500 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Cinematic Scrims */}
        <div className="from-bg/90 via-bg/75 to-bg absolute inset-0 bg-gradient-to-b" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,133,0,0.14)_0%,rgba(8,8,8,0.85)_65%,#080808_100%)]" />
      </div>

      {/* Sweep line indicator on reveal */}
      <div
        ref={revealLineRef}
        className="via-accent pointer-events-none absolute top-20 left-1/2 z-10 h-[2px] w-48 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent sm:w-72"
      />

      {/* Main Content Centerpiece */}
      <div className="relative z-10 mx-auto my-auto flex max-w-4xl flex-col items-center pt-4 text-center">
        {/* 3D Emblem Container & Centerpiece */}
        <div
          ref={emblemWrapperRef}
          className="relative mb-6 flex flex-col items-center justify-center"
        >
          {/* Technical Badge Indicator */}
          <div
            ref={badgeRef}
            className="bg-card/80 mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 shadow-sm backdrop-blur-md"
          >
            <span className="bg-accent h-1.5 w-1.5 animate-ping rounded-full" />
            <span className="font-display text-accent text-xs font-medium tracking-widest uppercase">
              OCTACORE KINETIC SYSTEM
            </span>
          </div>

          <Hero3DContainer size="md" />

          <p className="font-display mt-2 text-xl font-bold tracking-[0.2em] text-white uppercase sm:text-2xl">
            OCTACORE
          </p>
        </div>

        {/* Eyebrow */}
        <span className="font-display text-accent mb-3 text-xs font-semibold tracking-[0.3em] uppercase sm:text-sm">
          FITNESS • PASSION • SPIRIT
        </span>

        {/* Primary Athletic Headline */}
        <SplitHeading
          as="h1"
          text="BUILT THROUGH DISCIPLINE. DEFINED BY STRENGTH."
          className="font-display mx-auto mb-4 max-w-2xl text-3xl leading-[1.05] font-bold tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
        />

        {/* Supporting Body Copy */}
        <p
          ref={bodyTextRef}
          className="text-text-muted mx-auto mb-8 max-w-lg text-sm leading-relaxed font-normal sm:text-base"
        >
          Your fitness journey deserves more than an ordinary workout. Discover a premier training
          environment in Navi Mumbai where passion meets purpose and every session brings you closer
          to your peak potential.
        </p>

        {/* Dual CTAs in Mobile Thumb Zone */}
        <div
          ref={ctaGroupRef}
          className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/facilities"
            className="bg-accent hover:bg-accent-2 text-bg font-display flex min-h-[48px] w-full flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold tracking-wider uppercase shadow-[0_0_24px_rgba(255,133,0,0.35)] transition-all active:scale-95 sm:w-auto"
          >
            <Compass className="h-5 w-5" />
            <span>EXPLORE OUR GYMS</span>
          </Link>
          <Link
            href="/membership"
            className="bg-card hover:bg-card-hover font-display flex min-h-[48px] w-full flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-base font-semibold tracking-wider text-white uppercase transition-all active:scale-95 sm:w-auto"
          >
            <Dumbbell className="text-accent h-5 w-5" />
            <span>START YOUR FITNESS JOURNEY</span>
          </Link>
        </div>
      </div>

      {/* Docked Stat Chips Strip */}
      <div className="relative z-10 mx-auto mt-8 w-full max-w-2xl">
        <div className="bg-bg-2/80 grid grid-cols-3 gap-2 rounded-xl border border-white/5 p-1.5 shadow-lg backdrop-blur-md">
          <div className="bg-card/60 flex flex-col items-center justify-center rounded-lg px-1 py-2 text-center">
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="bg-accent h-1.5 w-1.5 rounded-full" />
              <span className="font-display text-sm font-bold tracking-tight text-white uppercase sm:text-base">
                2 CLUBS
              </span>
            </div>
            <span className="text-text-muted w-full truncate text-[10px] tracking-wider uppercase sm:text-xs">
              Nerul &amp; Airoli
            </span>
          </div>

          <div className="bg-card/60 flex flex-col items-center justify-center rounded-lg px-1 py-2 text-center">
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="bg-accent-2 h-1.5 w-1.5 rounded-full" />
              <span className="font-display text-sm font-bold tracking-tight text-white uppercase sm:text-base">
                EST. 2019
              </span>
            </div>
            <span className="text-text-muted w-full truncate text-[10px] tracking-wider uppercase sm:text-xs">
              Navi Mumbai
            </span>
          </div>

          <div className="bg-card/60 flex flex-col items-center justify-center rounded-lg px-1 py-2 text-center">
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="bg-accent h-1.5 w-1.5 rounded-full" />
              <span className="font-display text-sm font-bold tracking-tight text-white uppercase sm:text-base">
                PREMIUM
              </span>
            </div>
            <span className="text-text-muted w-full truncate text-[10px] tracking-wider uppercase sm:text-xs">
              Atmosphere &amp; Gear
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 mt-6 flex flex-col items-center justify-center gap-1 opacity-75"
        aria-hidden="true"
      >
        <span className="font-display text-text-muted text-[10px] tracking-[0.25em] uppercase">
          SCROLL
        </span>
        <div className="bg-card relative h-5 w-0.5 overflow-hidden rounded-full">
          <div className="bg-accent h-2 w-full animate-bounce rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
