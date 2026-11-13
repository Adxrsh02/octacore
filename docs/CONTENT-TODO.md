# OCTACORE Fitness — Client Content & Data Completion Checklist

This document catalogs every placeholder, unconfirmed data point, and asset requirement in the OCTACORE Fitness codebase that requires real owner verification before formal production launch.

---

## 1. Branch Operational Details & Contacts

### Nerul Branch (Flagship Hub)

- [x] **Full Address**: Plot No. 781, Sector 1, Shiravane, Near Jain Mandir, Nerul, Navi Mumbai 400706. _(Confirmed)_
- [x] **Primary Hotline**: `+91 90698 19090` _(Confirmed)_
- [x] **Geo-Coordinates**: `19.0456267, 73.019493` _(Confirmed)_
- [ ] **Operating Hours Confirmation**:
  - Current in codebase: _Mon – Sat: 6:00 AM – 11:00 PM; Sun: 7:00 AM – 11:00 AM_.
  - _Action_: Confirm whether Sunday hours or public holiday hours differ.
- [ ] **Google Business Profile Place ID**:
  - Current: Generic search maps link.
  - _Action_: Provide official Google Place ID to enable one-tap review cards at the front desk.
- [ ] **Designated Desk Email Address**:
  - Current fallback: `nerul@octacorefitness.com`.
  - _Action_: Confirm recipient email inbox for leads generated at the Nerul branch.

### Airoli Branch (Corporate & High-Performance Campus)

- [x] **Full Address**: Unit D-1, South Block, Empire, Reliable Tech Park, Thane–Belapur Road, Gavate Wadi, MIDC, Airoli, Navi Mumbai 400708. _(Confirmed)_
- [x] **Primary Hotline**: `+91 89281 49090` _(Confirmed)_
- [ ] **GPS Geo-Coordinates**:
  - Current: `isConfirmed: false` (Schema `geo` property is intentionally omitted to avoid guessing).
  - _Action_: Confirm exact latitude and longitude for the Reliable Tech Park entrance.
- [ ] **Operating Hours Confirmation**:
  - Current in codebase: _Mon – Sat: 6:00 AM – 11:00 PM; Sun: Closed (Rest)_.
  - _Action_: Confirm if Sunday is strictly closed or open for half-day personal training.
- [ ] **Google Business Profile Place ID**:
  - _Action_: Provide official Google Place ID for Airoli.
- [ ] **Designated Desk Email Address**:
  - Current fallback: `airoli@octacorefitness.com`.
  - _Action_: Confirm recipient email inbox for leads generated at the Airoli branch.

---

## 2. Membership Pricing & Tier Specifics

> **Policy Note**: In accordance with project instructions, no prices have been invented. All membership tiers display _"Price on enquiry"_ or _"Custom rate upon consultation"_.

If management decides to publicly list starting package rates, update `src/content/memberships.ts`:

- [ ] **Monthly Intake Pass**: Provide official monthly fee (INR) or confirm "Price on enquiry".
- [ ] **Quarterly Protocol (90 Days)**: Provide official quarterly fee (INR).
- [ ] **Annual Elite Pass (365 Days)**: Provide official annual rate (INR) and promotional discount percentage.
- [ ] **Corporate Wellness Plans**: Specify tier minimums (e.g., minimum 5 or 10 corporate badges for Reliable Tech Park / Mindspace employees).
- [ ] **Admission / Registration Fee**: Confirm if a one-time onboarding / biometric screening fee applies.

---

## 3. Certified Trainers & Coaching Staff

> **Policy Note**: No fictional coach names or fabricated qualifications have been created. Placeholder profiles currently read _"Certified Floor Coach"_ and highlight verified credentials.

To display individual coach profiles and generate `Person` / `trainer` schema markup:

- [ ] **Head Coach / Performance Director (Nerul)**:
  - Name, high-resolution portrait photograph, biography, certifications (e.g. K11, ACSM, ACE, CSCS), specialties.
- [ ] **Head Coach / Corporate Conditioning Director (Airoli)**:
  - Name, high-resolution portrait photograph, biography, certifications, corporate mobility focus.
- [ ] **Floor Coaches & Nutrition Specialists**:
  - Verified roster of trainers with formal credentials.

---

## 4. Photography & Visual Assets

- [x] **Official Logo**: Cloudinary high-resolution master asset (`https://res.cloudinary.com/lta722n4/image/upload/v1794503018/Octacore_Fitness_Logo.jpg`) integrated across all navigation, footer, schema, and mobile components.
- [ ] **Facility Photography (Nerul)**:
  - Replace temporary stock/render imagery with real professional photos of the 5,000 sq.ft facility:
    - 50kg dumbbell rack
    - Olympic power cages and deadlift platforms
    - Sled sprint turf
    - Reception desk and branding wall
- [ ] **Facility Photography (Airoli)**:
  - Professional photos of the Reliable Tech Park gym floor:
    - Biomechanical selectorized line
    - Assault runners and cardiovascular deck
    - Executive shower suites and RFID locker rooms

---

## 5. Member Testimonials & Transformation Consents

- [ ] **Written Consent for Transformations**:
  - Confirm written media release consent for any member photos featured in the before/after progression module.
- [ ] **Real Testimonial Quotes**:
  - Provide 4–6 authentic member reviews with first name and branch affiliation (e.g. _"Pooja K., Airoli Member"_).

---

## 6. Integrations & Third-Party Service Credentials

- [ ] **Resend API Key**: Provide production `RESEND_API_KEY` (`re_...`) with domain verification for `octacorefitness.com`.
- [ ] **Cloudflare Turnstile**: Create widget in Cloudflare dashboard and supply:
  - `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY`
  - `CLOUDFLARE_TURNSTILE_SECRET_KEY`
- [ ] **Google Analytics 4**: Provide `NEXT_PUBLIC_GA_ID` (`G-XXXXXXXXXX`).
- [ ] **Microsoft Clarity**: Provide `NEXT_PUBLIC_CLARITY_ID`.
- [ ] **Search Console Verification**: Provide `GOOGLE_SITE_VERIFICATION` token.
- [ ] **Bing Webmaster Verification**: Provide `BING_SITE_VERIFICATION` token.
