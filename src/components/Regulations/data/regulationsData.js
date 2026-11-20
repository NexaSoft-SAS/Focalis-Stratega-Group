export const regulationsSummaryTable = [
  {
    id: "agua",
    sector: "Agua y Efluentes",
    shortName: "Agua",
    norma: "Res. 0631 de 2015 / Dec. 1076 de 2015",
    autoridad: "CAR / ANLA / MinAmbiente",
    iso: "ISO 14046 / ISO 14001",
    foco: "Límites permisibles de vertimientos líquidos puntuales a fuentes y alcantarillado; concesiones de agua y tasas retributivas.",
    impacto: "Prevención de multas sucesivas de hasta 5.000 SMMLV y suspensión de vertimientos.",
    ruta: "/sustainability",
    modulo: "Panel de Sostenibilidad",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200"
  },
  {
    id: "energia",
    sector: "Energía Solar y FNCER",
    shortName: "Energía",
    norma: "Ley 1715 de 2014 / Res. UPME 203 / Res. CREG 030",
    autoridad: "UPME / DIAN / CREG / MinMinas / ONAC",
    iso: "ISO 50001 / ISO 50002 / RETIE / NTC 2050",
    foco: "Autogeneración solar (AGPE ≤ 1 MW), venta de excedentes a red, sistemas fotovoltaicos e incentivos tributarios de ley.",
    impacto: "50% deducción en renta (hasta 15 años), 19% exclusión de IVA, 0% arancel y depreciación acelerada.",
    ruta: "/energy",
    modulo: "Transición Energética Solar",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200"
  },
  {
    id: "carbono",
    sector: "Carbono y Acción Climática",
    shortName: "Carbono",
    norma: "Ley 2169 de 2021 / Decreto 926 de 2017",
    autoridad: "MinAmbiente / DIAN / RENARE",
    iso: "ISO 14064-1 / ISO 14067 / GHG Protocol",
    foco: "Cuantificación de huella de carbono organizacional y de producto; metas de mitigación y registro obligatorio en RENARE.",
    impacto: "No causación (100% exención) del Impuesto Nacional al Carbono vía bonos certificados y acceso a crédito verde.",
    ruta: "/sustainability",
    modulo: "Panel de Sostenibilidad",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  {
    id: "alimentos",
    sector: "Agroindustria y Alimentos",
    shortName: "Alimentos",
    norma: "Resolución 2674 de 2013 (BPM)",
    autoridad: "INVIMA / Secretarías de Salud",
    iso: "ISO 22000 / HACCP / Codex Alimentarius",
    foco: "Buenas Prácticas de Manufactura en plantas de procesamiento, condiciones de saneamiento, equipos y manipulación.",
    impacto: "Habilitación de registro sanitario INVIMA, acceso a cadenas de retail y prevención de clausura sanitaria.",
    ruta: "/ai-projects",
    modulo: "Ingeniería Asistida por IA",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200"
  },
  {
    id: "pmo",
    sector: "Gestión Integral PMO y Calidad",
    shortName: "PMO & Calidad",
    norma: "PMI PMBOK 7 / NTC-ISO / Estatuto de Contratación",
    autoridad: "ONAC / SIC / Aseguradoras y Fondos",
    iso: "ISO 55001 / ISO 9001:2015 / ISO 31000",
    foco: "Dirección técnica integral, interventoría técnica independiente, vetting de contratistas y control de riesgos y CAPEX.",
    impacto: "Control de sobrecostos contractuales (ahorro de 15-25% en CAPEX), blindaje ante litigios y dossiers auditables.",
    ruta: "/",
    modulo: "Servicios Focalis PMO",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200"
  }
];

export const detailedSectors = [
  {
    id: "agua",
    sectorTitle: "1. Sector de Aguas y Recursos Hídricos",
    shortName: "Aguas & Efluentes",
    icon: "Droplets",
    theme: {
      accent: "text-sky-600",
      badge: "bg-sky-50 text-sky-800 border-sky-200",
      border: "border-sky-200 hover:border-sky-400",
      bgLight: "bg-sky-50/40",
      button: "bg-sky-600 hover:bg-sky-700 text-white"
    },
    summary: "Regulación estricta de vertimientos puntuales a fuentes superficiales y redes de alcantarillado, concesiones de captación y régimen tarifario de tasas retributivas.",
    nationalRegulations: [
      {
        norma: "Resolución 0631 de 2015 (MinAmbiente)",
        description: "Establece los parámetros y valores límites máximos permisibles en los vertimientos puntuales a cuerpos de agua superficiales y a los sistemas de alcantarillado público.",
        keyPoints: [
          "Diferencia límites por actividad económica (agroindustria, alimentos, manufactura, minería, vertimientos domésticos).",
          "Parámetros críticos de control: DBO5, DQO, Sólidos Suspendidos Totales (SST), Grasas y Aceites, Metales Pesados y pH.",
          "Exigencia de caracterizaciones semestrales o anuales mediante laboratorios acreditados por el IDEAM."
        ],
        authorities: "Corporaciones Autónomas Regionales (CAR Cundinamarca, Cornare, Carder, etc.) y ANLA."
      },
      {
        norma: "Decreto 1076 de 2015 (Decreto Único Reglamentario del Sector Ambiente)",
        description: "Compila las directrices para el uso y aprovechamiento de recursos naturales renovables en Colombia.",
        keyPoints: [
          "Regula la obtención y prórroga del Permiso de Vertimientos y Concesiones de Aguas Subterráneas o Superficiales.",
          "Define el cálculo de Tasas por Utilización de Agua (TUA) y Tasas Retributivas por vertimientos contaminantes directos o indirectos."
        ],
        authorities: "Ministerio de Ambiente y Desarrollo Sostenible, Autoridades Ambientales Urbanas y Regionales."
      }
    ],
    isoStandards: [
      {
        code: "ISO 14046",
        name: "Evaluación de la Huella Hídrica",
        scope: "Cuantificación del impacto ambiental relacionado con el agua de procesos, productos y cadenas de suministro corporativas."
      },
      {
        code: "ISO 14001",
        name: "Sistemas de Gestión Ambiental",
        scope: "Estructura para la gestión sistemática del desempeño ambiental y prevención de riesgos ecológicos."
      }
    ],
    economicImpact: {
      consequences: "Multas diarias de hasta 5.000 SMMLV impuestas por la CAR, revocatoria del permiso de vertimiento y medidas preventivas de suspensión inmediata de actividades productivas.",
      benefits: "Reducción de hasta un 35% en tasas retributivas mediante recirculación de aguas y blindaje legal integral frente a requerimientos de autoridades."
    },
    focalisPMORole: {
      description: "Focalis Stratega Group actúa como interventor y director técnico imparcial para diagnosticar, diseñar y supervisar la infraestructura de tratamiento:",
      deliverables: [
        "Auditoría técnica de balance hídrico y caracterización de efluentes según Res. 0631.",
        "Dimensionamiento de Plantas de Tratamiento de Aguas Residuales (PTAR/PTAP) con validación hidráulica asistida por IA.",
        "Estructuración de expedientes técnicos para trámite y renovación de permisos de vertimiento ante la CAR.",
        "Supervisión independiente de contratistas de montaje civil y electromecánico (sin conflicto de interés comercial)."
      ]
    },
    routeLink: "/sustainability",
    routeLabel: "Ver Panel de Sostenibilidad"
  },
  {
    id: "energia",
    sectorTitle: "2. Sector Energético, FNCER e Incentivos UPME",
    shortName: "Energía Solar & Ley 1715",
    icon: "Sun",
    theme: {
      accent: "text-amber-600",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      border: "border-amber-200 hover:border-amber-400",
      bgLight: "bg-amber-50/40",
      button: "bg-amber-600 hover:bg-amber-700 text-white"
    },
    summary: "Marco de fomento a las Fuentes No Convencionales de Energía Renovable (FNCER), autogeneración a pequeña escala e incentivos fiscales ante UPME, DIAN y ANLA.",
    nationalRegulations: [
      {
        norma: "Ley 1715 de 2014 & Ley 2099 de 2021 (Transición Energética)",
        description: "Instrumento legal que otorga los más altos beneficios tributarios a empresas que inviertan en energía solar fotovoltaica, biomasa o eficiencia energética:",
        keyPoints: [
          "Deducción especial del 50% de la inversión en el impuesto sobre la renta, diferible hasta en 15 años.",
          "Exclusión plena del 19% de IVA en la adquisición de paneles, inversores, controladores y servicios de estructuración.",
          "Exención total de derechos arancelarios para importación de tecnología FNCER sin producción nacional.",
          "Depreciación acelerada de activos a una tasa anual no menor al 20% (recuperación fiscal en 5 años o menos)."
        ],
        authorities: "UPME (Unidad de Planeación Minero Energética), ANLA y DIAN."
      },
      {
        norma: "Resolución UPME 203 de 2020",
        description: "Reglamenta los requisitos técnicos, cronogramas y procedimiento digital ante el Sistema de Información de Recursos Energéticos (SIREE) para certificar incentivos.",
        keyPoints: [
          "Presentación del estudio de viabilidad técnica y financiera detallado.",
          "Acreditación de equipos Tier-1 y cálculo estandarizado de energía no emitida y reducción de emisiones."
        ],
        authorities: "UPME y DIAN."
      },
      {
        norma: "Resolución CREG 030 de 2018 (Autogeneración a Pequeña Escala AGPE)",
        description: "Regula la conexión de sistemas fotovoltaicos de hasta 1 MW al Sistema Interconectado Nacional (SIN) y la entrega de excedentes de energía:",
        keyPoints: [
          "Esquema de Net Metering y Net Billing: compensación crédito a crédito en la factura mensual.",
          "Remuneración horaria por excedentes entregados al Operador de Red (OR: Enel, Celsia, EPM, etc.).",
          "Procedimiento simplificado de conexión y estudio de conexión simplificado para usuarios industriales."
        ],
        authorities: "Comisión de Regulación de Energía y Gas (CREG) y Operadores de Red (OR)."
      },
      {
        norma: "NTC 2050 (Código Eléctrico) & RETIE (Reglamento Técnico de Instalaciones Eléctricas)",
        description: "Requisitos de seguridad obligatorios que deben certificar todas las instalaciones fotovoltaicas antes de su puesta en marcha y conexión a la red.",
        keyPoints: [
          "Cumplimiento de diseño bajo NTC 2050 (Sección 690: Sistemas Solares Fotovoltaicos).",
          "Inspección y dictamen de conformidad RETIE emitido por organismo acreditado por ONAC."
        ],
        authorities: "Ministerio de Minas y Energía, ONAC y empresas de inspección acreditadas."
      }
    ],
    isoStandards: [
      {
        code: "ISO 50001",
        name: "Sistemas de Gestión de la Energía",
        scope: "Marco metodológico para mejorar sistemáticamente el desempeño energético, optimizar costos y reducir emisiones."
      },
      {
        code: "ISO 50002",
        name: "Auditorías Energéticas Industriales",
        scope: "Directrices para la realización de diagnósticos energéticos de grado inversión."
      },
      {
        code: "ISO 50006",
        name: "Líneas Base e Indicadores IDEn",
        scope: "Medición y verificación cuantitativa del ahorro energético frente a líneas base auditables."
      }
    ],
    economicImpact: {
      consequences: "Rechazo de conexión por el Operador de Red y pérdida irreversible del acceso al 50% de deducción en renta e IVA del 19% por errores de trámite o compras no certificadas ante SIREE.",
      benefits: "Recuperación de hasta el 40-60% del costo total del proyecto solar mediante alivios tributarios y reducción de hasta el 40% en el valor de la factura de energía eléctrica."
    },
    focalisPMORole: {
      description: "Dirección PMO de punta a punta: desde el diagnóstico de viabilidad y radicación SIREE hasta la certificación RETIE:",
      deliverables: [
        "Estudio de prefactibilidad y dimensionamiento fotovoltaico (On-Grid / Off-Grid) optimizado con algoritmos solares.",
        "Estructuración del expediente técnico y radicación oficial ante la UPME para emisión de certificados tributarios.",
        "Gestión de trámites de conexión y aprobación del punto de entrega ante el Operador de Red bajo CREG 030.",
        "Interventoría técnica independiente y coordinación del dictamen RETIE con organismos ONAC."
      ]
    },
    routeLink: "/energy",
    routeLabel: "Ver Módulo de Transición Solar"
  },
  {
    id: "carbono",
    sectorTitle: "3. Sector de Emisiones de Carbono y Acción Climática",
    shortName: "Carbono & Clima",
    icon: "Leaf",
    theme: {
      accent: "text-emerald-600",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      border: "border-emerald-200 hover:border-emerald-400",
      bgLight: "bg-emerald-50/40",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white"
    },
    summary: "Compromisos vinculantes de reducción de GEI, reporte oficial en el registro RENARE y no causación del Impuesto Nacional al Carbono.",
    nationalRegulations: [
      {
        norma: "Ley 2169 de 2021 (Ley de Acción Climática)",
        description: "Establece metas nacionales obligatorias para alcanzar la carbono-neutralidad a 2050 y reducir el 51% de las emisiones GEI a 2030:",
        keyPoints: [
          "Crea el Registro Nacional de Reducción de Emisiones de Gases de Efecto Invernadero (RENARE).",
          "Obligatoriedad de reporte de inventarios corporativos de GEI para grandes y medianos consumidores energéticos e industriales.",
          "Fomenta mercados de carbono regulados y taxonomía verde para acceso a financiación preferencial."
        ],
        authorities: "Ministerio de Ambiente y Desarrollo Sostenible (MADS) y RENARE."
      },
      {
        norma: "Decreto 926 de 2017 & Reforma Tributaria (Impuesto al Carbono)",
        description: "Reglamenta el mecanismo de no causación del Impuesto Nacional al Carbono en Colombia:",
        keyPoints: [
          "Permite a las industrias solicitar la exención del 100% del gravamen en la compra de combustibles fósiles (gasolina, diésel, gas, carbón).",
          "Exige demostrar carbono-neutralidad o mitigación proporcional a través de la cancelación de créditos de carbono certificados."
        ],
        authorities: "DIAN, MADS y Organismos Verificadores Acreditados (OVV)."
      }
    ],
    isoStandards: [
      {
        code: "ISO 14064-1",
        name: "Inventario de Gases de Efecto Invernadero (GEI)",
        scope: "Norma internacional para la especificación, cuantificación y reporte de emisiones directas (Alcance 1), indirectas por energía (Alcance 2) y de cadena de valor (Alcance 3)."
      },
      {
        code: "ISO 14067",
        name: "Huella de Carbono de Productos",
        scope: "Requisitos para cuantificar y comunicar la huella de carbono de ciclo de vida (LCA) de productos industriales exportables."
      }
    ],
    economicImpact: {
      consequences: "Pago directo del gravamen al carbono sobre combustibles, pérdida de competitividad ante exigencias de cadenas de suministro multinacionales y riesgo de litigio por 'greenwashing'.",
      benefits: "Ahorro directo en la factura de combustibles fósiles vía no causación, certificación de carbono-neutralidad y acceso a líneas de crédito verde con tasa compensada (Bancóldex/Findeter)."
    },
    focalisPMORole: {
      description: "Estructuración de la ruta hacia la descarbonización industrial con trazabilidad ISO y registro oficial:",
      deliverables: [
        "Inventario corporativo de emisiones Alcance 1, 2 y 3 bajo metodología GHG Protocol e ISO 14064-1.",
        "Planes de mitigación con sustitución energética y eficiencia térmica asistida por IA.",
        "Gestión de radicación de iniciativas de reducción en el registro oficial RENARE.",
        "Acompañamiento en el proceso de auditoría con Organismos de Verificación y Validación (OVV)."
      ]
    },
    routeLink: "/sustainability",
    routeLabel: "Ver Panel de Sostenibilidad"
  },
  {
    id: "alimentos",
    sectorTitle: "4. Sector Agroindustrial y de Alimentos (BPM)",
    shortName: "Agroindustria & BPM",
    icon: "Factory",
    theme: {
      accent: "text-orange-600",
      badge: "bg-orange-50 text-orange-800 border-orange-200",
      border: "border-orange-200 hover:border-orange-400",
      bgLight: "bg-orange-50/40",
      button: "bg-orange-600 hover:bg-orange-700 text-white"
    },
    summary: "Requisitos sanitarios obligatorios de Buenas Prácticas de Manufactura (BPM) para plantas de producción, almacenamiento y comercialización de alimentos en Colombia.",
    nationalRegulations: [
      {
        norma: "Resolución 2674 de 2013 (Ministerio de Salud / INVIMA)",
        description: "Reglamenta las condiciones sanitarias higiénicas mínimas para la fabricación, procesamiento, preparación, envase, almacenamiento y comercialización de alimentos:",
        keyPoints: [
          "Diseño sanitario de instalaciones físicas y equipos (evacuación de aguas, superficies lavables, ventilación forzada).",
          "Separación estricta de áreas limpias y sucias para prevenir contaminación cruzada.",
          "Plan de Saneamiento Básico: limpieza y desinfección, control de plagas, manejo de residuos sólidos y abastecimiento de agua potable.",
          "Capacitación continua y perfiles de salud para personal manipulador de alimentos."
        ],
        authorities: "INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos) y Secretarías de Salud locales."
      }
    ],
    isoStandards: [
      {
        code: "ISO 22000",
        name: "Sistemas de Gestión de Inocuidad Alimentaria",
        scope: "Garantiza la seguridad de los alimentos a lo largo de toda la cadena de suministro, integrando los principios HACCP del Codex Alimentarius."
      },
      {
        code: "FSSC 22000",
        name: "Certificación de Sistemas de Seguridad Alimentaria",
        scope: "Esquema global reconocido por GFSI para habilitar exportaciones a mercados exigentes (EE.UU., Unión Europea)."
      }
    ],
    economicImpact: {
      consequences: "Aplicación inmediata de Medidas Sanitarias de Seguridad: decomiso e incineración de productos terminados, suspensión de registros sanitarios y clausura temporal o definitiva de la planta con sellamiento de puertas.",
      benefits: "Obtención de Registro Sanitario INVIMA (RSA/PSA/NSA), entrada a grandes superficies comerciales (retail) y apertura de cupos de exportación agroindustrial."
    },
    focalisPMORole: {
      description: "Auditoría de grado regulatorio e ingeniería de adecuación de plantas de alimentos sin suspender la operación diaria:",
      deliverables: [
        "Diagnóstico higiénico-sanitario exhaustivo con matriz de brechas frente a la Res. 2674.",
        "Reingeniería de layout de planta para garantizar flujo unidireccional y control de contaminación cruzada.",
        "Formulación y digitalización del Plan de Saneamiento Básico obligatorio.",
        "Acompañamiento técnico directo durante visitas de inspección, vigilancia y control del INVIMA."
      ]
    },
    routeLink: "/ai-projects",
    routeLabel: "Ver Soluciones de Ingeniería e IA"
  },
  {
    id: "pmo",
    sectorTitle: "5. Gestión Integral PMO, Auditoría y Continuidad",
    shortName: "PMO & Gobernanza",
    icon: "ShieldCheck",
    theme: {
      accent: "text-indigo-600",
      badge: "bg-indigo-50 text-indigo-800 border-indigo-200",
      border: "border-indigo-200 hover:border-indigo-400",
      bgLight: "bg-indigo-50/40",
      button: "bg-indigo-600 hover:bg-indigo-700 text-white"
    },
    summary: "Estándares internacionales de calidad, interventoría imparcial de contratos de ingeniería y aseguramiento del ciclo de vida de los activos industriales.",
    nationalRegulations: [
      {
        norma: "Estatuto Contractual & Marco de Interventoría Técnica",
        description: "Lineamientos de interventoría técnica, administrativa y financiera independiente para la supervisión de obras y montajes de ingeniería en Colombia:",
        keyPoints: [
          "Independencia absoluta de criterio frente a contratistas EPC, fabricantes y proveedores de equipos.",
          "Verificación del cumplimiento de especificaciones técnicas, pólizas de estabilidad y actas de recibo a satisfacción.",
          "Blindaje pericial en caso de discrepancias contractuales o reclamación de garantías de generación."
        ],
        authorities: "Superintendencia de Industria y Comercio (SIC), Colegios de Ingenieros (COPNIA) y Tribunales de Arbitramento."
      }
    ],
    isoStandards: [
      {
        code: "ISO 55001",
        name: "Gestión de Activos Físicos Industriales",
        scope: "Optimización del ciclo de vida de maquinaria y activos energéticos para maximizar retorno y disponibilidad operativa."
      },
      {
        code: "ISO 9001:2015",
        name: "Sistemas de Gestión de la Calidad",
        scope: "Trazabilidad documental y estandarización de procesos de supervisión técnica PMO."
      },
      {
        code: "ISO 31000",
        name: "Gestión de Riesgos",
        scope: "Identificación, mitigación y control de riesgos operativos, ambientales y contractuales en proyectos industriales."
      }
    ],
    economicImpact: {
      consequences: "Sobrecostos de entre 20% y 45% en obras contratadas bajo esquemas EPC sin supervisión externa, sobreprecios en insumos y pérdida de garantías por omisiones de interventoría.",
      benefits: "Cumplimiento del cronograma y presupuesto dentro del margen estipulado, ahorro directo en CAPEX mediante compras directas supervisadas y dossiers con plena validez aseguradora."
    },
    focalisPMORole: {
      description: "Oficina de Gestión de Proyectos (PMO) e interventoría con estándares PMI:",
      deliverables: [
        "Vetting técnico y financiero de empresas instaladoras y contratistas civiles/eléctricos.",
        "Supervisión en sitio con control de hitos, calidad de materiales y pruebas de puesta en marcha.",
        "Auditoría técnica de contratos y dossiers de entrega llave en mano.",
        "Modelos de telemetría y algoritmos de mantenimiento predictivo provistos por Nexasoft SAS."
      ]
    },
    routeLink: "/",
    routeLabel: "Ver Metodología Focalis"
  }
];

