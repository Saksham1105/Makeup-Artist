# NOIR BEAUTÉ V2 — Audit & Improvement Strategy
**Client**: Dimple Khinchi ([@dimple_khinchi32](https://www.instagram.com/dimple_khinchi32/))  
**Agency**: MAZRIK  
**Project**: NOIR BEAUTÉ V2 Upgrade

---

## 1. Audit of Current Implementation

### A. Hero First Impression (3-Second Test)
- **Current State**: Strong Bodoni headline and portrait, but lacks refined entrance orchestration and can feel slightly static.
- **Weakness**: Top announcement bar can compete with the primary hero title. The portrait crop needs strict focal alignment on mobile.
- **V2 Solution**:
  - Implement a staggered CSS entrance sequence (Micro-label &rarr; Headline reveal &rarr; Supporting copy &rarr; CTA &rarr; Portrait reveal).
  - Clean focal alignment (`object-position: center 20%`) so the bridal makeup focus is immediately visible across 375px–1440px viewports.
  - Remove redundant floating chips over the portrait to maximize editorial gravitas.

### B. Visual Rhythm & Surface Contrast
- **Current State**: Monotonous dark palette across almost all sections (Ink Black `#121110` and Obsidian `#1A1817`).
- **Weakness**: Lacks the breathing room and editorial contrast seen in premier fashion publications (e.g. Vogue, Kinfolk, Harper's Bazaar).
- **V2 Solution**:
  - Introduce an intentional **Warm Porcelain (`#F6F2EC`) high-contrast editorial section** for *The Tenets of Our Craft* (Philosophy).
  - This establishes an unforgettable light-and-dark editorial rhythm:
    1. Hero (Ink Black `#121110`)
    2. Philosophy / Vision (Obsidian `#1A1817`)
    3. Artistry Offerings (Ink Black `#121110`)
    4. The Craft / Tenets (**Warm Porcelain `#F6F2EC` Contrast Surface**)
    5. Curated Lookbook (Obsidian `#1A1817`)
    6. Instagram Feature (Ink Black `#121110`)
    7. Reserve Consultation Drafter (Obsidian `#1A1817`)
    8. Footer (Ink Black `#121110`)

### C. Content Trust & Unverified Claims (Strict Phase 5 Compliance)
- **Current State**: Some reference-site specifics (e.g., specific luxury cosmetics brand lists like "Charlotte Tilbury • NARS", specific season booking announcements) were carried over during initial research.
- **Weakness**: Dimple Khinchi has not yet approved specific product kits, specific package inclusions, or specific seasonal dates.
- **V2 Solution**:
  - Remove all fabricated brand claims ("Charlotte Tilbury, NARS, Tom Ford..."). Replace with honest, professional wording: *"Tailored Professional Formulations • Customized for Skin Type & Ceremony Requirements"*.
  - Neutralize season notices to an honest client draft notice: *"Appointment Reservations • Select Dates Available"*.
  - Clearly flag all service packages and descriptions as provisional concepts pending client handover.

### D. Booking Conversion & WhatsApp Journey
- **Current State**: Service WhatsApp button triggers a general modal; appointment drafter is functional but lacks an interactive review/reset step and clipboard confirmation.
- **Weakness**: Need seamless service-specific prefilled messages adhering to the client specification:
  `"Hi Dimple, I would like to enquire about [service name]. Could you please share your availability, packages, and booking details?"`
- **V2 Solution**:
  - Standardize all service enquiry buttons to generate this exact personalized message.
  - Enhance the consultation drafter with:
    - Interactive preview state before sending.
    - Verified clipboard feedback (only confirms when `navigator.clipboard.writeText` succeeds).
    - Quick reset/edit option.
    - Inclusion of only fields filled by the client.
  - Implement an elegant, non-intrusive **Mobile Floating Action Bar**:
    - Displays "Book Appointment" CTA on mobile viewports only.
    - Automatically hides when the contact/reservation section is visible in the viewport.
    - Dismissible with a subtle toggle.

### E. Motion Design & Interaction Quality
- **Current State**: Basic transitions on scroll and hover.
- **V2 Solution**:
  - Refined scroll transition on the signature navbar with `requestAnimationFrame` throttling and active section tracking.
  - Lightweight scroll-triggered reveal animation utility using `IntersectionObserver` that respects `prefers-reduced-motion: reduce`.
  - Micro-interactions on buttons, links, and portfolio cards with smooth transforms.

---

## 2. Prioritized Implementation Checklist

1. [x] **Audit & Documentation**: Complete `research/v2-improvement-audit.md`.
2. [ ] **Content Normalization & Centralized Config**: Update `src/config/siteConfig.ts` and `src/data/servicesData.ts` to neutralize all unverified brand/season claims.
3. [ ] **Contrast Surface Architecture**: Refactor `src/components/WhyChooseUs.tsx` into a high-contrast Warm Porcelain editorial section.
4. [ ] **Hero Perfection**: Elevate `src/components/Hero.tsx` with staggered entrance reveals, focal centering, and uncluttered composition.
5. [ ] **Services Refinement**: Update `src/components/Services.tsx` with the exact standardized WhatsApp enquiry format and provisional package notices.
6. [ ] **Consultation Drafter & Safe WhatsApp Modal**: Upgrade `src/components/BookingContact.tsx` and `src/components/WhatsAppModal.tsx` with validation, message preview, verified copy feedback, and reset capabilities.
7. [ ] **Mobile Floating Booking Action**: Create `src/components/MobileBookingBar.tsx` for discreet mobile booking access that auto-hides at the contact section.
8. [ ] **Motion & Reveal Engine**: Integrate scroll reveal observer and entrance keyframes in `src/index.css`.
9. [ ] **Build & Browser Verification**: Validate build (`npm run build`), test desktop (1440px) and mobile (390px), capture screenshots, and update walkthrough documentation.
