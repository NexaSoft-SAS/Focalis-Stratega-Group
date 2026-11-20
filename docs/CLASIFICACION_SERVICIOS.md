# Clasificación de Servicios y Portafolio Técnico — Focalis Stratega Group

> **Documento:** Clasificación y Estructura de Servicios Profesionales  
> **Entidad:** Focalis Stratega Group  
> **Alcance:** Industria manufacturera, agroindustria, plantas de alimentos y entidades territoriales en Colombia  
> **Fecha de Actualización:** Noviembre 2026

---

## 1. Modelo de Negocio y Posicionamiento Estratégico

Focalis Stratega Group opera como una **firma PMO (Project Management Office) e interventoría técnica de alto margen**, especializada en la estructuración, blindaje regulatorio y dirección técnica de proyectos industriales en Colombia.

### Delimitación de Roles y Alianzas:

- **Focalis Stratega Group:** Dirección PMO, estructuración técnica, legal y financiera, auditorías de cumplimiento normativo, trámite de incentivos fiscales (UPME, ANLA, DIAN, CAR, INVIMA) y supervisión independiente de contratistas.
- **Nexasoft SAS (Empresa Hermana):** Desarrollo e implementación de la infraestructura digital, algoritmos de optimización con IA y dashboards de monitoreo en la nube.
- **Contratistas y Proveedores Homologados:** Empresas locales de obra civil, montaje eléctrico, perforación y suministro de equipos (paneles solares, inversores, plantas de tratamiento), seleccionadas mediante procesos de _vetting_ técnico liderados por Focalis.

---

## 2. Clasificación de Servicios por Líneas Estratégicas

```
                                  PORTAFOLIO FOCALIS
                                          │
    ┌──────────────────┬──────────────────┼──────────────────┬──────────────────┐
    ▼                  ▼                  ▼                  ▼                  ▼
1. Transición      2. Gestión Hídrica   3. Ingeniería IA   4. Agroindustria   5. PMO Premium
   Energética Solar   y Carbono          y Optimización      e Inocuidad        e Interventoría
   (Ley 1715 / CREG)  (Res. 0631 / 2169) (Nexasoft SAS)      (Res. 2674 INVIMA) (PMI / ISO)
```

---

### Línea 1: Transición Energética Solar y FNCER (Fuentes No Convencionales)

