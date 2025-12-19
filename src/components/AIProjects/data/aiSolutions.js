import { 
  MessageCircle, 
  FileText, 
  PenTool, 
  BarChart3,
  DollarSign,
  Zap,
  Brain,
  RefreshCcw
} from 'lucide-react';

/**
 * AI Solutions Data - Editable KPIs and business content
 * Update these values to reflect actual business metrics
 */

// Business challenges/priorities users can select
export const challenges = [
  {
    id: 'costs',
    label: 'Reducir Costos',
    icon: DollarSign,
    color: 'emerald',
    description: 'Optimiza gastos operativos con automatización inteligente'
  },
  {
    id: 'speed',
    label: 'Aumentar Velocidad',
    icon: Zap,
    color: 'amber',
    description: 'Acelera procesos y reduce tiempos de respuesta'
  },
  {
    id: 'decisions',
    label: 'Mejores Decisiones',
    icon: Brain,
    color: 'blue',
    description: 'Toma decisiones basadas en datos y predicciones'
  },
  {
    id: 'automation',
    label: 'Automatizar Tareas',
    icon: RefreshCcw,
    color: 'violet',
    description: 'Libera tiempo eliminando tareas repetitivas'
  }
];

// AI Solutions with their KPIs mapped to challenges
export const solutions = [
  {
    id: 'chatbots',
    icon: MessageCircle,
    title: 'Chatbots Inteligentes 24/7',
    subtitle: 'Atención al cliente automatizada',
    description: 'Responde consultas, procesa pedidos y resuelve problemas sin intervención humana.',
    benefits: [
      'Disponibilidad 24/7 sin costos adicionales',
      'Respuestas instantáneas a consultas frecuentes',
      'Escalamiento automático a agentes humanos',
      'Integración con WhatsApp, web y redes sociales'
    ],
    relatedChallenges: ['costs', 'speed', 'automation'],
    implementationTime: '2-4 semanas',
    kpis: {
      costs: { value: '45%', label: 'Reducción en costos de soporte' },
      speed: { value: '-85%', label: 'Tiempo de primera respuesta' },
      automation: { value: '70%', label: 'Consultas resueltas automáticamente' }
    }
  },
  {
    id: 'documents',
    icon: FileText,
    title: 'Procesamiento de Documentos',
    subtitle: 'Automatización de facturas y contratos',
    description: 'Extrae datos de documentos, clasifica automáticamente y alimenta tus sistemas.',
    benefits: [
      'Lectura automática de facturas y recibos',
      'Extracción de datos de contratos',
      'Clasificación inteligente de documentos',
      'Integración con ERPs y bases de datos'
    ],
    relatedChallenges: ['costs', 'speed', 'automation'],
    implementationTime: '3-6 semanas',
    kpis: {
      costs: { value: '60%', label: 'Reducción en procesamiento manual' },
      speed: { value: '15x', label: 'Más rápido que entrada manual' },
      automation: { value: '90%', label: 'Precisión en extracción' }
    }
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'Generación de Contenidos',
    subtitle: 'Marketing y comunicación con IA',
    description: 'Crea textos, imágenes y campañas de marketing optimizadas automáticamente.',
    benefits: [
      'Redacción de emails y posts para redes',
      'Generación de descripciones de productos',
      'Personalización masiva de mensajes',
      'Optimización SEO automática'
    ],
    relatedChallenges: ['speed', 'automation'],
    implementationTime: '1-2 semanas',
    kpis: {
      speed: { value: '10x', label: 'Más contenido en menos tiempo' },
      automation: { value: '80%', label: 'Reducción de tiempo de creación' }
    }
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Análisis de Datos Avanzado',
    subtitle: 'Inteligencia para decisiones estratégicas',
    description: 'Convierte datos en insights accionables con predicciones y recomendaciones.',
    benefits: [
      'Dashboards ejecutivos automatizados',
      'Predicción de ventas y demanda',
      'Detección de anomalías y riesgos',
      'Recomendaciones basadas en patrones'
    ],
    relatedChallenges: ['decisions', 'costs'],
    implementationTime: '4-8 semanas',
    kpis: {
      decisions: { value: '3x', label: 'Mejor precisión en predicciones' },
      costs: { value: '25%', label: 'Optimización de inventario' }
    }
  }
];

// Global KPIs shown in the dashboard panel - EDIT THESE VALUES
export const globalKPIs = {
  costs: [
    { label: 'Reducción de costos operativos', value: '30-60%', icon: '💰' },
    { label: 'ROI promedio primer año', value: '250%', icon: '📈' },
    { label: 'Ahorro en horas hombre/mes', value: '120+', icon: '⏱️' }
  ],
  speed: [
    { label: 'Reducción tiempo de respuesta', value: '85%', icon: '⚡' },
    { label: 'Procesos automatizados 24/7', value: '100%', icon: '🔄' },
    { label: 'Tiempo de implementación', value: '2-8 sem', icon: '🚀' }
  ],
  decisions: [
    { label: 'Precisión en predicciones', value: '+95%', icon: '🎯' },
    { label: 'Visibilidad de datos', value: '360°', icon: '👁️' },
    { label: 'Tiempo hasta insight', value: 'Minutos', icon: '💡' }
  ],
  automation: [
    { label: 'Tareas automatizables', value: '70%', icon: '🤖' },
    { label: 'Reducción de errores', value: '90%', icon: '✅' },
    { label: 'Escalabilidad sin costo', value: '∞', icon: '📊' }
  ]
};

// Implementation timeline steps
export const timelineSteps = [
  {
    step: 1,
    title: 'Diagnóstico',
    description: 'Análisis de procesos y oportunidades de IA',
    duration: '1-2 días',
    icon: '🔍'
  },
  {
    step: 2,
    title: 'Diseño',
    description: 'Propuesta técnica y roadmap de implementación',
    duration: '3-5 días',
    icon: '📐'
  },
  {
    step: 3,
    title: 'Implementación',
    description: 'Desarrollo, integración y pruebas',
    duration: '2-8 semanas',
    icon: '⚙️'
  },
  {
    step: 4,
    title: 'Optimización',
    description: 'Ajustes, entrenamiento y mejora continua',
    duration: 'Continuo',
    icon: '📈'
  }
];

// Value proposition texts
export const heroContent = {
  title: 'Transforma tu Negocio con Inteligencia Artificial',
  subtitle: 'Soluciones prácticas para automatizar, optimizar y escalar tu operación',
  description: 'Identifica tu prioridad y descubre cómo la IA puede resolver tus desafíos específicos.'
};
