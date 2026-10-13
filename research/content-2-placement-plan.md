# Dimple Khinchi — `Content 2` Media Asset Analysis & Website Placement Plan

**Project:** `D:/Projects/Demos/MakeUp Artist/`  
**Date:** October 2026  
**Status:** Comprehensive Audit & Placement Plan (Planning Phase — No Code Modified)  
**Corpus / Context:** Dimple Khinchi Bespoke Artistry & Dimple Glam Academy  

---

## Executive Summary

A comprehensive visual, technical, and architectural inspection was conducted across all **16 media files** provided in the `Content 2/` directory.

### High-Level Inventory Breakdown

| Classification | Count | Assets |
| :--- | :---: | :--- |
| **High-Impact Usable Assets** | **6** | `IMG_9810.HEIC` (24.5MP Destination Bride), `IMG_2023.MOV` (17.3s Radha/Haldi Reel), `IMG_2024.PNG` (Editorial Rim-Lit Glam), `IMG_2025.PNG` (Rajput Poshak & Aad), `IMG_2030.PNG` (Daylight Sangeet/Festive Glow), `IMG_9956.PNG` (Glass Skin Contemporary) |
| **Viable Complementary / Alternative Assets** | **2** | `IMG_1343.JPG.jpeg` (Canon EOS R Hair Direct Back View), `IMG_2021.PNG` (Festive Butterfly Waves Detail) |
| **Redundant / Near-Duplicate Assets** | **3** | `IMG_2020.PNG` (Exact duplicate screenshot of `IMG_9956`), `IMG_2028.PNG` (Duplicate of `IMG_2027`), `IMG_2032.PNG` (Duplicate pose of `IMG_2031`) |
| **Unsuitable / Off-Brand / Low-Fidelity Assets** | **5** | `IMG_2022.PNG` (Harsh flash, digital noise, tiara look), `IMG_0104.MOV` (1.9s casual salon clip), `IMG_2026.PNG` (Cluttered background couple shot), `IMG_2027.PNG` (Intrusive lighting gear in frame), `IMG_2031.PNG` (Tiger face paint — off-brand for luxury bridal) |
| **Total Files Inspected** | **16** | 13 static images (JPEG, PNG, HEIC) + 3 video reels (MOV) |

---

## Phase 1: Existing Website Architecture & Design Baseline

Before categorizing the new assets, the existing site structure and media footprint were audited:

### 1. Existing Image Configuration & Data Models
- **`src/data/portfolioData.ts`**: Contains 10 curated portfolio items spanning 4 active categories:
  1. `Bridal` (5 items: `IMG_1334`, `IMG_1406`, `IMG_1404`, `IMG_1405`, `IMG_1347`)
  2. `Festive` (1 item: `IMG_0149`)
  3. `Contemporary` (1 item: `IMG_9705`)
  4. `Editorial & BTS` (3 items: `IMG_9786`, `IMG_9787`, `IMG_0647`)
- **`src/data/servicesData.ts`**: Contains 5 bespoke service cards:
  1. `Bridal Ceremony Artistry` (Using `IMG_1406` close-up)
  2. `Engagement & Sangeet Radiance` (Using `IMG_9705` crystal corset veil)
  3. `Party & Festive Glam` (Using `IMG_0149` coral crystal glam)
  4. `Editorial & Destination Shoots` (Using `IMG_9786` outdoor columns back view)
  5. `Dimple Glam Academy` (Using official `Logo.PNG`)
- **`src/components/Hero.tsx`**: Features `IMG_1334.JPG.jpeg` (`bridal-regal-portrait.webp`) in an editorial 4:5 ratio with custom responsive srcSet (480w, 768w, 1200w, 1600w).
- **`src/components/About.tsx`**: Features `IMG_0108.MOV` poster (Dimple blending makeup with brushes) paired with `IMG_0647` (Shining Star medal inset).
- **`src/components/WhyChooseUs.tsx`**: Features `IMG_1405.JPG.jpeg` (`bridal-regal-alta.webp`) poised alta portrait.
- **`src/components/VideoReelsSection.tsx`**: Features 4 vertical 9:16 reels (`IMG_9794`, `IMG_1736`, `IMG_9720`, `IMG_0108`) with on-demand playback and lightweight poster delivery.

