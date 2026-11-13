"use client";

import * as React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Chip,
  Accordion,
  AccordionItem,
  Tabs,
  Input,
  Select,
  Checkbox,
  Toast,
} from "@/components/ui";
import { Zap, Phone, MessageSquare, Shield, Dumbbell } from "lucide-react";

export function StyleguideClient() {
  const [activeTab, setActiveTab] = React.useState("nerul");
  const [inputValue, setInputValue] = React.useState("Rahul Sharma");
  const [checkboxValue, setCheckboxValue] = React.useState(true);
  const [toastVisible, setToastVisible] = React.useState(true);

  const colors = [
    {
      name: "Base Canvas",
      token: "--color-bg",
      hex: "#080808",
      role: "Deep void background",
    },
    {
      name: "Surface Elevation 1",
      token: "--color-bg-2",
      hex: "#141414",
      role: "Structural panels & navigation",
    },
    {
      name: "Surface Elevation 2",
      token: "--color-card",
      hex: "#1B1B1B",
      role: "Default card modules",
    },
    {
      name: "Surface Elevation 3",
      token: "--color-card-elevated",
      hex: "#242424",
      role: "Elevated interactive containers",
    },
    {
      name: "Primary Kinetic Accent",
      token: "--color-accent",
      hex: "#FF8500",
      role: "Primary CTAs & active telemetry",
    },
    {
      name: "Secondary Precision Accent",
      token: "--color-accent-2",
      hex: "#F5A623",
      role: "Precision amber badges & indicators",
    },
    {
      name: "Combustion Orange",
      token: "--color-accent-combustion",
      hex: "#FF5100",
      role: "High-intensity output & peak heart rate",
    },
    {
      name: "Primary Text",
      token: "--color-text",
      hex: "#FFFFFF",
      role: "Headlines, numerals & titles",
    },
    {
      name: "Muted Text",
      token: "--color-text-muted",
      hex: "#A0A0A0",
      role: "Body copy & descriptions",
    },
    {
      name: "Tertiary Text",
      token: "--color-text-tertiary",
      hex: "#555555",
      role: "Units, timestamps & disabled states",
    },
    {
      name: "Structural Border",
      token: "--color-border",
      hex: "rgba(255, 255, 255, 0.08)",
      role: "Precision hairline seams",
    },
    {
      name: "Border Highlight",
      token: "--color-border-hover",
      hex: "rgba(255, 133, 0, 0.4)",
      role: "Kinetic rim hover borders",
    },
  ];

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-border flex flex-col gap-2 border-b pb-6">
        <div className="flex items-center gap-2">
          <Chip variant="accent">OCTACORE DESIGN SYSTEM</Chip>
          <span className="text-text-tertiary font-mono text-xs">v1.0.0 (Phase 1)</span>
        </div>
        <h1 className="font-display text-text text-4xl font-bold tracking-wider uppercase sm:text-5xl">
          Component & Token Styleguide
        </h1>
        <p className="font-body text-text-muted max-w-2xl text-sm leading-relaxed sm:text-base">
          Internal living documentation of all extracted Stitch design tokens, atomic UI primitives,
          interactive form states, and layout wrappers.
        </p>
      </div>

      {/* Official Brand Logo Asset */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
            Official Brand Identity &amp; Logo
          </h2>
          <span className="text-text-muted font-mono text-xs">1080x1080 1:1 Aspect Ratio</span>
        </div>

        <div className="rounded-card bg-card border-border flex flex-col gap-6 border p-6 shadow-xl">
          <div className="flex flex-col items-center justify-around gap-8 sm:flex-row">
            {/* Large Display */}
            <div className="flex flex-col items-center gap-2">
              <div className="border-accent/40 relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border bg-black p-1 shadow-[0_0_30px_rgba(255,133,0,0.3)] sm:h-44 sm:w-44">
                <Image
                  src={siteConfig.logo.url}
                  alt={siteConfig.logo.alt}
                  width={176}
                  height={176}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-text-muted font-mono text-xs">
                Display Hero / Footer (176px)
              </span>
            </div>

            {/* Medium Display */}
            <div className="flex flex-col items-center gap-2">
              <div className="border-accent/30 relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-black p-1 shadow-[0_0_20px_rgba(255,133,0,0.25)]">
                <Image
                  src={siteConfig.logo.url}
                  alt={siteConfig.logo.alt}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-text-muted font-mono text-xs">Navigation Desktop (80px)</span>
            </div>

            {/* Small Display */}
            <div className="flex flex-col items-center gap-2">
              <div className="border-accent/30 relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border bg-black shadow-[0_0_12px_rgba(255,133,0,0.2)]">
                <Image
                  src={siteConfig.logo.url}
                  alt={siteConfig.logo.alt}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-text-muted font-mono text-xs">Mobile Header (48px)</span>
            </div>
          </div>

          <div className="border-border text-text-muted flex flex-col items-start justify-between gap-2 border-t pt-4 font-mono text-xs sm:flex-row sm:items-center">
            <span>Asset URL: {siteConfig.logo.url}</span>
            <span>Tagline: &quot;{siteConfig.tagline}&quot;</span>
          </div>
        </div>
      </section>

      {/* 1. COLOR TOKENS */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
            01 // Color Tokens & Tiers
          </h2>
          <span className="text-text-tertiary font-mono text-xs">@theme globals.css</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colors.map((c) => (
            <div
              key={c.name}
              className="rounded-card bg-card border-border flex flex-col gap-3 border p-4 shadow-sm"
            >
              <div
                className="rounded-control border-border flex h-16 w-full items-end border p-2"
                style={{ backgroundColor: c.hex }}
              >
                <span className="rounded bg-black/70 px-1.5 py-0.5 font-mono text-[11px] text-white">
                  {c.hex}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-text text-base font-bold tracking-wide uppercase">
                  {c.name}
                </span>
                <span className="text-accent font-mono text-xs">{c.token}</span>
                <span className="font-body text-text-muted mt-1 text-xs leading-snug">
                  {c.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. TYPOGRAPHY SCALE */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          02 // Typography Scale
        </h2>

        <div className="rounded-card bg-card border-border divide-border/60 flex flex-col gap-4 divide-y border p-6">
          <div className="pt-2">
            <span className="text-accent font-mono text-xs">Display Hero (80px / 48px)</span>
            <p className="font-display text-text mt-1 text-4xl font-bold tracking-tight uppercase sm:text-6xl">
              BUILT THROUGH DISCIPLINE.
            </p>
          </div>
          <div className="pt-4">
            <span className="text-accent font-mono text-xs">Headline XL (56px / 36px)</span>
            <p className="font-display text-text mt-1 text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              TWO LOCATIONS. ONE FITNESS SPIRIT.
            </p>
          </div>
          <div className="pt-4">
            <span className="text-accent font-mono text-xs">Headline LG (40px / 28px)</span>
            <p className="font-display text-text mt-1 text-2xl font-semibold tracking-wide uppercase sm:text-3xl">
              PRECISION ATHLETIC ZONES & HARDWARE
            </p>
          </div>
          <div className="pt-4">
            <span className="text-accent font-mono text-xs">Headline MD (28px)</span>
            <p className="font-display text-text mt-1 text-xl font-semibold tracking-wide uppercase sm:text-2xl">
              NERUL & AIROLI PERFORMANCE HUBS
            </p>
          </div>
          <div className="pt-4">
            <span className="text-accent font-mono text-xs">Title LG (18px Inter)</span>
            <p className="font-body text-text mt-1 text-lg font-semibold">
              Are the programs suitable for complete beginners?
            </p>
          </div>
          <div className="pt-4">
            <span className="text-accent font-mono text-xs">Body MD (14px/22px Inter)</span>
            <p className="font-body text-text-muted mt-1 max-w-2xl text-sm leading-relaxed sm:text-base">
              Since 2019, OCTACORE has built its identity around three fundamental values: Fitness,
              Passion, and Spirit. Every individual has a different starting point and goal.
            </p>
          </div>
          <div className="pt-4">
            <span className="text-accent font-mono text-xs">
              Metric Huge (96px/64px Tabular Numerals)
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-accent text-5xl font-bold sm:text-7xl">2019</span>
              <span className="font-display text-text-tertiary text-sm uppercase">ESTABLISHED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUTTON MATRIX */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          03 // Button Component Matrix
        </h2>

        <div className="rounded-card bg-card border-border grid grid-cols-1 gap-6 border p-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Primary */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-text-muted text-xs tracking-wider uppercase">
              Primary Kinetic
            </span>
            <Button variant="primary" size="md">
              Primary Action
            </Button>
            <Button variant="primary" size="md" leftIcon={<Zap className="h-4 w-4" />}>
              With Left Icon
            </Button>
            <Button variant="primary" size="md" isLoading>
              Loading State
            </Button>
            <Button variant="primary" size="md" disabled>
              Disabled State
            </Button>
          </div>

          {/* Secondary */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-text-muted text-xs tracking-wider uppercase">
              Secondary Industrial
            </span>
            <Button variant="secondary" size="md">
              Secondary Action
            </Button>
            <Button variant="secondary" size="md" leftIcon={<Phone className="h-4 w-4" />}>
              Call Direct
            </Button>
            <Button variant="secondary" size="md" isLoading>
              Loading State
            </Button>
            <Button variant="secondary" size="md" disabled>
              Disabled State
            </Button>
          </div>

          {/* Outline */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-text-muted text-xs tracking-wider uppercase">
              Outline Kinetic
            </span>
            <Button variant="outline" size="md">
              Outline Action
            </Button>
            <Button variant="outline" size="md" leftIcon={<Dumbbell className="h-4 w-4" />}>
              Explore Gear
            </Button>
            <Button variant="outline" size="sm">
              Small Size (36px)
            </Button>
            <Button variant="outline" size="lg">
              Large Size (56px)
            </Button>
          </div>

          {/* Ghost & Icon */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-text-muted text-xs tracking-wider uppercase">
              Ghost & Icon (48px Touch)
            </span>
            <Button variant="ghost" size="md">
              Ghost Button
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="icon" size="icon" aria-label="Phone action">
                <Phone className="text-accent h-5 w-5" />
              </Button>
              <Button variant="icon" size="icon" aria-label="Chat action">
                <MessageSquare className="text-accent-2 h-5 w-5" />
              </Button>
              <Button variant="icon" size="icon" aria-label="Shield action">
                <Shield className="text-accent h-5 w-5" />
              </Button>
            </div>
            <span className="text-text-tertiary text-xs">
              All touch targets strictly &gt;= 48px
            </span>
          </div>
        </div>
      </section>

      {/* 4. CHIPS & STATUS BADGES */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          04 // Chips & Telemetry Badges
        </h2>

        <div className="rounded-card bg-card border-border flex flex-wrap items-center gap-3 border p-6">
          <Chip variant="default">Default Badge</Chip>
          <Chip variant="accent">Accent Protocol</Chip>
          <Chip variant="accent" pulse>
            Live Hub Active
          </Chip>
          <Chip variant="amber">Corporate MIDC</Chip>
          <Chip variant="live" pulse>
            [COUNT-UP ACTIVE]
          </Chip>
          <Chip variant="outline">2 CLUBS NAVI MUMBAI</Chip>
          <Chip variant="accent" size="sm">
            SM SIZE
          </Chip>
        </div>
      </section>

      {/* 5. TABS / SEGMENTED CONTROLS */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          05 // Tabs & Segmented Switcher
        </h2>

        <div className="rounded-card bg-card border-border flex flex-col gap-4 border p-6">
          <span className="font-display text-text-muted text-xs tracking-wider uppercase">
            Interactive Branch Switcher (Current: {activeTab.toUpperCase()})
          </span>
          <Tabs
            activeId={activeTab}
            onChange={setActiveTab}
            options={[
              { id: "nerul", label: "Nerul Flagship", badge: "Active" },
              { id: "airoli", label: "Airoli Tech Park", badge: "Active" },
              { id: "all", label: "All Navi Mumbai" },
            ]}
          />
        </div>
      </section>

      {/* 6. CARD VARIANTS */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          06 // Card Elevation Tiers
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card variant="flat">
            <CardHeader>
              <Chip variant="outline" size="sm">
                Flat Tier
              </Chip>
              <CardTitle className="mt-2">Structural Surface</CardTitle>
              <CardDescription>
                Base backdrop tier using #141414 with subtle 1px border.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-text-tertiary text-xs">Used for nested sub-panels and metadata.</p>
            </CardContent>
          </Card>

          <Card variant="default">
            <CardHeader>
              <Chip variant="default" size="sm">
                Default Card
              </Chip>
              <CardTitle className="mt-2">Surface Tier 2</CardTitle>
              <CardDescription>
                Standard #1B1B1B card chassis with 16px corner radius.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-text-tertiary text-xs">
                Used for training modules and facility grids.
              </p>
            </CardContent>
          </Card>

          <Card variant="interactive" hasAccentBorder>
            <CardHeader>
              <Chip variant="accent" size="sm">
                Interactive + Accent
              </Chip>
              <CardTitle className="mt-2">Kinetic Rim Glow</CardTitle>
              <CardDescription>
                Elevated hover response with atmospheric rim lighting and top gradient.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="primary" size="sm" className="w-full">
                Interactive Action
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 7. FORM INPUTS & SELECTS */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          07 // Form Controls & Validation States
        </h2>

        <div className="rounded-card bg-card border-border grid grid-cols-1 gap-6 border p-6 md:grid-cols-2">
          <Input
            label="01 // Full Name (Default)"
            placeholder="e.g. Rahul Sharma"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />

          <Input
            label="02 // Phone Number (With Icon & Helper)"
            placeholder="10-digit mobile number"
            leftIcon={<Phone className="text-accent h-4 w-4" />}
            helperText="We will contact you via WhatsApp/SMS"
          />

          <Input
            label="03 // Validation Error State"
            placeholder="Enter valid phone"
            defaultValue="9999"
            error="Please enter a valid 10-digit Indian mobile number"
          />

          <Select
            label="04 // Core Conditioning Target"
            options={[
              { value: "strength", label: "Strength & Muscle Building" },
              { value: "fatloss", label: "Fat Loss & Conditioning" },
              { value: "performance", label: "Athletic Performance" },
              { value: "coaching", label: "1-on-1 Personal Training" },
            ]}
          />

          <div className="pt-2 md:col-span-2">
            <Checkbox
              id="terms-check"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.target.checked)}
              label="I consent to OCTACORE Fitness contacting me via phone/WhatsApp regarding membership information. Strict no-spam guarantee."
            />
          </div>
        </div>
      </section>

      {/* 8. ACCORDION */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          08 // Accessible Accordion
        </h2>

        <Accordion>
          <AccordionItem defaultOpen title="Are the programs suitable for complete beginners?">
            Yes. All workout programs, free-weight exercises, and machine setups can be scaled to
            any experience level. Our on-floor trainers are always available to guide your technique
            and ensure safe execution.
          </AccordionItem>
          <AccordionItem title="Can I access both Nerul and Airoli branches?">
            Multi-club access is included with our Annual Elite memberships and select multi-club
            passes. Single-branch memberships can also be upgraded at any time.
          </AccordionItem>
          <AccordionItem title="What are the standard operating hours?">
            Both branches operate Monday to Saturday from 6:00 AM to 11:00 PM. Nerul is open Sunday
            mornings (7:00 AM – 11:00 AM), while Airoli is closed Sundays.
          </AccordionItem>
        </Accordion>
      </section>

      {/* 9. TOAST BANNERS */}
      <section className="flex flex-col gap-6">
        <h2 className="font-display text-text text-2xl font-bold tracking-wider uppercase">
          09 // Feedback Toasts & Banners
        </h2>

        <div className="flex flex-col gap-4">
          {toastVisible && (
            <Toast
              variant="success"
              title="Enquiry Transmitted"
              message="Thanks! An OCTACORE performance advisor will reach out within 2 hours with your tailored conditioning proposal."
              onClose={() => setToastVisible(false)}
            />
          )}

          <Toast
            variant="warning"
            title="Hours Subject to Confirmation"
            message="Operating hours published from public listings. Please confirm holiday schedules with your branch desk."
          />

          <Toast
            variant="error"
            title="Submission Error"
            message="Unable to dispatch inquiry. Please check your connectivity or reach us via WhatsApp directly."
          />
        </div>
      </section>
    </div>
  );
}
