# Garg Dental Clinic & Implant Centre — Web Platform

Production-ready, accessible, and conversion-focused web application for **Garg Dental Clinic & Implant Centre** located on The Mall Road, Kapurthala, Punjab.

---

## 🚀 Key Technical Highlights

- **Framework**: React 18, TypeScript, Vite
- **Styling**: Modular React CSS Modules with custom CSS Design Tokens (`src/index.css`)
- **Routing**: Lightweight client-side router with `window.history.pushState` and `popstate` event synchronization
- **Accessibility**: WCAG 2.2 AA compliant focus rings (`:focus-visible`), skip-to-content links, screen reader landmarks, and `@media (prefers-reduced-motion: reduce)` support
- **Local SEO**: Dynamic Canonical URLs, Open Graph tags, Twitter Cards, `sitemap.xml`, `robots.txt`, and Schema.org `Dentist` / `LocalBusiness` / `BreadcrumbList` JSON-LD markup
- **Analytics**: Privacy-conscious conversion event tracking without collecting patient personal details

---

## 📁 Repository Directory Structure

```text
dental-2/
├── public/
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # Search engine XML sitemap for 11 public routes
├── src/
│   ├── analytics/              # Privacy-conscious event tracking system
│   ├── components/
│   │   ├── cards/              # Reusable cards (DoctorCard, ReviewCard, ClinicInformationCard, etc.)
│   │   ├── forms/              # Validated appointment form, inputs, textareas, checkboxes
│   │   ├── layout/             # Navbar, Footer, MobileActionBar
│   │   ├── sections/           # Modular page sections (Hero, FAQ, Philosophy, CuratedGallery)
│   │   └── ui/                 # Atomic UI components (Button, Card, Lightbox, Modals, Sliders)
│   ├── config/
│   │   └── clinic.config.ts    # Centralized source of truth for business data & NAP consistency
│   ├── data/                   # Structured data models (treatments, doctors, reviews, gallery, cases)
│   ├── pages/                  # Page views (AboutPage, Treatments, Doctors, Reviews, Gallery, etc.)
│   ├── seo/                    # MetaHead and StructuredData JSON-LD generators
│   ├── services/               # Appointment validation and submission services
│   ├── types/                  # TypeScript interface definitions
│   ├── App.tsx                 # Root application & client router
│   ├── index.css               # Design system custom properties & global reset
│   └── main.tsx                # React root entry point
├── CLIENT-HANDOFF.md           # Client launch readiness summary
├── CONTENT-UPDATE-GUIDE.md     # Guide for updating clinic information & content
├── README.md                   # Repository technical documentation
└── tsconfig.json               # TypeScript compiler configuration (verbatimModuleSyntax)
```

---

## 💻 Local Development Setup

1. **Clone & Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Development Server**:
   ```bash
   npm run dev
   ```

3. **Type Check & Linting**:
   ```bash
   npx tsc --noEmit
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🔒 Security & Privacy Practices

1. **Patient Data Protection**: No patient personal data (names, phone numbers, emails, medical history) is sent to analytics or stored in client-side storage.
2. **Anti-Spam Protection**: Appointment form features an invisible honeypot field (`websiteHoneypot`) to reject bot submissions.
3. **Strict Zero Fabrication**: Unconfirmed doctor credentials or external URLs are cleanly managed via explicit placeholders (`[DOCTOR NAME]`, `[GOOGLE MAPS DIRECTIONS URL]`).