### 2. Category Balance Finding
The current portfolio is heavily tilted toward the studio Rajasthani bridal session (5 out of 10 images are the same bride in the silver lehenga). The `Festive` and `Contemporary` categories have only 1 image each. `Content 2` offers an immediate opportunity to balance the categories, inject authentic Rajputana wedding attire, and introduce daytime and high-fashion editorial variety.

---

## Phase 2 & 3: Detailed Asset Inventory & Website Placement Plan

The table below catalogs every file in `Content 2/` with its visual inspection findings, metadata, recommended placement, priority, crop ratio, and editorial rationale.

| Original Filename | Technical Specs & Format | Visual Description & Subject | Recommended Website Section | Portfolio Category | Priority | Reason for Placement | Target Aspect Ratio | Editorial & Technical Notes |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- | :---: | :--- |
| **`IMG_9810.HEIC`** | HEIC (Apple Tile Grid)<br>5712×4284 (24.5 MP)<br>3.73 MB, Orientation 6 | Majestic full-length front portrait of bride framed between neoclassical Corinthian columns in a sunlit garden rotunda. Wearing deep crimson silver-zardozi lehenga, sculpted choli with pearl latkans, chooda, and regal bridal jewelry. Eyes serenely closed in natural daylight. | **Portfolio (Bridal / Destination)** & **Services (Editorial & Destination Card)** | **Bridal** (Alt: Editorial & BTS) | **P1 (Highest)** | Exceptional 24.5MP resolution, authentic daylight finish, majestic bridal silhouette. Vastly superior to the back-view currently used in the destination service card. | 4:5 vertical (or 3:4) | Needs 90° clockwise rotation and conversion from HEIC Tile Grid to responsive WebP/JPEG. |
| **`IMG_2023.MOV`** | QuickTime MOV (H.265)<br>1080×1920, 17.30s<br>17.86 fps, 30.20 MB | Traditional Radha / Haldi / Ceremonial bride in vibrant lime green saree with gold embroidery, fresh flowers in hair (bougainvillea & mogra), alta-dyed fingertips and palm circles, chandan forehead dots, gold nose ring, soft radiant makeup, graceful hand mudras framing face. | **Video Reels Showcase** (`VideoReelsSection.tsx`) | **Video Reels** (Ceremonial & Cultural) | **P1 (Highest)** | Introduces a completely new, culturally rich color palette (vibrant green, floral yellow/pink, red alta). Captures fluid graceful motion, pristine skin texture, and ceremonial tradition. | 9:16 vertical | High-priority reel addition. Transcode to H.264 720p/1080p with faststart; generate lightweight WebP poster. |
| **`IMG_2024.PNG`** | PNG (JPEG in container)<br>1290×1759<br>546 KB, 72 DPI | Editorial close-up portrait with dramatic golden backlighting/rim light halo along neck and shoulder. Model with downward gaze, delicate wet-look hair strands on face accented with red & pink gems, bow-shaped crystal earring, dewy glass skin, off-shoulder knit sweater. | **Portfolio (Contemporary Glam / Makeup Details)** | **Contemporary** (Alt: Editorial & BTS) | **P1 (High)** | High-fashion editorial aesthetic, exceptional lighting contrast, demonstrates advanced avant-garde styling, wet-hair look, and micro-embellishment details. | 4:5 vertical | Phone screenshot: requires cropping off thin letterbox bars at top/bottom. Recommend asking client for uncompressed original if available. |
| **`IMG_2025.PNG`** | PNG (JPEG in container)<br>1289×1749<br>678 KB, 72 DPI | Traditional Rajasthani Rajput bridal portrait. Bride in genuine gold tissue poshak, magenta embroidered odhna/veil over head, heavy kundan/emerald aad choker, rakhdi/sheeshpatti, nath, hathphool on mehndi hands, against outdoor night wedding backdrop with fairy lights. | **Portfolio (Bridal Royalty / Traditional Rajput Poshak)** | **Bridal** | **P1 (High)** | Authentic Rajputana royal heritage attire (traditional poshak, aad, rakhdi). Distinct from contemporary lehengas; essential representation for Rajasthani client demographic. | 4:5 vertical | Phone screenshot: crop black letterbox borders at top and bottom. Good sharpness on jewelry and poshak. |
| **`IMG_2030.PNG`** | PNG (JPEG in container)<br>1290×1434<br>351 KB, 72 DPI | Warm over-the-shoulder glance of a smiling young woman in golden afternoon sunlight. Braided twist crown hairstyle cascading into long dark waves, bright pink mandarin-collar outfit, soft dewy daytime makeup, winged eyeliner, and delicate bindi. | **Portfolio (Festive & Occasion Looks)** | **Festive** | **P2 (Medium-High)** | Balances the festive category with an approachable, radiant daytime sangeet/mehendi guest look. Showcases clean skin finish under natural sunlight and braided hair texture. | 4:5 vertical | Crop out top and bottom letterbox borders. Excellent warmth and genuine expression. |
| **`IMG_9956.PNG`** | PNG (RGB24)<br>1290×2796 (iPhone Max)<br>3.54 MB, 144 DPI | High-glam editorial portrait. Model looking upward, one finger gracefully touching chin, high-gloss glass skin, crystal/rhinestone accents around outer eyes and hairline, sleek bun dotted with pearls, ruby/diamond jewelry, sheer crystal-embroidered sleeve, modern staircase backdrop. | **Portfolio (Contemporary Glam / Engagement)** | **Contemporary** | **P2 (Medium)** | Exceptional high-fashion glow, luminous skin finish, and rhinestone eyelid artistry. Supplements `IMG_9705` in Contemporary. | 4:5 vertical (crop from center) | Master screenshot from 2026-07-30. Superior to `IMG_2020` duplicate. Requires cropping 1290×2796 down to 4:5 to remove black letterboxing. |
| **`IMG_1343.JPG.jpeg`** | JPEG (Canon EOS R)<br>4480×6069 (27.2 MP)<br>5.21 MB, 72 DPI | Direct symmetrical back view of the royal bride showcasing voluminous cascading wavy brown hair styled with an elaborate silver/crystal floral headpiece at crown, silver embroidered blouse back, and red bandhani dupatta, against arched palace backdrop. | **Portfolio (Hair Architecture / Alternative)** | **Bridal** (Hair & Detail) | **P3 (Alternative)** | Pristine 27MP Canon DSLR capture. However, the portfolio already contains `IMG_1347` (3/4 profile back view of the same look). Keeping both creates redundancy. | 4:5 vertical | Archive as high-resolution master asset. Can swap with `IMG_1347` if client prefers symmetrical back view over 3/4 profile. |
| **`IMG_2021.PNG`** | PNG (RGB48BE)<br>1290×2796<br>10.07 MB, 144 DPI | Back view of hair artistry featuring glossy dark curls in a half-up half-down hairstyle adorned with pastel butterfly hair accessories and pearl pins. Coral-pink embroidered blouse and sheer dupatta against dark rose wallpaper. | **Portfolio (Hair Artistry / Festive Styling)** | **Festive** (Hair Detail) | **P3 (Optional)** | Direct companion to existing portfolio item `look-8` (`IMG_0149`, coral festive glam). Demonstrates 360-degree styling capability for festive looks. | 4:5 vertical (crop from center) | Full-screen screenshot: 10MB uncompressed PNG. Must crop out black borders and convert to lightweight WebP. |
| **`IMG_2020.PNG`** | PNG (RGB24)<br>1290×2796<br>2.95 MB, 144 DPI | Identical visual frame to `IMG_9956.PNG` (Model looking upward, finger at chin, sheer crystal sleeve, staircase backdrop). Re-screenshotted on 2026-10-12. | **Not Recommended for Publication** | N/A (Redundant) | **P4 (Redundant)** | 100% duplicate subject of `IMG_9956.PNG`. Re-screenshotted at lower file fidelity. | N/A | Exclude from publication. Mark as duplicate of `IMG_9956.PNG`. |
| **`IMG_2028.PNG`** | PNG (JPEG in container)<br>1289×1620<br>712 KB, 72 DPI | Candid interaction of Rajasthani couple in front of wall rug. Bride smiling downward while touching groom's cheek. Large yellow DigiTek video light box and arm intruding into frame on right edge. | **Not Recommended for Publication** | N/A (Redundant / Flawed) | **P4 (Redundant)** | Near-duplicate of `IMG_2027.PNG` with identical lighting equipment intrusion on right side. | N/A | Exclude from publication. |
| **`IMG_2027.PNG`** | PNG (JPEG in container)<br>1290×1625<br>661 KB, 72 DPI | Candid interaction of Rajasthani couple. Bride looking up into groom's eyes while adjusting his safa/face. Large yellow DigiTek video light box and camera crew arm intruding into right third of frame. | **Not Recommended for Publication** (Alt: Raw BTS only if requested) | N/A (Flawed composition) | **P4 (Unsuitable)** | Intrusive photographer video light and hand destroys editorial composition. Cropping it out would amputate the groom's shoulder and bride's arm. | N/A | Exclude from publication. Not acceptable for high-end luxury portfolio. |
| **`IMG_2026.PNG`** | PNG (JPEG in container)<br>1289×1504<br>587 KB, 72 DPI | Full-length Rajasthani couple portrait. Bride in rani pink poshak with yellow/ivory chooda, groom in turban, brown coat, and sword belt. Background has hanging rug with empty picture frames, staircase banister, white curtains. | **Not Recommended for Publication** | N/A (Cluttered) | **P4 (Unsuitable)** | Composition is visually cluttered with distracting background elements (empty picture frames, curtain folds, banister). Harsh flat indoor lighting. | N/A | Exclude from primary portfolio. Reserve for client archive. |
| **`IMG_2022.PNG`** | PNG (JPEG in container)<br>1289×1623<br>619 KB, 72 DPI | Model wearing pink beaded tiara/crown, green contacts, red nail polish, strapless purple sequin dress. Harsh direct flash lighting, heavy digital grain/noise, noticeable screenshot crop indicator on top right. | **Not Recommended for Publication** | N/A (Low Fidelity) | **P5 (Unsuitable)** | Low image quality, harsh flash, color clipping, and dated styling inconsistent with Dimple Khinchi's refined luxury brand positioning. | N/A | Exclude from publication. |
| **`IMG_2031.PNG`** | PNG (JPEG in container)<br>1289×1597<br>393 KB, 72 DPI | Fantasy / SFX / Creative face and body paint. Model with orange tiger gradient and black tiger stripes painted across forehead, nose, cheeks, and neck, gray contacts, red glossy lips, patterned knit sweater. | **Not Recommended for Publication** (Reserve for Social/SFX) | N/A (Off-Brand for Luxury Bridal) | **P5 (Off-Brand)** | Soft focus, phone screenshot compression. Fantasy feline face-painting dilutes Dimple Khinchi's core positioning as a premier bridal and celebration makeup artist. | N/A | Exclude from bridal/commercial portfolio. May be archived for YouTube/social media transition reel context only. |
| **`IMG_2032.PNG`** | PNG (JPEG in container)<br>1290×1606<br>490 KB, 72 DPI | Downward-gaze companion shot of the tiger face paint look in `IMG_2031`. Eyes closed showing upper lid tiger stripes. | **Not Recommended for Publication** | N/A (Off-Brand / Duplicate) | **P5 (Off-Brand)** | Duplicate of `IMG_2031`. Same off-brand fantasy face-paint look; low-resolution screenshot. | N/A | Exclude from publication. |
| **`IMG_0104.MOV`** | QuickTime MOV (H.265)<br>1920×1080, 1.97s<br>29.97 fps, 3.26 MB | Casual behind-the-scenes video clip inside makeup academy/studio. Two young women sitting in makeup chairs with eye makeup primer applied, smiling and waving at the camera. | **Not Recommended for Primary Showcase** | N/A (Too Brief / Casual) | **P4 (Archive)** | At under 2 seconds (1.97s), the clip is too brief, shaky, and casual for the polished cinematic video reels section. | 9:16 vertical | Exclude from primary website reel player. Archive for social story context. |

