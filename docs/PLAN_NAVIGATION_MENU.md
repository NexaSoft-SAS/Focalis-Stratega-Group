# Plan de Implementación: Menú de Navegación Reutilizable Multi-Ruta

> **Proyecto:** Focalis Stratega Group — Web Estática (Astro + React Islands)  
> **Objetivo:** Proveer navegación fluida, intuitiva y responsive entre el Home (`/`) y las 3 rutas principales (`/sustainability`, `/ai-projects`, `/energy`), con detección de ruta activa y diseño adaptable para Desktop y Mobile.  
> **Fecha:** Noviembre 2026  

---

## 1. Diagnóstico y Necesidad

Actualmente, las rutas de dashboards técnicos (`/sustainability`, `/ai-projects`, `/energy`) no cuentan con una barra de navegación. Esto genera:
- Dificultad para que los prospectos regresen al Home (`/`) o exploren las otras soluciones técnicas sin usar los controles del navegador.
- Falta de cohesión de marca entre los diferentes módulos.
- Pérdida de oportunidades de conversión cruzada entre clientes interesados en agua/carbono, IA y energía solar.

---

## 2. Requerimientos Funcionales y de UX

1. **Rutas a incluir en el menú:**
   - 🏠 **Inicio (Home):** `/` — Portada y brochure corporativo.
   - 🌿 **Sostenibilidad:** `/sustainability` — Dashboard de cumplimiento ambiental (Res. 0631, ISO 14046/14064).
   - ⚡ **Ingeniería IA:** `/ai-projects` — Soluciones de IA aplicada a ingeniería.
   - ☀️ **Transición Solar:** `/energy` — Transición solar fotovoltaica e incentivos Ley 1715.

2. **Resaltado de Ruta Activa:**
   - Normalización de rutas para soportar URLs con o sin trailing slash (ej. `/energy` y `/energy/`).
   - El elemento activo debe distinguirse visualmente mediante un pill con color temático propio:
     - `/sustainability` → Emerald (`bg-emerald-600 text-white shadow-sm shadow-emerald-500/20`)
     - `/ai-projects` → Blue/Indigo (`bg-blue-600 text-white shadow-sm shadow-blue-500/20`)
     - `/energy` → Amber/Orange (`bg-amber-500 text-white shadow-sm shadow-amber-500/20`)
     - `/` → Slate/Dark (`bg-slate-900 text-white shadow-sm`)
   - Los elementos inactivos deben mostrar estados de hover sutiles (`text-gray-600 hover:text-gray-900 hover:bg-gray-100/80`).

3. **Adaptabilidad Responsive:**
   - **Desktop (≥ 768px):** Barra horizontal estilizada con efecto glassmorphism (`backdrop-blur-md bg-white/90`), logo corporativo a la izquierda y enlaces con icono + texto completo a la derecha.
   - **Mobile (< 768px):** Diseño compacto con botones táctiles ergonómicos (área de toque ≥ 44px) organizados en una barra de iconos con micro-etiquetas legibles, garantizando accesibilidad y evitando desbordamientos horizontales.
   - **Posicionamiento:** Sticky flotante superior (`sticky top-3 z-50`) con ancho contenido `max-w-6xl mx-auto` para acompañar el scroll de los dashboards sin estorbar la lectura.

---

## 3. Arquitectura de Archivos

### 3.1 Archivo Nuevo a Crear
- `src/components/Navigation/Navbar.jsx`: Componente React reutilizable con estilos Tailwind, Lucide React icons y soporte para props `currentPath` y detección automática vía `window.location.pathname`.

### 3.2 Archivos Existentes a Modificar
1. `src/pages/sustainability.astro`: Incorporar `<Navbar currentPath="/sustainability" client:load />` encima del widget.
2. `src/pages/ai-projects.astro`: Incorporar `<Navbar currentPath="/ai-projects" client:load />` encima del widget.
3. `src/pages/energy.astro`: Incorporar `<Navbar currentPath="/energy" client:load />` encima del widget.

---

## 4. Plan de Ejecución Paso a Paso

1. **Creación del componente `Navbar.jsx`**:
   - Importación de iconos Lucide: `Home`, `Leaf`, `Cpu`, `Sun`, `ArrowLeft`.
   - Definición del array de navegación con paths, labels, shortLabels, icons y colores activos.
   - Lógica de match de ruta activa (`isActive(path)`).
   - Estructuración JSX para desktop y mobile.
2. **Integración en las 3 páginas Astro**:
   - Importar `Navbar` en `sustainability.astro`, `ai-projects.astro` y `energy.astro`.
   - Posicionar dentro del contenedor de gradiente antes del widget correspondiente.
3. **Verificación y Compilación**:
   - Ejecutar `pnpm build` para asegurar compilación estática limpia de las 5 páginas.
   - Validar que el bundle estático incluya el componente de navegación y los estilos CSS.
4. **Commit & Push**:
   - Confirmar cambios en Git y desplegar en Cloudflare Pages.
