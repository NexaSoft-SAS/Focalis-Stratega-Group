import { 
  Sun, 
  Zap, 
  TrendingUp, 
  Leaf, 
  DollarSign, 
  ShieldCheck, 
  PackageOpen, 
  Timer, 
  Battery, 
  Plug,
  Search,
  Settings,
  Hammer,
  CheckCircle2
} from 'lucide-react';

export const energyData = {
  // --- Hero Content ---
  heroContent: {
    title: 'Transición Energética Solar para la Industria',
    subtitle: 'Incentivos tributarios UPME (Ley 1715), reducción de factura y dirección técnica PMO',
    description: 'Estructure su proyecto fotovoltaico, acceda a la deducción del 50% en renta y la exclusión del 19% de IVA, y reduzca su factura energética hasta un 40%.'
  },

  // --- Energy Metrics (4 indicadores + progreso) ---
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
      energySavings: { value: 30, unit: '%', trend: '+30%', icon: 'Zap' },
      solarCapacity: { value: 85, unit: 'kWp', trend: '+45%', icon: 'Sun' },
      taxDeduction: { value: '180M', unit: 'COP $', trend: '+50%', icon: 'TrendingUp' },
      co2Avoided: { value: 42, unit: 'tCO₂/año', trend: '+28%', icon: 'Leaf' }
    }
  },

  // --- Tax Incentives Panel (Ley 1715 de 2014) ---
  taxIncentives: [
    {
      id: 'renta',
      title: 'Deducción de Renta',
      value: '50%',
      legalRef: 'Art. 11, Ley 1715',
      description: 'Deducción de hasta el 50% del valor total de la inversión en la declaración de renta, diferible en un plazo de hasta 15 años.',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      id: 'iva',
      title: 'Exclusión de IVA',
      value: '19%',
      legalRef: 'Art. 12, Ley 1715',
      description: 'Exclusión del 19% de IVA en la adquisición de equipos, paneles solares, inversores y servicios de ingeniería y montaje.',
      icon: ShieldCheck,
      color: 'blue'
    },
    {
      id: 'arancel',
      title: 'Exención Arancelaria',
      value: '100%',
      legalRef: 'Art. 13, Ley 1715',
      description: 'Cero aranceles (0%) para la importación de maquinaria, paneles y componentes solares que no cuenten con producción nacional.',
      icon: PackageOpen,
      color: 'amber'
    },
    {
      id: 'depreciacion',
      title: 'Depreciación Acelerada',
      value: '≥20% anual',
      legalRef: 'Art. 14, Ley 1715',
      description: 'Tasa de depreciación acelerada de activos no menor al 20% anual, permitiendo recuperar fiscalmente la inversión en 5 años o menos.',
      icon: Timer,
      color: 'violet'
    }
  ],

  // --- Solar Solutions (3 tarjetas expandibles) ---
  solarSolutions: [
    {
      id: 'on-grid',
      title: 'Proyecto Solar On-Grid (Conectado a Red)',
      subtitle: 'Autogeneración a Pequeña Escala — Res. CREG 030/2018',
      description: 'Diseño e implementación de sistemas fotovoltaicos conectados a la red con venta de excedentes. Aplica para plantas industriales con consumos superiores a 500 kWh/mes.',
      icon: Zap,
      benefits: [
        'Reducción inmediata del 25-40% en factura energética mensual',
        'Venta de excedentes de energía a la red (net billing regulado por CREG)',
        'Acceso completo a los 4 incentivos tributarios de la Ley 1715',
        'Retorno de inversión (ROI) proyectado entre 3 y 5 años'
      ],
      implementationTime: '6-10 semanas (desde diagnóstico hasta puesta en marcha)'
    },
    {
      id: 'off-grid',
      title: 'Proyecto Solar Off-Grid (Aislado)',
      subtitle: 'Microrredes y almacenamiento — NTC 2050 / RETIE',
      description: 'Sistemas fotovoltaicos aislados con almacenamiento en baterías (litio/gel) para zonas sin conexión confiable a la red o como respaldo de continuidad operativa.',
      icon: Battery,
      benefits: [
        'Independencia total de la red eléctrica en sedes remotas',
        'Eliminación de costos por cortes de energía e indisponibilidad operativa',
        'Dimensionamiento de baterías y controladores MPPT optimizado con IA',
        'Certificación RETIE obligatoria incluida en el alcance de estructuración'
      ],
      implementationTime: '8-14 semanas'
    },
    {
      id: 'auditoria-upme',
      title: 'Auditoría Energética y Trámite UPME',
      subtitle: 'ISO 50001 / ISO 50002 y Certificación de Incentivos',
      description: 'Diagnóstico de línea base energética, auditoría bajo estándar ISO 50002, y preparación completa del expediente técnico para radicación ante la UPME y aplicación de incentivos tributarios ante la DIAN.',
      icon: ShieldCheck,
      benefits: [
        'Levantamiento de perfil de carga y línea base energética (ISO 50006)',
        'Identificación de ahorros potenciales sin inversión en CAPEX',
        'Expediente técnico listo para radicar ante UPME en formato SIREE',
        'Certificación de incentivos para exclusión de IVA y deducción de renta'
      ],
      implementationTime: '3-5 semanas'
    }
  ],

  // --- Implementation Phases (5 fases) ---
  implementationPhases: [
    {
      id: 'fase-1',
      name: 'Diagnóstico Energético Exprés',
      description: 'Levantamiento de perfil de carga, análisis de facturas eléctricas, auditoría de consumo bajo ISO 50002 y determinación de potencial solar del sitio.',
      duration: '14 días',
      status: 'completed',
      icon: 'Search',
      completionDate: '2026-03-01'
    },
    {
      id: 'fase-2',
      name: 'Diseño Técnico e Ingeniería de Detalle',
      description: 'Dimensionamiento del sistema fotovoltaico (paneles, inversores, cableado), simulación de generación (PVsyst/SAM), planos eléctricos NTC 2050 y especificaciones de montaje.',
      duration: '2-3 semanas',
      status: 'in-progress',
      icon: 'Settings'
    },
    {
      id: 'fase-3',
      name: 'Trámite UPME e Incentivos',
      description: 'Preparación y radicación del expediente técnico en SIREE, solicitud de certificación de beneficios tributarios (Art. 11-14, Ley 1715), gestión ante DIAN para aplicación de exclusiones.',
      duration: '3-6 semanas',
      status: 'pending',
      icon: 'ShieldCheck'
    },
    {
      id: 'fase-4',
      name: 'Homologación y Montaje',
      description: 'Homologación de proveedores y contratistas locales de montaje, supervisión de instalación (PMO), pruebas de puesta en marcha y verificación de generación.',
      duration: '4-8 semanas',
      status: 'pending',
      icon: 'Hammer'
    },
    {
      id: 'fase-5',
      name: 'Certificación RETIE y Monitoreo',
      description: 'Certificación RETIE por organismo acreditado, conexión a red (CREG 030), activación de monitoreo SaaS de generación y consumo vía Nexasoft SAS.',
      duration: '1-2 semanas',
      status: 'pending',
      icon: 'CheckCircle2'
    }
  ],

  // --- Savings Projection (benchmark chart) ---
  savingsProjection: {
    current: {
      energyCost: 48,
      emissions: 85,
      independence: 0,
      incentivesCaptured: 0
    },
    projection: {
      energyCost: 29,
      emissions: 42,
      independence: 65,
      incentivesCaptured: 100
    },
    industry: {
      energyCost: 38,
      emissions: 65,
      independence: 30,
      incentivesCaptured: 40
    }
  },

  // --- Certifications/Badges ---
  certifications: [
    { name: 'Ley 1715 (UPME)', achieved: false, target: 2027 },
    { name: 'RETIE Certificado', achieved: false, target: 2027 },
    { name: 'ISO 50001', achieved: false, target: 2027 },
    { name: 'CREG 030 (Net Billing)', achieved: false, target: 2027 }
  ]
};