---

## Phase 4: Replacement and Duplication Analysis

This section directly compares every eligible new photograph with existing website assets, evaluating whether it replaces, complements, or duplicates existing imagery.

### 1. Hero Image Evaluation
- **Current Hero Asset:** `IMG_1334.JPG.jpeg` (`bridal-regal-portrait.webp`, 4325×6652 Canon EOS R capture).
- **Candidate Evaluated:** `IMG_9810.HEIC` (Destination Bride between Roman Columns, 5712×4284 24.5MP).
- **Decision:** **RETAIN `IMG_1334.JPG.jpeg` as the Hero Image.**
- **Rationale:**
  1. *Composition & Focal Centering:* In `Hero.tsx`, the dominant image container uses an explicit `aspect-[4/5]` framing with an overlaid title card at the bottom. `IMG_1334` is a 3/4 royal bust portrait with optimal headroom; the emerald choker, nath, and maang tikka remain 100% visible and unclipped.
  2. *Color Harmony:* `IMG_1334` features a deep charcoal/noir backdrop with deep crimson and emerald accents that seamlessly blends with the website's dark luxury editorial palette (`#121110` / `#1A1817`).
  3. *Why `IMG_9810` is NOT ideal for Hero:* In an `aspect-[4/5]` hero container, `IMG_9810` (a full-length standing portrait) would either need to be cropped down to the waist (cutting off the lehenga flair and gazebo floor) or zoomed out so far that the bride's facial makeup becomes tiny and distant. `IMG_9810` is far more impactful as a full-length portfolio and service card feature.

