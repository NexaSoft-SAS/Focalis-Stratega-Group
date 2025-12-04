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
      value: 1.2,
      unit: 'GWh',
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
      value: 320000,
      unit: '€',
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
      name: 'Diagnóstico',
      description: 'Análisis completo de huella de carbono actual',
      status: 'completed',
      duration: '2-4 semanas',
      icon: 'Search',
      completionDate: '2024-02-15'
    },
    {
      id: 2,
      name: 'Implementación',
      description: 'Despliegue de soluciones sostenibles priorizadas',
      status: 'in-progress',
      duration: '3-6 meses',
      icon: 'Settings',
      completionDate: null
    },
    {
      id: 3,
      name: 'Resultados',
      description: 'Medición y validación de impacto conseguido',
      status: 'pending',
      duration: '1-2 meses',
      icon: 'BarChart3',
      completionDate: null
    },
    {
      id: 4,
      name: 'Escalabilidad',
      description: 'Expansión a otras áreas y optimización continua',
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
    { name: 'ISO 14001', achieved: true, year: 2023 },
    { name: 'Carbon Neutral', achieved: false, target: 2025 },
    { name: 'B Corp', achieved: true, year: 2024 },
    { name: 'EU Taxonomy', achieved: false, target: 2024 }
  ],

  // Recent sustainability news/achievements
  achievements: [
    {
      title: '42% reducción CO₂ conseguida',
      date: '2024-12-01',
      type: 'milestone'
    },
    {
      title: 'Certificación B Corp obtenida',
      date: '2024-11-15',
      type: 'certification'
    },
    {
      title: 'Energía 100% renovable en sede principal',
      date: '2024-10-20',
      type: 'achievement'
    }
  ]
};