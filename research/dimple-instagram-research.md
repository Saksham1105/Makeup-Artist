# Dimple Khinchi — Instagram & Brand Presence Research Report (MAZRIK)

**Client**: Dimple Khinchi  
**Instagram Profile**: [https://www.instagram.com/dimple_khinchi32/](https://www.instagram.com/dimple_khinchi32/)  
**YouTube / Academy**: [@Dimpleglamacademy](https://www.youtube.com/@Dimpleglamacademy)  
**Research Date**: October 2026  
**Investigator**: Senior Creative Director & Brand Strategist, MAZRIK  

---

## 1. Confirmed Profile Details

| Field | Verified Fact | Source & Evidence |
| :--- | :--- | :--- |
| **Artist Name** | Dimple Khinchi | Instagram profile & YouTube Channel title |
| **Instagram Handle** | `@dimple_khinchi32` | [instagram.com/dimple_khinchi32/](https://www.instagram.com/dimple_khinchi32/) (3,167+ followers, 78+ posts) |
| **YouTube Channel** | `@Dimpleglamacademy` | Titled *"Dimple Khinchi \| Makeup Artist \| Ajmer"* |
| **Academy Brand** | Dimple Glam Academy | Associated with makeup tutorials, masterclass updates, and student workshops |
| **True Geographic Base** | **Ajmer, Rajasthan** (Active in **Jaipur** and surrounding regions) | Verified via public profile bios, YouTube channel metadata, local event collaborations (e.g. Mittal Mall Ajmer), and regional shoot credits |
| **Professional Role** | Makeup Artist, Beauty Educator & Fashion Lifestyle Creator | Active in both behind-the-chair artistry and on-camera beauty/fashion modeling |

> [!IMPORTANT]
> **Key Strategic Correction**: Previous drafts assumed a Mumbai/Pune base and an exclusively high-society South Bombay bridal positioning. Grounded research confirms Dimple is proudly rooted in **Ajmer & Jaipur, Rajasthan**, serving destination weddings, traditional royal heritage celebrations, festive functions, and beauty masterclasses.

---

## 2. Explicitly Advertised & Observable Services

From analysis of her YouTube tutorials, reels, transitions, and public shoot credits, her makeup work spans five core pillars:

1. **Bridal Artistry Ceremony**:
   - Deeply relevant to Rajasthan's royal wedding culture (traditional Rajasthani poshak styling, kundan jewelry pairing, high-definition tear-proof complexion, dupatta draping).
2. **Engagement & Sangeet Radiance**:
   - Modern evening glam, illuminated glass-skin finishes, sculpted brows, and soft rose/champagne palettes for cocktail nights and ring ceremonies.
3. **Festive & Party Glam**:
   - Mehendi, Haldi, family celebrations, and gala dinners featuring vibrant lip shades, soft smokey eyes, and long-wear comfort.
4. **Editorial & Commercial Shoots**:
   - High-fashion portfolio shoots, brand campaigns, and creative transitions reflecting her active presence as a fashion and beauty model.
5. **Artistry Masterclasses & Self-Grooming**:
   - Under the **Dimple Glam Academy** banner, offering hands-on makeup workshops, beginner-to-pro technique guidance, and self-makeup courses.

---

## 3. Brand Personality & Visual Tone

- **Voice**: Warm, authentic, celebratory, and empowering. Unlike cold corporate salons, Dimple’s presence is personal, energetic, and culturally resonant.
- **Aesthetic**:
  - Blends traditional Rajasthani elegance with contemporary soft-glam sensibilities.
  - Golden-hour luminosity, crisp eye definition, and flawless complexion calibration.
- **Tone Direction for V3**:
  - Retain the luxurious obsidian, oxblood, and warm porcelain identity of **NOIR BEAUTÉ**, but simplify terminology.
  - Headline direction: *"Your Look. Your Moment."* — celebrating individual radiance and confidence rather than generic corporate buzzwords.

---

## 4. Navigation & UX Simplification (Phase 2 Mandate)

The previous navigation used decorative luxury-brand jargon (*Haute Beauté*, *Artistry*, *The Craft*, *Reserve*) which created cognitive friction. 

For V3, navigation is strictly simplified:
- **Brand Wordmark**: `DIMPLE KHINCHI`
- **Top / Drawer Links**:
  1. `Home` → `#home`
  2. `About` → `#about`
  3. `Services` → `#services`
  4. `My Work` → `#portfolio`
  5. `Contact` → `#contact`
- **Primary CTA**: `Book Now`
- **Secondary Hero CTA**: `View My Work`

---

## 5. Details Requiring Client Confirmation

The following items are preserved as structured, safe placeholders in `src/config/siteConfig.ts` until Dimple approves final production values:

1. **Official WhatsApp Business Number**: Unconfigured by default; triggers the safe enquiry helper modal with instant copy-to-clipboard feedback rather than linking to an unverified recipient.
2. **Dedicated Studio Address**: General base confirmed as Ajmer / Jaipur; exact studio address or on-location availability to be confirmed.
3. **Specific Package Pricing**: Rates kept strictly inquiry-based ("Customized Itinerary & Availability on Request").
4. **Client Photography Assets**: High-resolution gallery placeholders clearly identified as demo assets, awaiting Dimple's official master portfolio export.

---

## 6. Implementation Action Plan for V3

1. **Update `src/config/siteConfig.ts`**:
   - Base location updated to `"Ajmer • Jaipur • Available for Destination Travel"`.
   - Update tagline, bio, and social links (Instagram + YouTube).
   - Standardize enquiry template with simplified CTAs.
2. **Update `src/data/servicesData.ts`**:
   - Align 5 service categories to her verified expertise: Bridal Artistry, Engagement & Sangeet, Festive & Party Glam, Editorial & Brand Shoots, and Dimple Glam Masterclasses.
3. **Update Navigation (`src/components/Navbar.tsx`)**:
   - Replace complex labels with `Home`, `About`, `Services`, `My Work`, `Contact`.
   - Standardize CTA to `Book Now`.
   - Clear wordmark `DIMPLE KHINCHI` (removing "Haute Beauté" subtext).
4. **Personalize Hero (`src/components/Hero.tsx`)**:
   - Headline: *"Your Look. Your Moment."*
   - Copy grounded in her Ajmer/Jaipur base and bespoke occasion craft.
   - CTAs: `Book Now` and `View My Work`.
5. **Personalize About (`src/components/About.tsx`)**:
   - Reframe bio around Dimple Khinchi, founder of Dimple Glam Academy, beauty creator, and bespoke artist.
   - Zero fabricated years of experience or luxury brand sponsorships.
6. **Update Craft & Philosophy (`src/components/WhyChooseUs.tsx`)**:
   - Ground tenets in authentic bridal and occasion artistry (Anatomic Calibration, Complexion Longevity, Heritage Synergy, Calm Atmosphere).
7. **Verify & Build**:
   - Test desktop (1440px) and mobile (390px, 375px), ensure 0 console errors, run production build (`npm run build`), and update walkthrough.