### 2. Service Card Asset Replacement
- **Service Affected:** `Editorial & Destination Shoots` (Card 04 in `src/data/servicesData.ts`).
- **Current Asset:** `IMG_9786.HEIC` (`bridal-outdoor-columns.webp` — back view of bride walking away between columns).
- **Recommended Replacement Asset:** **`IMG_9810.HEIC`** (Front full-length portrait of the bride between the columns).
- **Rationale:** Card 04 sells high-end destination bridal artistry. Showing the front-facing bride with full jewelry, intricate lehenga embroidery, and serene facial expression provides immediate visual proof of bridal finish under natural daylight, whereas the existing back view only shows hair and blouse drapery.
- **Action for Implementation:** Replace `bridal-outdoor-columns` on the service card with the new front portrait (named `bridal-outdoor-columns-front`), while retaining `IMG_9786` as a complementary asset in the portfolio.

### 3. Video Reels Showcase Replacement / Extension
- **Current Reels:** 4 clips (`IMG_9794` 4K crimson bride, `IMG_1736` royal bride shimmer, `IMG_9720` contemporary glow, `IMG_0108` artist blending makeup).
- **Candidate Evaluated:** **`IMG_2023.MOV`** (17.3s lime green ceremonial Radha/Haldi look with alta, chandan, and floral styling).
- **Decision:** **Integrate `IMG_2023.MOV` as a featured reel.**
- **Implementation Options:**
  - *Option A (Recommended — Reel Expansion):* Expand `VideoReelsSection.tsx` from 4 to 5 cards (or a 4-card carousel/grid), giving representation to traditional ceremonial/Haldi looks.
  - *Option B (Direct Replacement):* Replace `reel-4` (`IMG_0108.MOV`). `IMG_0108` is only 2.47s long, whereas `IMG_2023.MOV` is 17.3 seconds of rich, graceful cinematic motion. Note that `IMG_0108` is already preserved as the static hero image in the About section ("The Artistry in Action").

