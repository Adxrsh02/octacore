import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Terms of Service | OCTACORE Fitness",
  description:
    "Read the terms of service, facility code of conduct, and membership guidelines for OCTACORE Fitness clubs in Nerul and Airoli, Navi Mumbai.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Terms of Service", url: `${siteConfig.url}/terms` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 pb-20 sm:px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="font-display text-text-muted flex items-center gap-2 pt-2 text-xs tracking-wider uppercase"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-accent font-semibold">Terms of Service</span>
        </nav>

        {/* Header */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FileText className="text-accent h-5 w-5" />
            <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
              CLUB PROTOCOL &amp; RULES
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-text-muted font-mono text-xs">
            Last Updated: November 2026 • Governing Territory: Navi Mumbai, India
          </p>
        </section>

        {/* Content */}
        <div className="text-text-muted flex flex-col gap-6 text-sm leading-relaxed sm:text-base">
          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to OCTACORE Fitness. By accessing or browsing our digital website (
              {siteConfig.url}), submitting an online membership enquiry, or training at our
              facilities in Nerul (Sector 1, Shiravane) or Airoli (Reliable Tech Park, MIDC), you
              agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              2. Physical Readiness &amp; Health Clearance
            </h2>
            <p>
              Athletic training, free-weight resistance exercise, high-intensity cardio, and group
              conditioning involve inherent physical exertion. By participating in workouts at
              OCTACORE Fitness:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-white/90">
              <li>
                You affirm that you are in suitable physical health to engage in strenuous exercise
                and have obtained medical clearance if you possess underlying cardiovascular,
                orthopedic, or metabolic conditions.
              </li>
              <li>
                You acknowledge that transformation results vary widely between individuals and that
                no guaranteed outcome is promised.
              </li>
              <li>
                You agree to notify on-floor coaching personnel immediately of any sudden physical
                discomfort, dizziness, or sharp pain during workout execution.
              </li>
            </ul>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              3. Training Floor Etiquette &amp; Code of Conduct
            </h2>
            <p>To maintain our high athletic standards and ensure the safety of all members:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-white/90">
              <li>
                <strong>Proper Footwear:</strong> Clean athletic training footwear must be worn at
                all times. Outdoor mud-covered footwear, open sandals, and bare feet are strictly
                prohibited on the main lifting floor.
              </li>
              <li>
                <strong>Re-racking Equipment:</strong> All dumbbells, barbells, bumper plates, and
                functional attachments must be returned to their designated racks and storage pegs
                after each set.
              </li>
              <li>
                <strong>Sanitation:</strong> Members are encouraged to wipe down benches and cardio
                console grips using provided sanitation stations.
              </li>
              <li>
                <strong>Mutual Respect:</strong> Abusive behavior, harassment, excessive filming
                without consent, or intimidation of fellow members or coaching staff will result in
                immediate termination of club access.
              </li>
            </ul>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              4. Membership Admissions &amp; Official Agreements
            </h2>
            <p>
              Online enquiries submitted via this website represent an expression of interest and do
              not constitute a finalized contractual agreement. Official membership enrollment,
              verification of identity, biometric badge activation, and payment processing are
              finalized in person at our Nerul or Airoli branch desks under standard club enrollment
              contracts.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              5. Operational Hours &amp; Facility Adjustments
            </h2>
            <p>
              Operating hours published on the website reflect standard seasonal schedules. OCTACORE
              management reserves the right to modify operational timings for facility maintenance,
              emergency equipment calibration, deep sanitization, or national holidays with advance
              notice posted on club bulletin boards.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              6. Lockers &amp; Personal Valuables
            </h2>
            <p>
              Secure lockers are provided for member convenience during workout sessions only.
              Lockers must be cleared upon departure. While 24/7 CCTV surveillance is active
              throughout public corridors, OCTACORE Fitness is not responsible for the loss or theft
              of unattended personal items or valuables.
            </p>
          </section>

          <section className="bg-card flex flex-col gap-3 rounded-2xl border border-white/5 p-6">
            <h2 className="font-display text-xl font-bold tracking-wide text-white uppercase">
              7. Governing Jurisdiction
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of
              India. Any disputes arising out of club membership or website use shall be subject to
              the exclusive jurisdiction of the competent courts in Navi Mumbai / Thane,
              Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
