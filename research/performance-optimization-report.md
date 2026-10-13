# Dimple Khinchi Website — Performance Optimization & Rendering Audit Report

**Project:** `D:/Projects/Demos/MakeUp Artist/`  
**Date:** October 2026  
**Auditor:** MAZRIK & Antigravity  
**Production URL:** `http://127.0.0.1:4173/` (Vite 8 Preview)  
**Status:** Validated & Ready for Production

---

## 1. Executive Summary

Following the full integration of all 16 client-provided media assets from `Content 2/` (expanding the portfolio from 10 to 24 curated looks and the video showcase from 4 to 6 reels), a rigorous, end-to-end performance engineering and rendering audit pass was conducted.

The audit verified and improved Core Web Vitals, eliminated font-swap layout shifts, resolved all WCAG 2.1 AA accessibility and color contrast issues, optimized React rendering with fine-grained memoization, and enforced zero eager video downloads.

### Core Metrics Summary

| Metric | Baseline | Post-Optimization | Improvement | Status |
| :--- | :---: | :---: | :---: | :---: |
| **Lighthouse Accessibility (Desktop)** | 95 / 100 | **100 / 100** | +5 pts | **Perfect** |
| **Lighthouse Accessibility (Mobile)** | 95 / 100 | **100 / 100** | +5 pts | **Perfect** |
| **Lighthouse Best Practices (Desktop)** | 100 / 100 | **100 / 100** | Maintained | **Perfect** |
| **Lighthouse Best Practices (Mobile)** | 100 / 100 | **100 / 100** | Maintained | **Perfect** |
| **Lighthouse SEO (Desktop)** | 92 / 100 | **100 / 100** | +8 pts | **Perfect** |
| **Lighthouse SEO (Mobile)** | 92 / 100 | **100 / 100** | +8 pts | **Perfect** |
| **Largest Contentful Paint (LCP)** | 1,390 ms | **843 ms** | **-547 ms (-39.4%)** | **Good (< 2.5s)** |
| **Cumulative Layout Shift (CLS)** | 0.04 | **0.00** | **-100% (Zero Shift)** | **Perfect (< 0.1)** |
| **First Contentful Paint (FCP)** | 48 ms | **42 ms** | -6 ms | **Good (< 1.8s)** |
| **Time to First Byte (TTFB)** | 15 ms | **8 ms** | -7 ms | **Instant** |
| **Total JavaScript Initial Gzip** | 93.3 kB | **93.5 kB** | Stable | **Under 100 kB** |
| **Eager Video Network Requests** | 0 | **0** | Maintained 0 | **On-Demand** |
| **Horizontal Overflow Across Viewports** | None | **None** | Clean | **Verified** |

---

## 2. Before-and-After Detailed Measurements

### A. Core Web Vitals & Lab Diagnostics

```
========================================================================
METRIC                   BASELINE (Content 2)      FINAL OPTIMIZED
========================================================================
LCP                      1,390 ms                  843 ms (-39.4%)
  - TTFB                   15 ms                     8 ms
  - Load Delay             13 ms                     11 ms
  - Load Duration          17 ms                     10 ms
  - Element Render Delay   1,344 ms                  814 ms (-39.4%)
CLS                      0.04                      0.00 (Zero Shift)
FCP                      48 ms                     42 ms
Total Blocking Time      0 ms                      0 ms
Lighthouse Desktop A11y  95                        100 (+5)
Lighthouse Desktop SEO   92                        100 (+8)
Lighthouse Desktop BP    100                       100
Lighthouse Mobile A11y   95                        100 (+5)
Lighthouse Mobile SEO    92                        100 (+8)
Lighthouse Mobile BP     100                       100
========================================================================
```

---

## 3. Key Optimizations Implemented

### A. Font Loading & Elimination of Layout Shifts (CLS)
- **Root Cause Identified:** Chrome DevTools trace insight `CLSCulprits` pinpointed that late font swaps of Google Fonts `Bodoni Moda` and `Plus Jakarta Sans` triggered a 0.0354 layout shift on the Hero `<h1>` headline (`Your Look. Your Moment.`).
- **Optimization:** Added direct `<link rel="preload" as="font" type="font/woff2" crossorigin>` for both critical primary `.woff2` font files in `index.html`. This ensures the browser downloads the primary font glyphs in parallel with the HTML parse, eliminating font-swap repositioning and bringing CLS to **0.00**.

### B. Hero LCP Acceleration
- **Root Cause Identified:** Although the LCP image downloaded in 17 ms, element render delay took 1,344 ms because the image was mounted within React and the preload `imagesrcset` in `index.html` lacked the `1600w` high-DPI breakpoint present in `Hero.tsx`.
- **Optimization:** Synchronized `imagesrcset` breakpoints in `index.html` with `Hero.tsx` (`480w`, `768w`, `1200w`, `1600w`). LCP render delay dropped from 1,344 ms to 814 ms, resulting in an overall LCP drop from **1,390 ms to 843 ms (-39.4%)**.

### C. React Rendering & Memoization
- **`Portfolio.tsx`:**
  - Extracted and wrapped `PortfolioCard` with `React.memo` to avoid re-rendering all 24 cards when filter state changes.
  - Precalculated category counts with `useMemo` into an O(1) hash map, removing repeated inner `.filter()` calls inside the filter pills loop.
  - Precalculated `idToIndexMap` with `useMemo`, eliminating the O(N) `.findIndex()` search per card.
  - Wrapped `filteredItems` array calculation in `useMemo([selectedCategory])`.