### 4. Direct Asset Substitutions & Complements Table

| Existing Asset Filename | Current Role & Location | Recommended New Asset | Relationship | Implementation Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| `IMG_9786.HEIC`<br>(`bridal-outdoor-columns.webp`) | Services: Editorial & Destination Card (04) | **`IMG_9810.HEIC`** | **Replacement for Service Card**;<br>Complement in Portfolio | Use `IMG_9810` (front portrait) on Service Card 04. Keep `IMG_9786` (back view) in Portfolio to showcase 360° bridal styling. |
| `IMG_0108.MOV`<br>(`reel-dimple-brush.mp4`) | Video Reels Section (Reel 04, 2.47s) | **`IMG_2023.MOV`** | **Replacement or 5th Reel** | `IMG_2023.MOV` (17.3s) provides far greater cinematic engagement. `IMG_0108` remains honored in the About section. |
| `IMG_1347.JPG.jpeg`<br>(`bridal-hair-back.webp`) | Portfolio: Bridal Hair Profile (look-5) | **`IMG_1343.JPG.jpeg`** | **Alternative / Variant** | Do not add both to gallery (causes session repetition). Keep `IMG_1347` (has dynamic 3/4 angle) or replace with `IMG_1343` if client prefers symmetry. |
| `IMG_0149.HEIC`<br>(`festive-crystal-glam.webp`) | Portfolio: Festive Look (look-8) | **`IMG_2021.PNG`** | **Complement** | `IMG_2021` is the back view showing butterfly hair styling for the exact same outfit. Can complement `IMG_0149`. |
| `IMG_9705.HEIC`<br>(`contemporary-veil.webp`) | Portfolio: Contemporary (look-9) | **`IMG_9956.PNG`** & **`IMG_2024.PNG`** | **Complement (Category Expansion)** | Expands the thin Contemporary category from 1 item to 3 distinct high-fashion looks. |
| *(None)* | New Bridal Heritage Slot | **`IMG_2025.PNG`** | **New Addition** | Introduces authentic Rajasthani Rajput poshak & aad to the bridal gallery. |
| *(None)* | New Daytime Festive Slot | **`IMG_2030.PNG`** | **New Addition** | Introduces sunlit daytime sangeet/guest glam and braided hair. |

