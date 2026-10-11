# 💄 Dimple Khinchi — Noir Beauté | Makeup Artist & Beauty Creator

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Code Style](https://img.shields.io/badge/Linter-Oxlint-blueviolet)](https://oxc.rs/)

A luxury, high-fashion editorial web experience for **Dimple Khinchi** — Makeup Artist, Beauty Creator, and founder of **Dimple Glam Academy** (Ajmer & Jaipur, Rajasthan).

Designed with high-contrast noir typography, warm metallic accents, smooth fluid transitions, and a streamlined booking workflow.

---

## ✨ Features

- **🖤 Editorial Aesthetic**: Bespoke dark luxury palette (`#121110`, `#7A2837`, `#F6F2EC`) paired with *Bodoni Moda* serif and *Plus Jakarta Sans* typography.
- **👰 Grounded Offerings**: Curated portfolio & service tiers for Bridal Ceremony, Engagement Radiance, Party & Festive Glam, Editorial Shoots, and Masterclasses.
- **🖼️ Interactive Portfolio & Lightbox**: Dynamic category filtering (Bridal, Editorial, Academy) with an immersive modal lightbox for high-resolution inspection.
- **📱 Mobile-First Quick Bar**: Floating sticky appointment bar on mobile with smart auto-hiding near the booking section.
- **💬 Smart Consultation Drafter**: Two-step consultation builder creating standardized WhatsApp enquiry messages with verified one-click clipboard copy safeguards.
- **⚙️ Centralized Configuration**: Fully modular settings via `src/config/siteConfig.ts` for quick customization of contacts, socials, and service defaults.
- **⚡ Blazing Fast Performance**: Powered by Vite 8 and React 19 for instant hydration and sub-second builds.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Linting** | [Oxlint](https://oxc.rs/) |
| **Typography** | Google Fonts (*Bodoni Moda* & *Plus Jakarta Sans*) |

---

## 📂 Project Structure

```text
├── public/                 # Static assets & SVG icons
├── research/               # Grounded market & social research documentation
├── src/
│   ├── assets/             # Project images & local media
│   ├── components/         # Reusable React UI components
│   │   ├── About.tsx           # Artist biography & academy presence
│   │   ├── BookingContact.tsx  # Two-step booking drafter & enquiry form
│   │   ├── Footer.tsx          # Brand footer & social links
│   │   ├── Hero.tsx            # Full-viewport editorial hero section
│   │   ├── Icons.tsx           # Custom branded vector icons
│   │   ├── InstagramSection.tsx# Social highlights & live feed previews
│   │   ├── LightboxModal.tsx   # Image zoom & gallery preview modal
│   │   ├── MobileBookingBar.tsx# Sticky bottom reservation bar for mobile
│   │   ├── Navbar.tsx          # Responsive navigation header & drawer
│   │   ├── Portfolio.tsx       # Filterable showcase grid
│   │   ├── Services.tsx        # Structured services & tier cards
│   │   ├── WhatsAppModal.tsx   # Direct consultation helper modal
│   │   └── WhyChooseUs.tsx     # Value propositions & hygiene standards
│   ├── config/
│   │   └── siteConfig.ts   # Centralized site metadata & client handles
│   ├── data/               # Static services & portfolio dataset
│   ├── App.tsx             # Root page layout
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global typography & design tokens
├── index.html              # HTML shell & SEO meta tags
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Saksham1105/Makeup-Artist.git
   cd Makeup-Artist
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

- `npm run dev` — Starts the local Vite development server with Hot Module Replacement (HMR).
- `npm run build` — Runs TypeScript type-checking (`tsc -b`) and generates production bundles in `dist/`.
- `npm run preview` — Locally previews the generated production build.
- `npm run lint` — Runs ultra-fast linting checks via Oxlint.

---

## 🔧 Configuration

All site copy, links, contact details, and brand handles can be customized in `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  artistName: 'Dimple Khinchi',
  tagline: 'Your Look. Your Moment.',
  eyebrow: 'MAKEUP ARTIST • BEAUTY CREATOR',
  instagramHandle: '@dimple_khinchi32',
  instagramUrl: 'https://www.instagram.com/dimple_khinchi32/',
  youtubeHandle: '@Dimpleglamacademy',
  youtubeUrl: 'https://www.youtube.com/@Dimpleglamacademy',
  whatsappNumber: '', // Add client WhatsApp number here
  locationPlaceholder: 'Ajmer • Jaipur • Available for Destination Travel',
  emailPlaceholder: 'enquiries@dimplekhinchi.com',
  // ...
};
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.
