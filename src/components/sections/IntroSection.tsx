import * as React from "react";
import { Reveal } from "@/components/motion/Reveal";

export function IntroSection() {
  return (
    <section
      className="bg-bg relative overflow-hidden border-t border-white/5 px-4 pt-16 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="intro-heading"
    >
      {/* Octagonal Watermark Background SVG */}
      <div
        className="text-accent pointer-events-none absolute top-1/2 -right-20 h-80 w-80 -translate-y-1/2 opacity-[0.03] sm:h-96 sm:w-96"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full fill-none stroke-current"
          strokeWidth="2.5"
          viewBox="0 0 100 100"
        >
          <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" />
          <polygon
            points="36,15 64,15 85,36 85,64 64,85 36,85 15,64 15,36"
            strokeDasharray="4 2"
            strokeWidth="1.5"
          />
          <circle cx="50" cy="50" r="18" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="font-display text-accent text-xs font-semibold tracking-[0.25em] uppercase">
              Philosophy
            </span>
            <div className="from-accent h-[2px] w-12 rounded-full bg-gradient-to-r to-transparent" />
          </div>

          <h2
            id="intro-heading"
            className="font-display mb-4 text-3xl leading-tight font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
          >
            MORE THAN A GYM.{" "}
            <span className="from-accent via-accent-2 bg-gradient-to-r to-white bg-clip-text text-transparent">
              A MINDSET.
            </span>
          </h2>

          <p className="text-text-muted max-w-2xl text-base leading-relaxed font-normal sm:text-lg">
            Fitness is not a destination. It is a commitment you make to yourself every single day.
            At OCTACORE, we believe in the power of disciplined effort, focused athletic training,
            and an uncompromising community that motivates you to shatter plateaus.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default IntroSection;