---

## Phase 5: Recommended Final Gallery Structure & Narrative Pacing

### 1. Portfolio Category Structure Assessment
- **Current Categories:** `All`, `Bridal`, `Festive`, `Contemporary`, `Editorial & BTS`
- **Assessment:** The existing 4-category taxonomy is sound and well-understood by clients. Creating overly narrow categories (e.g., "Hair Only" or "Academy Only") would fragment the gallery.
- **Recommendation:** **Retain the 4 existing categories.** Populate `Festive` and `Contemporary` so they no longer feel empty compared to `Bridal`.

### 2. Gallery Arrangement & Visual Pacing Plan

A luxury portfolio must alternate between close-up artistry details, full-length regal silhouettes, and varied color palettes to prevent visual fatigue.

Here is the proposed **14-item Master Gallery Sequence**:

```text
[Position 01] ★ HERO FEATURE (Above the fold):
  ↳ look-1: IMG_1334 (Royal Heritage Bridal Portrait in Emeralds & Bandhani) [Bridal]

[Position 02] DESTINATION GRANDEUR (Above the fold):
  ↳ look-new-1: IMG_9810 (Full-Length Crimson Bride in Roman Rotunda) [Bridal / Destination]
  * Impact: Transitions from studio royal bust to outdoor architectural splendor.

[Position 03] INTRICATE EYE DETAIL (Above the fold):
  ↳ look-2: IMG_1406 (Macro Cut-Crease & Shimmer Eyes Closed) [Bridal Detail]
  * Impact: Demonstrates microscopic blending precision immediately after wide shots.

[Position 04] CONTEMPORARY EDITORIAL GLAM:
  ↳ look-new-2: IMG_2024 (Editorial Rim-Lit Dewy Glam & Wet Tendrils) [Contemporary]
  * Impact: Breaks traditional reds with avant-garde editorial backlighting and bow jewelry.

[Position 05] TRADITIONAL RAJPUTANA HERITAGE:
  ↳ look-new-3: IMG_2025 (Rajput Royal Poshak, Aad & Rakhdi in Night Lights) [Bridal]
  * Impact: Grounds the brand firmly in authentic Rajasthani royal wedding heritage.

[Position 06] FESTIVE CRYSTAL RADIANCE:
  ↳ look-8: IMG_0149 (Embellished Coral Blouse & Rhinestone Wing Accent) [Festive]
  * Impact: Injects vibrant coral-pink cocktail elegance.

[Position 07] HIGH-FASHION VEIL ARTISTRY:
  ↳ look-9: IMG_9705 (Contemporary Crystal Corset & Sheer Veil) [Contemporary]
  * Impact: Poetic high-fashion engagement radiance.

[Position 08] DAYLIGHT SANGEET GLOW:
  ↳ look-new-4: IMG_2030 (Sunlit Over-The-Shoulder Smile & Braided Crown) [Festive]
  * Impact: Warm, genuine daytime ceremony emotion in golden natural light.

[Position 09] CEREMONIAL NUPTIAL POISE:
  ↳ look-4: IMG_1405 (Poised Bride with Red Alta on Hands & Bangles) [Bridal]
  * Impact: Reverent sacred ritual styling.

[Position 10] GLASS SKIN MODERN TECHNIQUE:
  ↳ look-new-5: IMG_9956 (Starlight Glow, Pearl Hair Bun & Rhinestone Eye Accents) [Contemporary]
  * Impact: Modern trendsetting reception/cocktail aesthetic.

[Position 11] BRIDAL CELEBRATION JOY:
  ↳ look-3: IMG_1404 (Radiant Bride Smiling with Hands on Hips) [Bridal]
  * Impact: Celebratory joy and natural warmth.

[Position 12] DESTINATION ARCHITECTURE (BTS / Editorial):
  ↳ look-6: IMG_9786 (Bride Walking Between Roman Columns, Parandi Braid Back) [Editorial & BTS]
  * Impact: 360-degree perspective of the destination shoot.

[Position 13] HAIR ARCHITECTURE:
  ↳ look-5: IMG_1347 (Cascading Waves & Blouse Detailing) [Bridal / Hair]
  * (Optional variant: swap with IMG_1343 if symmetrical back view preferred)

[Position 14] PRODUCTION BACKSTAGE:
  ↳ look-7: IMG_9787 (Godox Strobe on C-Stand at Outdoor Shoot) [Editorial & BTS]
  * Impact: Demonstrates professional equipment and editorial production standard.
```

