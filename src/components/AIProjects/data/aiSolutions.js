import { 
  Droplets,
  Zap,
  Leaf,
  Activity,
  DollarSign,
  Brain,
  RefreshCcw
} from 'lucide-react';

/**
 * AI Solutions Data - Engineering and Sustainability Focus
 * Metrics and copy represent real industrial scenarios
 */

// Engineering challenges/priorities users can select
export const challenges = [
  {
    id: 'costs',
    label: 'Reducir Costos y Sanciones',
    icon: DollarSign,
    color: 'emerald',
    description: 'Minimice el pago de tasas retributivas, multas ambientales e impuestos ineficientes.'
  },
  {
    id: 'speed',
    label: 'Agilizar Trámites y Radicados',
    icon: Zap,
    color: 'amber',
    description: 'Obtenga especificaciones técnicas y reportes listos para radicar ante entes de control.'
  },
  {
    id: 'decisions',
    label: 'Asegurar Cumplimiento Regulatorio',
    icon: Brain,
    color: 'blue',
    description: 'Monitoree de forma continua el cumplimiento de las normas ambientales y sanitarias vigentes.'
  },
  {
    id: 'automation',
    label: 'Reportes Pre-empaquetados',
    icon: RefreshCcw,
    color: 'violet',
    description: 'Genere informes técnicos automatizados y cálculos mecánicos verificados con IA.'
  }
];

// AI Solutions with their KPIs mapped to engineering challenges
export const solutions = [
  {
    id: 'water_ai',
    icon: Droplets,
    title: 'Cumplimiento de Vertimientos (Res. 0631)',
    subtitle: 'Dirección técnica y control de efluentes',
    description: 'Modelos predictivos y cálculos hidráulicos automáticos para garantizar el cumplimiento de la Resolución 0631 ante la CAR / ANLA en plantas de alimentos e industria.',
    benefits: [
      'Cálculos hidráulicos de dosificación de reactivos en PTAR asistidos por IA',
      'Predicción y alertas de desvíos en parámetros fisicoquímicos críticos (pH, DQO, DBO5)',
      'Homologación ágil de proveedores de equipos y sistemas de filtración',
      'Ahorro en tasas retributivas por optimización de carga contaminante'
    ],
    relatedChallenges: ['costs', 'speed', 'decisions'],
    implementationTime: '3-6 semanas',
    kpis: {
      costs: { value: '35%', label: 'Reducción en pago de tasas retributivas' },
      speed: { value: '-50%', label: 'Tiempo de radicación ante la CAR' },
      decisions: { value: '100%', label: 'Blindaje contra cierres o multas de la CAR' }
    }
  },
  {
    id: 'energy_ai',
    icon: Zap,
    title: 'Incentivos UPME y Transición Energética',
    subtitle: 'Eficiencia energética y Ley 1715 de 2014',
    description: 'Estructuración de proyectos solares, eólicos y de cogeneración con auditorías de eficiencia (ISO 50001) para acceder a los beneficios fiscales de la Ley 1715.',
    benefits: [
      'Pre-calificación y cálculo automático de exención de IVA y aranceles',
      'Modelado de retorno de inversión renta con deducción especial del 50%',
      'Cálculo y diseño de perfiles de carga industrial con optimización de IA',
      'Auditorías de eficiencia energética express bajo el estándar ISO 50002'
    ],
    relatedChallenges: ['costs', 'speed', 'decisions', 'automation'],
    implementationTime: '4-8 semanas',
    kpis: {
      costs: { value: '50%', label: 'Deducción especial del valor invertido en renta' },
      speed: { value: '19%', label: 'Exclusión inmediata del IVA en equipos' },
      decisions: { value: '100%', label: 'Viabilidad técnica aprobada UPME' },
      automation: { value: '30%', label: 'Ahorro promedio en la factura de energía' }
    }
  },
  {
    id: 'carbon_ai',
    icon: Leaf,
    title: 'Carbono Neutralidad e Impuesto al Carbono',
    subtitle: 'ISO 14064 y exención del Decreto 926 de 2017',
    description: 'Cálculo de huella de carbono organizacional (ISO 14064) y diseño de planes de compensación para la no causación del Impuesto Nacional al Carbono.',
    benefits: [
      'Cálculo automatizado de factores de emisión según directrices IPCC y UPME',
      'Integración de plataformas de monitoreo continuo operadas por Nexasoft SAS',
      'Certificados de carbono neutralidad listos para radicar ante la DIAN',
      'Estructuración técnica de proyectos elegibles para el mercado de carbono'
    ],
    relatedChallenges: ['costs', 'decisions', 'automation'],
    implementationTime: '3-5 semanas',
    kpis: {
      costs: { value: '100%', label: 'Exención del Impuesto Nacional al Carbono' },
      decisions: { value: 'Real', label: 'Trazabilidad de huella bajo ISO 14067' },
      automation: { value: '90%', label: 'Reducción de esfuerzo administrativo en reportes' }
    }
  },
  {
    id: 'predictive_maintenance',
    icon: Activity,
    title: 'Estandarización y Trazabilidad Agroindustrial',
    subtitle: 'Resolución 2674 de 2013 (INVIMA / BPM)',
    description: 'Modelado y diseño de flujos de proceso asistidos por IA para pequeñas plantas de alimentos (ej. bocadillos), garantizando el cumplimiento sanitario del INVIMA.',
    benefits: [
      'Diseño inteligente de layout de planta optimizando flujos y evitando contaminación cruzada',
      'Fichas técnicas y especificaciones mecánicas automáticas para maquinaria industrial',
      'Simulaciones térmicas y mecánicas para pasteurizadores, calderas e intercambiadores',
      'Trazabilidad digital e inocuidad alimentaria bajo el estándar ISO 22000'
    ],
    relatedChallenges: ['costs', 'decisions', 'automation'],
    implementationTime: '2-4 semanas',
    kpis: {
      costs: { value: '0', label: 'Riesgo de sanciones o cierres por INVIMA' },
      decisions: { value: '100%', label: 'Cumplimiento de Buenas Prácticas de Manufactura' },
      automation: { value: '14 días', label: 'Entrega de propuesta técnica completa' }
    }
  }
];

