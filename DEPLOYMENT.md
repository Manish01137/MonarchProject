# Deploying to Hostinger (zip upload)

The site is configured to build as a **static export** — plain HTML/CSS/JS files with no
Node.js server required. That's what makes the "upload a zip" workflow possible on Hostinger
shared hosting. This file explains what that means, how to do the first upload, and how to
re-deploy whenever the content changes.

## 0. Before you upload anything — two things to fix first

1. **The contact forms don't send anywhere yet.** The "Get Free Profile Assessment" multi-step
   form and the Contact page form are fully built and validate correctly, but on a static host
   there's no server to receive the submission — right now they just show the success message
   without actually sending an email or saving a lead anywhere. **Don't go live until this is
   wired to something**, e.g.:
   - [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — paste-in endpoint,
     no backend code needed, free tier is enough for a lead-gen contact form.
   - Hostinger's own email, via a small PHP mail script if your plan supports PHP.
   - A serverless function (Vercel/Cloudflare Workers) if you want to keep building this with me.
   Tell me which you'd like and I'll wire it into `LeadForm.tsx` and `ContactForm.tsx`.
2. **Confirm your real domain.** `src/content/site.ts` has `url: "https://www.monarchvisaadvisors.com"`
   — this drives canonical links, the sitemap, and the SEO schema. If the domain you're pointing
   at Hostinger is different (e.g. `monarchvisa.com`, matching the new email), tell me and I'll
   update it before the next build — this must be right before launch, not after.

## 1. Already done for you

- `next.config.mjs` is set to `output: "export"` — every `npm run build` writes a complete static
  site to `out/`, no extra `next export` step needed (that command doesn't exist as of Next 14).
- `trailingSlash: true` — pages export as `countries/index.html` etc., which plain Apache/LiteSpeed
  (what Hostinger shared hosting runs) serves correctly from a folder URL with zero config.
- `images.unoptimized: true` — Next's on-the-fly image resizing needs a Node server, which a static
  host doesn't have; every image in this project is already a locally hosted, pre-sized file, so
  there's no visible quality loss.
- `public/.htaccess` — copied into every export automatically. It sets the custom 404 page, forces
  HTTPS, enables compression and browser caching for images/CSS/JS, and adds basic security headers.
- **I've already built and zipped the current site**: `monarch-visa-website.zip` in the project
  root (682 files, ~8.7MB), ready to upload as-is for this first deployment.

## 2. First upload (using the zip I've already built)

1. Log into **hPanel** → your hosting plan → **Files → File Manager** (or use an FTP client with
   the credentials under **Files → FTP Accounts** — either works).
2. Navigate to `public_html` (this is the web root for your primary domain; if you're deploying to
   an addon domain or subdomain, navigate to *that* domain's folder instead — check **Domains** in
   hPanel if unsure).
3. **Important:** if `public_html` has Hostinger's default placeholder files in it, delete those
   first (back them up if you're not sure).
4. Upload `monarch-visa-website.zip` into `public_html` (File Manager has an **Upload** button;
   drag-and-drop works too).
5. Right-click the uploaded zip in File Manager → **Extract**. Extract it *into* `public_html`
   itself, not into a new subfolder — the zip's contents (`index.html`, `countries/`, `images/`,
   `.htaccess`, etc.) need to sit directly inside `public_html`.
6. Delete the zip file from `public_html` afterwards (keep your local copy) — no need to serve it.
7. In hPanel, go to **Security → SSL** and make sure SSL is issued and active for the domain (Hostinger
   provisions a free one automatically on most plans; it can take a few minutes the first time).
8. Visit your domain. You should see the homepage. Click through Countries, Services, Team, Contact
   to confirm navigation and images all load, and check on a phone too.

## 3. Re-deploying after a content change

Whenever I make a change to the site, do this to push it live:

1. In the project folder, run:
   ```
   npm run build
   ```
   This regenerates `out/` with the latest content.
2. Zip the **contents** of `out/` (not the `out` folder itself — the files need to be at the top
   level of the zip, exactly like the first upload):
   ```
   cd out && zip -r ../monarch-visa-website.zip . -x ".DS_Store" && cd ..
   ```
   (On Mac, selecting all files *inside* `out/` in Finder and choosing "Compress" from the right-click
   menu works too — just make sure you select the files inside the folder, not the folder itself.)
3. In hPanel File Manager, delete the old site files in `public_html` (or just overwrite — extracting
   a new zip on top will replace files with the same name) and repeat steps 4–6 from above with the
   new zip.

There's no database and no server process to restart — it's just files, so this is the entire
process every time.

## 4. Things that do *not* work on this kind of static hosting

Worth knowing so nothing surprises you later:

- **Form submissions** — covered in §0, needs a third-party endpoint or backend.
- **On-demand image optimization** — images are served as the fixed files already in `public/`,
  not resized per-device by a server. They're already compressed reasonably; if you add new, very
  large images later, resize them before adding (I can do this for you as before).
- **Any future server-side feature** (login, a database, server-generated content) would need
  actual Node.js hosting (a Hostinger VPS/Cloud plan, or Vercel) instead of shared hosting — the
  current site doesn't use any of these, so this only matters if requirements change later.

## 5. Quick local sanity check (optional, before uploading)

If you want to preview exactly what will be live before uploading, from the project folder:

```
npm run build
npx serve out
```

This serves the exact static files that go to Hostinger, on `http://localhost:3000` (or whatever
port it prints) — a true preview, not the dev server.
