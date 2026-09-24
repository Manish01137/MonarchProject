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
- **Footer phone numbers are labeled** ("General" / "Study Visa" / "Work Visa & PR") instead of the
  unlabeled duplicate.
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
| **Team photo** | ✅ Real photo `public/teamphoto.jpg` — used in the "Meet The People Behind Your Journey" section. |
| **Home hero banner** | ✅ Real client assets — `public/webistehomepagebanner.jpg` (wide) on desktop, full-bleed with text overlaid on its dark gradient; `public/mobileheroimg.png` (portrait, client-supplied) on mobile/tablet, shown as a clear image band up top (with its own flag chips + "Visa Approved" badge) fading into a solid navy zone that holds the text — same navy/orange/white banner language on both, adapted for the different aspect ratios. |
| Other `public/images/*.jpg` | Unsplash photography (downloaded, Unsplash licence) — country/city shots and service-page heroes. Replace with owned photography when available. |
| **Team page headshots** | Placeholder — `/team` uses Unsplash portraits (`public/team/*.jpg`, one per person, referenced by `TeamMember.photo` in `src/content/team.ts`) standing in for real staff photos. Swap each file for the actual headshot when available; same filenames/aspect ratio, no code change needed. |

✅ Done this round — real client details now wired into `src/content/site.ts`:
- **Phone numbers**: General `+91 70437 39436`, Study Visa `+91 93284 97871`, Work Visa & PR `+91 88498 73912`.
- **Socials**: Instagram, Facebook, YouTube, LinkedIn (their real profile URLs; Pinterest icon/entry removed).
- **Map**: `mapsShareUrl` is the client's exact Google Business Profile link
  (`https://share.google/SW2uF8r1x212Fzj8E`, resolves to Knowledge Graph id `/g/11zfq7sdx1` —
  "Monarch Visa Advisors LLP") — used for every "view on map / get directions" link (footer + contact
  page). `mapEmbedSrc` is a keyless embed matched by business name to that same listing.

Still to swap:
- **Exact street address text** — the resolver could confirm the *listing* but not read out the street
  address (Google blocked the automated fetch). `site.address.line2` still shows the general
  "Ahmedabad, Gujarat, India" — paste the precise street address into `src/content/site.ts` once you
  have it, and consider swapping `mapEmbedSrc` for a Google Maps **Embed API** URL (needs an API key)
  for a guaranteed-exact pin instead of a name-matched search.
- **`hello@monarchvisaadvisors.com`** in `src/content/site.ts` is still a placeholder — confirm the
  real inbox.
- **`src/content/home.ts`** — stats (4.8★, 10,000+, 98%, 25+, 10+ yrs) → confirm each figure is
  substantiated before launch.

University logos in `public/logos/` are the 15 supplied files, wired into the marquee via
`universities[]` in `src/content/home.ts`.

## 4. New: `/team` page

Added per client request — route `src/app/team/page.tsx`, linked from the navbar (desktop + mobile),
the footer "About Us" link, and the home page's "Meet Our Team" button (previously all pointed at
`/contact` or `/#team`). Roster (name, role, photo) lives in `src/content/team.ts`, from the client's
list — see §3 for the photo placeholder note.

## 5. Forms

`LeadForm` and `ContactForm` validate client-side (zod) and currently **`console.info` the payload
then show the success state** — there is no backend. Wire `onSubmit` to your CRM / an API route /
an email service (e.g. a Next.js route handler posting to your provider). Both forms include a
hidden `company` honeypot field that must stay empty.

## 6. Layout notes

- On mobile (< `lg`), the hero-style two-column blocks show **image first, then text**: `PageHero`
  (countries/services-detail/team) and each country section header. Desktop is unchanged (text left,
  image right).
- The home hero is now a dedicated full-bleed banner treatment (see §3) rather than this two-column
  pattern — see `Hero.tsx`.

## 7. Accessibility / motion

- Everything animated respects `prefers-reduced-motion`: scroll-reveal content renders immediately,
  the logo marquee stops, count-up numbers jump to their final value, the route cross-fade is skipped.
- Verified: with reduced motion and **no scrolling**, every section on `/` and `/countries` is fully
  visible (no content gated behind a scroll trigger).

## 8. Known follow-ups

- Run Lighthouse against the deployed URL; images are already `next/image` + lazy below the fold,
  fonts are `next/font` (self-hosted), JS payload is ~170–178 kB first load per route.
- Add real OpenGraph/social share images (`opengraph-image.tsx` per route) once brand assets exist.
- `site.url` in `src/content/site.ts` is set to `https://www.monarchvisaadvisors.com` — update if the
  production domain differs (drives canonical URLs, sitemap, and JSON-LD).
