# Ishmam Kamal | Analytics Portfolio

**Live site:** https://ishkamal.github.io/ishmamkamal.github.io/
**Repository:** https://github.com/IshKamal/ishmamkamal.github.io

A static, framework-free portfolio site built to `PORTFOLIO_SPEC.md`. Plain HTML5, modern CSS, and a small dependency-free JavaScript file for progressive enhancement (mobile nav, figure lightbox). Core content and navigation work with JavaScript disabled.

See [`OPEN_ITEMS.md`](OPEN_ITEMS.md) for nonblocking decisions and follow-ups recorded during the build.

> **Note on the URL:** this repository is named `ishmamkamal.github.io`, which does not exactly match the account login `IshKamal`. GitHub Pages only serves a repo at the bare root domain (`https://ishkamal.github.io/`) when the repo name is *exactly* `IshKamal.github.io` (case-insensitive). Because the names differ, GitHub instead publishes this as a **project site** at `https://ishkamal.github.io/ishmamkamal.github.io/`. Every internal link in this site is relative and already works correctly at that path. If you want the bare root URL instead, rename this repository to `IshKamal.github.io` in GitHub Settings, then update the absolute URLs noted below (canonical tags, `og:url`/`og:image`, `sitemap.xml`, `robots.txt`, and the hardcoded link in `404.html`).

## Structure

```
index.html                              Homepage / web résumé
404.html                                Branded not-found page (self-contained CSS)
projects/
  hr-training-analytics.html            Professional case study: CalOptima Health
  education-accountability-analytics.html  Professional case study: Riverside County Office of Education
  ai-news-sentiment.html                Graduate case study
  fraud-detection.html                  Graduate case study
assets/
  css/styles.css                        Shared design system
  js/main.js                            Nav toggle, lightbox, footer year (progressive enhancement)
  docs/Ishmam-Kamal-Resume.pdf          Downloadable résumé (copied from Sources, current version)
  images/professional/caloptima/...     Verified CalOptima Health dashboard/survey visuals
  images/professional/rcoe/...          Verified RCOE dashboard visuals
  images/projects/...                   Verified graduate-project charts
  images/social/                        Favicon + social preview
robots.txt
```

Homepage section order: Hero → Quantified Impact → **Professional Analytics Work** (`#professional-work`) → **Graduate Projects** (`#graduate-projects`) → Experience → Skills → Education → Contact. Both project categories are reachable from the main nav and from every case-study page's own nav.

## Local preview

No build step. Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Publish to GitHub Pages: exact steps

This repository has already been initialized, connected to `https://github.com/IshKamal/ishmamkamal.github.io.git`, and pushed to `main`. Only the GitHub Pages source setting is a manual step:

1. Go to the repo on GitHub: Settings → Pages.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and folder `/ (root)`, then Save.
4. Wait for the first deploy (usually under a minute), then open `https://ishkamal.github.io/ishmamkamal.github.io/`.
5. Verify on the live URL (not just local files): every nav link, all four case-study pages (2 professional, 2 graduate), the résumé download, `404.html` on a broken path, and image loading.

Canonical `<link>` tags, `og:url`/`og:image`, `sitemap.xml`, and `robots.txt` already point to the real project-site URL above. If the repository is later renamed to `IshKamal.github.io` for root hosting, update all of those to drop the `/ishmamkamal.github.io` path segment, and change the `404.html` "Back to homepage" link from `/ishmamkamal.github.io/` to `/`.

## What to re-check after every résumé update

- `assets/docs/Ishmam-Kamal-Resume.pdf`: replace with the new PDF, keep the same filename.
- Homepage hero, impact strip, experience, skills, education: update text to match.
- The "Present" end date on Imperial Health Plan: update once that role changes.
