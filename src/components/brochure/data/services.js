import {
  Cpu,
  Droplets,
  Sun,
  Leaf,
  ClipboardList,
  Hammer,
  Compass,
  LineChart,
} from "lucide-react";

// Service portfolio data - Section I
export const servicesPartOne = [
  {
    icon: Cpu,
    title: "Ingeniería Estratégica Asistida por IA",
    bullets: [
      "Optimización de diseños y perfiles de carga mediante modelos de IA",
      "Cálculos mecánicos, térmicos e hidráulicos validados digitalmente",
      "Selección automatizada de tecnologías emergentes bajo condiciones locales",
      "Análisis predictivo de viabilidad técnica para plantas industriales",
    ],
  },
  {
    icon: Droplets,
    title: "Gestión Hídrica y Vertimientos (Res. 0631)",
    bullets: [
      "Dirección técnica (PMO) para sistemas de tratamiento y distribución de agua",
      "Aseguramiento de cumplimiento de límites permisibles de vertimientos (Res. 0631 de 2015)",
      "Control de stock de reservas hídricas críticas y monitoreo de huella (ISO 14046)",
      "Vetting y homologación de contratistas de obra civil hidráulica",
    ],
  },
  {
    icon: Sun,
    title: "Eficiencia Energética e Incentivos Ley 1715",
    bullets: [
      "Estructuración de proyectos solares y eólicos para industria emergente",
      "Trámite de incentivos tributarios UPME (exclusión de IVA y deducción de renta del 50%)",
      "Auditorías energéticas bajo estándares ISO 50001 e ISO 50002",
      "Optimización inteligente de almacenamiento y microrredes aisladas",
    ],
  },
  {
    icon: Leaf,
    title: "Carbono Neutralidad y Beneficios Tributarios",
    bullets: [
      "Cuantificación de emisiones de gases de efecto invernadero (ISO 14064 / 14067)",
      "Reportes pre-empaquetados de cumplimiento para carbono neutralidad",
      "Estrategias de no causación del Impuesto Nacional al Carbono (Decreto 926 de 2017)",
      "Trazabilidad completa de indicadores ESG e impacto ambiental",
    ],
  },
];

// Service portfolio data - Section II
export const servicesPartTwo = [
  {
    icon: ClipboardList,
    title: "Gerencia Integral de Proyectos (PMO Premium)",
    bullets: [
      "Dirección y control de costos, cronogramas y riesgos bajo estándar PMI",
      "Intermediación técnica y contractual entre clientes y proveedores de tecnología",
      "Estructuración financiera con enfoque en maximización del ROI y ahorro",
      "Garantía de continuidad operativa en la transición de plantas industriales",
    ],
  },
  {
    icon: Hammer,
    title: "Interventoría Estratégica de Cumplimiento",
    bullets: [
      "Supervisión independiente de contratistas de diseño y obra civil",
      "Auditorías de calidad física y documental en sitio (ISO 9001, ISO 14001)",
      "Verificación de especificaciones de materiales y peritajes estructurales",
      "Garantía de blindaje regulatorio y ambiental ante autoridades locales",
    ],
  },
  {
    icon: Compass,
    title: "Estandarización y Trazabilidad Agroindustrial",
    bullets: [
      "Adecuación de plantas de alimentos al cumplimiento sanitario (Res. 2674 / INVIMA)",
      "Diseño de layouts de planta y flujos de proceso optimizados con IA",
      "Trazabilidad de inocuidad alimentaria según estándar ISO 22000",
      "Planes estratégicos de economía circular y reuso de subproductos",
    ],
  },
  {
    icon: LineChart,
    title: "Monitoreo Continuo e Informes de Cumplimiento",
    bullets: [
      "Entrega de informes pre-empaquetados de cumplimiento para alcaldías e industria",
      "Visualización en dashboards interactivos provistos por Nexasoft SAS",
      "Establecimiento de líneas base y medición del desempeño (ISO 50006 / ISO 55001)",
      "Alertas tempranas de desviación operativa y de consumo en tiempo real",
    ],
  },
];

// Methodology differentials
export const methodologyPoints = [
  "Gobierno de proyectos bajo estándar PMI e integración con ISO 9001, ISO 14001 e ISO 55001.",
  "Ingeniería de detalle y cálculos técnicos verificados con herramientas de IA (Nexasoft SAS).",
  "Enfoque en ROI, incentivos tributarios (Ley 1715) y blindaje regulatorio.",
  "Reportes pre-empaquetados de cumplimiento listos para radicar ante UPME, CAR o INVIMA.",
];

// Cover stats
export const coverStats = [
  { label: "Estándares", value: "ISO · PMI" },
  { label: "Enfoque", value: "Cumplimiento + Ahorro" },
  { label: "Diagnóstico", value: "14 días" },
];

// Contact info
export const contactInfo = {
  company: "FOCALIS STRATEGA GROUP",
  email: "focalisstrategagroup@gmail.com",
  phone: "+57 320 484 2897",
  whatsapp: "573204842897",
  location: "Bogotá, Colombia",
};

// Social links
export const socialLinks = [
  { platform: "facebook", url: "https://www.facebook.com/FocalisGroup" },
  { platform: "instagram", url: "https://www.instagram.com/focalis_stratega_group/" },
  { platform: "youtube", url: "https://www.youtube.com/@FocalisStrategaGroup" },
];

// CTA buttons for cover
export const ctaButtons = [
  {
    href: "/sustainability",
    emoji: "📋",
    label: "Diagnóstico de Cumplimiento",
  },
  {
    href: "/ai-projects",
    emoji: "🚀",
    label: "Ingeniería Asistida por IA",
  },
];

// Badges
export const badgesPartOne = ["IA & Ingeniería", "Agua & Energía"];
export const badgesPartTwo = ["PMO & Interventoría", "Agroindustria & Monitoreo"];
export const badgesBack = ["Cumplimiento Regulatorio", "Incentivos UPME", "Trazabilidad ISO"];
