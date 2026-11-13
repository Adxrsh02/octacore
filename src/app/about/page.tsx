import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Quote,
  Target,
  Eye,
  Clock,
  Dumbbell,
  Users,
  TrendingUp,
  ShieldCheck,
  User,
  Award,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { getBreadcrumbSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "About OCTACORE Fitness | Story, Mission & Coaching Philosophy",
  description:
    "Founded in 2019 in Navi Mumbai, OCTACORE Fitness is built on Fitness, Passion, and Spirit. Learn about our athletic journey, mission, core values, and community.",
  keywords: [
    "about octacore fitness",
    "gym history navi mumbai",
    "fitness mission nerul",
    "gym founders navi mumbai",
    "athletic culture navi mumbai",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About OCTACORE Fitness | Built on Passion & Performance",
    description:
      "Explore the genesis, mission, and athletic code driving OCTACORE Fitness in Navi Mumbai since 2019.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.logo.url,
        width: 1080,
        height: 1080,
        alt: "About OCTACORE Fitness",
      },
    ],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "About", url: `${siteConfig.url}/about` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-20 sm:px-6">
        {/* 1. TOP BREADCRUMB & PAGE IDENTIFIER */}
        <div className="flex items-center justify-between pt-2">
          <nav
            aria-label="Breadcrumb"
            className="font-display text-text-muted flex items-center gap-2 text-xs tracking-wider uppercase"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              HOME
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-accent font-semibold">ABOUT US</span>
          </nav>

          <div className="bg-card flex items-center gap-2 rounded-full border border-white/5 px-3 py-1 shadow-sm">
            <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
            <span className="font-display text-accent text-[11px] font-semibold tracking-widest uppercase">
              EST. 2019
            </span>
          </div>
        </div>

        {/* Answer-First Block for Search & AI Engines */}
        <AnswerBlock
          question="What is OCTACORE Fitness and what is its philosophy?"
          answer="OCTACORE Fitness is an athletic gym brand established in 2019 in Navi Mumbai, founded on three core pillars: Fitness, Passion, and Spirit. Operating high-performance training clubs in Nerul and Airoli, OCTACORE combines precision strength equipment, certified coaching, and supportive community culture."
        />

        {/* 2. HERO CINEMATIC STAGE */}
        <section className="bg-card relative overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
          <div
            className="relative flex h-80 w-full flex-col justify-end bg-cover bg-center p-6 sm:h-96 sm:p-8"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuByiSJPdHhMtfA1we1gig5JaGou5YoQ7rBHrVZsF4ouPxcwWENHGNkY6xoSwOm0qy9h-oIiyK5QNcaID38a_By3enA5WyKRwoHa-iwNzRsRIc95_VIJNLoizndmufORk2rvkGNaQ6C6vWsVW73Zs-amupTgseQwLV36e9tB1-z9ZknA6kLwedeo4evYrmoMNgrSioHFN6YY6sH3h8Jo8oDQvAJuFv8FJjuLe-zy9cY')`,
            }}
          >
            <div className="from-bg via-bg/70 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="bg-accent/15 pointer-events-none absolute top-0 right-0 h-52 w-52 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col gap-2.5">
              <div className="text-accent font-display inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="text-accent h-4 w-4" />
                <span>Uncompromising Standard</span>
              </div>

              <h1 className="font-display text-4xl leading-none font-bold tracking-tight text-white uppercase sm:text-6xl">
                A STRONGER YOU <br />
                <span className="text-accent">STARTS HERE.</span>
              </h1>

              <p className="text-text-muted mt-1 max-w-md text-sm leading-relaxed sm:text-base">
                Precision training engineered for athletic excellence and enduring grit in Navi
                Mumbai.
              </p>
            </div>
          </div>
        </section>

        {/* 3. THE GENESIS & PULL QUOTE */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-accent h-[2px] w-6 rounded-full" />
            <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
              The Genesis
            </span>
          </div>

          <div className="bg-card relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-xl sm:p-8">
            <div className="bg-accent/10 pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full blur-2xl" />

            <p className="text-sm leading-relaxed font-normal text-white/90 sm:text-base">
              Since 2019, <strong className="text-accent font-semibold">OCTACORE</strong> has built
              its identity around three fundamental values:{" "}
              <span className="text-accent-2 font-medium">Fitness</span>,{" "}
              <span className="text-accent-2 font-medium">Passion</span>, and{" "}
              <span className="text-accent-2 font-medium">Spirit</span>. We believe fitness is more
              than lifting weights or completing workouts. It is about discipline, consistency,
              personal development and the determination to become better every day.
            </p>

            {/* Stylized Orange Pull Quote */}
            <div className="bg-bg-2/80 border-accent relative flex items-start gap-3 rounded-xl border-l-4 p-5 shadow-sm">
              <Quote className="text-accent mt-0.5 h-6 w-6 shrink-0 opacity-80" />
              <p className="font-display text-accent text-base leading-snug font-semibold tracking-wide uppercase sm:text-lg">
                &ldquo;Fitness is not a destination. It is about discipline, consistency and
                personal development.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 4. MISSION & VISION DUAL BENTO */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-display text-text-muted text-xs font-semibold tracking-wider uppercase">
              Strategic Blueprint
            </span>
            <h2 className="font-display text-2xl font-bold text-white uppercase sm:text-3xl">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Mission Card */}
            <div className="bg-card relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div className="bg-bg-2 text-accent flex h-11 w-11 items-center justify-center rounded-xl shadow-sm">
                  <Target className="h-6 w-6" />
                </div>
                <span className="font-display text-text-muted text-xs tracking-widest uppercase">
                  Target 01
                </span>
              </div>
              <h3 className="font-display mt-2 text-xl font-bold tracking-wide text-white uppercase">
                Our Mission
              </h3>
              <p className="text-text-muted text-xs leading-relaxed sm:text-sm">
                To create a motivating fitness environment where individuals can pursue their
                fitness goals, develop healthy habits and build confidence through consistent
                training.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-card relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div className="bg-bg-2 text-accent-2 flex h-11 w-11 items-center justify-center rounded-xl shadow-sm">
                  <Eye className="h-6 w-6" />
                </div>
                <span className="font-display text-text-muted text-xs tracking-widest uppercase">
                  Horizon 02
                </span>
              </div>
              <h3 className="font-display mt-2 text-xl font-bold tracking-wide text-white uppercase">
                Our Vision
              </h3>
              <p className="text-text-muted text-xs leading-relaxed sm:text-sm">
                To establish OCTACORE as a recognised fitness brand in Navi Mumbai, known for its
                fitness community, training environment and commitment to personal development.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CORE VALUES MATRIX (THE OCTACORE CODE) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-display text-text-muted text-xs font-semibold tracking-wider uppercase">
                The Octacore Code
              </span>
              <h2 className="font-display text-2xl font-bold text-white uppercase sm:text-3xl">
                Core Values
              </h2>
            </div>
            <div className="bg-card text-accent flex h-9 w-9 items-center justify-center rounded-full border border-white/5">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* 01 Discipline */}
            <div className="bg-card flex min-h-[140px] flex-col justify-between rounded-2xl border border-white/5 p-5 shadow-md">
              <div className="mb-2 flex items-center justify-between">
                <div className="bg-bg-2 text-accent flex h-9 w-9 items-center justify-center rounded-lg">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="font-display text-text-muted text-xs font-bold">01</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase">
                  Discipline
                </h3>
                <p className="text-text-muted mt-1 text-xs leading-snug">
                  Progress begins with consistency.
                </p>
              </div>
            </div>

            {/* 02 Dedication */}
            <div className="bg-card flex min-h-[140px] flex-col justify-between rounded-2xl border border-white/5 p-5 shadow-md">
              <div className="mb-2 flex items-center justify-between">
                <div className="bg-bg-2 text-accent flex h-9 w-9 items-center justify-center rounded-lg">
                  <Dumbbell className="h-4 w-4" />
                </div>
                <span className="font-display text-text-muted text-xs font-bold">02</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase">
                  Dedication
                </h3>
                <p className="text-text-muted mt-1 text-xs leading-snug">
                  Every workout is an opportunity to improve.
                </p>
              </div>
            </div>

            {/* 03 Community */}
            <div className="bg-card flex min-h-[140px] flex-col justify-between rounded-2xl border border-white/5 p-5 shadow-md">
              <div className="mb-2 flex items-center justify-between">
                <div className="bg-bg-2 text-accent flex h-9 w-9 items-center justify-center rounded-lg">
                  <Users className="h-4 w-4" />
                </div>
                <span className="font-display text-text-muted text-xs font-bold">03</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase">
                  Community
                </h3>
                <p className="text-text-muted mt-1 text-xs leading-snug">
                  Fitness is stronger when people motivate each other.
                </p>
              </div>
            </div>

            {/* 04 Progress */}
            <div className="bg-card flex min-h-[140px] flex-col justify-between rounded-2xl border border-white/5 p-5 shadow-md">
              <div className="mb-2 flex items-center justify-between">
                <div className="bg-bg-2 text-accent flex h-9 w-9 items-center justify-center rounded-lg">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="font-display text-text-muted text-xs font-bold">04</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase">
                  Progress
                </h3>
                <p className="text-text-muted mt-1 text-xs leading-snug">
                  Celebrate every milestone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CHRONICLE OF GROWTH (TIMELINE) */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-display text-text-muted text-xs font-semibold tracking-wider uppercase">
              Chronicle of Growth
            </span>
            <h2 className="font-display text-2xl font-bold text-white uppercase sm:text-3xl">
              Our Journey
            </h2>
          </div>

          <div className="bg-card relative rounded-2xl border border-white/5 p-6 shadow-xl sm:p-8">
            <div className="relative flex flex-col gap-8 pl-6">
              {/* Connecting Vertical Kinetic Line */}
              <div className="absolute top-3 bottom-3 left-2 w-[2px] bg-white/10">
                <div className="from-accent h-1/2 w-full bg-gradient-to-b to-white/10" />
              </div>

              {/* Node 1: 2019 Foundation */}
              <div className="relative flex flex-col gap-1.5">
                <div className="bg-card border-accent absolute top-1 -left-6 flex h-4 w-4 items-center justify-center rounded-full border">
                  <span className="bg-accent h-2 w-2 rounded-full shadow-[0_0_8px_#ff8500]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-accent text-xl font-bold tracking-wider">
                    2019
                  </span>
                  <span className="bg-accent/20 text-accent font-display rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase">
                    Launch
                  </span>
                </div>
                <p className="text-sm leading-snug font-medium text-white">
                  OCTACORE founded with a mission to transform athletic fitness in Navi Mumbai.
                </p>
              </div>

              {/* Node 2: Expansion */}
              <div className="relative flex flex-col gap-1.5">
                <div className="bg-card border-accent-2 absolute top-1 -left-6 flex h-4 w-4 items-center justify-center rounded-full border">
                  <span className="bg-accent-2 h-2 w-2 rounded-full shadow-[0_0_8px_#f5a623]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-accent-2 text-xl font-bold tracking-wider">
                    2021 — PRESENT
                  </span>
                  <span className="bg-bg-2 text-text-muted font-display rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase">
                    Expansion
                  </span>
                </div>
                <div className="bg-bg-2 text-text-muted flex flex-col gap-1.5 rounded-xl border border-white/5 p-4 text-xs">
                  <p className="font-semibold text-white">
                    Two strategic clubs in Nerul (Sector 1) &amp; Airoli (Reliable Tech Park).
                  </p>
                  <p className="leading-relaxed">
                    State-of-the-art conditioning zones, certified master coaches, and continuous
                    facility scaling across the Navi Mumbai corridor.
                  </p>
                  <p className="text-text-muted mt-1 font-mono text-[11px]">
                    [Verified milestones recorded by club administration]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. LEADERSHIP & CERTIFIED COACHES (NO INVENTED NAMES) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-display text-text-muted text-xs font-semibold tracking-wider uppercase">
                Elite Mentorship
              </span>
              <h2 className="font-display text-2xl font-bold text-white uppercase sm:text-3xl">
                Leadership &amp; Coaches
              </h2>
            </div>
            <span className="font-display text-accent bg-card rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase">
              Certified Team
            </span>
          </div>

          <div className="bg-card flex flex-col gap-5 rounded-2xl border border-white/5 p-6 shadow-xl">
            {/* Admin Placeholder Notice */}
            <div className="bg-bg-2 text-text-muted flex items-start gap-3 rounded-xl border border-white/5 p-3.5">
              <Award className="text-accent mt-0.5 h-5 w-5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
                  Official Directory
                </span>
                <p className="text-text-muted mt-0.5 text-xs leading-relaxed">
                  Coaching rosters and certified trainer profiles are verified by gym management.
                  Full biometric and certified coaching credentials are available at our front
                  desks.
                </p>
              </div>
            </div>

            {/* Coach Silhouette Slots (Structure Only, No Fake Names) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-bg-2/80 flex flex-col items-center rounded-xl border border-white/5 p-4 text-center shadow-sm">
                <div className="bg-card relative mb-3 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg border border-white/5">
                  <div className="bg-bg-2 text-text-muted flex h-14 w-14 items-center justify-center rounded-full">
                    <User className="h-8 w-8" />
                  </div>
                  <span className="bg-bg/80 font-display text-accent absolute right-2 bottom-2 rounded px-2 py-0.5 text-[10px] font-semibold uppercase">
                    HEAD COACH
                  </span>
                </div>
                <span className="font-display text-base font-bold text-white uppercase">
                  Head Strength Coach
                </span>
                <span className="text-text-muted mt-0.5 text-xs">Strength &amp; Conditioning</span>
              </div>

              <div className="bg-bg-2/80 flex flex-col items-center rounded-xl border border-white/5 p-4 text-center shadow-sm">
                <div className="bg-card relative mb-3 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg border border-white/5">
                  <div className="bg-bg-2 text-text-muted flex h-14 w-14 items-center justify-center rounded-full">
                    <User className="h-8 w-8" />
                  </div>
                  <span className="bg-bg/80 font-display text-accent-2 absolute right-2 bottom-2 rounded px-2 py-0.5 text-[10px] font-semibold uppercase">
                    OPERATIONS
                  </span>
                </div>
                <span className="font-display text-base font-bold text-white uppercase">
                  Branch Director
                </span>
                <span className="text-text-muted mt-0.5 text-xs">Mobility &amp; Performance</span>
              </div>
            </div>

            {/* Facility Metric Snips */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="bg-bg-2 flex flex-col items-center rounded-xl border border-white/5 p-3">
                <span className="font-display text-accent text-2xl font-bold">100%</span>
                <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
                  Certified
                </span>
              </div>
              <div className="bg-bg-2 flex flex-col items-center rounded-xl border border-white/5 p-3">
                <span className="font-display text-accent text-2xl font-bold">2</span>
                <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
                  Centers
                </span>
              </div>
              <div className="bg-bg-2 flex flex-col items-center rounded-xl border border-white/5 p-3">
                <span className="font-display text-accent text-2xl font-bold">5+</span>
                <span className="font-display text-text-muted text-[10px] tracking-wider uppercase">
                  Years Strong
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. ENQUIRY SECTION */}
        <section id="about-enquiry" className="pt-4">
          <EnquiryForm defaultGoal="general" showDirectWhatsApp={true} />
        </section>
      </div>
    </>
  );
}
