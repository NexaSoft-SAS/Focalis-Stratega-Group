# Focalis Stratega Group — Agent Instructions

## Overview
Astro 6 presentation website for an AI consultancy agency focused on engineering projects and sustainability. Deployed on Cloudflare Pages. Contains two lead-capture form routes (`/ai-projects`, `/sustainability`) that POST to an external Django REST API.

## Build & Run

```bash
pnpm install              # Install dependencies
pnpm dev                  # Start dev server (runs on Cloudflare workerd runtime)
pnpm build                # Production build for Cloudflare Pages
pnpm preview              # Preview production build locally
```

## Tech Stack

- **Framework:** Astro 6 (server mode, static output)
- **UI:** React 19, Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Component Library:** shadcn/ui (Radix primitives + Tailwind)
- **Adapter:** `@astrojs/cloudflare` v13 (workerd-based dev server)
- **Package Manager:** pnpm
- **Parser:** oxc-parser (Rust-based JS/TS parser, devDependency)
- **Bundler:** Vite 7 (via Astro)

## Project Structure

```
src/
├── assets/               # Static assets (images, fonts)
├── components/
│   ├── AIProjects/        # AI Projects page widgets + CTAComponent (lead form)
│   ├── BrochureFocalis/   # Homepage brochure component
│   ├── RenewableEnergies/ # Renewable energies page component
│   ├── SustainabilityWidget/ # Sustainability page widgets + CTAComponent (lead form)
│   └── ui/                # shadcn/ui primitives (button, input, calendar, resizable, etc.)
├── data/                  # Static data files
├── hooks/                 # React custom hooks (use-toast, etc.)
├── layouts/
│   └── Layout.astro       # Base HTML layout with metadata
├── lib/
│   └── utils.js           # cn() utility for Tailwind class merging
├── pages/
│   ├── index.astro        # Homepage → renders BrochureFocalis
│   ├── ai-projects.astro  # AI Projects → renders AIWidget (client:only)
│   ├── renewable-energies.astro
│   └── sustainability.astro # Sustainability → renders SustainabilityWidget (client:only)
└── styles/                # Global CSS
```

## Key Patterns

- **Lead Capture Forms:** `src/components/AIProjects/CTAComponent.jsx` and `src/components/SustainabilityWidget/CTAComponent.jsx` use standard React `useState` + `fetch` POST to `import.meta.env.PUBLIC_BACKEND_URL` + `/api/diagnostico/`
- **Client Islands:** React components use `client:only="react"` or `client:load` directives in `.astro` pages
- **shadcn/ui Components:** Located in `src/components/ui/`. Calendar uses react-day-picker v10, Resizable uses react-resizable-panels v4
- **Environment Variables:** `PUBLIC_BACKEND_URL` (public, exposed to client) defined in `.env`

## Code Style

- JSX files use `.jsx` extension (not `.tsx`)
- Tailwind utility classes via `cn()` from `@/lib/utils`
- Path aliases: `@/` maps to `src/`
- Component naming: PascalCase for components, camelCase for hooks
- Spanish-language UI strings in form components

## Boundaries

- ✅ **Always do:** Run `pnpm build` before deploying. Use `cn()` for conditional Tailwind classes. Keep lead form API contracts stable.
- ⚠️ **Ask first:** Adding new dependencies. Changing `astro.config.mjs`. Modifying form submission endpoints or data schemas. Changing Cloudflare adapter settings.
- 🚫 **Never do:** Commit `.env` secrets. Modify `node_modules/`. Import brand icons from `lucide-react` (removed in v1). Use deprecated react-day-picker v8 classNames (`table`, `day_selected`, `IconLeft`).
