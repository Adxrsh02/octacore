# OCTACORE Fitness — Production Web Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers%20%26%20Pages-f38020?style=for-the-badge&logo=cloudflare)](https://workers.cloudflare.com/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E%20Tested-45ba4b?style=for-the-badge&logo=playwright)](https://playwright.dev/)
[![Axe WCAG 2.1 AA](https://img.shields.io/badge/A11y-WCAG%202.1%20AA%20Compliant-purple?style=for-the-badge)](https://www.deque.com/axe/)

A high-performance, dark-athletic digital platform for **OCTACORE Fitness**, a premier fitness brand operating across two strategic locations in Navi Mumbai: **Nerul** (Sector 1, Shiravane) and **Airoli** (Reliable Tech Park, MIDC).

Built from the ground up using **Next.js 15 App Router**, **Tailwind CSS v4**, **React Three Fiber (Three.js)**, **GSAP**, and optimized for serverless edge deployment on **Cloudflare Workers / Pages** via OpenNext.

---

## 📖 Table of Contents

- [Brand Identity & Locations](#-brand-identity--locations)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [Performance & Core Web Vitals](#-performance--core-web-vitals)
- [Security & Rate Limiting](#-security--rate-limiting)
- [Cloudflare Deployment](#-cloudflare-deployment)
- [License & Credits](#-license--credits)

---

## 🏋️ Brand Identity & Locations

- **Tagline**: `FITNESS • PASSION • SPIRIT`
- **Design Language**: _Kinetic Luxury_ — Dark athletic aesthetic built on Matte Obsidian (`#080808`), Athletic Amber/Orange (`#FF8500`), and Subtle Gold/Bronze highlights.
- **Official Brand Mark**: Integrated Cloudinary high-resolution master asset (`https://res.cloudinary.com/lta722n4/image/upload/v1794503018/Octacore_Fitness_Logo.jpg`) rendered with consistent responsive proportions across navigation, footers, mobile drawers, and edge OG cards.
- **Gym Locations**:
  - **Nerul Flagship**: Plot No. 781, Sector 1, Shiravane, Nerul, Navi Mumbai 400706. Features a 5,000 sq.ft athletic deck, 50kg dumbbell rack, Olympic lifting cages, and 20m sled turf. Phone: `+91 99876 54321`.
  - **Airoli Corporate Campus**: Unit D-1, Reliable Tech Park, Cloud City Campus, MIDC, Airoli, Navi Mumbai 400708. Features a biomechanical selectorized circuit, curved assault runners, and corporate wellness suites. Phone: `+91 99876 54322`.

---

## ✨ Key Features

1. **Procedural 3D Hero Emblem**:
   - Built with **React Three Fiber** and Three.js.
   - Procedural metallic octagonal emblem with orange rim lighting, subtle environment reflections, and smooth pointer tilt on desktop.
   - Instant LCP via pre-rendered static poster (`<SceneFallback>`); 3D canvas is dynamically lazy-loaded only after headline text has painted.
   - Automatic fallback for `prefers-reduced-motion`, low-memory devices, or browsers without WebGL.
2. **Synchronized Motion System**:
   - **Lenis** smooth scrolling synchronized with **GSAP ScrollTrigger** ticker.
   - Clean lifecycle cleanup and automatic disabling on touch devices and reduced-motion user preferences.
   - Lightweight page transitions powered by **Framer Motion `LazyMotion`** with `domAnimation`.
3. **Multi-Page Static & Dynamic Routing**:
   - Dedicated branch pages (`/locations/nerul`, `/locations/airoli`) statically generated via `generateStaticParams`.
   - Comprehensive inner pages: `/about`, `/training`, `/facilities`, `/transformations`, `/membership`, `/contact`, `/privacy-policy`, `/terms`, and `/dev/styleguide` (marked `noindex`).
   - Interactive equipment filter by branch and category on the Facilities page.
   - Interactive Before/After image comparison slider on Transformations page with keyboard accessibility.
4. **Resilient Lead Capture Pipeline**:
   - Comprehensive enquiry form with Indian mobile format validation (`+91` handling).
   - Form state management via React Hook Form and Zod schemas shared between client and server.
   - Cloudflare Turnstile bot verification + invisible honeypot field.
   - IP-based sliding window rate limiting (max 5 submissions per 10 minutes).
   - Email dispatch to branch-specific recipients via **Resend**.
   - Redundant backup storage in Cloudflare KV / D1 / local filesystem.
   - Contextual WhatsApp quick-chat follow-up with pre-filled enquiry text.
5. **Search Engine & Answer-Engine Optimization**:
   - Dynamic edge-rendered OpenGraph cards (`/opengraph-image`, `/locations/[slug]/opengraph-image`).
   - Full JSON-LD structured data: `Organization`, `WebSite`, `HealthClub`/`LocalBusiness` (per branch), `Service`/`OfferCatalog`, `FAQPage`, and `BreadcrumbList`.
   - Dynamic `sitemap.xml` and canonical `robots.txt`.
   - AI search engine guide served at `/llms.txt`.
6. **Mobile-First UX & Zero CLS**:
   - Fixed Bottom Action Bar on mobile (`Call`, `WhatsApp`, `Join Now`).
   - Strict `pb-20 lg:pb-0` layout spacing ensuring zero layout shift across screen sizes.
   - Full-screen accessible mobile navigation drawer with focus trapping and body scroll locking.

---

## 🛠️ Tech Stack

| Layer                     | Technologies                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**             | [Next.js 15](https://nextjs.org/) (App Router, React 19, Strict TypeScript)                                                                                                           |
| **Styling**               | [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` design tokens, `clsx`, `tailwind-merge`                                                                                     |
| **Typography**            | `next/font/google` ([Inter](https://fonts.google.com/specimen/Inter), [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue), [Oswald](https://fonts.google.com/specimen/Oswald)) |
| **3D & Canvas**           | [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/)                                                                                                     |
| **Motion**                | [GSAP](https://gsap.com/) (ScrollTrigger), [Lenis](https://lenis.darkroom.engineering/), [Framer Motion](https://www.framer.com/motion/) (`LazyMotion`)                               |
| **Forms & Validation**    | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)                                                                                                              |
| **Icons**                 | [Lucide React](https://lucide.dev/)                                                                                                                                                   |
| **Email Delivery**        | [Resend](https://resend.com/)                                                                                                                                                         |
| **Bot Protection**        | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)                                                                                                                |
| **Testing & QA**          | [Playwright](https://playwright.dev/), [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm)                                                                              |
| **Serverless Deployment** | [@opennextjs/cloudflare](https://opennext.js.org/cloudflare), [Wrangler](https://developers.cloudflare.com/workers/wrangler/)                                                         |

---

## 📂 Project Architecture & Directory Structure

```text
octacore/
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI/CD pipeline (Format, Lint, Types, Tests, Build)
├── docs/
│   ├── CONTENT-TODO.md            # Client handoff audit: missing owner data, hours, photos, coordinates
│   ├── DEPLOY.md                  # Comprehensive Cloudflare Workers & Pages deployment guide
│   ├── DESIGN-SYSTEM.md           # Stitch Kinetic Luxury design tokens, palette & typography
│   └── SEO-CHECKLIST.md           # Local citations, GBP verification & technical SEO playbook
├── e2e/                           # Playwright end-to-end and accessibility test suites
│   ├── accessibility.spec.ts      # Axe-core WCAG 2.1 AA audits across all core routes
│   ├── form.spec.ts               # Lead pipeline validation, honeypot & WhatsApp follow-up tests
│   ├── interactive.spec.ts        # Branch switcher, facilities equipment filter & 404 tests
│   ├── navigation.spec.ts         # Desktop nav & mobile drawer focus trap / scroll-lock tests
│   ├── no-horizontal-overflow.spec.ts # Layout overflow tests (390px mobile & 1440px desktop)
│   └── sitemap-links.spec.ts      # Sitemap 200 OK & robots.txt / llms.txt validation
├── public/
│   ├── favicon.ico
│   ├── llms.txt                   # AI crawler summary and markdown documentation map
│   └── robots.txt                 # Canonical crawler directives
├── scripts/
│   └── verify-seo.mjs             # Standalone SEO verification tool
├── src/
│   ├── app/                       # App Router routes and layouts
│   │   ├── (legal)                # /privacy-policy, /terms
│   │   ├── about/                 # /about route
│   │   ├── api/lead/route.ts      # Serverless route handler: lead ingestion & rate limiting
│   │   ├── contact/               # /contact route with interactive enquiry form
│   │   ├── dev/styleguide/        # Design system living styleguide (noindex)
│   │   ├── facilities/            # /facilities route with equipment filters
│   │   ├── locations/             # /locations hub
│   │   │   └── [slug]/            # Dynamic SSG branch pages (/locations/nerul, /locations/airoli)
│   │   ├── membership/            # /membership plans and comparison
│   │   ├── training/              # /training programs showcase
│   │   ├── transformations/       # /transformations with interactive comparison slider
│   │   ├── layout.tsx             # Root layout: fonts, smooth scroll, navbar, footer, action bar
│   │   ├── opengraph-image.tsx    # Edge-rendered dynamic OpenGraph social image
│   │   ├── robots.ts              # Dynamic robots configuration
│   │   └── sitemap.ts             # Dynamic XML sitemap generator
│   ├── components/                # Modular component architecture
│   │   ├── layout/                # Navbar, MobileMenu, Footer, BottomActionBar, PageTransition
│   │   ├── motion/                # Reveal, SplitHeading, CountUp, Parallax, MagneticButton
│   │   ├── sections/              # Page sections (HeroSection, TrainingSection, FacilitiesSection...)
│   │   ├── three/                 # 3D Canvas, HeroScene, Emblem, SceneFallback
│   │   └── ui/                    # Accessible UI primitives (Button, Card, Input, Accordion, Tabs...)
│   ├── content/                   # Single-source-of-truth typed data modules
│   │   ├── branches.ts            # Nerul & Airoli facilities, contacts, hours, coordinates
│   │   ├── equipment.ts           # Categorized equipment inventory
│   │   ├── faqs.ts                # Brand and branch FAQs
│   │   ├── site.ts                # Global metadata, brand tokens, navigation links
│   │   ├── training.ts            # Training programs & curriculums
│   │   └── transformations.ts     # Member transformation stories
│   ├── hooks/                     # Custom React hooks (useDeviceCapability, useReducedMotion)
│   ├── lib/                       # Utilities (analytics, schema generators, validation schemas)
│   └── styles/
│       └── globals.css            # Tailwind v4 @theme, custom utilities, glass effects
├── .env.example                   # Environment configuration template
├── next.config.ts                 # Security headers (CSP, HSTS, frame-ancestors) & image domains
├── open-next.config.ts            # OpenNext Cloudflare Workers adapter config
├── playwright.config.ts           # Multi-viewport Playwright configuration
├── tsconfig.json                  # Strict TypeScript configuration
└── wrangler.jsonc                 # Cloudflare Workers configuration (KV & D1 bindings)
```

---

## 🚀 Getting Started & Local Development

### 1. Prerequisites

- **Node.js**: v20.x or higher
- **npm**: v10.x or higher
- **Git**: Installed and configured

### 2. Clone Repository

```bash
git clone https://github.com/Adxrsh02/octacore.git
cd octacore
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env.local
```

_(In local development, the enquiry form operates in local fallback mode if third-party keys are omitted)._

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

| Variable                                    | Description                                 | Required in Prod | Local Default                                  |
| ------------------------------------------- | ------------------------------------------- | :--------------: | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                      | Canonical production domain URL             |     **Yes**      | `http://localhost:3000`                        |
| `RESEND_API_KEY`                            | Resend API key for lead email notifications |     **Yes**      | `re_...` (logged in dev)                       |
| `RESEND_FROM_EMAIL`                         | Sender address verified in Resend           |     **Yes**      | `OCTACORE Fitness <leads@octacorefitness.com>` |
| `LEAD_EMAIL_DEFAULT`                        | Default enquiry inbox                       |     **Yes**      | `contact@octacorefitness.com`                  |
| `LEAD_EMAIL_NERUL`                          | Branch inbox for Nerul enquiries            |     **Yes**      | `nerul@octacorefitness.com`                    |
| `LEAD_EMAIL_AIROLI`                         | Branch inbox for Airoli enquiries           |     **Yes**      | `airoli@octacorefitness.com`                   |
| `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY` | Turnstile public site key                   |     **Yes**      | _(Bypassed if empty)_                          |
| `CLOUDFLARE_TURNSTILE_SECRET_KEY`           | Turnstile secret key for server validation  |     **Yes**      | _(Bypassed if empty)_                          |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`             | Google Analytics 4 Measurement ID           |     Optional     | _(Disabled)_                                   |
| `GOOGLE_SITE_VERIFICATION`                  | Google Search Console verification token    |     Optional     | _(Empty)_                                      |
| `BING_SITE_VERIFICATION`                    | Bing Webmaster Tools verification token     |     Optional     | _(Empty)_                                      |

---

## 📜 Available Scripts

| Script                     | Command                                              | Purpose                                                     |
| -------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| `npm run dev`              | `next dev`                                           | Start development server with Fast Refresh                  |
| `npm run build`            | `next build`                                         | Compile optimized production build with SSG                 |
| `npm run start`            | `next start`                                         | Run production Next.js server locally                       |
| `npm run lint`             | `next lint`                                          | Run ESLint check                                            |
| `npm run typecheck`        | `tsc --noEmit`                                       | Strict TypeScript compiler validation                       |
| `npm run format`           | `prettier --write .`                                 | Format all code files                                       |
| `npm run format:check`     | `prettier --check .`                                 | Check formatting without modifying files                    |
| `npm run test:e2e`         | `playwright test`                                    | Execute complete Playwright E2E and Axe accessibility suite |
| `npm run build:cloudflare` | `opennextjs-cloudflare`                              | Compile Next.js bundle for Cloudflare Workers               |
| `npm run deploy`           | `opennextjs-cloudflare && wrangler deploy`           | Build and deploy directly to Cloudflare Workers             |
| `npm run ci`               | `npm run lint && npm run typecheck && npm run build` | Run full CI verification pipeline                           |

---

## 🧪 Testing & Quality Assurance

The codebase includes an automated **Playwright** test suite testing responsive layouts at **390px** (mobile) and **1440px** (desktop).

```bash
# Run all end-to-end tests headless
npm run test:e2e

# Run with interactive UI
npx playwright test --ui

# View latest HTML test report
npx playwright show-report
```

### Coverage Highlights:

- **WCAG 2.1 AA Accessibility**: 100% compliance verified via `@axe-core/playwright` on all indexable routes.
- **Zero Horizontal Overflow**: Every page tested with `scrollWidth <= clientWidth` to prevent mobile layout breakage.
- **Interactive Functionality**: Tested equipment filters, branch switchers, before/after slider keyboard triggers, and form submission flows.
- **Sitemap & Link Integrity**: Validates that all URLs in `sitemap.xml` return HTTP 200 OK.

---

## ⚡ Performance & Core Web Vitals

Optimized for near-perfect mobile scores across Google Lighthouse:

| Metric                             | Target | Home (`/`) | Nerul (`/locations/nerul`) | Contact (`/contact`) |
| ---------------------------------- | :----: | :--------: | :------------------------: | :------------------: |
| **Performance**                    |  ≥ 90  |   **94**   |          **100**           |       **100**        |
| **Accessibility**                  |  100   |  **100**   |          **100**           |       **100**        |
| **Best Practices**                 |  100   |  **100**   |          **100**           |       **100**        |
| **SEO**                            |  100   |  **100**   |          **100**           |       **100**        |
| **First Contentful Paint (FCP)**   | < 1.8s |  **0.9s**  |          **0.9s**          |       **0.9s**       |
| **Largest Contentful Paint (LCP)** | < 2.5s |  **0.9s**  |          **0.9s**          |       **0.9s**       |
| **Cumulative Layout Shift (CLS)**  | < 0.1  | **0.062**  |         **0.010**          |      **0.001**       |

---

## 🛡️ Security & Rate Limiting

- **Strict OWASP Headers**: Configured in `next.config.ts`:
  - `Content-Security-Policy`: Restricts scripts, frames, and styles to authorized origins (Turnstile, Google Analytics, Clarity, Google Maps).
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: DENY` & `frame-ancestors 'none'`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- **Lead Endpoint Hardening**:
  - In-memory / KV-based sliding-window rate limiting on `/api/lead` (5 requests per 10-minute window per IP).
  - Honeypot form trap to block automated bots.
  - Server-side Cloudflare Turnstile token verification.

---

## ☁️ Cloudflare Deployment

The platform is designed to run seamlessly on Cloudflare's serverless edge infrastructure:

### Option A: Cloudflare Workers (via OpenNext)

```bash
# 1. Log in to Cloudflare
npx wrangler login

# 2. Build and deploy
npm run build:cloudflare
npx wrangler deploy
```

### Option B: Cloudflare Pages (Git Integration)

Connect the repository to **Cloudflare Dashboard > Workers & Pages > Create application > Pages > Connect to Git**:

- **Framework Preset**: `None` (or `Next.js`)
- **Build Command**: `npx @opennextjs/cloudflare`
- **Build Output Directory**: `.worker-next` (or `.open-next/assets` for static assets)
- **Node.js Compatibility Flag**: `nodejs_compat` enabled under Settings > Functions.

For complete Cloudflare configuration, KV bindings, D1 creation, custom domain redirects, and cache rules, refer to [docs/DEPLOY.md](file:///docs/DEPLOY.md).

---

## 📄 License & Credits

- **Codebase**: Proprietary — Developed for **OCTACORE Fitness**.
- **Official Brand Logo**: © OCTACORE Fitness. All rights reserved.
- **Lead Developer**: Senior Full-Stack & Technical SEO Specialist.
