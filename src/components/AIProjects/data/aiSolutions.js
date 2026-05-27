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
    label: 'Optimizar Operaciones',
    icon: DollarSign,
    color: 'emerald',
    description: 'Minimice desvíos presupuestarios y optimice el uso de recursos técnicos.'
  },
  {
    id: 'speed',
    label: 'Acelerar Ejecución',
    icon: Zap,
    color: 'amber',
    description: 'Reduzca plazos de diseño, cálculo e interventoría con automatización.'
  },
  {
    id: 'decisions',
    label: 'Predecir Riesgos',
    icon: Brain,
    color: 'blue',
    description: 'Anticipe fallas mecánicas, estructurales o variaciones críticas de flujo.'
  },
  {
    id: 'automation',
    label: 'Automatizar Procesos',
    icon: RefreshCcw,
    color: 'violet',
    description: 'Libera tiempo técnico eliminando tareas manuales de cálculo y reportes.'
  }
];

// AI Solutions with their KPIs mapped to engineering challenges
export const solutions = [
  {
    id: 'water_ai',
    icon: Droplets,
    title: 'Optimización de Recursos Hídricos',
    subtitle: 'Modelos predictivos para agua y saneamiento',
    description: 'Control inteligente en plantas de tratamiento, redes de distribución y almacenamiento de agua con algoritmos de IA.',
    benefits: [
      'Reducción de pérdidas físicas en el transporte de fluidos',
      'Predicción precisa de demanda de agua y niveles de stock',
      'Optimización del consumo energético en sistemas de bombeo',
      'Monitoreo predictivo y autónomo de calidad de agua'
    ],
    relatedChallenges: ['costs', 'speed', 'decisions'],
    implementationTime: '3-6 semanas',
    kpis: {
      costs: { value: '25%', label: 'Ahorro en energía de bombeo' },
      speed: { value: '-40%', label: 'Tiempo en control de flujos' },
      decisions: { value: '98%', label: 'Precisión en previsión de stock' }
    }
  },
  {
    id: 'energy_ai',
    icon: Zap,
    title: 'Eficiencia Energética y Redes Inteligentes',
    subtitle: 'Predicción y adaptación de fuentes renovables',
    description: 'Modelado predictivo de generación solar/eólica y gestión automatizada del almacenamiento de carga y microrredes.',
    benefits: [
      'Maximización del aprovechamiento de fuentes de energía renovable',
      'Control predictivo inteligente para almacenamiento en baterías',
      'Balanceo automático de carga y estabilidad de microrredes',
      'Disminución del desvío de consumo versus generación'
    ],
    relatedChallenges: ['costs', 'speed', 'decisions', 'automation'],
    implementationTime: '4-8 semanas',
    kpis: {
      costs: { value: '30%', label: 'Reducción de costos de red' },
      speed: { value: '15x', label: 'Mayor velocidad de respuesta' },
      decisions: { value: '+92%', label: 'Estabilidad de carga prevista' },
      automation: { value: '95%', label: 'Autonomía de despacho' }
    }
  },
  {
    id: 'carbon_ai',
    icon: Leaf,
    title: 'Huella de Carbono y Monitoreo ESG',
    subtitle: 'Medición automatizada y trazabilidad',
    description: 'Cálculo dinámico y monitoreo continuo del impacto ecológico mediante sensores IoT e IA para el cumplimiento de objetivos ESG.',
    benefits: [
      'Cálculo automático de emisiones bajo estándares de protocolo',
      'Conexión directa con sensores de campo (IoT) para datos reales',
      'Generación inteligente de reportes y auditorías ecológicas',
      'Roadmap predictivo para reducción de huella'
    ],
    relatedChallenges: ['costs', 'decisions', 'automation'],
    implementationTime: '3-5 semanas',
    kpis: {
      costs: { value: '20%', label: 'Ahorro por impuestos de carbono' },
      decisions: { value: '100%', label: 'Trazabilidad de datos de impacto' },
      automation: { value: '90%', label: 'Menos esfuerzo en reportes' }
    }
  },
  {
    id: 'predictive_maintenance',
    icon: Activity,
    title: 'Gemelos Digitales y Mantenimiento de Activos',
    subtitle: 'Predicción de fallas en infraestructura civil',
    description: 'Algoritmos avanzados para predecir fallas estructurales o mecánicas y simular comportamiento de activos sin riesgos.',
    benefits: [
      'Identificación temprana de fatiga de materiales y fugas',
      'Planificación optimizada de mantenimiento preventivo',
      'Simulaciones avanzadas ante desastres o sobrecargas',
      'Prolongación de la vida útil de presas, tuberías y plantas'
    ],
    relatedChallenges: ['costs', 'decisions', 'automation'],
    implementationTime: '6-10 semanas',
    kpis: {
      costs: { value: '35%', label: 'Menos costos por fallas críticas' },
      decisions: { value: '+95%', label: 'Precisión de alertas tempranas' },
      automation: { value: '75%', label: 'Inspecciones digitalizadas' }
    }
  }
];

// Global KPIs shown in the dashboard panel
export const globalKPIs = {
  costs: [
    { label: 'Reducción en pérdidas de fluidos/energía', value: '15-30%', icon: '💧' },
    { label: 'Ahorro en costos de mantenimiento', value: '25-40%', icon: '🛠️' },
    { label: 'Retorno de Inversión (ROI) estimado', value: '<12 mes', icon: '📈' }
  ],
  speed: [
    { label: 'Reducción de tiempos de diseño/cálculo', value: '60-80%', icon: '⚡' },
    { label: 'Generación automatizada de reportes', value: '100%', icon: '📄' },
    { label: 'Tiempo de respuesta ante alertas críticas', value: '<2 seg', icon: '⏱️' }
  ],
  decisions: [
    { label: 'Precisión en predicciones de fallas/flujo', value: '+95%', icon: '🎯' },
    { label: 'Evitación de fallas operativas críticas', value: '90%', icon: '🛡️' },
    { label: 'Visibilidad 360° de activos de campo', value: 'Real', icon: '👁️' }
  ],
  automation: [
    { label: 'Monitoreo de impacto automatizable', value: '85%', icon: '🤖' },
    { label: 'Reducción de errores de reporte técnico', value: '98%', icon: '✅' },
    { label: 'Escalabilidad sin sensorización extra', value: 'Trazable', icon: '📊' }
  ]
};

// Implementation timeline steps
export const timelineSteps = [
  {
    step: 1,
    title: 'Diagnóstico Técnico',
    description: 'Análisis de flujos de datos y oportunidades de optimización',
    duration: '2-4 días',
    icon: '🔍'
  },
  {
    step: 2,
    title: 'Modelado y Diseño',
    description: 'Estructuración del gemelo digital y algoritmos de IA',
    duration: '1-2 semanas',
    icon: '📐'
  },
  {
    step: 3,
    title: 'Implementación e Integración',
    description: 'Despliegue de sensores IoT e integración con software técnico',
    duration: '4-8 semanas',
    icon: '⚙️'
  },
  {
    step: 4,
    title: 'Optimización Continua',
    description: 'Reentrenamiento de modelos y validación del ROI operativo',
    duration: 'Continuo',
    icon: '📈'
  }
];

// Value proposition texts
export const heroContent = {
  title: 'Inteligencia Artificial Aplicada a Ingeniería',
  subtitle: 'Soluciones de IA para optimizar la gestión de agua, transición energética y sostenibilidad',
  description: 'Identifique su prioridad técnica y descubra cómo la IA optimiza procesos e impacto de forma medible.'
};
