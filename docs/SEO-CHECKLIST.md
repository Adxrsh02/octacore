# OCTACORE Fitness — Post-Launch SEO & Local Search Playbook

This document details the mandatory post-launch technical and local SEO execution plan for **OCTACORE Fitness** across its **Nerul** and **Airoli** branches in Navi Mumbai.

---

## 1. Google Business Profile (GBP) & Local Dominance

Google Business Profiles are the single highest driver of local map pack rankings for queries like _"gym near me"_, _"gym in Nerul"_, and _"best gym in Airoli"_.

### 1.1 Branch Verification & Canonical NAP

Ensure the Name, Address, and Phone Number (NAP) on both profiles match our codebase exactly:

| Attribute                     | Nerul Branch (Flagship)                                       | Airoli Branch (Corporate Campus)                              |
| ----------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| **Business Name**             | `OCTACORE Fitness, Nerul`                                     | `OCTACORE Fitness, Airoli`                                    |
| **Primary Category**          | `Gym` / `Fitness Center`                                      | `Gym` / `Fitness Center`                                      |
| **Secondary Categories**      | `Health Club`, `Personal Trainer`, `Physical Fitness Program` | `Health Club`, `Personal Trainer`, `Physical Fitness Program` |
| **Street Address**            | Plot No. 781, Sector 1, Shiravane, Near Jain Mandir           | Unit D-1, Reliable Tech Park, Thane-Belapur Road, MIDC Airoli |
| **City, State, PIN**          | Nerul, Navi Mumbai, Maharashtra 400706                        | Airoli, Navi Mumbai, Maharashtra 400708                       |
| **Primary Phone**             | `+91 90698 19090`                                             | `+91 89281 49090`                                             |
| **Website URL**               | `https://octacorefitness.com/locations/nerul`                 | `https://octacorefitness.com/locations/airoli`                |
| **Appointment / Enquiry URL** | `https://octacorefitness.com/locations/nerul#branch-enquiry`  | `https://octacorefitness.com/locations/airoli#branch-enquiry` |

### 1.2 Verification Steps

