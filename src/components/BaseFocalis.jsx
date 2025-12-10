import React from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  Compass,
  ClipboardList,
  Hammer,
  ScanSearch,
  LineChart,
  Megaphone,
  GraduationCap,
  ShieldCheck,
  Cpu,
  QrCode,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import facebookLogo from "@/assets/facebook.svg";
import instagramLogo from "@/assets/instagram.svg";
import youtubeLogo from "@/assets/youtube.svg";
import focalisLogo from "@/assets/Logo Focalis V1.png";
import QrCodeFocalis from "@/assets/qrcodefocalis.png";

// --- Theme tokens (puedes ajustar aquí los colores si ya tienes manual de marca) ---
const brand = {
  primary: "#0f2e5f", // navy focalis
  primary2: "#153d7a",
  accent: "#2aa9e0",
  accent2: "#46c3f1",
  ink: "#0b172a",
  text: "#0c1b2a",
  subtle: "#5f748a",
  surface: "#f3f7fb",
};

const PageFrame = ({
  children,
  bg = "from-[#0f2e5f] to-[#2aa9e0]",
  bleed = false,
}) => (
  <div className="relative w-full min-h-[500px] lg:pb-[141.4%] lg:min-h-0">
    <div
      className={`lg:absolute lg:inset-0 overflow-hidden rounded-2xl shadow-xl ${
        bleed ? "" : "p-1 sm:p-4"
      }`}
    >
      <div
        className={`lg:absolute lg:inset-0 rounded-[1.25rem] ${bleed ? "" : "p-2 sm:p-6"}`}
      >
        <div
          className={`absolute inset-0 rounded-[1.25rem] bg-gradient-to-br ${bg}`}
        ></div>
        {/* Geometría de apoyo */}
        <svg
          className="absolute -top-24 -right-12 opacity-20"
          width="520"
          height="520"
          viewBox="0 0 520 520"
          fill="none"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity=".25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="260"
            cy="260"
            r="220"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="260"
            cy="260"
            r="160"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="260"
            cy="260"
            r="100"
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="relative p-4 sm:p-8 flex flex-col text-white min-h-[468px] lg:absolute lg:inset-0 lg:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20">
    {children}
  </span>
);

