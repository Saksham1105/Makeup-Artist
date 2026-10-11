# Media Integration Plan & Implementation Architecture

## 1. Scope & Execution Overview
This document records the media integration plan and technical architecture implemented for **Dimple Khinchi's** website (`D:/Projects/Demos/MakeUp Artist/`).

All 15 authentic assets supplied in `Content/` were inspected, preserved in their original location, and systematically processed into responsive web formats within `public/`.

---

## 2. Media Asset Directory Mapping

| Asset Role | Source File (`Content/`) | Web Asset Path (`public/`) | Format & Quality |
| :--- | :--- | :--- | :--- |
| **Official Insignia** | `Logo.PNG` | `/images/branding/logo.png` & `logo.webp` | Lossless RGBA, original 1254x1254 preserved |
| **Hero Feature** | `IMG_1334.JPG.jpeg` | `/images/portfolio/bridal-regal-portrait.webp` | WebP & JPEG, 1300x2000, 90% quality |
| **Bridal Close-Up** | `IMG_1406.JPG.jpeg` | `/images/portfolio/bridal-closed-eyes.webp` | WebP & JPEG, 1333x2000, 90% quality |
| **Bridal Smile** | `IMG_1404.JPG.jpeg` | `/images/portfolio/bridal-joy-front.webp` | WebP & JPEG, 1333x2000, 90% quality |
| **Bridal Alta Pose** | `IMG_1405.JPG.jpeg` | `/images/portfolio/bridal-regal-alta.webp` | WebP & JPEG, 1406x2000, 90% quality |
| **Hair Styling** | `IMG_1347.JPG.jpeg` | `/images/portfolio/bridal-hair-back.webp` | WebP & JPEG, 1423x2000, 90% quality |
| **Destination Columns**| `IMG_9786.HEIC` | `/images/portfolio/bridal-outdoor-columns.webp` | WebP & JPEG (from HEIC), 1500x2000 |
| **Behind the Scenes** | `IMG_9787.HEIC` | `/images/portfolio/bts-outdoor-strobe.webp` | WebP & JPEG (from HEIC), 1500x2000 |
| **Cocktail Glam** | `IMG_0149.HEIC` | `/images/portfolio/festive-crystal-glam.webp` | WebP & JPEG (from HEIC), 1500x2000 |
| **Contemporary Veil** | `IMG_9705.HEIC` | `/images/portfolio/contemporary-veil.webp` | WebP & JPEG (from HEIC), 1500x2000 |
| **Academy Medal** | `IMG_0647.JPG.jpeg` | `/images/portfolio/credential-medal.webp` | WebP & JPEG, 1125x2000 |
| **Outdoor Reel (4K)** | `IMG_9794.MOV` | `/videos/reel-outdoor-bride.mp4` & poster `.webp` | H.264 1080x1920 30fps crf 23 +faststart |
| **Royal Reel** | `IMG_1736.MOV` | `/videos/reel-royal-shimmer.mp4` & poster `.webp` | H.264 1080x1920 25fps crf 23 +faststart |
| **Editorial Reel** | `IMG_9720.MOV` | `/videos/reel-editorial-glow.mp4` & poster `.webp` | H.264 1080x1920 30fps crf 23 +faststart |
| **Artist at Work Reel**| `IMG_0108.MOV` | `/videos/reel-dimple-brush.mp4` & poster `.webp` | H.264 1080x1920 30fps crf 23 +faststart |

---

## 3. Hero Visual Selection Decision Matrix

Before finalizing the primary hero visual, three royal bridal portraits from the same session were compared in layout:

1. **`IMG_1334` (Selected)**:
   - 3/4 royal bridal gaze, bandhani dupatta draped gracefully on shoulder.
   - High facial centering and ideal headroom. In `aspect-[4/5]`, the maang tikka, eyes, nath, and emerald choker remain 100% visible and unclipped.
   - Highest aesthetic contrast against the dark editorial palette.
2. **`IMG_1404`**:
   - Radiant smile with hands on hips.
   - In a 4:5 vertical container, hands on hips become cropped at left and right edges.
   - Better suited for the Reception & Joy category in the Portfolio.
3. **`IMG_1405`**:
   - Poised standing shot with alta on hands.
   - Requires full vertical torso framing; 4:5 crop cuts either the hands or head.
   - Selected for the Artistry Tenets section (`WhyChooseUs.tsx`) and Portfolio.

---

## 4. UI Safeguards & Grounding Standards

1. **Logo Protection**:
   - `Logo.PNG` is the exact official insignia of **Dimple Glam Academy** featuring the golden crown, DGA monogram, makeup brush, and motto *"LEARN | CREATE | GROW"*.
   - Never redrawn, recolored, or modified.
2. **Distinct Brand Identity**:
   - Header lockup presents **Dimple Khinchi** (Artist Identity) in prominent Bodoni serif with **Dimple Glam Academy** (Educational Division) in secondary tracking.
3. **Factual Credential Representation**:
   - `IMG_0647` is strictly and factually labeled: **“Shining Star of Mahima Bajaj Academy”**.
4. **On-Demand Video Loading**:
   - Zero video files are loaded eagerly on initial page render.
   - Lightweight WebP poster images (<200KB) are rendered until the user initiates playback.
