# Gurusthetics — Next.js + Tailwind rebuild

A rebuild of gurusthetics.com as a modern, fast, maintainable frontend.
Every page from the live site is a real, separate route — not one giant
scrolling template.

## Pages included

| Page              | Route                        |
|-------------------|-------------------------------|
| Home              | `/`                            |
| About             | `/about`                       |
| Weight Loss       | `/programs/weight-loss`        |
| Muscle Building   | `/programs/muscle-building`    |
| Powerlifting      | `/programs/powerlifting`       |
| Mobility          | `/programs/mobility`           |
| Blogs             | `/blogs`                       |
| Shop              | `/shop`                        |

All program pages share one template (`components/ProgramPageTemplate.tsx`)
but render as fully separate URLs — so the "Weight Loss" page finally lives
at a clean `/programs/weight-loss` instead of the old `/home-new-2-2-2-2/`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first build/dev run
so Next.js can fetch the Google Fonts (Anton for headlines, Inter for body).

To build for production:

```bash
npm run build
npm start
```

## What changed vs. the old WordPress/Elementor site

- **Real routing** — every page is a proper Next.js route with its own
  metadata (title/description), instead of Elementor templates glued
  together with shortcodes.
- **One content source** — `lib/data.ts` holds every piece of copy, stat,
  testimonial, transformation photo and FAQ. Update the business once,
  every page that uses it updates automatically (previously the About
  bio and bullet list were duplicated by hand on Home and About).
- **Working stats** — the "0 K+ Followers" counters are now real animated
  count-ups driven by data (`components/StatsBar.tsx`), and they render a
  real number even before the animation fires.
- **Optimized images** — all photos go through `next/image`, which handles
  responsive sizing, lazy-loading, and modern formats automatically instead
  of shipping full-resolution WordPress uploads on every page.
- **One WhatsApp config value** — `site.whatsappNumber` in `lib/data.ts`
  instead of the number being hardcoded into 15+ different links.
- **Real design system** — a dark "iron & ember" palette (see
  `tailwind.config.ts`) with a condensed athletic display face, rather than
  default Elementor theme styling. Colors, type and spacing are tokens, so
  restyling the whole site means editing one file.
- **Accessible by default** — visible focus states, semantic headings,
  alt text on every image, `prefers-reduced-motion` respected.

## Updating content

Open `lib/data.ts`:
- `stats` — the four homepage counters
- `programs` — the full copy for each of the 4 program pages (headline,
  benefits, who-should-join, FAQs, testimonials)
- `transformations` — client transformation photos, shown on Home and
  filtered by category on each program page
- `blogPosts`, `shopProducts` — placeholder content for those two pages;
  replace with your real posts/packages (or wire up a CMS later)

## Notes / next steps

- Blog and Shop pages currently use placeholder content (the live site's
  `/blogs/` and `/shop/` pages weren't scraped in detail) — swap in real
  posts and packages in `lib/data.ts`, or connect a CMS/commerce backend
  if you want dynamic content instead of static data.
- Images currently reference `gurusthetics.com/wp-content/uploads/...` URLs
  directly so the site looks right immediately — for full independence from
  WordPress, download these into `/public` and update the paths.
- No `/privacy-policy` page was rebuilt (it wasn't part of this request) —
  add `app/privacy-policy/page.tsx` when you're ready to port that content.
