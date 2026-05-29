// Mock data for sustainability widget based on real CO2 reduction trends
export const sustainabilityData = {
  // Real CO2 reduction data from 2020-2024
  co2Reduction: {
    percentage: 42,
    yearOverYear: [
      { year: 2020, reduction: 8, target: 10 },
      { year: 2021, reduction: 15, target: 18 },
      { year: 2022, reduction: 28, target: 25 },
      { year: 2023, reduction: 35, target: 32 },
      { year: 2024, reduction: 42, target: 40 }
    ]
  },

  // Key sustainability metrics
  impactMetrics: {
    energySaved: {
      value: 102,
      unit: 'MWh',
      trend: '+18%',
      icon: 'Zap'
    },
    waterSaved: {
      value: 840,
      unit: 'm³',
      trend: '+25%',
      icon: 'Droplets'
    },
    economicBenefit: {
      value: '302M',
      unit: 'COP $',
      trend: '+31%',
      icon: 'TrendingUp'
    },
    wasteReduction: {
      value: 65,
      unit: '%',
      trend: '+12%',
      icon: 'Recycle'
    }
  },

  // Implementation roadmap phases
  roadmapPhases: [
    {
      id: 1,
      name: 'Diagnóstico Exprés',
      description: 'Diagnóstico de cumplimiento regulatorio y huella hídrica/energética en sitio',
      status: 'completed',
      duration: '14 días',
      icon: 'Search',
      completionDate: '2025-02-15'
    },
    {
      id: 2,
      name: 'Estructuración PMO',
      description: 'Diseño técnico asistido por IA, layout de planta y radicación de incentivos Ley 1715',
      status: 'in-progress',
      duration: '2-4 semanas',
      icon: 'Settings',
      completionDate: null
    },
    {
      id: 3,
      name: 'Vetting e Interventoría',
      description: 'Homologación de contratistas, estructuración contractual y supervisión de montaje',
      status: 'pending',
      duration: '1-2 meses',
      icon: 'BarChart3',
      completionDate: null
    },
    {
      id: 4,
      name: 'Monitoreo Continuo',
      description: 'Monitoreo SaaS provisto por Nexasoft SAS para asegurar cumplimiento permanente',
      status: 'pending',
      duration: 'Continuo',
      icon: 'Rocket',
      completionDate: null
    }
  ],

  // Benchmark comparison data
  benchmarkData: {
    current: {
      emissions: 120,
      efficiency: 65,
      renewableEnergy: 30,
      wasteManagement: 45
    },
    projection: {
      emissions: 70,
      efficiency: 85,
      renewableEnergy: 80,
      wasteManagement: 90
    },
    industry: {
      emissions: 95,
      efficiency: 70,
      renewableEnergy: 50,
      wasteManagement: 60
    }
  },

  // Certifications and badges
  certifications: [
    { name: 'Ley 1715 (UPME)', achieved: true, year: 2024 },
    { name: 'Res. 0631 (CAR)', achieved: true, year: 2025 },
    { name: 'Res. 2674 (INVIMA)', achieved: false, target: 2026 },
    { name: 'ISO 50001', achieved: false, target: 2026 }
  ],

  // Recent sustainability news/achievements
  achievements: [
    {
      title: '42% cumplimiento de metas de reducción (Ley 2169)',
      date: '2025-05-01',
      type: 'milestone'
    },
    {
      title: 'Aprobación de incentivos UPME — Ley 1715',
      date: '2025-03-15',
      type: 'certification'
    },
    {
      title: 'Diagnóstico exprés de cumplimiento Res. 0631 completado',
      date: '2025-02-20',
      type: 'achievement'
    }
  ]
};