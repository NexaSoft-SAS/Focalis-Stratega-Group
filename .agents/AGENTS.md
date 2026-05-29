# Focalis Stratega Group — Agent Instructions

## Overview
Astro 6 static website for **Focalis Stratega Group**, a high-margin PMO firm specializing in regulatory compliance, engineering project management, and AI-assisted technical calculations for Colombian industrial clients (water, energy, carbon, food processing). Deployed on Cloudflare Pages as a fully static site. Contains two lead-capture form routes (`/ai-projects`, `/sustainability`) that POST to an external Django REST API. Software/SaaS tooling is provided separately by **Nexasoft SAS**.

## Build & Run

```bash
pnpm install              # Install dependencies
pnpm dev                  # Start dev server
pnpm build                # Production build (static output to dist/)
pnpm preview              # Preview production build locally
```

> **Note:** No Cloudflare adapter is used. The site compiles to pure static HTML with React client islands. Output goes directly to `dist/` (not `dist/client/` + `dist/server/`).

## Tech Stack

- **Framework:** Astro 6 (static output mode)
- **UI:** React 19, Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Component Library:** shadcn/ui (Radix primitives + Tailwind)
- **Package Manager:** pnpm
- **Bundler:** Vite 7 (via Astro)

## Project Structure

```
src/
├── assets/               # Static assets (images, fonts)
├── components/
│   ├── AIProjects/        # AI-assisted engineering page — solutions by regulatory sector
│   │   └── data/aiSolutions.js  # Solutions data: Res 0631, Ley 1715, Ley 2169, Res 2674
│   ├── brochure/          # Homepage brochure — 4-panel layout with services & regulations table
│   │   └── data/services.js     # 8 services + methodology + badges + CTA data
│   ├── RenewableEnergies/ # Renewable energies showcase
│   ├── SustainabilityWidget/ # Compliance & savings dashboard + lead capture form
│   └── ui/                # shadcn/ui primitives (button, input, calendar, etc.)
├── data/
│   └── mock.js            # Dashboard mock data (roadmap, certifications, metrics)
├── hooks/                 # React custom hooks (use-toast, etc.)
├── layouts/
│   └── Layout.astro       # Base HTML layout with dynamic title/description
├── lib/
│   └── utils.js           # cn() utility for Tailwind class merging
├── pages/
│   ├── index.astro        # Homepage → BrochureFocalis (services + regulations table)
│   ├── ai-projects.astro  # AI engineering → AIWidget (client:only)
│   ├── renewable-energies.astro
│   └── sustainability.astro # Compliance dashboard → SustainabilityWidget (client:only)
└── styles/                # Global CSS
REGULATIONS.md             # Full Colombian regulatory compendium by sector
```

## Business Context

Focalis sells **compliance-first PMO services**, not software. Key regulatory frameworks integrated into the UI:

| Sector | Colombian Law | ISO Standard | Entity |
|--------|--------------|-------------|--------|
| Water/Effluents | Res. 0631 de 2015 | ISO 14046 | CAR / ANLA |
| Energy | Ley 1715 de 2014 | ISO 50001 | UPME |
| Carbon | Ley 2169 / Decreto 926 | ISO 14064 | DIAN |
| Food (BPM) | Res. 2674 de 2013 | ISO 22000 | INVIMA |

Full details in `REGULATIONS.md` at the project root.

## Key Patterns

- **Lead Capture Forms:** `CTAComponent.jsx` in both AIProjects and SustainabilityWidget use `fetch` POST to `import.meta.env.PUBLIC_BACKEND_URL` + `/api/diagnostico/`
- **Client Islands:** React components use `client:only="react"` or `client:load` in `.astro` pages
- **Brochure Regulations Table:** Page 4 of the brochure renders an inline `RegulationsTable` component with Colombian norms by sector
- **Environment Variables:** `PUBLIC_BACKEND_URL` (public, exposed to client) defined in `.env`

## Code Style

- JSX files use `.jsx` extension (not `.tsx`)
- Tailwind utility classes via `cn()` from `@/lib/utils`
- Path aliases: `@/` maps to `src/`
- Component naming: PascalCase for components, camelCase for hooks
- Spanish-language UI strings throughout all components

## Boundaries

- ✅ **Always do:** Run `pnpm build` before deploying. Use `cn()` for conditional Tailwind classes. Keep lead form API contracts stable. Reference Colombian regulations by their official number (e.g., "Res. 0631", not "water law").
- ⚠️ **Ask first:** Adding new dependencies. Changing `astro.config.mjs`. Modifying form submission endpoints or data schemas. Adding new regulatory sectors.
- 🚫 **Never do:** Commit `.env` secrets. Add `@astrojs/cloudflare` adapter (causes 404s on static deployment). Import brand icons from `lucide-react`. Use deprecated react-day-picker v8 classNames. Sell AI/software directly under Focalis brand (that's Nexasoft SAS).
