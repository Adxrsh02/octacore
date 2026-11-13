import * as React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTASection() {
  return (
    <section
      className="from-card via-bg-2 to-bg relative flex flex-col items-center overflow-hidden border-t border-white/5 bg-gradient-to-b px-4 py-20 text-center sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      {/* Atmospheric Spotlight Ring Backdrop */}
      <div
        className="bg-accent/15 pointer-events-none absolute -top-16 h-80 w-80 rounded-full blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center">
        <Reveal>
          <span className="font-display text-accent mb-2 block text-xs font-semibold tracking-[0.25em] uppercase">
            Unleash Potential
          </span>

          <h2
            id="cta-heading"
            className="font-display mb-3 text-3xl leading-tight font-bold tracking-tight text-white uppercase sm:text-5xl"
          >
            YOUR NEXT CHAPTER STARTS WITH ONE REP.
          </h2>

          <p className="text-text-muted mx-auto mb-6 max-w-md text-sm leading-relaxed font-normal sm:text-base">
            Stop waiting for the perfect moment. Take the first step towards a stronger, more
            resilient version of yourself today.
          </p>

          <Link
            href="/membership"
            className="bg-accent hover:bg-accent-2 text-bg font-display inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold tracking-wider uppercase shadow-[0_0_30px_rgba(255,133,0,0.45)] transition-all active:scale-95 sm:w-auto"
          >
            <span>JOIN OCTACORE</span>
            <ArrowRight className="h-5 w-5" />
          </Link>

          {/* Quick contact options */}
          <div className="text-text-muted mt-8 flex items-center justify-center gap-6 text-xs">
            <a
              href="tel:+919069819090"
              className="hover:text-accent inline-flex items-center gap-1.5 transition-colors"
            >
              <Phone className="text-accent h-4 w-4" />
              <span>Nerul: +91 90698 19090</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+918928149090"
              className="hover:text-accent inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="text-accent-2 h-4 w-4" />
              <span>Airoli: +91 89281 49090</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCTASection;