_Módulo Web asociado: [`/energy`](file:///run/media/oem/MyFiles/8_DEVELOPMENT/Focalis-Stratega-Group/src/pages/energy.astro)_

Orientada a sustituir o complementar el consumo de red eléctrica convencional en plantas industriales y sedes de alcaldías mediante autogeneración fotovoltaica, capturando incentivos tributarios de ley.

| Servicio                               | Alcance Técnico                                                                                                                          | Marco Normativo                         | Entidad de Trámite                          |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------- |
| **Sistemas Solares On-Grid**           | Autogeneración a pequeña escala conectada a la red (≤ 1 MW) con inyección y venta de excedentes (_net billing_).                         | Res. CREG 030 de 2018                   | Operador de Red (OR) / CREG                 |
| **Sistemas Solares Off-Grid**          | Microrredes solares aisladas con banco de baterías (litio/gel) para sedes remotas o continuidad operativa crítica.                       | NTC 2050 / RETIE                        | Organismos de Inspección Acreditados (ONAC) |
| **Trámite de Incentivos Tributarios**  | Radicación del expediente técnico en SIREE para deducción del 50% en renta, exclusión de 19% IVA, arancel cero y depreciación acelerada. | Ley 1715 de 2014, Res. UPME 203 de 2020 | UPME / ANLA / DIAN                          |
| **Auditoría de Eficiencia Energética** | Diagnóstico de línea base energética, perfil de carga y detección de consumos fantasma.                                                  | ISO 50001, ISO 50002, ISO 50006         | Consultoría interna / Certificadoras        |

---

### Línea 2: Cumplimiento Ambiental, Hídrico y Carbono Neutralidad

_Módulo Web asociado: [`/sustainability`](file:///run/media/oem/MyFiles/8_DEVELOPMENT/Focalis-Stratega-Group/src/pages/sustainability.astro)_

Enfocada en mitigar riesgos legales por vertimientos líquidos, optimizar el uso del agua y reducir el impacto del Impuesto Nacional al Carbono.

| Servicio                                               | Alcance Técnico                                                                                                                                    | Marco Normativo                                  | Entidad de Trámite                                                         |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------- |
| **Control de Vertimientos Industriales**               | PMO para adecuación u optimización de Plantas de Tratamiento de Aguas Residuales (PTAR/PTARD) y cumplimiento de límites máximos permisibles.       | Res. 0631 de 2015, Decreto 1076 de 2015          | CAR regionales (CAR Cundinamarca, Cornare, etc.) / Secretarías de Ambiente |
| **Cálculo y Reducción de Huella Hídrica**              | Medición de consumo directo e indirecto de agua por unidad de producto terminado.                                                                  | ISO 14046                                        | Informes Corporativos / Clientes                                           |
| **Estrategia de No Causación del Impuesto al Carbono** | Cuantificación de emisiones de gases de efecto invernadero (GEI) y estructuración de expedientes de carbono neutralidad con créditos certificados. | Ley 2169 de 2021, Decreto 926 de 2017, ISO 14064 | DIAN / Plataforma RENARE                                                   |

---

### Línea 3: Ingeniería Estratégica Asistida por IA

_Módulo Web asociado: [`/ai-projects`](file:///run/media/oem/MyFiles/8_DEVELOPMENT/Focalis-Stratega-Group/src/pages/ai-projects.astro)_

Aplicación de modelos de cálculo y optimización algorítmica para reducir costos de sobredimensionamiento en proyectos de ingeniería industrial.

| Servicio                                       | Alcance Técnico                                                                                                           | Beneficio Cuantificable                               | Soporte Tecnológico         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------- |
| **Optimización de Perfiles de Carga**          | Modelos predictivos de consumo eléctrico y térmico para despacho de energía y dimensionamiento óptimo de paneles solares. | Reducción del 15% al 25% en CAPEX de equipos          | Modelos IA (Nexasoft SAS)   |
| **Modelado y Dosificación Química en PTAR**    | Algoritmos de predicción de coagulante/floculante según turbidez y caudal en tiempo real.                                 | Ahorro del 20% al 35% en insumos químicos             | Nexasoft SAS / Sensores IoT |
| **Cálculos Mecánicos e Hidráulicos Digitales** | Simulación computacional de redes de tubería, pérdidas por fricción y dimensionamiento de bombeo.                         | Eliminación de errores de diseño y retrabajos en obra | Software de simulación + IA |

---

### Línea 4: Estandarización Sanitaria y Agroindustrial (Plantas de Alimentos)

Especializada en pequeñas y medianas plantas de procesamiento (bocadillo veleño, lácteos, pulpas de fruta, panela y cárnicos).

| Servicio                                             | Alcance Técnico                                                                                                             | Marco Normativo                        | Entidad de Trámite                   |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------ |
| **Adecuación Sanitaria (BPM)**                       | Rediseño de flujos de planta, áreas limpias/sucias, materiales de acabado y protocolos de higiene para evitar sellamientos. | Res. 2674 de 2013                      | INVIMA / Secretarías de Salud        |
| **Trazabilidad e Inocuidad de Alimentos**            | Implementación de sistemas de trazabilidad por lote desde materia prima hasta producto terminado.                           | ISO 22000 / HACCP                      | INVIMA / Organismos de Certificación |
| **Economía Circular y Valorización de Subproductos** | Aprovechamiento de biomasa residual y subproductos orgánicos como abonos o combustible térmico.                             | Política Nacional de Economía Circular | MinAmbiente / CAR                    |

---

### Línea 5: Gerencia Integral de Proyectos (PMO Premium) e Interventoría

El núcleo de gobierno y blindaje operativo de Focalis que garantiza que las soluciones se ejecuten a tiempo y dentro del presupuesto.

| Servicio                                      | Alcance Técnico                                                                                                           | Estándares de Referencia                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Dirección PMO (Project Management Office)** | Planificación de alcance, cronograma (Gantt crítico), control de costos (Curva S), matriz de riesgos y adquisiciones.     | Estándar PMI / PMBOK / ISO 21500                         |
| **Vetting y Homologación de Proveedores**     | Evaluación técnica, solvencia financiera y verificación de certificaciones de contratistas locales de obra.               | Estándar ISO 9001 / Buenas prácticas de compras          |
| **Interventoría Técnica Independiente**       | Supervisión en sitio de obra civil, montajes eléctricos y pruebas de carga con emisión de actas de recibo a satisfacción. | Ley 80 de 1993 (principios de interventoría) / ISO 14001 |

---

### Línea 6: Monitoreo Continuo e Informes Pre-Empaquetados

Soporte post-implementación para asegurar que el cliente mantenga el cumplimiento en el tiempo sin esfuerzo operativo interno.

- **Informes Pre-Empaquetados:** Documentos técnicos estructurados en el formato exigido por la CAR, UPME, DIAN o INVIMA, listos para firma y radicación.
- **Dashboards de Monitoreo Continuo:** Visualización en tiempo real de consumo energético, generación solar, calidad de vertimientos y emisiones de CO₂ mediante licencias de software proveídas por Nexasoft SAS.

---

## 3. Modelo de Contratación y Ciclo de Venta (Engagement Model)

Focalis estructura su relación comercial en 3 etapas sucesivas que reducen el riesgo para el cliente:

```
┌─────────────────────────────────┐
│ 1. DIAGNÓSTICO EXPRÉS (14 DÍAS) │  → Auditoría inicial de brechas normativas y cuantificación de ahorros.
└────────────────┬────────────────┘    (Cobro fijo, 100% anticipado).
                 ▼
┌─────────────────────────────────┐
│ 2. RETENEDOR PMO (50-30-20)     │  → Estructuración de ingeniería, trámite de licencias/UPME y dirección de obra.
└────────────────┬────────────────┘    (Hitos: 50% inicio, 30% expediente/radicación, 20% entrega/RETIE).
                 ▼
┌─────────────────────────────────┐
│ 3. MONITOREO CONTINUO (SaaS)    │  → Acompañamiento post-entrega, informes periódicos y dashboard de telemetría.
└─────────────────────────────────┘    (Suscripción mensual/anual vía Nexasoft SAS).
```

---

## 4. Matriz Resumen de Entidades Receptoras de Trámites

| Entidad Colombiana                                     | Trámites Gestionados por Focalis                                            | Documentos Generados                                               |
| ------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **UPME** (Unidad de Planeación Minero-Energética)      | Solicitud de certificación de beneficios tributarios (Ley 1715)             | Estudio de viabilidad técnica y financiera, registro SIREE         |
| **ANLA** (Autoridad Nacional de Licencias Ambientales) | Certificación de beneficio ambiental para exclusión de IVA                  | Diagnóstico ambiental y certificación de equipos FNCER             |
| **DIAN** (Dirección de Impuestos y Aduanas Nacionales) | Aplicación de deducción de renta y no causación de impuesto al carbono      | Informe contable-técnico de inversión en FNCER / Bonos RENARE      |
| **CAR / Autoridades Ambientales**                      | Permiso de vertimientos, concesión de aguas y plan de contingencia          | Caracterización de vertimientos, diseño PTAR, plan de ahorro PUEAA |
| **INVIMA**                                             | Concepto sanitario favorable y auditoría de Buenas Prácticas de Manufactura | Manual de BPM, plan HACCP, layout higiénico de planta              |
| **Operadores de Red (Enel, Celsia, EPM, etc.)**        | Conexión a red eléctrica bajo CREG 030 / CREG 174                           | Estudio de conexión simplificado, planos NTC 2050, dictamen RETIE  |
