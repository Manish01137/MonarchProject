# Build Notes — for client review

## 1. Items flagged in the brief

### Duplicate 6-step process (brief §6.1)
The home page shows the process twice, as the approved mockup specifies:
- **"More Than Visa Assistance. We Build Your Roadmap."** — 6 numbered cards (`RoadmapSteps`)
- **"From Dream → Destination"** — 6 connected icon nodes on the dark banner (`JourneyBanner`)

**Recommendation:** these communicate the same journey. Consider keeping the numbered-card version
(more descriptive) and repurposing the dark banner as a single CTA break without repeating the steps.
Both are built and easy to trim once decided.

### Single `/countries` page — SEO trade-off (brief §6.2)
All destinations live on one URL. Mitigations implemented:
- Each destination is a `<section>` with a strong `<h2>` and a stable `id` (`/countries#canada`).
- Per-destination `Service` JSON-LD is emitted on the page (one block per country).
- Anchor URLs are in `sitemap.xml` and linked from the navbar dropdown + homepage cards.

**Still true:** no individual country gets its own indexable `<title>`/meta. If "Canada study visa
consultant" style search traffic matters, split Canada/UK/USA into `/countries/[slug]` routes later —
the `CountrySectionBlock` component is already route-agnostic and can be dropped onto a dedicated page.

### Fixes applied vs. mockup
- **Footer phone numbers are labeled** ("Counselling" / "Support") instead of the unlabeled duplicate.
- **"Countries"** spelling is used everywhere (mockup had "Counties").

## 2. Pending final copy

`Australia`, `Germany`, `Dubai` sections on `/countries` use **placeholder copy** written in the same
structure/tone as the approved Canada/UK/USA text. Every placeholder string is prefixed
`[Pending final content]` / `[Pending]` and the section shows a maroon "Content pending client sign-off"
chip. Replace the values in `src/content/countries.ts` (fields: `intro`, `services[].description`,
`whyChoose`, `closing`) and remove `pending: true`.

The 25+ destinations claim in the stat bar is aspirational marketing copy — add more entries to
`countries[]` as real content lands.

## 3. Brand assets — status

| Asset | Status |
| --- | --- |
| **Logo** | ✅ Real logo wired — `public/monarch-logo.png`, rendered by `MonarchLogo.tsx` in navbar, footer (on a white plate for contrast on navy) and mobile drawer. |
| **Colours** | ✅ Retuned to the logo: navy stays the dark base, **coral-orange `#E44E29`** is the primary CTA/link/accent (Tailwind `brand`), **maroon `#8A2A43`** replaces the old gold on dark banners/CTAs (Tailwind `maroon`). Tokens in `tailwind.config.ts`. |
| **Favicon** (`src/app/icon.svg`) | Coded orange/maroon mark — swap for the official favicon if you have one. |
| **Team photo** | ✅ Real photo `public/teamphoto.jpg` — used in the **home hero** (right side, with the flag chips + "Visa Approved" badge over it) **and** the "Meet The People Behind Your Journey" section. Same image appears twice; supply a second photo if you'd like them different. |
| Other `public/images/*.jpg` | Unsplash photography (downloaded, Unsplash licence) — country/city shots and service-page heroes. Replace with owned photography when available. |

Still to swap:
- **Contact page map** — `mapEmbedSrc` in `src/content/site.ts` is a keyless
  `google.com/maps?q=…&output=embed` URL. Replace with a Google Maps Embed API URL pinned to the
  exact office address (needs a Maps Embed API key).
- **`src/content/site.ts`** — placeholder phone numbers (`+91 90000 00000`), email, exact address,
  social URLs → real details.
- **`src/content/home.ts`** — stats (4.8★, 10,000+, 98%, 25+, 10+ yrs) → confirm each figure is
  substantiated before launch.

University logos in `public/logos/` are the 15 supplied files, wired into the marquee via
`universities[]` in `src/content/home.ts`.

## 4. Forms

`LeadForm` and `ContactForm` validate client-side (zod) and currently **`console.info` the payload
then show the success state** — there is no backend. Wire `onSubmit` to your CRM / an API route /
an email service (e.g. a Next.js route handler posting to your provider). Both forms include a
hidden `company` honeypot field that must stay empty.

## 5. Layout notes

- On mobile (< `lg`), the hero-style two-column blocks show **image first, then text**: home hero,
  `PageHero` (countries/services-detail), and each country section header. Desktop is unchanged
  (text left, image right).

## 6. Accessibility / motion

- Everything animated respects `prefers-reduced-motion`: scroll-reveal content renders immediately,
  the logo marquee stops, count-up numbers jump to their final value, the route cross-fade is skipped.
- Verified: with reduced motion and **no scrolling**, every section on `/` and `/countries` is fully
  visible (no content gated behind a scroll trigger).

## 7. Known follow-ups

- Run Lighthouse against the deployed URL; images are already `next/image` + lazy below the fold,
  fonts are `next/font` (self-hosted), JS payload is ~170–178 kB first load per route.
- Add real OpenGraph/social share images (`opengraph-image.tsx` per route) once brand assets exist.
- `site.url` in `src/content/site.ts` is set to `https://www.monarchvisaadvisors.com` — update if the
  production domain differs (drives canonical URLs, sitemap, and JSON-LD).