1. Claim both listings via [Google Business Profile Manager](https://business.google.com/).
2. Request video verification or phone OTP on the respective club hotlines.
3. Once verified, populate official photos:
   - High-resolution club entrance with clear OCTACORE branding
   - 50kg dumbbell rack & Olympic lifting platforms
   - Sled sprint turf
   - Executive showers & locker suites
   - Official logo (matches Cloudinary asset)

### 1.3 Bing Places for Business

1. Go to [Bing Places](https://www.bingplaces.com/).
2. Choose **"Import from Google My Business"** to auto-sync verified details.
3. Review and confirm pin placements on Bing Maps.

---

## 2. Review Generation Strategy (Reception & Floor)

Customer review volume and velocity with keywords (e.g., _"great equipment"_, _"clean gym in Nerul"_, _"personal trainers"_) strongly elevate local search rankings.

### 2.1 Front Desk QR Stands

- Generate dynamic review QR codes linking directly to the Google Review form for each branch:
  - **Nerul**: `https://search.google.com/local/writereview?placeid=[NERUL_PLACE_ID]`
  - **Airoli**: `https://search.google.com/local/writereview?placeid=[AIROLI_PLACE_ID]`
- Place brushed metal acrylic QR stands at:
  1. Front reception check-in desk
  2. Smoothie/supplement bar counter
  3. Exit turnstiles

### 2.2 Review Prompt Cadence

- **Day 14 Automated WhatsApp Prompt**:
  - After a new member completes their first 2 weeks of training, send an automated WhatsApp message:
    > _"Hi [Name]! Hope your training at OCTACORE [Branch] is going strong. Could you take 30 seconds to drop us an honest Google review? It helps fitness enthusiasts like you find us: [Review Link]"_
- **Milestone Celebration**:
  - Prompt members after milestone weigh-ins or personal records (PRs).

---

## 3. High-Authority Local Citations & Directories

Consistent NAP citations across Indian local directories pass essential geo-relevance signals to search engines:

1. **Justdial**:
   - Create separate listings for Nerul and Airoli.
   - Select categories: _Gyms_, _Fitness Centres_, _Personal Fitness Trainers_.
2. **Sulekha**:
   - List under _Gym & Fitness Centres in Navi Mumbai_.
3. **IndiaMART**:
   - Maintain company profile under _Gymnasium Services_.
4. **Fitternity / Cult.fit Directory**:
   - Ensure facilities, timings, and photography are verified.
5. **Apple Maps (Apple Business Connect)**:
   - Claim listings via [businessconnect.apple.com](https://businessconnect.apple.com) for iOS Spotlight and Siri navigation.
6. **Facebook & Instagram Local Check-ins**:
   - Enable location tags on Meta for `@octacorefitness`.

---

## 4. Google Search Console & Bing Webmaster Setup

### 4.1 Ownership Verification

Add verification codes to your production environment variables (e.g. in Vercel / Cloudflare):

```bash
GOOGLE_SITE_VERIFICATION="your_google_site_verification_token"
BING_SITE_VERIFICATION="your_bing_site_verification_token"
```

The site automatically renders `<meta name="google-site-verification" ... />` and `<meta name="msvalidate.01" ... />` into the HTML `<head>`.

### 4.2 Sitemap Submission

1. In Google Search Console, navigate to **Sitemaps**.
2. Submit: `https://octacorefitness.com/sitemap.xml`.
3. Verify that all 12 indexable URLs are discovered without errors:
   - `/`
   - `/locations`
   - `/locations/nerul`
   - `/locations/airoli`
   - `/training`
   - `/facilities`
   - `/membership`
   - `/transformations`
   - `/about`
   - `/contact`
   - `/privacy-policy`
   - `/terms`
4. Confirm that `/dev` routes and `/api` endpoints are NOT indexed.

### 4.3 Robots.txt & AI Bot Crawler Verification

Confirm `https://octacorefitness.com/robots.txt` yields 200 OK and allows:

- `Googlebot`
- `Bingbot`
- `GPTBot` (OpenAI search & answers)
- `ClaudeBot` (Anthropic search)
- `PerplexityBot` (Perplexity AI discovery)
- `Google-Extended` (Gemini search citations)

Confirm `https://octacorefitness.com/llms.txt` is accessible for AI search context.

---

## 5. Schema.org Validation Checklist

Test canonical URLs using the [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/):

- [x] **Home Page (`/`)**:
  - `Organization` (Logo, founding date 2019, socials, contact points)
  - `WebSite` (Canonical URL, publisher reference)
  - `FAQPage` (Core membership questions)
  - `BreadcrumbList` (Level 1)
- [x] **Branch Pages (`/locations/nerul`, `/locations/airoli`)**:
  - `HealthClub` + `LocalBusiness` (NAP, telephone, hours, areaServed, hasMap)
  - _Nerul_: Includes confirmed `GeoCoordinates` (`19.0456267, 73.019493`)
  - _Airoli_: Unconfirmed `GeoCoordinates` strictly omitted to protect search trust
  - `FAQPage` (Branch-specific questions)
  - `BreadcrumbList` (Home > Locations > Branch)
- [x] **Training Page (`/training`)**:
  - `OfferCatalog` / `Service` (Strength, Cardio, Personal Coaching, Mobility)
  - `BreadcrumbList`
- [x] **Facilities Page (`/facilities`)**:
  - `BreadcrumbList`
- [x] **Locations Hub (`/locations`)**:
  - `HealthClub` schemas for both clubs + `BreadcrumbList`

---

## 6. Action Items Blocked on Club Management Data

The following items are flagged for finalization once provided by OCTACORE management:

1. **Airoli GPS Coordinates**:
   - Provide exact latitude and longitude for the Reliable Tech Park entrance to activate `GeoCoordinates` in the Airoli schema.
2. **Coach Profiles & Certifications**:
   - Provide trainer names, ACSM/ACE/K11 certification numbers, and photos to populate Individual `Person` / `trainer` schema.
3. **Exact Place IDs**:
   - Supply the official Google Maps Place ID for Nerul and Airoli to generate exact one-tap review URLs.
4. **Search Console Tokens**:
   - Supply `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` tokens for production deployment.
