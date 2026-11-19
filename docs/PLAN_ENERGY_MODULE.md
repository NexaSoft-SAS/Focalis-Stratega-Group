# Plan de Implementación Técnica: Módulo `/energy` — Transición Energética Solar y Cumplimiento Ley 1715

> **Proyecto:** Focalis Stratega Group — Web Estática (Astro + React Islands)
> **Fecha:** Noviembre 2026
> **Autor:** Equipo de Desarrollo / Antigravity Agent
> **Estado:** Pendiente de ejecución

---

## Índice

1. [Objetivo y Alcance](#1-objetivo-y-alcance)
2. [Marco Regulatorio y Legal Aplicable](#2-marco-regulatorio-y-legal-aplicable)
3. [Arquitectura de Referencia del Proyecto](#3-arquitectura-de-referencia-del-proyecto)
4. [Inventario de Archivos a Crear](#4-inventario-de-archivos-a-crear)
5. [Inventario de Archivos a Modificar](#5-inventario-de-archivos-a-modificar)
6. [Especificación Detallada de Componentes](#6-especificación-detallada-de-componentes)
7. [Especificación del Archivo de Datos (`energyData.js`)](#7-especificación-del-archivo-de-datos-energydatajs)
8. [Integración con Google Sheets (Formulario)](#8-integración-con-google-sheets-formulario)
9. [Paleta de Colores y Consistencia Visual](#9-paleta-de-colores-y-consistencia-visual)
10. [Plan de Verificación](#10-plan-de-verificación)
11. [Prompt de Ejecución para Nuevo Chat](#11-prompt-de-ejecución-para-nuevo-chat)

---

## 1. Objetivo y Alcance

Crear una nueva ruta `/energy` en el sitio web de Focalis Stratega Group que funcione como un **dashboard interactivo de transición energética solar**, enfocado en:

- **Impulsar la adopción de energía solar fotovoltaica** en industria emergente colombiana (pequeñas plantas, alcaldías, manufactura).
- **Cuantificar los beneficios financieros y tributarios reales** de la Ley 1715 de 2014 (exclusión de IVA, deducción del 50% en renta, exención arancelaria, depreciación acelerada).
- **Presentar un proceso claro de implementación** (diagnóstico → diseño → trámite UPME → montaje → monitoreo).
- **Capturar leads** a través de un formulario integrado con Google Sheets (misma infraestructura serverless de costo cero ya implementada).

> [!IMPORTANT]
> Este módulo **NO vende paneles solares directamente**. Vende la **dirección técnica PMO** para estructurar el proyecto solar, tramitar los incentivos ante la UPME y supervisar contratistas locales de montaje. Los equipos son adquiridos por el cliente a proveedores homologados por Focalis.

### Relación con la ruta existente `/renewable-energies`

La ruta `/renewable-energies` y su componente `RenewableEnergiesComponent.jsx` están actualmente **incompletos** (contienen solo texto placeholder sobre sistemas off-grid/on-grid). La nueva ruta `/energy` **reemplaza conceptualmente** esa página con un módulo completo siguiendo el patrón de dashboard ya establecido en `/sustainability` y `/ai-projects`.

**Decisión requerida:** Redirigir `/renewable-energies` → `/energy` vía Cloudflare Pages `_redirects`, o bien eliminar la ruta antigua. El plan asume que se mantiene `/renewable-energies` con un redirect 301.

---

## 2. Marco Regulatorio y Legal Aplicable

Este es el marco normativo colombiano que sustenta cada métrica, indicador y texto del módulo. **Todos los textos de la interfaz deben hacer referencia explícita a estas normas.**

### 2.1 Ley 1715 de 2014 — Transición Energética e Incentivos Tributarios

**Entidad reguladora:** UPME (Unidad de Planeación Minero-Energética), ANLA.

| Incentivo | Base Legal | Beneficio Cuantificable |
|-----------|-----------|-------------------------|
| Deducción Especial de Renta | Art. 11, Ley 1715 | Hasta el **50%** del valor de la inversión deducible del impuesto sobre la renta, en un plazo de hasta **15 años** |
| Exclusión de IVA | Art. 12, Ley 1715 | **19%** de exclusión de IVA sobre equipos, maquinaria y servicios para proyectos de FNCER y eficiencia energética |
| Exención de Aranceles | Art. 13, Ley 1715 | Exención total de derechos arancelarios sobre equipos importados no fabricados nacionalmente |
| Depreciación Acelerada | Art. 14, Ley 1715 | Tasa de depreciación anual **no inferior al 20%** (vs. 5-10% normal) |

### 2.2 Resolución UPME 203 de 2020

Establece los requisitos técnicos y el procedimiento de solicitud de certificación de beneficios tributarios ante la UPME:

1. Registro del proyecto en el SIREE (Sistema de Información de Registro de Proyectos de Energía).
2. Presentación de estudio de viabilidad técnica y financiera.
3. Certificación UPME del proyecto como elegible para incentivos.
4. Radicación ante la DIAN para aplicar las exclusiones.

### 2.3 Resolución CREG 030 de 2018 — Autogeneración a Pequeña Escala

Regula la **generación distribuida** y la entrega de excedentes a la red (net metering / net billing):

- Permite a usuarios con potencia instalada ≤ 1 MW vender excedentes de energía solar a la red.
- El crédito energético se calcula a precio de bolsa o tarifa regulada según contrato.
- **Aplica directamente a pequeñas plantas industriales y sedes de alcaldías** que son el mercado objetivo de Focalis.

### 2.4 Estándares ISO de Soporte

| Estándar | Aplicación en el módulo |
|----------|------------------------|
| **ISO 50001** | Sistema de gestión energética — referencia para el diagnóstico de línea base |
| **ISO 50002** | Auditorías energéticas — metodología del Diagnóstico Exprés Energético |
| **ISO 50006** | Indicadores de desempeño energético (IDEn) y líneas base — alimenta las métricas del dashboard |
| **ISO 14064** | Cuantificación de emisiones evitadas por generación solar — complementa métricas de carbono |

### 2.5 NTC 2050 / RETIE (Colombia)

- **NTC 2050 (Código Eléctrico Colombiano):** Norma técnica para instalaciones eléctricas en baja tensión — toda instalación solar debe cumplir.
- **RETIE (Reglamento Técnico de Instalaciones Eléctricas):** Certificación obligatoria para cualquier instalación eléctrica nueva, incluidos sistemas fotovoltaicos. Expedido por el Ministerio de Minas y Energía.

> [!CAUTION]
> Toda instalación solar en Colombia **requiere certificación RETIE** otorgada por un organismo de inspección acreditado. Este es un costo adicional que debe mencionarse en la sección de fases del dashboard para mantener transparencia con el prospecto.

---

## 3. Arquitectura de Referencia del Proyecto

### 3.1 Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 6 (compilación estática, `output: "static"`) |
| Islas interactivas | React 19 con `client:only="react"` |
| Estilos | Tailwind CSS 4 (vía `@tailwindcss/vite`) |
| Gráficos | Recharts 3 |
| Iconos | Lucide React |
| UI Components | Radix UI + shadcn/ui (Button, Input, Textarea, Toast) |
| Formulario backend | Google Apps Script → Google Sheets (`mode: 'no-cors'`) |
| Despliegue | Cloudflare Pages (build estático desde GitHub `main`) |

### 3.2 Patrón de Dashboard (Referencia: `/sustainability` y `/ai-projects`)

```
src/pages/{route}.astro              ← Página Astro (Layout + island)
  └── src/components/{Module}/
        ├── {Module}Widget.jsx        ← Orquestador principal (state + composición)
        ├── HeaderComponent.jsx       ← Hero header con gradiente
        ├── {Indicadores}.jsx         ← Métricas / KPIs con gráficos Recharts
        ├── {Fases/Roadmap}.jsx       ← Timeline o proceso de implementación
        ├── {Soluciones/Cards}.jsx    ← Tarjetas expandibles de servicios
        ├── CTAComponent.jsx          ← Formulario de captación + botón CTA
        └── data/
              └── {dataFile}.js       ← Datos, textos y configuración del módulo
```

### 3.3 Convenciones Críticas

1. **`client:only="react"`** en la página `.astro` para islands interactivos con hooks.
2. **`import.meta.env.PUBLIC_BACKEND_URL`** para la URL del webhook Google Sheets.
3. **`fuente_trafico`** diferenciada por módulo para el lead tracking en la hoja de cálculo.
4. Gradientes del header y CTA consistentes con la identidad de color del módulo.
5. Contenedor principal: `max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden`.

---

## 4. Inventario de Archivos a Crear

| # | Archivo | Tipo | Descripción |
|---|---------|------|-------------|
| 1 | `src/pages/energy.astro` | Página Astro | Ruta `/energy` con Layout, meta SEO y island React |
| 2 | `src/components/EnergyWidget/EnergyWidget.jsx` | React Component | Orquestador principal del dashboard energético |
| 3 | `src/components/EnergyWidget/HeaderComponent.jsx` | React Component | Hero header con gradiente ámbar/naranja solar |
| 4 | `src/components/EnergyWidget/EnergyMetricsComponent.jsx` | React Component | 4 indicadores clave + gráfico de ahorro energético (Recharts) |
| 5 | `src/components/EnergyWidget/IncentivesPanel.jsx` | React Component | Panel visual de los 4 incentivos tributarios Ley 1715 |
| 6 | `src/components/EnergyWidget/SolarSolutionsCards.jsx` | React Component | Tarjetas expandibles de soluciones solares |
| 7 | `src/components/EnergyWidget/ImplementationTimeline.jsx` | React Component | Timeline de 5 fases del proyecto solar |
| 8 | `src/components/EnergyWidget/SavingsProjection.jsx` | React Component | Gráfico de proyección de ahorro (barras comparativas) |
| 9 | `src/components/EnergyWidget/CTAComponent.jsx` | React Component | CTA + formulario con `fuente_trafico: 'web-energy'` |
| 10 | `src/components/EnergyWidget/data/energyData.js` | Data file | Datos, textos, métricas, fases y contenido regulatorio |
| 11 | `public/_redirects` | Cloudflare config | Redirect 301 `/renewable-energies` → `/energy` |

**Total: 11 archivos nuevos.**

---

## 5. Inventario de Archivos a Modificar

| # | Archivo | Cambio |
|---|---------|--------|
| 1 | `src/components/brochure/data/services.js` | Agregar un tercer botón CTA en `ctaButtons[]` apuntando a `/energy` con emoji ☀️ y label "Transición Energética Solar" |
| 2 | `src/components/brochure/BrochureFocalis.jsx` | Renderizar el tercer botón CTA en la portada del brochure, debajo de los dos existentes |
| 3 | `docs/REGULATIONS.md` | Agregar sección 2.3 (Res. CREG 030/2018 — Autogeneración) y sección 2.5 (NTC 2050 / RETIE) |

**Total: 3 archivos modificados.**

---

## 6. Especificación Detallada de Componentes

### 6.1 `src/pages/energy.astro`

```astro
---
import "@/styles/global.css";
import Layout from "@/layouts/Layout.astro";
import EnergyWidget from "@/components/EnergyWidget/EnergyWidget";

const handleFormSubmit = (formData: any) => {
    console.log("Energy form submitted:", formData);
};
---

<Layout
  title="Transición Energética Solar e Incentivos UPME | Focalis Stratega Group"
  description="Estructure su proyecto de energía solar fotovoltaica, acceda a los incentivos tributarios de la Ley 1715 de 2014 y reduzca su factura energética con dirección técnica PMO."
>
    <div
        class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8 px-4"
    >
        <EnergyWidget
            client:only="react"
            title="Transición Energética Solar para la Industria"
            subtitle="Estructuración de proyectos fotovoltaicos, trámite de incentivos UPME (Ley 1715) y reducción de la factura energética con dirección técnica PMO."
            onFormSubmit={handleFormSubmit}
        />
    </div>
</Layout>
```

> **Nota:** El gradiente de fondo es `amber-50 → orange-50 → yellow-50` para transmitir energía solar. Consistente con la identidad visual de las demás rutas.

### 6.2 `EnergyWidget.jsx` — Orquestador Principal

Sigue el patrón exacto de `SustainabilityWidget.jsx` y `AIWidget.jsx`:

```jsx
import React from 'react';
import HeaderComponent from './HeaderComponent';
import EnergyMetricsComponent from './EnergyMetricsComponent';
import IncentivesPanel from './IncentivesPanel';
import SolarSolutionsCards from './SolarSolutionsCards';
import ImplementationTimeline from './ImplementationTimeline';
import SavingsProjection from './SavingsProjection';
import CTAComponent from './CTAComponent';
import { energyData } from './data/energyData';
import { Toaster } from '@/components/ui/toaster';

const EnergyWidget = ({ title, subtitle, data = energyData, onFormSubmit, className = "" }) => {
  const handleFormSubmit = (formData) => {
    console.log('Energy form submitted:', formData);
    if (onFormSubmit) onFormSubmit(formData);
  };

  return (
    <div className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <HeaderComponent title={title} subtitle={subtitle} />
      <div className="p-6 space-y-8">
        <EnergyMetricsComponent data={data} />
        <IncentivesPanel incentives={data.taxIncentives} />
        <SolarSolutionsCards solutions={data.solarSolutions} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ImplementationTimeline phases={data.implementationPhases} />
          <SavingsProjection projectionData={data.savingsProjection} />
        </div>
        <CTAComponent onFormSubmit={handleFormSubmit} />
      </div>
      <Toaster />
    </div>
  );
};

export default EnergyWidget;
```

### 6.3 `HeaderComponent.jsx` — Hero Header Solar

- **Gradiente:** `from-amber-600 via-orange-500 to-yellow-500` (tonos solares cálidos).
- **Icono principal:** `Sun` de Lucide React.
- **Badge:** "Incentivos UPME Certificados" con icono `TrendingUp`.
- **Título y subtítulo:** Recibidos como props, con fallback a textos de `energyData.heroContent`.

### 6.4 `EnergyMetricsComponent.jsx` — Panel de 4 Indicadores

Implementar como grid 2×2 con mini-gráfico de donut (Recharts `PieChart`) central, siguiendo el patrón exacto de `ImpactoVerdeComponent.jsx`.

| Indicador | Valor Mock | Unidad | Trend | Icono Lucide |
|-----------|-----------|--------|-------|-------------|
| Ahorro en Factura Energética | 30 | % | +30% | `Zap` |
| Potencia Solar Instalable | 85 | kWp | +45% | `Sun` |
| Deducción Fiscal Acumulada | 180M | COP $ | +50% | `TrendingUp` |
| Emisiones CO₂ Evitadas | 42 | tCO₂/año | +28% | `Leaf` |

**Gráfico central (donut):** "Avance del Proyecto Solar" — porcentaje de cumplimiento de hitos (ej. 35%).

**Gráfico de tendencia (LineChart):** Evolución del ahorro energético anual proyectado (Año 1-5).

### 6.5 `IncentivesPanel.jsx` — Panel de Incentivos Ley 1715

> [!IMPORTANT]
> Este componente es **único de esta ruta** y no existe en `/sustainability` ni `/ai-projects`. Es el diferenciador clave del módulo energético.

Renderizar como un grid 2×2 de tarjetas con:

| Tarjeta | Título | Valor Destacado | Referencia Legal | Color |
|---------|--------|----------------|-----------------|-------|
| 1 | Deducción de Renta | **50%** | Art. 11, Ley 1715 | `emerald` |
| 2 | Exclusión de IVA | **19%** | Art. 12, Ley 1715 | `blue` |
| 3 | Exención Arancelaria | **100%** | Art. 13, Ley 1715 | `amber` |
| 4 | Depreciación Acelerada | **≥20% anual** | Art. 14, Ley 1715 | `violet` |

Cada tarjeta incluye:
- Icono (`DollarSign`, `ShieldCheck`, `PackageOpen`, `Timer`)
- Título del incentivo
- Valor porcentual en tipografía `text-3xl font-bold`
- Texto breve explicando la aplicación práctica
- Referencia legal (artículo y ley) en `text-xs text-gray-500`

### 6.6 `SolarSolutionsCards.jsx` — Tarjetas de Soluciones

Seguir el patrón de `SolutionCards.jsx` (AI Projects): tarjetas expandibles con `ChevronDown`, beneficios listados con `CheckCircle2`, y tiempo de implementación.

**3 soluciones a presentar:**

#### Solución 1: Proyecto Solar On-Grid (Conectado a Red)
- **Subtítulo:** Autogeneración a Pequeña Escala — Res. CREG 030/2018
- **Descripción:** Diseño e implementación de sistemas fotovoltaicos conectados a la red con venta de excedentes. Aplica para plantas industriales con consumos superiores a 500 kWh/mes.
- **Beneficios:**
  - Reducción inmediata del 25-40% en factura energética mensual
  - Venta de excedentes de energía a la red (net billing regulado por CREG)
  - Acceso completo a los 4 incentivos tributarios de la Ley 1715
  - Retorno de inversión (ROI) proyectado entre 3 y 5 años
- **Tiempo de implementación:** 6-10 semanas (desde diagnóstico hasta puesta en marcha)

#### Solución 2: Proyecto Solar Off-Grid (Aislado)
- **Subtítulo:** Microrredes y almacenamiento — NTC 2050 / RETIE
- **Descripción:** Sistemas fotovoltaicos aislados con almacenamiento en baterías (litio/gel) para zonas sin conexión confiable a la red o como respaldo de continuidad operativa.
- **Beneficios:**
  - Independencia total de la red eléctrica en sedes remotas
  - Eliminación de costos por cortes de energía e indisponibilidad operativa
  - Dimensionamiento de baterías y controladores MPPT optimizado con IA
  - Certificación RETIE obligatoria incluida en el alcance de estructuración
- **Tiempo de implementación:** 8-14 semanas

#### Solución 3: Auditoría Energética y Trámite UPME
- **Subtítulo:** ISO 50001 / ISO 50002 y Certificación de Incentivos
- **Descripción:** Diagnóstico de línea base energética, auditoría bajo estándar ISO 50002, y preparación completa del expediente técnico para radicación ante la UPME y aplicación de incentivos tributarios ante la DIAN.
- **Beneficios:**
  - Levantamiento de perfil de carga y línea base energética (ISO 50006)
  - Identificación de ahorros potenciales sin inversión en CAPEX
  - Expediente técnico listo para radicar ante UPME en formato SIREE
  - Certificación de incentivos para exclusión de IVA y deducción de renta
- **Tiempo de implementación:** 3-5 semanas

### 6.7 `ImplementationTimeline.jsx` — Fases del Proyecto Solar

Seguir el patrón de `RoadmapComponent.jsx` (Sustainability) con timeline vertical, dots de estado y tarjetas expandibles.

| Fase | Nombre | Descripción | Duración | Estado Mock |
|------|--------|-------------|----------|-------------|
| 1 | Diagnóstico Energético Exprés | Levantamiento de perfil de carga, análisis de facturas eléctricas, auditoría de consumo bajo ISO 50002 y determinación de potencial solar del sitio | 14 días | `completed` |
| 2 | Diseño Técnico e Ingeniería de Detalle | Dimensionamiento del sistema fotovoltaico (paneles, inversores, cableado), simulación de generación (PVsyst/SAM), planos eléctricos NTC 2050 y especificaciones de montaje | 2-3 semanas | `in-progress` |
| 3 | Trámite UPME e Incentivos | Preparación y radicación del expediente técnico en SIREE, solicitud de certificación de beneficios tributarios (Art. 11-14, Ley 1715), gestión ante DIAN para aplicación de exclusiones | 3-6 semanas | `pending` |
| 4 | Homologación y Montaje | Homologación de proveedores y contratistas locales de montaje, supervisión de instalación (PMO), pruebas de puesta en marcha y verificación de generación | 4-8 semanas | `pending` |
| 5 | Certificación RETIE y Monitoreo | Certificación RETIE por organismo acreditado, conexión a red (CREG 030), activación de monitoreo SaaS de generación y consumo vía Nexasoft SAS | 1-2 semanas | `pending` |

### 6.8 `SavingsProjection.jsx` — Gráfico de Ahorro Proyectado

Seguir el patrón de `BenchmarkComponent.jsx`: gráfico de barras comparativo (Recharts `BarChart`) con 3 series.

**Datos comparativos:**

| Métrica | Sin Solar (Actual) | Con Solar (Proyección) | Referencia Industria |
|---------|-------------------|----------------------|---------------------|
| Factura Energética (COP M/año) | 48 | 29 | 38 |
| Emisiones CO₂ (tCO₂/año) | 85 | 42 | 65 |
| Independencia Energética (%) | 0 | 65 | 30 |
| Incentivos Fiscales Capturados (%) | 0 | 100 | 40 |

**Tarjetas de mejora proyectada** debajo del gráfico:
- Ahorro anual estimado: **COP $228M** (39.5% de reducción)
- ROI del proyecto: **3.2 años**
- Vida útil del sistema: **25+ años**

### 6.9 `CTAComponent.jsx` — Formulario de Captación

**Clonar directamente** de `src/components/SustainabilityWidget/CTAComponent.jsx` con las siguientes modificaciones:

| Aspecto | Valor para `/energy` |
|---------|---------------------|
| `fuente_trafico` | `'web-energy'` |
| Gradiente CTA cerrado | `from-amber-500 via-orange-500 to-yellow-500` |
| Título CTA | "¿Listo para reducir su factura energética y acceder a incentivos UPME?" |
| Descripción CTA | "Obtenga un Diagnóstico Energético Exprés de 14 días para evaluar el potencial solar de su planta, cuantificar el ahorro en factura y preparar su trámite ante la UPME (Ley 1715)." |
| Texto del botón | "Solicitar Diagnóstico Energético" |
| Icono del botón | `Sun` (en lugar de `Rocket`) |
| Badges inferiores | "Diagnóstico de 14 días" · "Incentivos Ley 1715" · "Sin compromiso" |
| Placeholder mensaje | "Cuéntanos sobre tu consumo energético actual, tipo de instalación y objetivos de ahorro..." |
| Color botón submit | `bg-amber-600 hover:bg-amber-700` |
| Color iconos/success | `text-amber-600`, `bg-amber-100` |

---

## 7. Especificación del Archivo de Datos (`energyData.js`)

Archivo: `src/components/EnergyWidget/data/energyData.js`

Debe exportar un único objeto `energyData` con la siguiente estructura:

```javascript
import { Sun, Zap, TrendingUp, Leaf, DollarSign, ShieldCheck, PackageOpen, Timer, Battery, Plug } from 'lucide-react';

export const energyData = {
  // --- Hero Content ---
  heroContent: {
    title: 'Transición Energética Solar para la Industria',
    subtitle: 'Incentivos tributarios UPME (Ley 1715), reducción de factura y dirección técnica PMO',
    description: 'Estructure su proyecto fotovoltaico, acceda a la deducción del 50% en renta y la exclusión del 19% de IVA, y reduzca su factura energética hasta un 40%.'
  },

  // --- Energy Metrics (4 indicadores) ---
  energyMetrics: {
    solarProgress: {
      percentage: 35,
      yearOverYear: [
        { year: 2024, savings: 0, target: 15 },
        { year: 2025, savings: 15, target: 25 },
        { year: 2026, savings: 30, target: 35 },
        { year: 2027, savings: 45, target: 50 },
        { year: 2028, savings: 60, target: 65 }
      ]
    },
    impactMetrics: {
      energySavings:  { value: 30,    unit: '%',      trend: '+30%', icon: 'Zap' },
      solarCapacity:  { value: 85,    unit: 'kWp',    trend: '+45%', icon: 'Sun' },
      taxDeduction:   { value: '180M', unit: 'COP $', trend: '+50%', icon: 'TrendingUp' },
      co2Avoided:     { value: 42,    unit: 'tCO₂/año', trend: '+28%', icon: 'Leaf' }
    }
  },

  // --- Tax Incentives Panel (Ley 1715) ---
  taxIncentives: [ /* ... 4 objetos con datos de la tabla §6.5 ... */ ],

  // --- Solar Solutions (3 tarjetas) ---
  solarSolutions: [ /* ... 3 objetos con datos de §6.6 ... */ ],

  // --- Implementation Phases (5 fases) ---
  implementationPhases: [ /* ... 5 objetos con datos de §6.7 ... */ ],

  // --- Savings Projection (benchmark chart) ---
  savingsProjection: {
    current:    { energyCost: 48, emissions: 85, independence: 0,  incentivesCaptured: 0 },
    projection: { energyCost: 29, emissions: 42, independence: 65, incentivesCaptured: 100 },
    industry:   { energyCost: 38, emissions: 65, independence: 30, incentivesCaptured: 40 }
  },

  // --- Certifications/Badges ---
  certifications: [
    { name: 'Ley 1715 (UPME)', achieved: false, target: 2027 },
    { name: 'RETIE Certificado', achieved: false, target: 2027 },
    { name: 'ISO 50001', achieved: false, target: 2027 },
    { name: 'CREG 030 (Net Billing)', achieved: false, target: 2027 }
  ]
};
```

> [!NOTE]
> Los valores numéricos son **proyecciones demo** basadas en promedios de la industria solar colombiana para sistemas de 50-100 kWp. Deben ser calibrados con datos reales del primer proyecto piloto de Focalis.

---

## 8. Integración con Google Sheets (Formulario)

### 8.1 Lógica del Cliente (ya implementada)

El `CTAComponent.jsx` del módulo energy debe **reutilizar la misma lógica de detección de URL** ya implementada en los otros CTAs:

```javascript
const BACKEND_URL = import.meta.env.PUBLIC_BACKEND_URL;

if (BACKEND_URL && BACKEND_URL.includes('script.google.com')) {
  await fetch(BACKEND_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(apiData)
  });
  result = { success: true };
} else {
  // fallback a API REST estándar (futuro Koyeb)
}
```

### 8.2 Discriminación del Origen del Lead

El campo `fuente_trafico` debe ser `'web-energy'` para que en la hoja de Google Sheets se pueda filtrar por origen:

| Ruta | `fuente_trafico` |
|------|-----------------|
| `/sustainability` | `web` |
| `/ai-projects` | `web-ai-projects` |
| `/energy` (nueva) | `web-energy` |

### 8.3 Campo adicional sugerido: `tipo_proyecto`

Considerar añadir un campo `tipo_proyecto` al `apiData` que capture la selección del usuario entre: `'on-grid'`, `'off-grid'`, `'auditoria-upme'`. Esto permitiría preclasificar los leads por tipo de interés solar.

### 8.4 Google Apps Script

**No se requiere modificar** el script de Google Apps Script existente. El script ya acepta cualquier JSON con los campos `empresa`, `contacto_nombre`, `contacto_email`, `telefono`, `mensaje`, `sector` y `fuente_trafico`. El campo `sector` puede usarse para almacenar `tipo_proyecto`.

---

## 9. Paleta de Colores y Consistencia Visual

### 9.1 Identidad de Color por Módulo

| Módulo | Ruta | Gradiente de Fondo (Page) | Gradiente Header | Gradiente CTA |
|--------|------|--------------------------|-----------------|---------------|
| Sostenibilidad | `/sustainability` | `gray-50 → green-50 → emerald-50` | `emerald-50 → green-100` | `emerald-500 → green-500 → teal-500` |
| IA & Ingeniería | `/ai-projects` | `slate-50 → blue-50 → indigo-50` | `slate-900 → blue-900 → indigo-900` | `blue-500 → indigo-500 → violet-500` |
| **Energía Solar** | **`/energy`** | **`amber-50 → orange-50 → yellow-50`** | **`amber-600 → orange-500 → yellow-500`** | **`amber-500 → orange-500 → yellow-500`** |

### 9.2 Tokens de Color Consistentes

```
/* Componentes internos del módulo Energy */
--energy-primary:    amber-500     /* Iconos, badges activos */
--energy-primary-bg: amber-100     /* Fondos de iconos */
--energy-primary-text: amber-700   /* Textos de badges */
--energy-accent:     orange-500    /* Gradientes, bordes hover */
--energy-success:    emerald-500   /* Estados completados (reutilizar) */
--energy-warning:    amber-500     /* Estados en progreso */
--energy-muted:      gray-300      /* Estados pendientes */
```

### 9.3 Componentes UI Compartidos

Los siguientes componentes de `@/components/ui/` se reutilizan sin modificación:
- `Button`, `Input`, `Textarea` (shadcn/ui)
- `useToast` / `Toaster` (Radix Toast)

---

## 10. Plan de Verificación

### 10.1 Compilación

```bash
pnpm build
```

Verificar:
- [ ] Build exitoso sin errores (`✓ Completed`)
- [ ] La ruta `/energy/index.html` aparece en la salida de generación estática
- [ ] 5 páginas totales generadas (index, sustainability, ai-projects, energy, renewable-energies)

### 10.2 Validación Local

```bash
pnpm preview
```

Verificar:
- [ ] `http://localhost:4321/energy/` carga correctamente
- [ ] Header muestra gradiente solar ámbar/naranja
- [ ] 4 indicadores con datos y gráfico de donut renderizado
- [ ] Panel de incentivos Ley 1715 muestra las 4 tarjetas
- [ ] 3 tarjetas de soluciones solares son expandibles con `click`
- [ ] Timeline muestra las 5 fases con estados correctos
- [ ] Gráfico de proyección de ahorro renderiza barras comparativas
- [ ] Formulario CTA se abre, valida campos y envía a Google Sheets
- [ ] El lead aparece en la hoja con `fuente_trafico: 'web-energy'`
- [ ] Toast de confirmación aparece tras envío exitoso
- [ ] Responsive: layout se adapta correctamente en mobile (375px)

### 10.3 Validación del Brochure

- [ ] El botón "☀️ Transición Energética Solar" aparece en la portada del brochure (home)
- [ ] El botón navega correctamente a `/energy/`
- [ ] El orden es: Diagnóstico → IA → **Energía**

### 10.4 Redirect Legacy

- [ ] `http://localhost:4321/renewable-energies/` redirige a `/energy/` (301)

### 10.5 Deploy

```bash
git add -A && git commit -m "feat: add /energy route — solar energy dashboard with Ley 1715 incentives" && git push origin main
```

Verificar en Cloudflare Pages:
- [ ] Build exitoso
- [ ] `https://focalis-stratega-group.pages.dev/energy/` accesible
- [ ] Formulario envía datos a Google Sheets en producción

---

## 11. Prompt de Ejecución para Nuevo Chat

Si necesitas ejecutar este plan desde un nuevo chat de Antigravity en el workspace del proyecto, copia y pega el siguiente prompt:

---

```
Implementa el plan de creación del módulo /energy para el sitio web de Focalis Stratega Group
según el documento docs/PLAN_ENERGY_MODULE.md que se encuentra en la raíz del proyecto.

El documento contiene:
- La especificación completa de los 11 archivos a crear y los 3 a modificar
- El marco regulatorio colombiano (Ley 1715, CREG 030, RETIE, NTC 2050, ISO 50001/50002)
- Las estructuras de datos, textos y métricas exactas para cada componente
- La paleta de colores (ámbar/naranja/amarillo solar) y las convenciones de estilo
- La integración del formulario con Google Sheets (fuente_trafico: 'web-energy')

Instrucciones de ejecución:
1. Lee completo el archivo docs/PLAN_ENERGY_MODULE.md
2. Crea los 11 archivos nuevos en el orden especificado (secciones 4 y 6)
3. Modifica los 3 archivos existentes (sección 5)
4. Ejecuta `pnpm build` para verificar la compilación
5. Ejecuta `pnpm preview` y verifica visualmente que todo renderiza correctamente
6. Haz commit y push a main para disparar el despliegue en Cloudflare Pages

Prioridades:
- TODOS los textos deben hacer referencia explícita a normatividad colombiana real (Ley 1715, Res. CREG 030, RETIE, ISO 50001)
- NO usar conceptos abstractos de sostenibilidad — enfocarse en ahorro financiero, incentivos fiscales y cumplimiento
- Mantener consistencia visual exacta con /sustainability y /ai-projects (mismos patrones de componentes, mismo contenedor max-w-6xl, misma estructura de datos)
- El formulario debe usar la misma integración con Google Sheets ya existente, con fuente_trafico: 'web-energy'
```

---

> **Fin del documento.** Este plan es autosuficiente y puede ser ejecutado de forma autónoma por un agente en un nuevo chat del workspace.

