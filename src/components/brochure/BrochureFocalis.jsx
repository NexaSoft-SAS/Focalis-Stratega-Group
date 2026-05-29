import React from "react";
import { MotionConfig, motion } from "framer-motion";

// Layout
import PageFrame from "./layout/PageFrame";

// Atoms
import Badge from "./atoms/Badge";
import SmallStat from "./atoms/SmallStat";
import CTAButton from "./atoms/CTAButton";

// Cards
import ServiceCard from "./cards/ServiceCard";
import ContactCard from "./cards/ContactCard";
import QRCodeCard from "./cards/QRCodeCard";
import MethodologyCard from "./cards/MethodologyCard";

// Data
import {
  servicesPartOne,
  servicesPartTwo,
  methodologyPoints,
  coverStats,
  contactInfo,
  ctaButtons,
  badgesPartOne,
  badgesPartTwo,
  badgesBack,
} from "./data/services";

// Theme
import { brand } from "./theme";

// Assets
import focalisLogo from "@/assets/Logo Focalis V1.png";

const regulationsData = [
  { sector: "Agua", norma: "Res. 0631 / ISO 14046", foco: "Vertimientos e impacto hídrico" },
  { sector: "Energía", norma: "Ley 1715 / ISO 50001", foco: "Incentivos UPME y eficiencia" },
  { sector: "Carbono", norma: "Ley 2169 / ISO 14064", foco: "Carbono neutralidad e impuestos" },
  { sector: "Alimentos", norma: "Res. 2674 / ISO 22000", foco: "Registro INVIMA y BPM en plantas" }
];

const RegulationsTable = () => (
  <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
    <div className="p-3 border-b border-white/10 bg-white/10 flex items-center justify-between flex-wrap gap-2">
      <span className="font-semibold text-xs flex items-center gap-1.5 text-white/95">
        📋 Consulta de Normatividad Vigente (Colombia)
      </span>
      <a 
        href="/REGULATIONS.md" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[10px] text-sky-200 hover:text-white underline transition-colors"
      >
        Ver compendio técnico
      </a>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-[11.5px]">
        <thead>
          <tr className="border-b border-white/10 bg-white/5 text-white/70 font-medium">
            <th className="p-2">Sector</th>
            <th className="p-2">Norma / Estándar</th>
            <th className="p-2">Foco de Cumplimiento</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {regulationsData.map((reg, i) => (
            <tr key={i} className="hover:bg-white/5 transition-colors">
              <td className="p-2 font-semibold text-sky-300">{reg.sector}</td>
              <td className="p-2 font-mono text-[10px] text-white/95">{reg.norma}</td>
              <td className="p-2 text-white/80">{reg.foco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * BrochureFocalis - Main brochure page component
 * Orchestrates the layout of the 4-panel brochure
 */
export default function BrochureFocalis() {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="min-h-screen w-full bg-[rgb(241,245,249)] p-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* COVER PAGE */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <PageFrame>
                <div className="flex flex-col sm:flex-row items-start justify-between">
                  <div className="me-5">
                    <img
                      src={focalisLogo.src}
                      width="148"
                      height="63"
                      alt="Focalis Logo"
                      className="py-1 px-3"
                    />
                    <div className="mt-1 text-[0.8rem] opacity-80 text-nowrap">
                      Estrategas de proyectos
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 md:flex-row flex-col p-4 text-lg">
                      {ctaButtons.map((btn, i) => (
                        <CTAButton key={i} {...btn} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                    FOCALIS GROUP
                  </h2>
                  <p className="mt-4 max-w-2xl text-white/90 text-lg">
                    Estrategia, gerencia integral e IA para convertir proyectos
                    en resultados verificables y valor empresarial.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {coverStats.map((stat, i) => (
                      <SmallStat key={i} {...stat} />
                    ))}
                  </div>
                </div>
              </PageFrame>
            </motion.div>

            {/* INTERIOR PAGE 1 - Services I */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <PageFrame bg="from-white to-white" bleed>
                <div className="text-slate-900 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold hidden sm:block" style={{ color: brand.primary }}>
                      Portafolio de Servicios (I)
                    </h3>
                    <div className="flex gap-2">
                      {badgesPartOne.map((badge, i) => (
                        <Badge key={i}>{badge}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servicesPartOne.map((service, i) => (
                      <ServiceCard key={i} {...service} />
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="text-xs text-slate-500">
                      Metodología combinada: ISO/IEC + PMI + herramientas digitales
                    </div>
                    <div className="text-xs text-slate-500">Focalis Stratega Group</div>
                  </div>
                </div>
              </PageFrame>
            </motion.div>

            {/* INTERIOR PAGE 2 - Services II */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <PageFrame bg="from-white to-white" bleed>
                <div className="text-slate-900 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold hidden sm:block" style={{ color: brand.primary }}>
                      Portafolio de Servicios (II)
                    </h3>
                    <div className="flex gap-2">
                      {badgesPartTwo.map((badge, i) => (
                        <Badge key={i}>{badge}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servicesPartTwo.map((service, i) => (
                      <ServiceCard key={i} {...service} />
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="text-xs text-slate-500">
                      Indicadores que medimos: cumplimiento de hitos, variación de costo/tiempo, impacto energético.
                    </div>
                    <div className="text-xs text-slate-500">Focalis Stratega Group</div>
                  </div>
                </div>
              </PageFrame>
            </motion.div>

            {/* BACK PAGE - Contact */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <PageFrame>
                <div className="flex flex-col h-full gap-4">
                  <div className="flex flex-wrap gap-2">
                    {badgesBack.map((badge, i) => (
                      <Badge key={i}>{badge}</Badge>
                    ))}
                  </div>
                  
                  {/* Methodology & Differentials */}
                  <MethodologyCard points={methodologyPoints} dark />

                  {/* Regulations Consultation Table */}
                  <RegulationsTable />
                  
                  <div className="grid sm:grid-cols-2 gap-4 mt-auto">
                    <ContactCard contact={contactInfo} />
                    <QRCodeCard />
                  </div>
                  <div className="mt-2 text-sm opacity-90">
                    <div className="font-semibold">Nuestro compromiso</div>
                    <p className="max-w-xl text-xs">
                      Convertir decisiones en resultados verificables y sostenibles con dirección 
                      técnica impecable, innovación aplicada y trazabilidad total.
                    </p>
                  </div>
                  <div className="mt-2 text-[10px] opacity-70">
                    © {new Date().getFullYear()} Focalis Stratega Group. Todos los derechos reservados.
                  </div>
                </div>
              </PageFrame>
            </motion.div>

          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