// Global KPIs shown in the dashboard panel
export const globalKPIs = {
  costs: [
    { label: 'Exclusiones fiscales e IVA en proyectos', value: '19% - 50%', icon: '💰' },
    { label: 'Ahorro por tasas retributivas y multas de CAR', value: '35-60%', icon: '💧' },
    { label: 'Retorno de Inversión (ROI) de transición', value: '<12 meses', icon: '📈' }
  ],
  speed: [
    { label: 'Pre-evaluación de especificaciones técnicas con IA', value: '70-90%', icon: '⚡' },
    { label: 'Generación de informes de cumplimiento regulatorios', value: '100%', icon: '📄' },
    { label: 'Plazo diagnóstico exprés inicial de planta', value: '14 días', icon: '⏱️' }
  ],
  decisions: [
    { label: 'Aprobación de incentivos ante la UPME/ANLA', value: '100%', icon: '🎯' },
    { label: 'Blindaje ante auditorías sanitarias y ambientales', value: '98%', icon: '🛡️' },
    { label: 'Trazabilidad de auditoría documental y de sitio', value: 'ISO/PMI', icon: '👁️' }
  ],
  automation: [
    { label: 'Monitoreo de parámetros vía IoT de Nexasoft SAS', value: '85%', icon: '🤖' },
    { label: 'Verificación de cálculos y especificaciones mecánicas', value: '99%', icon: '✅' },
    { label: 'Escalabilidad operativa en plantas medianas y pequeñas', value: 'Modular', icon: '📊' }
  ]
};

// Implementation timeline steps
export const timelineSteps = [
  {
    step: 1,
    title: 'Diagnóstico Exprés de Planta',
    description: 'Análisis de datos de consumo y brechas de cumplimiento regulatorio local',
    duration: '14 días',
    icon: '🔍'
  },
  {
    step: 2,
    title: 'Estructuración y Layout',
    description: 'Estructuración del proyecto (PMO), especificaciones técnicas e ingeniería de detalle con IA',
    duration: '2-3 semanas',
    icon: '📐'
  },
  {
    step: 3,
    title: 'Vetting e Implementación',
    description: 'Homologación de contratistas locales, subcontratación de interventoría de obra e inicio de montaje',
    duration: '4-8 semanas',
    icon: '⚙️'
  },
  {
    step: 4,
    title: 'Radicación e Incentivos',
    description: 'Entrega de informes regulatorios pre-empaquetados y radicación ante UPME, CAR o INVIMA',
    duration: '1-2 semanas',
    icon: '📈'
  }
];

// Value proposition texts
export const heroContent = {
  title: 'PMO e Ingeniería Estratégica Asistida por IA',
  subtitle: 'Aseguramiento de cumplimiento normativo, incentivos UPME y ahorro en plantas industriales',
  description: 'Identifique su prioridad de cumplimiento y descubra cómo optimizamos sus procesos técnicos de forma rentable y segura.'
};
