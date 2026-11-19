# Focalis Stratega Group — Agent Instructions

## Overview
Astro 6 static website for **Focalis Stratega Group**, a high-margin PMO firm specializing in regulatory compliance, engineering project management, and AI-assisted technical calculations for Colombian industrial clients (water, energy, carbon, agroindustry). Deployed on Cloudflare Pages as a fully static site. Contains three lead-capture form routes (`/sustainability`, `/ai-projects`, `/energy`) that integrate with an external Google Sheets serverless webhook (with fallback to Django REST API). Digital dashboards and AI algorithms are provided by sister company **Nexasoft SAS**.

## Build & Run

```bash
pnpm install              # Install dependencies
pnpm dev                  # Start dev server
pnpm build                # Production build (static output to dist/)
pnpm preview              # Preview production build locally
```

> **Note:** No Cloudflare server adapter is used (`output: "static"`). The site compiles to pure static HTML with React client islands. Output goes directly to `dist/` (not `dist/client/` + `dist/server/`).

## Tech Stack

- **Framework:** Astro 6 (static output mode)
- **UI:** React 19, Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Component Library:** shadcn/ui (Radix primitives + Tailwind)
- **Charts:** Recharts 3
- **Icons:** Lucide React
- **Package Manager:** pnpm
- **Bundler:** Vite 7 (via Astro)
- **Hosting:** Cloudflare Pages

## Project Structure

```
src/
├── assets/               # Static assets (images, logos, fonts)
├── components/
│   ├── AIProjects/        # AI-assisted engineering page — solutions by regulatory sector
│   │   ├── AIWidget.jsx
│   │   ├── HeaderComponent.jsx
│   │   ├── ChallengeSelector.jsx
│   │   ├── SolutionCards.jsx
│   │   ├── CTAComponent.jsx
│   │   └── data/aiSolutions.js  # Solutions: Res 0631, Ley 1715, Ley 2169, Res 2674
│   ├── brochure/          # Homepage brochure — 4-panel layout with services & regulations table
│   │   ├── BrochureFocalis.jsx
│   │   ├── data/services.js     # 8 services + methodology + cover stats + 3 CTA buttons
│   │   ├── cards/
│   │   ├── layout/
│   │   └── atoms/
│   ├── EnergyWidget/      # Solar energy & Ley 1715 transition dashboard
│   │   ├── EnergyWidget.jsx
│   │   ├── HeaderComponent.jsx
│   │   ├── EnergyMetricsComponent.jsx # 4 KPIs + donut chart + YoY trend
│   │   ├── IncentivesPanel.jsx        # 4 tax incentives (Ley 1715)
│   │   ├── SolarSolutionsCards.jsx    # On-Grid, Off-Grid, Auditoría UPME
│   │   ├── ImplementationTimeline.jsx # 5 phases from diagnosis to RETIE
│   │   ├── SavingsProjection.jsx      # Benchmark bar chart + ROI cards
│   │   ├── CTAComponent.jsx           # Lead capture form (fuente: 'web-energy')
│   │   └── data/energyData.js
│   ├── Navigation/        # Global multi-route navigation
│   │   └── Navbar.jsx     # Responsive sticky navbar (Desktop glassmorphism + Mobile compact icons)
│   ├── SustainabilityWidget/ # Environmental compliance & savings dashboard
│   │   ├── SustainabilityWidget.jsx
│   │   ├── HeaderComponent.jsx
│   │   ├── ImpactoVerdeComponent.jsx
│   │   ├── RoadmapComponent.jsx
│   │   ├── BenchmarkComponent.jsx
│   │   └── CTAComponent.jsx   # Lead capture form (fuente: 'web')
│   └── ui/                # shadcn/ui primitives (button, input, textarea, toast)
├── data/
│   └── mock.js            # Sustainability dashboard mock data
├── hooks/                 # React custom hooks (use-toast, etc.)
├── layouts/
│   └── Layout.astro       # Base HTML layout with dynamic title/description
├── lib/
│   └── utils.js           # cn() utility for Tailwind class merging
├── pages/
│   ├── index.astro        # Homepage → BrochureFocalis (services + regulations table)
│   ├── ai-projects.astro  # AI engineering → Navbar + AIWidget (client:only)
│   ├── energy.astro       # Solar energy → Navbar + EnergyWidget (client:only)
│   ├── renewable-energies.astro # Legacy route (redirected to /energy via _redirects)
│   └── sustainability.astro # Compliance dashboard → Navbar + SustainabilityWidget (client:only)
├── styles/                # Global CSS
public/
├── _redirects             # Cloudflare Pages 301 redirects (/renewable-energies -> /energy)
└── REGULATIONS.md         # Publicly accessible compendium
docs/
├── REGULATIONS.md         # Full Colombian regulatory compendium by sector
└── CLASIFICACION_SERVICIOS.md # Full technical classification of services & engagement model
```

