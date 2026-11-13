import * as React from "react";
import { testimonials } from "@/content/testimonials";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-bg px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-6 flex flex-col gap-1">
            <span className="font-display text-accent text-xs font-semibold tracking-[0.25em] uppercase">
              Member Experiences
            </span>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
            >
              VOICES FROM THE FLOOR
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card flex flex-col justify-between gap-4 rounded-2xl border border-white/5 p-6"
            >
              <div>
                <Quote className="text-accent mb-2 h-6 w-6 opacity-40" />
                <p className="text-sm leading-relaxed text-white italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-2">
                <span className="font-display text-accent text-xs font-semibold uppercase">
                  {t.author}
                </span>
                <span className="text-text-muted text-xs">{t.branch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
