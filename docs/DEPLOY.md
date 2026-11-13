# OCTACORE Fitness — Cloudflare Deployment & Operations Manual

This guide outlines the end-to-end architecture, environment configuration, Cloudflare Workers deployment via OpenNext, caching rules, and post-launch verification for **OCTACORE Fitness**.

---

## 1. Cloudflare Workers + OpenNext Architecture

OCTACORE Fitness is engineered as a modern Next.js 15 App Router application optimized for edge execution via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

```
                      [ Client Request ]
                              │
                    Cloudflare Edge Network
                   (Anycast DNS + WAF + SSL)
                              │
            ┌─────────────────┴─────────────────┐
            │                                   │
      Static Assets                       Server Routes
  (Cache Rules / CDN)                 (Cloudflare Worker)
  - /_next/static/*                   - /api/lead (Zod + Turnstile)
  - /images/*                         - SSR Dynamic Pages
  - /fonts/*                          - Dynamic OG Images (Edge)
  - /favicon.ico / robots.txt                 │
                                      ┌───────┴───────┐
                                      ▼               ▼
                              Cloudflare KV      Cloudflare D1
                            (Leads Namespace)   (Relational DB)
```

---

## 2. Prerequisites & Cloudflare Resources

Before deploying, ensure you have access to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and create the following resources:

### 2.1 KV Namespace for Lead Backup

```bash
# Create production KV namespace
npx wrangler kv namespace create OCTACORE_LEADS_KV

# Create preview KV namespace
npx wrangler kv namespace create OCTACORE_LEADS_KV --preview
```

_Note the returned namespace IDs and update them in `wrangler.jsonc`._

### 2.2 D1 Database (Optional Relational Backup)

```bash
# Create D1 database
npx wrangler d1 create octacore-db
```

_Update `database_id` in `wrangler.jsonc`._

---

## 3. Environment Variables & Secrets Inventory

Set these variables in the Cloudflare Dashboard under **Workers & Pages > octacore-fitness > Settings > Variables & Secrets** (or via `wrangler secret put <KEY>`):

| Variable / Secret                           | Type       | Description                        | Production Example                             |
| ------------------------------------------- | ---------- | ---------------------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                      | Plaintext  | Canonical site URL                 | `https://octacorefitness.com`                  |
| `NEXT_PUBLIC_SITE_NAME`                     | Plaintext  | Brand name                         | `OCTACORE Fitness`                             |
| `LEAD_EMAIL_NERUL`                          | Plaintext  | Recipient for Nerul enquiries      | `nerul@octacorefitness.com`                    |
| `LEAD_EMAIL_AIROLI`                         | Plaintext  | Recipient for Airoli enquiries     | `airoli@octacorefitness.com`                   |
| `RESEND_FROM_EMAIL`                         | Plaintext  | Verified sender address in Resend  | `OCTACORE Fitness <leads@octacorefitness.com>` |
| `RESEND_API_KEY`                            | **Secret** | Resend email API key (`re_...`)    | `re_123456789...`                              |
| `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY` | Plaintext  | Turnstile site key for bot defense | `0x4AAAAAA...`                                 |
| `CLOUDFLARE_TURNSTILE_SECRET_KEY`           | **Secret** | Turnstile server secret key        | `0x4AAAAAA...`                                 |
| `GOOGLE_SITE_VERIFICATION`                  | Plaintext  | Search Console verification token  | `abc123xyz...`                                 |
| `BING_SITE_VERIFICATION`                    | Plaintext  | Bing Webmaster verification token  | `1234567890ABCDEF...`                          |
| `NEXT_PUBLIC_GA_ID`                         | Plaintext  | Google Analytics 4 Measurement ID  | `G-XXXXXXXXXX`                                 |
| `NEXT_PUBLIC_CLARITY_ID`                    | Plaintext  | Microsoft Clarity Project ID       | `xxxxxxxxxx`                                   |

---

## 4. Local Build & Preview Testing