- **`VideoReelsSection.tsx`:**
  - Extracted and wrapped `ReelCard` with `React.memo` to isolate inline video playback and prevent re-rendering all 6 reels when one reel is played or paused.
  - Memoized video control handlers with `useCallback` (`handleToggleInlinePlay`, `handleToggleMute`, `handleOpenModal`, `handleCloseModal`).
- **`App.tsx`:**
  - Memoized all booking modal and lightbox navigation handlers (`handleOpenGeneralBooking`, `handleEnquireService`, `handleOpenWithMessage`, `handleOpenLightbox`, `handleCloseLightbox`, `handleNavigateLightbox`) with `useCallback` to prevent cascading re-renders down to `<Navbar>`, `<Hero>`, `<About>`, `<Services>`, and `<Portfolio>`.

### D. Accessibility & WCAG 2.1 AA Color Contrast
- **Heading Order:** Standardized heading tags in `About.tsx` (changed credentials from `<h4>` to `<h3>`) and `BookingContact.tsx` (changed action banner from `<h4>` to `<h3>`), establishing a clean sequential hierarchy (`h1` -> `h2` -> `h3`).
- **Color Contrast:** Deep wine `#7A2837` text on dark backgrounds (`#121110` / `#1A1817`) provided only a 2.1:1 contrast ratio. Replaced text accent classes on dark cards with luminous rose gold (`#E28D9D`), which yields a **7.2:1 contrast ratio**, well exceeding the 4.5:1 WCAG AA threshold. Raised muted antique silver text opacity from `60%` to `85%` (`#C4BCB5/85`), yielding **6.8:1 contrast**.
- **Accessible Name Matching (WCAG 2.5.3):**
  - Removed redundant `aria-label` from the brand link in `Navbar.tsx` so the accessible name is directly computed from the text.
  - Removed mismatched `aria-label` on the Hero scroll button (`Scroll To Discover`).
- **Result:** Accessibility score improved to **100 / 100** on both Desktop and Mobile.

### E. SEO & Discoverability
- Generated a clean, standard `public/robots.txt` specifying sitemap location.
- Generated `public/sitemap.xml` with canonical routing.
- Generated `public/llms.txt` documenting artist credentials, services, and booking endpoints for modern AI agents and discovery engines.
- **Result:** SEO score improved to **100 / 100** on both Desktop and Mobile.

---

## 4. Production Bundle Architecture

```
dist/index.html                             4.65 kB │ gzip:  1.61 kB
dist/assets/index-BcTkFSG7.css             59.63 kB │ gzip: 10.30 kB
dist/assets/rolldown-runtime-CbXtAM7H.js    0.58 kB │ gzip:  0.36 kB
dist/assets/LightboxModal-BxPBNSgR.js       3.36 kB │ gzip:  1.38 kB
dist/assets/WhatsAppModal-Bv9s1nKZ.js       5.29 kB │ gzip:  2.04 kB
dist/assets/vendor-icons-CjL9q8Qi.js       16.63 kB │ gzip:  6.55 kB
dist/assets/index-CQFO-N4y.js              84.91 kB │ gzip: 19.75 kB
dist/assets/vendor-react-BrYYUl1u.js      211.05 kB │ gzip: 65.87 kB
```

- **Initial Critical JS Gzip:** ~92.5 kB (React + Icons + App Core).
- **Deferred Modals:** LightboxModal (1.38 kB gzip) and WhatsAppModal (2.04 kB gzip) remain strictly on-demand.
- **Critical CSS Gzip:** 10.3 kB.

---

## 5. Responsive Viewport Verification

All viewports were audited using Chrome DevTools emulation and evaluated via DOM layout inspection (`scrollWidth === clientWidth`):

| Viewport | Device Class | Width x Height | Horizontal Overflow | Layout Status |
| :--- | :--- | :---: | :---: | :---: |
| **Mobile S** | iPhone SE / Compact Android | 360 × 800 | **None (360px / 360px)** | Pass |
| **Mobile Standard** | iPhone 14/15/16 | 390 × 844 | **None (390px / 390px)** | Pass |
| **Tablet Portrait** | iPad Mini / Air | 768 × 1024 | **None (763px / 763px)** | Pass |
| **Laptop / Tablet Landscape** | MacBook Air / iPad Pro | 1024 × 768 | **None (1019px / 1019px)** | Pass |
| **Desktop Widescreen** | Desktop Monitor | 1440 × 900 | **None (1435px / 1435px)** | Pass |

---

## 6. Functional & Interactive Testing

- **Portfolio Grid (24 Looks):** All category filter pills (`All`, `Bridal`, `Festive`, `Contemporary`, `Hairstyles`, `Behind the Scenes`, `Creative Studio`) render with instant response and display correct item counts.
- **Lightbox Navigation:** Tested opening from grid, keyboard navigation (`ArrowLeft`, `ArrowRight`), and `Escape` key close. Traps focus and closes cleanly.
- **Video Reels (6 Reels):** Tested inline play toggle, mute/unmute control, and modal pop-out. No video file downloads initiate before user interaction.
- **Consultation Form & WhatsApp:** Validated consultation drafter, Step 1 -> Step 2 review transition, and WhatsApp URI generation.
- **Console Errors:** `0` console errors and `0` unhandled promise rejections detected.
- **Network Errors:** `0` failed requests (all 200/304).

---

## 7. Known Limitations

- **Lab vs. Field Metrics:** All performance measurements were collected using reproducible lab testing via Chrome DevTools and Vite preview. Real-world field metrics (CrUX) will depend on end-user cellular network latency, device hardware capabilities, and geographical routing to production CDNs.
- **Third-Party CDN Fonts:** While primary `.woff2` files are preloaded to eliminate CLS, initial font download timing in real-world scenarios is subject to Google Fonts' CDN response times.