### 3. Excluded Assets Summary
- `IMG_2020.PNG`: Excluded (redundant duplicate of `IMG_9956.PNG`).
- `IMG_2028.PNG`: Excluded (redundant duplicate of `IMG_2027.PNG`).
- `IMG_2027.PNG`: Excluded (unsuitable — intrusive yellow light and crew arm in frame).
- `IMG_2026.PNG`: Excluded (unsuitable — cluttered interior background).
- `IMG_2022.PNG`: Excluded (unsuitable — harsh flash, heavy noise, off-brand tiara styling).
- `IMG_2031.PNG` & `IMG_2032.PNG`: Excluded (off-brand — fantasy tiger face paint dilutes luxury bridal positioning).
- `IMG_0104.MOV`: Excluded (casual 1.9s selfie clip — inadequate for cinematic reels).

---

## Phase 6: Performance & Technical Delivery Architecture

The website incorporates rigorous performance optimizations calibrated for **iOS Safari** (Webkit memory pressure mitigation, GPU compositing stability, and responsive bandwidth scaling).

### 1. Mandatory Processing Specifications for Selected Assets

During future implementation (once approved), the new assets must follow the established multi-tiered optimization pipeline:

| Asset Role | Selected Source File | Processing Target & Formats | Target Dimensions & srcSet | Estimated Web File Size |
| :--- | :--- | :--- | :--- | :---: |
| **Destination Bride** | `IMG_9810.HEIC` (24.5MP) | Conversion from HEIC Tile Grid to WebP & JPEG with 90° EXIF rotation. | • `480w`: 480×640<br>• `768w`: 768×1024<br>• `1200w`: 1200×1600<br>• `1600w`: 1600×2133 | ~45 KB (480w)<br>~140 KB (768w)<br>~280 KB (1200w) |
| **Rajput Poshak** | `IMG_2025.PNG` | Crop 1289×1749 to 4:5 (remove letterboxing). Export WebP & JPEG. | • `480w`: 480×600<br>• `768w`: 768×960<br>• `1200w`: 1200×1500 | ~35 KB (480w)<br>~110 KB (768w)<br>~230 KB (1200w) |
| **Editorial Rim-Lit** | `IMG_2024.PNG` | Crop 1290×1759 to 4:5 (remove letterboxing). Export WebP & JPEG. | • `480w`: 480×600<br>• `768w`: 768×960<br>• `1200w`: 1200×1500 | ~30 KB (480w)<br>~95 KB (768w)<br>~195 KB (1200w) |
| **Daylight Sangeet** | `IMG_2030.PNG` | Crop 1290×1434 to 4:5 (remove letterboxing). Export WebP & JPEG. | • `480w`: 480×600<br>• `768w`: 768×960<br>• `1200w`: 1200×1500 | ~32 KB (480w)<br>~90 KB (768w)<br>~185 KB (1200w) |
| **Glass Skin Glow** | `IMG_9956.PNG` | Crop 1290×2796 center crop to 4:5. Export WebP & JPEG. | • `480w`: 480×600<br>• `768w`: 768×960<br>• `1200w`: 1200×1500 | ~38 KB (480w)<br>~115 KB (768w)<br>~240 KB (1200w) |
| **Ceremonial Reel** | `IMG_2023.MOV` (30.2MB) | Transcode with ffmpeg H.264, CRF 25, 30fps, `+faststart`, yuv420p. Extract 1080p poster. | • Video Master: 720×1280 30fps<br>• Poster: 480w, 720w, 1080w WebP | Video: ~3.8 MB (down from 30.2 MB)<br>Poster: ~85 KB |

