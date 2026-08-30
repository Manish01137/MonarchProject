# Monarch Visa Advisors — Website

Marketing site for Monarch Visa Advisors (study-abroad & immigration consultancy).

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **Framer Motion** — scroll reveals, marquee, page cross-fade, `prefers-reduced-motion` aware
- **react-hook-form + zod** — form validation, honeypot spam trap
- **lucide-react** — icons
- **flag-icons** — country flags

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
npm run typecheck
```

Deploy target: **Vercel** (zero config).

## Routes

| Route | Notes |
| --- | --- |
| `/` | Home — pixel target is the design system in `PROJECT_BRIEF` §2 (no comp file was supplied; see `BUILD_NOTES.md`) |
| `/countries` | **Single page.** All destinations are stacked sections with `id="canada"` … `id="dubai"`, a sticky scroll-spy jump-tab bar, and per-section `Service` JSON-LD |
| `/services` | Services index (5 summary cards) |
| `/services/[slug]` | One page per service — `student-visa`, `university-admissions`, `work-permit-pr`, `documentation-visa-filing`, `test-preparation` |
| `/contact` | Contact form + info card + map embed + secondary assessment form |
| `/sitemap.xml`, `/robots.txt` | Generated from `src/app/sitemap.ts` / `robots.ts` |

## Project layout

```
src/
  app/            route segments, layout, template (route transition), sitemap, robots, not-found
  components/
    layout/       Navbar, Footer, MonarchLogo, Providers (MotionConfig)
    ui/           Button, Section, SectionHeading, Reveal, CountUp, Chip, Icon, SocialIcon
    common/       PageHero, DestinationCard, IconCard, CtaBanner   (reused across pages)
    home/         Hero, StatBar, DestinationGrid, RoadmapSteps, JourneyBanner, UniversitySection, TeamSection
    countries/    CountriesView (scroll-spy), CountrySectionBlock
    services/     ServiceGrid
    forms/        LeadForm (6-step), ContactForm
  content/        site.ts, countries.ts, services.ts, home.ts  ← all copy lives here
  lib/            motion presets, useReveal hook, jsonld helpers, cn
public/
  images/         Unsplash photography (placeholders — see BUILD_NOTES.md)
  logos/          15 university logos (supplied)
  logo.svg        placeholder Monarch lockup
```

## Editing content

All page copy is data in `src/content/*`. Add a country by appending to `countries[]` in
`src/content/countries.ts` (it flows into the page, nav dropdown, sitemap and schema automatically).
Same for services in `src/content/services.ts`.

See **`BUILD_NOTES.md`** for placeholder assets, pending copy, and items flagged for client review.
# MonarchProject