## Business Context & Identity

Focalis sells **compliance-first PMO services**, not software and not construction:

1. **Focalis Stratega Group:** PMO, engineering audits, regulatory dossiers (UPME, CAR, ANLA, DIAN, INVIMA), contractor vetting, and independent site supervision.
2. **Nexasoft SAS:** Sister company providing digital dashboards, telemetry SaaS, and AI models.
3. **Local Contractors:** Subcontracted for civil works and physical mounting under Focalis PMO supervision.

### Colombian Regulatory Framework Integrated in the Codebase

| Sector | Colombian Law / Regulation | ISO Standard | Entity / Authority |
|---|---|---|---|
| Water / Effluents | Res. 0631 de 2015 / Dec. 1076 | ISO 14046 | CAR / ANLA |
| Solar Energy (FNCER) | Ley 1715 de 2014 / Res. UPME 203 | ISO 50001 / ISO 50002 | UPME / DIAN |
| Autogeneration (On-Grid) | Res. CREG 030 de 2018 | NTC 2050 / RETIE | Operador de Red (OR) / ONAC |
| Carbon Neutrality | Ley 2169 de 2021 / Dec. 926 de 2017 | ISO 14064 | DIAN / RENARE |
| Food Agroindustry | Res. 2674 de 2013 (BPM) | ISO 22000 | INVIMA |

Full details in `docs/REGULATIONS.md` and `docs/CLASIFICACION_SERVICIOS.md`.

## Key Patterns & Conventions

- **Navigation:** All dashboard routes (`/sustainability`, `/ai-projects`, `/energy`) include `<Navbar currentPath="..." client:load />` inside the gradient container. It renders responsive icons on mobile and glassmorphism pills on desktop with section-specific active colors (emerald, blue, amber, slate).
- **Lead Capture Forms:** `CTAComponent.jsx` in all 3 dashboard modules submits to `import.meta.env.PUBLIC_BACKEND_URL`. When pointing to Google Apps Script, it uses `mode: 'no-cors'`. Origin tracking:
  - `/sustainability` → `fuente_trafico: 'web'`
  - `/ai-projects` → `fuente_trafico: 'web-ai-projects'`
  - `/energy` → `fuente_trafico: 'web-energy'`
- **Client Islands:** React interactive components use `client:only="react"` or `client:load` in `.astro` pages.
- **Redirects:** Legacy `/renewable-energies` permanently redirects (301) to `/energy` via `public/_redirects`.
- **Environment Variables:** `PUBLIC_BACKEND_URL` (public, exposed to client via Vite) defined in `.env`.

## Code Style

- JSX files use `.jsx` extension (not `.tsx`)
- Tailwind utility classes via `cn()` from `@/lib/utils`
- Path aliases: `@/` maps to `src/`
- Component naming: PascalCase for components, camelCase for hooks and utilities
- Spanish-language UI strings throughout all user-facing components
- Quantitative business metrics: always reference exact financial metrics (ROI, 50% renta, 19% IVA, COP savings) and Colombian norms (Ley 1715, Res. 0631, CREG 030, RETIE).

## Boundaries

- ✅ **Always do:** Run `pnpm build` before committing. Use `cn()` for conditional Tailwind classes. Keep lead form payload structure stable (`empresa`, `contacto_nombre`, `contacto_email`, `telefono`, `mensaje`, `sector`, `fuente_trafico`). Reference Colombian regulations by official number.
- ⚠️ **Ask first:** Adding new dependencies. Changing `astro.config.mjs`. Modifying form submission schemas. Adding new regulatory sectors.
- 🚫 **Never do:** Commit `.env` secrets. Add `@astrojs/cloudflare` adapter (causes 404s on static deployment). Import brand icons from `lucide-react`. Use deprecated react-day-picker v8 classNames. Sell AI/software directly under Focalis brand (that's Nexasoft SAS).
