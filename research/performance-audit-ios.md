# Dimple Khinchi Website — iOS Safari Performance Audit & Optimization Report

## Executive Summary

A comprehensive performance engineering audit and optimization was conducted for the **Dimple Khinchi** website to eliminate sluggish loading and rendering latency on iPhones (iOS Safari) and mobile devices.

By re-architecting asset delivery, converting media to responsive modern formats, implementing zero-eager video downloading, eliminating main-thread scroll thrashing, and code-splitting interactive components, the site achieved an **81.7% decrease in initial transfer payload** and improved its mobile performance score from **67 to 84**, with Largest Contentful Paint (LCP) improving from **15.6s to 3.8s**.

---

## 1. Root Cause Analysis

| Bottleneck | Root Cause | Impact on iOS Safari |
| :--- | :--- | :--- |
| **Brand Emblem (1.61 MB)** | The circular logo mark (`logo.png`) was loaded uncompressed at 1254×1254 RGBA in the Navbar, Mobile Drawer, About, Services, and Footer to display 40px–48px emblems. | Contended with critical assets on initial page load; mobile browsers downloaded 1.6 MB for a 40px icon. |
| **Hero Image & LCP (15.6s)** | Hero portrait (`bridal-regal-portrait.webp`) loaded a desktop 538 KB file without `srcset`, `sizes`, or `<link rel="preload">`. Statically set to `opacity: 0` in CSS while waiting for keyframe animations. | Massive LCP latency on 4G/mobile networks; delayed initial screen display. |
| **Synchronous Google Fonts** | Loaded comprehensive variable font ranges (all weights 400..900, 300..700, optical size 6..96, italic). | Blocked initial page render until external font CSS stylesheets resolved. |
| **Monolithic Portfolio Assets** | All 10 portfolio items loaded full 500 KB–900 KB images into the grid cards. Lacked responsive `srcSet`, `decoding="async"`, and explicit dimensions. | Heavy memory consumption, excessive data transfer, and layout shifts during scrolling. |
| **Heavy Videos & Posters (>40 MB)** | Source videos were up to 19.6 MB (`reel-outdoor-bride.mp4`) and poster images were up to 1.32 MB without streaming faststart headers. | Video buffering delays, high data consumption on mobile. |
| **Scroll Event Layout Thrashing** | `Navbar.tsx` and `MobileBookingBar.tsx` attached continuous scroll event listeners querying `getBoundingClientRect()` on multiple DOM nodes on every scroll tick. Oversized blur filters (`blur-[140px]`, `blur-[160px]`) strained mobile WebKit compositing. | Visible frame drops and stutter during touch scrolling on iPhones. |
| **Unsplit JavaScript Bundle** | Modals (`LightboxModal`, `WhatsAppModal`) were included in the primary entry chunk. | Increased critical JavaScript execution and parse time. |

---

## 2. Optimizations Implemented

### Asset Engineering
- **Brand Insignia**: Generated responsive multi-density WebP emblems:
  - `logo-96.webp` (6.1 KB — 99.6% reduction)
  - `logo-160.webp` (12.8 KB)
  - `logo-320.webp` (33.1 KB)
  - Compressed PNG fallback (122 KB).
- **Responsive Portfolio Assets**: Generated 480w, 768w, 1200w, and 1600w WebP and JPEG fallbacks for all 10 portfolio images. Grid cards now download lightweight 30 KB–65 KB thumbnails; the lightbox loads high-resolution 1200w/1600w images only when clicked.
- **Hero Priority**:
  - Preloaded responsive hero image in `<head>` with `fetchpriority="high"`.
  - Converted hero element to `<picture>` with responsive WebP sources and `decoding="async"`.
  - Removed `opacity: 0` render-blocking CSS so hero typography and CTA appear immediately.
- **Video Optimization**:
  - Transcoded all 4 videos to 720p H.264 (CRF 25, 30fps, AAC 96k, `yuv420p`) with `-movflags +faststart` for instant iOS Safari streaming.
  - Reduced `reel-outdoor-bride.mp4` from 19.6 MB to 7.36 MB, and `reel-dimple-brush.mp4` from 1.37 MB to 490 KB.
  - Generated responsive WebP posters (down from 1.32 MB to 107 KB).
  - Video tags are only instantiated upon user click; zero video media bytes are transferred on initial load.

### Runtime & Browser Performance
- **Zero-Reflow Scroll Architecture**: Replaced continuous scroll handlers with native `IntersectionObserver` in both `MobileBookingBar` and `Navbar`.
- **CSS & GPU Tuning**: Reduced oversized Gaussian blurs to hardware-accelerated radii (`blur-2xl md:blur-3xl transform-gpu`).
- **Font Optimization**: Streamlined Google Fonts request to active weights and made loading asynchronous with `media="print" onload="this.media='all'"` and `font-display: swap`.
- **Code Splitting**: Configured manual chunks in Vite and lazy-loaded `LightboxModal` and `WhatsAppModal` via `React.lazy` and `Suspense`. Main bundle reduced to **78.13 kB** (gzip 17.86 kB).

---

## 3. Before & After Measurements

Measurements recorded via Lighthouse Mobile Emulation against the production build:

| Metric | Before Optimization | After Optimization | Delta |
| :--- | :--- | :--- | :--- |
| **Lighthouse Performance Score** | **67 / 100** | **84 / 100** | **+17 pts** |
| **Largest Contentful Paint (LCP)** | **15.6 s** | **3.8 s** | **-75.6% (-11.8s)** |
| **First Contentful Paint (FCP)** | 3.0 s | 2.8 s | -6.7% |
| **Speed Index** | 4.1 s | 2.8 s | -31.7% |
| **Total Blocking Time (TBT)** | 130 ms | 40 ms | **-69.2%** |
| **Cumulative Layout Shift (CLS)** | 0.00 | 0.024 | **Well within Good (≤ 0.1)** |
| **Time to Interactive (TTI)** | 15.8 s | 3.9 s | **-75.3%** |
| **Total Transferred Bytes (Initial)** | **3,088.4 KB (3.08 MB)** | **564.7 KB** | **-81.7% (-2.52 MB)** |
| **Image Bytes Downloaded (Initial)** | **2,864.7 KB (2.86 MB)** | **360.5 KB** | **-87.4% (-2.50 MB)** |
| **Initial Video Requests** | 0 requests (0 KB) | 0 requests (0 KB) | Maintained zero eager load |

---

## 4. Multi-Device Viewport Verification

Tested across responsive viewports with zero horizontal overflow (`scrollWidth <= innerWidth`):
- **375px (iPhone SE / mini)**: Pass — no horizontal overflow, mobile menu and booking functional.
- **390px (iPhone 13 / 14 / 15 / 16)**: Pass — touch scrolling smooth, responsive cards aligned.
- **768px (iPad portrait)**: Pass — 2-column grid balanced, navigation responsive.
- **1024px (iPad landscape / laptop)**: Pass — 3-column grid, video cards aligned.
- **1440px (Desktop)**: Pass — full editorial layout intact.
