import * as React from "react";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

export function StatsBandSection() {
  return (
    <section className="bg-bg px-4 pb-16 sm:px-6 lg:px-8" aria-label="Verified Metrics">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="bg-bg-2 relative overflow-hidden rounded-2xl border border-white/5 p-6 shadow-2xl sm:p-8">
            {/* Ambient subtle background dot grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #ff8500 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-text-muted text-xs font-medium tracking-[0.25em] uppercase">
                  Verified Metrics
                </span>
                <span className="bg-card font-display text-accent rounded border border-white/10 px-2.5 py-1 text-[10px] tracking-wider uppercase">
                  Continuous Growth
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 divide-x divide-white/5 text-center sm:gap-6">
                {/* Metric 1 */}
                <div className="flex flex-col items-center">
                  <CountUp
                    end={2}
                    className="font-display from-accent via-accent-2 bg-gradient-to-b to-white bg-clip-text text-4xl leading-none font-bold text-transparent sm:text-6xl md:text-7xl"
                  />
                  <span className="font-display mt-2 text-base font-bold tracking-wide text-white uppercase sm:text-xl">
                    Locations
                  </span>
                  <span className="text-text-muted mt-0.5 text-[11px] font-normal sm:text-xs">
                    Nerul &amp; Airoli
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-center pl-2 sm:pl-6">
                  <CountUp
                    end={2019}
                    className="font-display from-accent via-accent-2 bg-gradient-to-b to-white bg-clip-text text-4xl leading-none font-bold text-transparent sm:text-6xl md:text-7xl"
                  />
                  <span className="font-display mt-2 text-base font-bold tracking-wide text-white uppercase sm:text-xl">
                    Since
                  </span>
                  <span className="text-text-muted mt-0.5 text-[11px] font-normal sm:text-xs">
                    Excellence
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-center pl-2 sm:pl-6">
                  <CountUp
                    end={100}
                    suffix="%"
                    className="font-display from-accent via-accent-2 bg-gradient-to-b to-white bg-clip-text text-4xl leading-none font-bold text-transparent sm:text-6xl md:text-7xl"
                  />
                  <span className="font-display mt-2 text-base font-bold tracking-wide text-white uppercase sm:text-xl">
                    All Levels
                  </span>
                  <span className="text-text-muted mt-0.5 text-[11px] font-normal sm:text-xs">
                    Beginner to Elite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default StatsBandSection;