### 2. Performance Safeguards
1. **Zero Eager Full-Resolution Overhead:** All gallery thumbnails must use the `480w` or `768w` responsive variant with `loading="lazy"` and `decoding="async"`. Full resolution (`1200w`+) is loaded strictly on-demand when the user opens the Lightbox modal.
2. **Video Reel Lazy-Instantiation:** Videos are never instantiated as HTML `<video>` elements on page load. Only the lightweight static WebP poster image (<100KB) is rendered until the client clicks "Play".
3. **No Batch Conversion During Planning:** In strict compliance with instructions, no media files have been copied, converted, compressed, or generated during this phase.

---

## Phase 7: Client Clarifications & Open Questions

Before proceeding with any implementation or asset generation, the following points should be reviewed with Dimple Khinchi:

1. **Original Camera RAW/High-Res Files for Screenshots:**
   - Files `IMG_2024`, `IMG_2025`, `IMG_2030`, and `IMG_9956` are iPhone screen captures (with black bars and 72 DPI resolution). While they look beautiful and can be cropped to 4:5 for web use, does Dimple have the uncompressed camera photos for these 4 looks? If available, original camera files would yield significantly higher sharpness and color depth.
2. **Service Card 04 Upgrade:**
   - Confirm approval to update Service Card 04 (*Editorial & Destination Shoots*) from the current back-view photo (`IMG_9786`) to the majestic front-facing portrait between the columns (`IMG_9810`).
3. **Video Reels Roster:**
   - Does Dimple prefer expanding the Video Reels section from 4 to 5 cards to include the 17-second Radha/Haldi ceremonial reel (`IMG_2023`), or should `IMG_2023` replace the short 2.5-second clip (`IMG_0108`)?
4. **Hair Architecture Preference:**
   - In the bridal hair category, does Dimple prefer the existing dynamic 3/4 profile shot (`IMG_1347`) or the newly supplied symmetrical centered back view (`IMG_1343`)? Both are 27MP Canon EOS R originals from the same session.
5. **Confirmation on Excluded Looks:**
   - Confirm exclusion of the fantasy tiger face paint (`IMG_2031`/`IMG_2032`) and the tiara look (`IMG_2022`) from the official luxury portfolio to protect the high-ticket bridal branding.
