import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface TrainingProgram {
  title: string;
  tag: string;
  description: string;
  image: string;
  imageAlt: string;
}

const PROGRAMS: TrainingProgram[] = [
  {
    title: "Strength Training",
    tag: "Hypertrophy",
    description:
      "Build functional power and lean muscle with precision loading and progressive overload science.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMa1CAhA-6rImNnsdj1cBrj3nrMi83tNw3BzABhC11yrpYHVLr_5buNJHL8NjbkIHe9EnJ6kcHt6PmskJfPlh5WzSkrkp-cW2piVw2CnID2oTtgDSuDkux4tc2k9WnXBqP8RsNWNEL-lpSFuuBNEehCqrtQ9klnlmPG0r74b8hdh87-Xfk0huQhP1cAfHo2oauQr_NBSdlhStsSWoeyj2p50ePzAxXJVEav7Ef8GI",
    imageAlt: "Athlete performing deadlift in athletic gym with amber rim lighting",
  },
  {
    title: "Cardio Training",
    tag: "Metabolic",
    description:
      "Elevate aerobic capacity, endurance, and cardiovascular stamina using tactical interval training.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9pF2SDCXgMs4oWKVCIRcO3N1LSwbdhD4vyCiuARNYqjOLCWIEo2ckOID-FtaiOxecalwwGP9GJv_Igvu6sni59KYFz555KpbeHJ3wcHNa1z6ZznXj5XnrbDhYljA2KpWy5fi9nBgJKBc6elfr306JzXs2uZJHO7bHx26oow8kaWJEYTW1yKcE_vjF-0wZDgB9NIHFuxX2CURUzWMMP2vPiI31u8id5-64pJhEu8g",
    imageAlt: "Athlete sprinting on curved treadmill under orange kinetic lighting",
  },
  {
    title: "Personal Training",
    tag: "1-on-1 Elite",
    description:
      "1-on-1 bespoke coaching customized to your unique biomechanics, body composition, and goals.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8qshWiHWM0GWYESFoiZKQ5c_L5N0L0M6-VJO9cw1OAi-QbQzEHCYx3ULuiSoo7uD4j7R_ka1VY6o8EMQrR7pDMtJMJ5ZVAkzokRSXzlOjt4STHcxf-wyMuaPDRgL-EyAOZY5NOsl9O-ySSI33kmv8C2jVC8FrtCP-HjxGzkfa1i-NlqJE7tPeak9a3wS2mytpxfeoeiGXHtwxpbdCqj9_863qoWMh_IM3bV-hYkA",
    imageAlt: "Fitness coach instructing athlete on barbell form with amber illumination",
  },
  {
    title: "Yoga & Group Training",
    tag: "Mobility",
    description:
      "Mobility, core resilience, and high-energy community conditioning in synced rhythmic workouts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfitGwNpXRXWpqWSdf4T0NkwwPFvUD5NupBiVrvClfvzAXveeVRtAUB2xs67RtF2vCdIk4VTKqlUdHK8nZ53_D9WF6I16vEOfKpknJy5iXo_4tiYjdcHBVHPWN5kQtqJGu5IB596JMrXEzf0iJjlgkH3ezXoxd66lTptyOMzR6dKNnFrm1vnyiDktDAlLSs45VeaKd5YgUmzoVuklrPkfbR7W9eFbMQ7xfdiKvLGY",
    imageAlt: "Athletes engaged in dynamic mobility flow in studio with warm perimeter lighting",
  },
];

export function TrainingSection() {
  return (
    <section
      className="bg-bg flex flex-col overflow-hidden pb-16"
      aria-labelledby="training-heading"
    >
      <div className="mx-auto mb-6 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-2 flex items-center gap-2">
            <span className="bg-accent h-2 w-2 rounded-full" />
            <span className="font-display text-accent text-xs font-semibold tracking-[0.25em] uppercase">
              Curated Disciplines
            </span>
          </div>

          <h2
            id="training-heading"
            className="font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
          >
            FIND YOUR STRENGTH.
          </h2>

          <p className="text-text-muted mt-1 max-w-lg text-sm font-normal sm:text-base">
            Comprehensive training programs engineered for every goal, level, and athletic
            aspiration.
          </p>
        </Reveal>
      </div>

      {/* Horizontal Swipe Carousel on Mobile, Grid on Desktop */}
      <div className="w-full">
        {/* Mobile: Scroll Snap Container */}
        <div
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden"
          style={{ scrollPaddingLeft: "1rem" }}
          tabIndex={0}
          role="region"
          aria-label="Training programs mobile carousel"
        >
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="bg-card flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/5 shadow-lg shadow-black/50"
            >
              <div className="bg-bg-2 relative h-44 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="from-card via-card/30 absolute inset-0 bg-gradient-to-t to-transparent" />
                <span className="font-display text-accent absolute top-3 left-3 rounded bg-black/75 px-2 py-0.5 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md">
                  {program.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-wide text-white uppercase">
                    {program.title}
                  </h3>
                  <p className="text-text-muted mt-1 text-xs leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="flex items-center justify-end pt-2">
                  <span className="bg-bg-2 text-accent flex h-10 w-10 items-center justify-center rounded-xl">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid Container */}
        <div className="mx-auto hidden max-w-6xl gap-6 px-4 sm:px-6 md:grid md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {PROGRAMS.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.1}>
              <div className="group bg-card flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 shadow-lg shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
                <div className="bg-bg-2 relative h-48 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="from-card via-card/30 absolute inset-0 bg-gradient-to-t to-transparent" />
                  <span className="font-display text-accent absolute top-3 left-3 rounded bg-black/75 px-2 py-0.5 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md">
                    {program.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
                      {program.title}
                    </h3>
                    <p className="text-text-muted mt-2 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <span className="bg-bg-2 text-accent flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Explore Training Button */}
      <div className="mx-auto mt-8 w-full max-w-xs px-4 sm:px-6 lg:px-8">
        <Link
          href="/training"
          className="bg-card hover:bg-card-hover font-display flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-white/10 text-base font-semibold tracking-wider text-white uppercase shadow-md transition-all active:scale-[0.98]"
        >
          <span>EXPLORE TRAINING</span>
          <ArrowUpRight className="text-accent h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default TrainingSection;
