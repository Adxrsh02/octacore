import * as React from "react";
import { Dumbbell, Flame, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface Pillar {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Fitness",
    description:
      "Develop a stronger, healthier lifestyle through disciplined athletic protocols and measurable functional gains.",
    icon: Dumbbell,
    accentColor: "#FF8500",
  },
  {
    number: "02",
    title: "Passion",
    description:
      "Approach every workout with dedication, channeling relentless internal drive into every rep, set, and recovery cycle.",
    icon: Flame,
    accentColor: "#F5A623",
  },
  {
    number: "03",
    title: "Spirit",
    description:
      "Build the mindset and consistency to progress, transcending physical limits inside a supportive, elite brotherhood.",
    icon: Shield,
    accentColor: "#FF8500",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-bg px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="pillars-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <span
            id="pillars-heading"
            className="font-display text-text-muted text-xs font-medium tracking-[0.25em] uppercase"
          >
            The Three Pillars
          </span>
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.number} delay={index * 0.12}>
                <div className="bg-card group relative overflow-hidden rounded-2xl border border-white/5 p-6 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                  {/* Top orange hairline gradient */}
                  <div className="via-accent/40 absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent to-transparent" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-display text-accent text-xs font-bold tracking-widest">
                          {pillar.number}
                        </span>
                        <h3 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-text-muted mt-2 text-sm leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="bg-bg-2 text-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 shadow-[0_0_20px_rgba(255,133,0,0.15)] transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
