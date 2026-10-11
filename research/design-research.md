# Design Research & Strategic Redirection
**Client**: Dimple Khinchi ([@dimple_khinchi32](https://www.instagram.com/dimple_khinchi32/))  
**Agency**: MAZRIK (Digital Product & Web Development Agency)  
**Project**: Complete Visual & Experience Redesign

---

## 1. Reference Website Analysis

### A. Nikks Makeup Artist — Nikita Jain, Mumbai
*URL*: [https://www.nikksmakeupartist.com/](https://www.nikksmakeupartist.com/)

- **Observed Design Characteristics**:
  - Deep onyx canvas (`bg-onyx`) accented with metallic rose gold gradients and ivory content containers.
  - Fullscreen cinematic hero featuring a high-impact Indian bridal portrait with high-contrast display typography.
  - Transparent-to-frosted navigation transition with a prominent "Book Consultation" rounded pill CTA.
  - Detailed service breakdowns specifying inclusions, exclusions, product tiers (MAC, NARS, Charlotte Tilbury, Dior), and dedicated WhatsApp booking links per package.
- **Strengths**:
  - Dramatic, high-fashion impression that immediately justifies luxury pricing.
  - Direct conversion points with pre-filled WhatsApp URLs that reduce client friction.
- **Weaknesses**:
  - Dense text layouts in service sections that can feel overwhelming on smaller mobile screens.
- **Ideas Influencing Dimple's Redesign**:
  - Dark-canvas luxury contrast for high-impact hero and portfolio presentation.
  - Pre-filled WhatsApp URLs specific to individual service selections.
  - Clear product-grade transparency (highlighting international high-performance beauty standards).
- **What Will Deliberately Be Different**:
  - Avoid repeating standard rounded card blocks; adopt an editorial haute-couture layout with varied proportions, asymmetric text placement, and cleaner typography-led service rows.

---

### B. EKA Makeup Artist — Munich & Worldwide
*URL*: [https://eka.makeup/](https://eka.makeup/) (Redirects to `/en/`)

- **Observed Design Characteristics**:
  - Strict international editorial aesthetic inspired by high-fashion print campaigns.
  - Minimalist monochromatic color scheme with stark black, pristine white, and rich photography.
  - Heavy focus on skin texture, natural lighting, and unretouched elegance.
  - Direct FAQ schema and structured breakdown addressing international destination weddings vs. local appointments.
- **Strengths**:
  - Exceptional authority and artistic authenticity without gimmickry.
  - Zero clutter; photography commands complete attention.
- **Weaknesses**:
  - Can feel slightly austere and lacks the vibrant warmth celebrated in traditional Indian bridal celebrations.
- **Ideas Influencing Dimple's Redesign**:
  - Editorial spacing, generous negative space, and disciplined layout discipline.
  - Restrained iconography and focus on photography quality.
- **What Will Deliberately Be Different**:
  - Dimple's brand embraces Indian bridal richness, warm jewelry reflections, and celebratory romance alongside editorial rigor. We will infuse deep plum and oxblood tones to bridge high fashion with bridal warmth.

---

### C. Tanya Goyal — Delhi NCR & Chandigarh
*URL*: [https://www.tanyagoyalmakeup.com/](https://www.tanyagoyalmakeup.com/)

- **Observed Design Characteristics**:
  - Warm charcoal (`#2C2825`), linen, and soft champagne glow palette.
  - Clean sticky header with subtle backdrop blur and an announcement bar highlighting booking season availability.
  - "Skin-First Artistry" engineered narrative with high credibility.
  - Interactive "Check Your Date" appointment widget on the first screen.
  - Tabular package comparison detailing exact inclusions and pricing-on-request logic.
- **Strengths**:
  - Outstanding booking conversion UX; clear calls to action and instant date inquiry feedback.
  - Cohesive typography pairing (*Cormorant Garamond* / *Outfit* / *DM Sans*).
- **Weaknesses**:
  - Relies heavily on warm beige/linen surfaces that can resemble generic luxury salon templates.
- **Ideas Influencing Dimple's Redesign**:
  - An interactive appointment reservation drafter with occasion/date/venue inputs.
  - Season booking awareness ("Autumn/Winter Bridal Bookings Open").
- **What Will Deliberately Be Different**:
  - Move completely away from the generic beige/champagne template toward the bolder **NOIR BEAUTÉ** editorial direction.
  - Replace Cormorant Garamond with the sharper, high-contrast **Bodoni Moda** for high-fashion drama, paired with **Plus Jakarta Sans**.

---

### D. Ranu Soni Makeup — Jaipur & Mumbai
*URL*: [https://www.ranusonimakeup.com/](https://www.ranusonimakeup.com/)

- **Observed Design Characteristics**:
  - Direct celebrity and royal bridal positioning with prominent contact channels.
  - Clear separation between Bridal, Shoot/Commercial, and Permanent Makeup (PMU).
- **Strengths**:
  - Unambiguous client contact and destination availability notice.
- **Weaknesses**:
  - Inconsistent typography hierarchy, repetitive navigation elements, and template-like appearance.
- **Ideas Influencing Dimple's Redesign**:
  - Highlighting destination wedding capabilities and studio base clearly in the header/hero meta.
- **What Will Deliberately Be Different**:
  - Impeccable art direction, fluid navigation transitions, and strictly zero duplicate links or visual noise.

---

## 2. Synthesis & New Creative Direction: NOIR BEAUTÉ

| Dimension | Previous State | New Direction: NOIR BEAUTÉ |
| :--- | :--- | :--- |
| **Aesthetic Concept** | Soft beige bridal salon | High-fashion editorial beauty magazine meets couture bridal artistry |
| **Color System** | Warm Ivory (`#F8F4EF`), Champagne (`#D8BE9A`), Nude Beige (`#E8D9CC`), Espresso (`#34241F`) | Ink Black (`#121110`), Obsidian (`#1A1817`), Deep Plum (`#2E1E26`), Oxblood (`#7A2837`), Warm Porcelain (`#F6F2EC`), Antique Silver (`#C4BCB5`) |
| **Typography Display** | *Cormorant Garamond* (traditional serif) | *Bodoni Moda* (high-contrast, editorial display serif with dramatic vertical stress) |
| **Typography Interface** | *DM Sans* | *Plus Jakarta Sans* (geometric, ultra-clean, contemporary sans-serif) |
| **Navigation** | Standard top bar | Dynamic signature navigation: Invisible/integrated over hero → smooth transition to floating frosted obsidian pill bar with active section indicators |
| **Services Section** | Generic card grid | Typography-led editorial rows with alternating photography panels, luxury product badges, and direct WhatsApp enquiry actions |
| **Portfolio Lookbook** | Uniform 3-column grid | Asymmetric couture lookbook with varied aspect ratios, hover overlays, and accessible full-screen lightbox |
| **Booking Journey** | Basic text box | High-contrast editorial reservation drafter with live occasion/date formatting and safe WhatsApp modal fallback |

---

## 3. Deliberate Strategic Distinctions for Dimple Khinchi

1. **Intimate Influencer Artistry**: While large agencies look sterile, Dimple's site balances couture editorial grandeur with the intimate personal approach of a dedicated artist who handles only one bride per ceremony.
2. **Zero Fake Claims**: In adherence to MAZRIK standards, all unverified claims, fake numbers, and fabricated awards are strictly avoided. Draft narratives are labeled, and contact fallback modals handle missing phone configurations gracefully.
3. **Performance & Motion**: Smooth CSS transforms and opacity transitions with `requestAnimationFrame` navigation scroll handling, strictly avoiding heavy third-party animation libraries or scroll-jacking.
