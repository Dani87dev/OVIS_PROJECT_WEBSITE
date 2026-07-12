# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static website for **OVIS** (*Origins of Variability in Island Systems*), a Marie Skłodowska-Curie Actions research project at Cardiff University. Pure HTML5 + CSS3 + vanilla JS — no frameworks, no build tools, no package manager, no bundler.

Live at http://www.ovisproject.com. Hosted on Netlify, deployed automatically on push to `main`. Custom domain via `CNAME` file, DNS managed through Namecheap.

## Commands

There is no build step, package manager, or test suite. To preview locally, just open the HTML files in a browser, or serve the directory with any static file server (e.g. `npx serve` or `python -m http.server`) since some features (fetch to Nominatim for the map) behave more reliably over `http://` than `file://`.

## Architecture

**Multi-page, shared-asset structure.** Every page (`index.html`, `ovis.html`, `arqueo.html`, `institutions.html`, `contact.html`) is a standalone HTML file that includes the same `style.css` and `script.js`. There is no templating — the navbar, mobile menu, and footer markup is duplicated across every page. When changing shared UI (nav links, footer, language switcher), edit it in **every** HTML file.

**Client-side i18n, no dependencies.** All UI strings live in the `i18n` object at the top of `script.js` (`en`, `ca`, `es`, `it`), keyed by dotted string IDs (e.g. `"project.q1"`). HTML elements opt into translation via `data-i18n="key"`. `applyLang(lang)` swaps `textContent` for every `[data-i18n]` element (or `innerHTML` if the key ends in `.title` and contains an `<em>`, to preserve inline emphasis in news titles). Adding a new translatable string requires: adding the key to all four language blocks in `script.js`, and adding `data-i18n="key"` to the corresponding element in the HTML — in every page that uses it.

**`script.js` is one file with several independent IIFEs**, each guarding on the presence of its target element (e.g. `if (!mapEl) return`) so the same script can be safely included on every page regardless of which sections that page has:
- Language switcher / `applyLang`
- Navbar scroll shadow, hamburger mobile menu, active-nav-link detection (matches current pathname against link `href`s)
- Bibliography category filters (`.bib-filter` / `.bib-entry`, used on the OVIS page)
- Scroll progress bar, scroll-reveal via `IntersectionObserver`, animated stat counters (`data-count` / `data-suffix`)
- Parallax hero background
- Leaflet map (`index.html` only): renders Menorca/Mallorca/Sardinia, fetches real island outlines live from the Nominatim OSM API per page load, and auto-cycles through sites with `setTimeout` until the user interacts (click on a polygon or site card sets `userInteracted = true` and stops the cycle)

**Styling.** All CSS lives in `style.css`, organized around CSS custom properties defined in `:root` (olive/cream palette, font stacks, spacing tokens like `--nav-h`, `--section-pad`, `--inner-max`). Reuse these variables rather than hardcoding colors/spacing. Responsive breakpoints are handled with media queries further down the same file (mobile nav collapses into `.hamburger` / `.mobile-menu` below the tablet breakpoint).

## Conventions

- Fonts: Cormorant Garamond (serif, headings) + DM Sans (sans, body), loaded from Google Fonts.
- Images sourced from Unsplash (free license) plus project-owned assets in `img/`.
- Accessibility has been an active focus in recent history (reduced-motion support, keyboard focus indicators, `aria-expanded` on the mobile menu toggle, landmark elements) — preserve these when touching nav/motion-related code.
- The `diagramas/` directory (architecture diagrams) is gitignored and not part of the deployed site.