```bash
# 1. Run typecheck and lint
npm run typecheck
npm run lint

# 2. Build Next.js application
npm run build

# 3. Compile for Cloudflare via OpenNext
npm run build:cloudflare

# 4. Preview locally using Wrangler local runtime
npx wrangler dev
```

---

## 5. Domain, DNS & Canonical Host Routing

To prevent duplicate content penalties and ensure a single canonical host:

1. **Apex to WWW or WWW to Apex Canonicalization**:
   - In Cloudflare Dashboard, navigate to **Rules > Redirect Rules**.
   - Create Rule: **Canonical Host Redirect**
     - When incoming request matches `Hostname equals www.octacorefitness.com`:
     - Redirect to: `https://octacorefitness.com${request.uri.path}` (Status Code: `301 Moved Permanently`).
2. **Automatic HTTPS & HSTS**:
   - Navigate to **SSL/TLS > Edge Certificates**.
   - Turn **Always Use HTTPS** to `On`.
   - Enable **HTTP Strict Transport Security (HSTS)**:
     - Max-Age: `12 months (31536000 seconds)`
     - Include Subdomains: `Enabled`
     - Preload: `Enabled`
3. **Minimum TLS Version**:
   - Set to `TLS 1.2` or `TLS 1.3`.

---

## 6. Cloudflare Caching Rules for Static Assets

Configure cache rules under **Caching > Cache Rules** in Cloudflare to optimize performance and eliminate origin egress:

### Rule 1: Next.js Static Chunks & Hashed Assets

- **Expression**: `(http.request.uri.path matches "^/_next/static/.*")`
- **Cache Eligibility**: `Eligible for cache`
- **Edge Cache TTL**: `Override origin > 1 year (31536000 seconds)`
- **Browser Cache TTL**: `Override origin > 1 year`

### Rule 2: Next.js Public Media & Images

- **Expression**: `(http.request.uri.path matches "^/images/.*" or http.request.uri.path matches "^/fonts/.*" or http.request.uri.path eq "/favicon.ico")`
- **Edge Cache TTL**: `Override origin > 30 days`
- **Browser Cache TTL**: `Override origin > 30 days`

### Rule 3: Sitemap, Robots & LLMs.txt

- **Expression**: `(http.request.uri.path in {"/sitemap.xml" "/robots.txt" "/llms.txt"})`
- **Edge Cache TTL**: `Override origin > 1 day`

---

## 7. GitHub Actions CI/CD Deployment

The repository includes [`.github/workflows/ci.yml`](../.github/workflows/ci.yml). To enable automatic production deployments on `git push main`:

1. In GitHub Repository Settings, navigate to **Secrets and variables > Actions**.
2. Add repository secrets:
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API token with `Workers:Edit` and `D1:Edit` permissions.
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID found in the dashboard URL or Worker overview.
3. Every commit to `main` executes:
   - Code formatting validation (`prettier --check`)
   - ESLint validation
   - TypeScript strict compilation (`tsc --noEmit`)
   - Production Next.js build
   - Playwright end-to-end tests (Mobile 390px + Desktop 1440px)
   - OpenNext Cloudflare bundle compilation
   - Wrangler deployment to Cloudflare edge

---

## 8. Post-Launch Verification Checklist

- [ ] `https://octacorefitness.com` loads over HTTPS with A+ SSL rating.
- [ ] `http://octacorefitness.com` and `https://www.octacorefitness.com` issue 301 redirects to `https://octacorefitness.com`.
- [ ] Security headers confirmed via `curl -I https://octacorefitness.com`:
  - `Content-Security-Policy` present and free of syntax errors.
  - `X-Content-Type-Options: nosniff`.
  - `Referrer-Policy: strict-origin-when-cross-origin`.
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
  - `Strict-Transport-Security` present.
- [ ] Test form submission on `/contact` with real test enquiry:
  - Lead stored in `.data/leads.json` (or KV/D1).
  - Notification email delivered via Resend.
  - WhatsApp redirect triggers with prefilled reference text.
- [ ] Google Search Console sitemap submitted: `https://octacorefitness.com/sitemap.xml`.
- [ ] `https://octacorefitness.com/llms.txt` responds with 200 OK.