const ServiceCard = ({ icon: Icon, title, bullets, dark = false }) => (
  <div
    className={`rounded-xl ${dark ? "bg-white/5" : "bg-white"} ${
      dark ? "text-white" : "text-slate-900"
    } p-4 shadow-sm border ${dark ? "border-white/10" : "border-slate-200"}`}
  >
    <div className="flex items-center gap-2 mb-2">
      <div
        className={`p-2 rounded-lg ${dark ? "bg-white/10" : "bg-slate-100"}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="font-semibold leading-tight">{title}</h4>
    </div>
    <ul className="text-sm leading-relaxed hidden sm:grid gap-1">
      {bullets.map((b, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-current/60"></span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SmallStat = ({ label, value }) => (
  <div className="rounded-xl bg-white/10 px-3 py-2 border border-white/15">
    <div className="text-xs opacity-80">{label}</div>
    <div className="text-lg font-semibold">{value}</div>
  </div>
);

export default function BrochureFocalis() {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="min-h-screen w-full bg-[rgb(241,245,249)] p-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PORTADA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
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
                  </div>
                  <div className="flex gap-2 md:flex-row flex-col p-4">
                    <Badge>Energía y Agua</Badge>
                    <Badge>Transformación Digital</Badge>
                    <Badge>Desarrollo Sostenible</Badge>
                  </div>
                </div>
                <div className="mt-auto">
                  <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                    FOCALIS STRATEGA GROUP
                  </h2>
                  <p className="mt-4 max-w-2xl text-white/90 text-lg">
                    Estrategia, gerencia integral e IA para convertir proyectos
                    en resultados verificables y valor empresarial.
                  </p>
                  <a 
                    href="/sustainability"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group"
                  >
                    <span>🌱</span>
                    <span>Identifica Tu Impacto Verde</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a 
                    href="/ai"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group"
                  >
                    <span>🚀</span>
                    <span>Emprende con IA</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a 
                    href="/renewable-energies"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group"
                  >
                    <span>🌱</span>
                    <span>Proyectos con energías renovables</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <SmallStat label="Estándares" value="ISO/IEC · PMI" />
                    <SmallStat label="Enfoque" value="ROI + Cumplimiento" />
                    <SmallStat label="Trazabilidad" value="100%" />
                  </div>
                </div>
              </PageFrame>
            </motion.div>

            {/* INTERIOR 1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <PageFrame bg="from-white to-white" bleed>
                <div className="text-slate-900 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <h3
                      className="text-xl font-bold hidden sm:block"
                      style={{ color: brand.primary }}
                    >
                      Portafolio de Servicios (I)
                    </h3>
                    <div className="flex gap-2">
                      <Badge>Gobierno & Dirección</Badge>
                      <Badge>Obra & Calidad</Badge>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ServiceCard
                      icon={Compass}
                      title="Dirección Estratégica y Transformación"
                      bullets={[
                        "Planes estratégicos corporativos",
                        "Diagnóstico de posicionamiento",
                        "Objetivos clave y ejes de acción",
                        "Propuesta y cadena de valor a medida",
                        "Diferenciación competitiva",
                        "Gerencia de programas y portafolios",
                      ]}
                    />
                    <ServiceCard
                      icon={ClipboardList}
                      title="Consultoría y Gerencia Integral de Proyectos"
                      bullets={[
                        "Diseño, estructuración y gestión contractual",
                        "Evaluación técnica, financiera y estratégica",
                        "Dirección operativa y estratégica",
                        "Metodologías de gestión (PMI)",
                        "Coordinación de interesados y equipos",
                        "Reportes ejecutivos e indicadores",
                      ]}
                    />
                    <ServiceCard
                      icon={Hammer}
                      title="Gerencia Técnica de Obra e Interventoría"
                      bullets={[
                        "Gerencia integral de obra",
                        "Interventoría técnica y administrativa",
                        "Auditoría técnica independiente",
                        "Verificación de ingeniería y normatividad",
                        "Asesoría para decisiones críticas",
                        "Cálculos y revisiones estructurales",
                      ]}
                    />
                    <ServiceCard
                      icon={ScanSearch}
                      title="Inspección Técnica y Analítica de Datos"
                      bullets={[
                        "Inspecciones reglamentarias y conformidad",
                        "Inspección digital y monitoreo remoto",
                        "Analítica avanzada para control de calidad",
                        "Evaluación de desempeño y confiabilidad",
                        "Especificaciones y soporte especializado",
                        "Trazabilidad integral",
                      ]}
                    />
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="text-xs text-slate-500">
                      Metodología combinada: ISO/IEC + PMI + herramientas
                      digitales
                    </div>
                    <div className="text-xs text-slate-500">
                      Focalis Stratega Group
                    </div>
                  </div>
                </div>
              </PageFrame>
            </motion.div>

            {/* INTERIOR 2 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <PageFrame bg="from-white to-white" bleed>
                <div className="text-slate-900 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <h3
                      className="text-xl font-bold hidden sm:block"
                      style={{ color: brand.primary }}
                    >
                      Portafolio de Servicios (II)
                    </h3>
                    <div className="flex gap-2">
                      <Badge>Escalabilidad & Marca</Badge>
                      <Badge>Liderazgo</Badge>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ServiceCard
                      icon={LineChart}
                      title="Desarrollo Empresarial y Escalabilidad"
                      bullets={[
                        "Políticas y gobierno organizacional",
                        "Planes de negocio con foco en rentabilidad",
                        "Alianzas comerciales y redes",
                        "Modelos de madurez y escalabilidad",
                        "Procesos y roles clave",
                        "Gestión del cambio",
                      ]}
                    />
                    <ServiceCard
                      icon={Megaphone}
                      title="Estrategia de Marca y Comunicación Digital"
                      bullets={[
                        "Branding estratégico visual y verbal",
                        "Arquitectura de marca y storytelling",
                        "UX/UI alineado a propuesta de valor",
                        "Posicionamiento y marketing digital",
                        "Comunicación interna y externa",
                      ]}
                    />
                    <ServiceCard
                      icon={GraduationCap}
                      title="Formación Ejecutiva y Liderazgo"
                      bullets={[
                        "Talleres personalizados (presencial/remoto)",
                        "Liderazgo ágil y decisiones bajo presión",
                        "Soft skills para equipos híbridos",
                        "Tableros de control y métricas",
                        "Cultura de alto rendimiento",
                      ]}
                    />
                    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        Metodología y Diferenciales
                      </h4>
                      <ul className="text-sm hidden sm:grid gap-1">
                        <li className="flex gap-2">
                          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          <span>
                            Gobierno de proyectos según PMI e integración con
                            sistemas ISO/IEC.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          <span>
                            Analítica e IA para priorización, control y
                            trazabilidad.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          <span>
                            Enfoque en ROI, cumplimiento y continuidad
                            operativa.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          <span>
                            Reportería ejecutiva y visibilidad 360° para los
                            interesados.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="text-xs text-slate-500">
                      Indicadores que medimos: cumplimiento de hitos, variación
                      de costo/tiempo, impacto energético.
                    </div>
                    <div className="text-xs text-slate-500">
                      Focalis Stratega Group
                    </div>
                  </div>
                </div>
              </PageFrame>
            </motion.div>

            {/* INTERIOR 3 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <PageFrame bg="from-white to-white" bleed>
                <div className="text-slate-900 flex flex-col h-full">
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">
                      Sostenibilidad y Renovación
                    </h1>
                    <p className="text-slate-600">
                      Nuestra garantía: dirección técnica impecable, innovación
                      aplicada y trazabilidad total.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      <Badge>Energía y Agua</Badge>
                      <Badge>Transformación Digital</Badge>
                      <Badge>Desarrollo Sostenible</Badge>
                    </div>
                  </div>
                </div>
              </PageFrame>
            </motion.div> */}

            {/* REVERSO */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <PageFrame>
                <div className="flex flex-col h-full">
                  <div className="grid sm:grid-cols-2 gap-4 mt-auto grid-rows-1">
                    <div className="bg-white/10 rounded-xl p-4 border border-white/15">
                      <h4 className="font-semibold mb-2">Contacto</h4>
                      <div className="grid gap-2 text-sm">
                        <div className="text-sm tracking-widest uppercase opacity-90">
                          FOCALIS STRATEGA GROUP
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <a
                            href="mailto:focalisstrategagroup@gmail.com?&subject=Solicitud%20de%20información&body=Hola%20quiero%20recibir%20información%20del%20servicio%20de%20..."
                            target="_blank"
                            rel="noopener"
                          >
                            focalisstrategagroup@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a
                            href="https://api.whatsapp.com/send?phone=573196138057&text=Hola%20Focalis%20Stratega%20Group,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios."
                            target="_blank"
                            rel="noopener"
                            aria-label="Abrir chat de Whatsapp con Focalis Stratega Group"
                          >
                            +57 319 624 6805
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>Bogotá, Colombia</span>
                        </div>
                      </div>

                      <h4 className="font-semibold mt-2 mb-2">Redes</h4>
                      <div className="grid gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <a href="https://www.facebook.com/FocalisGroup">
                            <img
                              src={facebookLogo.src}
                              width="28"
                              height="28"
                              alt="Focalis Facebook Profile"
                              title="Focalis Facebook Profile"
                            />
                          </a>

                          <a href="https://www.instagram.com/focalis_stratega_group/">
                            <img
                              src={instagramLogo.src}
                              width="28"
                              height="28"
                              alt="Focalis Instagram Profile"
                              title="Focalis Instagram Profile"
                            />
                          </a>

                          <a href="https://www.youtube.com/@FocalisStrategaGroup">
                            <img
                              src={youtubeLogo.src}
                              width="35"
                              height="28"
                              alt="Focalis Youtube Channel"
                              title="Focalis Youtube Channel"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/15 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto w-32 h-32 rounded-xl bg-white/90 text-slate-900 flex items-center justify-center">
                          <img
                            className="p-1"
                            src={QrCodeFocalis.src}
                            width="148"
                            height="148"
                            alt="QrCode Focalis WhatsApp"
                            id="qrcodefocalis"
                          />
                          {/* <QrCode className="w-10 h-10" /> */}
                        </div>
                        <div className="mt-2 text-xs opacity-90">
                          Escanea para conocer casos y metodologías
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-sm opacity-90">
                    <div className="font-semibold">Nuestro compromiso</div>
                    <p className="max-w-xl">
                      Convertir decisiones en resultados verificables y
                      sostenibles con dirección técnica impecable, innovación
                      aplicada y trazabilidad total.
                    </p>
                  </div>
                  <div className="mt-4 text-[10px] opacity-70">
                    © {new Date().getFullYear()} Focalis Stratega Group. Todos
                    los derechos reservados.
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
