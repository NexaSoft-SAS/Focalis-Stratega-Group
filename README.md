# FOCALIS STRATEGA GROUP

Gerencia integral de proyectos de ingeniería (**PMO**), aseguramiento de cumplimiento regulatorio colombiano e ingeniería estratégica asistida por IA — enfocada en agua, energía solar fotovoltaica, carbono neutralidad y agroindustria.

Sitio web estático de alto rendimiento desarrollado con **Astro 7**, **React 19** y **Tailwind CSS 4**, desplegado en **Cloudflare Pages**.

---

## 🚀 Despliegue en Producción

> **URL Oficial:** https://focalis-stratega-group.pages.dev/  
> **Backend Serverless:** Integración directa con Google Sheets (costo cero, cero servidores)  
> **Estado:** En producción  

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Versión / Detalle |
|---|---|---|
| **Framework** | Astro | 7.x (`output: "static"`) |
| **Librería UI** | React | 19.x (Client Islands con `client:load` / `client:only="react"`) |
| **Estilos** | Tailwind CSS | 4.x (integración directa con `@tailwindcss/vite`) |
| **Componentes UI** | shadcn/ui / Radix UI | Primitivas accesibles (Button, Input, Textarea, Toast) |
| **Gráficos** | Recharts | 3.x (Donuts de cumplimiento, líneas de tendencia y barras comparativas) |
| **Iconografía** | Lucide React | Iconos vectoriales para dashboards y navegación |
| **Bundler** | Vite | 7.x (vía Astro) |
| **Gestor de Paquetes** | pnpm | Estructura de dependencias optimizada |
| **Hosting & CDN** | Cloudflare Pages | Despliegue estático automatizado vía GitHub CI/CD |

---

## 🧭 Rutas y Módulos de la Aplicación

| Ruta | Nombre del Módulo | Descripción Técnica |
|---|---|---|
| `/` | **Brochure Corporativo** | Portada interactiva de 4 paneles con portafolio de 8 servicios, metodología PMI/ISO, accesos CTA y compendio de normatividad. |
| `/sustainability` | **Dashboard de Sostenibilidad** | Panel interactivo de cumplimiento ambiental, gestión hídrica (Res. 0631 / ISO 14046), huella de carbono (Ley 2169 / ISO 14064) y formulario de captación. |
| `/ai-projects` | **Ingeniería Asistida por IA** | Catálogo de soluciones algorítmicas por reto técnico industrial, dimensionamiento optimizado y formulario de solicitud de proyectos. |
| `/energy` | **Transición Energética Solar** | Dashboard de autogeneración solar, incentivos tributarios UPME (Ley 1715 de 2014), autogeneración CREG 030, certificación RETIE y proyección financiera (ROI). |
| `/normatividad` | **Compendio Técnico Oficial** | Matriz regulatoria completa e interactiva con buscador en vivo, filtros por sector, tabla comparativa ampliada y fichas técnicas detalladas por sector (Agua, Energía, Carbono, Alimentos, PMO). |
| `/renewable-energies` | *(Redirect 301)* | Redirección permanente hacia `/energy` gestionada a través de `public/_redirects`. |
| `/regulations` | *(Redirect 301)* | Redirección permanente hacia `/normatividad` gestionada a través de `public/_redirects`. |

### Menú de Navegación Multi-Ruta (`Navbar`)
Todas las rutas cuentan con una barra de navegación reutilizable (`src/components/Navigation/Navbar.jsx`):
- **Desktop:** Barra flotante superior glassmorphism (`backdrop-blur-md bg-white/92`) con logo corporativo, enlaces a las 5 rutas y resaltado de la página activa mediante *pills* de color temático (Esmeralda para Sostenibilidad, Azul para IA, Ámbar para Solar, Índigo para Normatividad, Pizarra para Inicio).
- **Mobile:** Barra compacta con botones táctiles ergonómicos e iconos Lucide para navegación ágil en pantallas pequeñas sin desbordamiento.

---

## 💼 Enfoque de Negocio y Modelo PMO

Focalis Stratega Group opera como una **firma PMO técnica de alto margen**:

- **No ejecuta obra civil directamente:** Supervisa a contratistas de obra e instaladores locales homologados (*vetting* técnico).
- **No vende software directamente:** Los dashboards y herramientas de IA son provistos bajo licencia por su empresa hermana **Nexasoft SAS**.
- **Vende cumplimiento regulatorio pre-empaquetado:** Diagnósticos y expedientes listos para radicar ante UPME, CAR, ANLA, DIAN e INVIMA.
- **Maximiza incentivos fiscales:** Enfoque cuantitativo en deducción del 50% en renta, exclusión del 19% de IVA y exención arancelaria (Ley 1715).

### Marco Normativo Colombiano Integrado

| Sector | Norma Oficial | Estándar ISO | Autoridad / Ente de Control |
|---|---|---|---|
| **Agua y Vertimientos** | Resolución 0631 de 2015 / Decreto 1076 | ISO 14046 | CAR regionales / ANLA |
| **Energía Solar y FNCER** | Ley 1715 de 2014 / Res. UPME 203 | ISO 50001 / ISO 50002 | UPME / MinMinas / DIAN |
| **Autogeneración Eléctrica** | Res. CREG 030 de 2018 | NTC 2050 / RETIE | Operadores de Red (OR) / ONAC |
| **Carbono Neutralidad** | Ley 2169 de 2021 / Decreto 926 de 2017 | ISO 14064 / ISO 14067 | DIAN / MinAmbiente (RENARE) |
| **Agroindustria y Alimentos** | Resolución 2674 de 2013 (BPM) | ISO 22000 | INVIMA / Secretarías de Salud |

> Consulta los documentos detallados en:
> - [`docs/REGULATIONS.md`](./docs/REGULATIONS.md) — Compendio regulatorio detallado por sector.
> - [`docs/CLASIFICACION_SERVICIOS.md`](./docs/CLASIFICACION_SERVICIOS.md) — Clasificación de líneas de servicio y modelos de cobro.

---

## 📋 Ciclo de Venta y Engagement Comercial

1. **Diagnóstico Exprés (14 días):** Auditoría técnica y legal de cumplimiento, perfil de consumo y cuantificación de ahorros potenciales. Cobro fijo (100% anticipado).
2. **Retenedor PMO (50-30-20):** Estructuración de ingeniería de detalle, preparación de expedientes para UPME/CAR y dirección técnica de contratistas locales.
3. **Monitoreo Continuo (SaaS):** Acompañamiento post-entrega y suscripción a dashboards de telemetría y cumplimiento vía Nexasoft SAS.

---

## 📊 Integración Serverless con Google Sheets (Costo Cero)

Para operar sin costos de servidores de base de datos ni hosting API durante la fase comercial, los formularios de captación envían los prospectos en tiempo real a una hoja de cálculo mediante Google Apps Script.

### Origen de Prospectos (`fuente_trafico`):
- `/sustainability` → `'web'`
- `/ai-projects` → `'web-ai-projects'`
- `/energy` → `'web-energy'`

### Script en Google Apps Script:
```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Insertar fila: Fecha, Empresa, Nombre, Email, Teléfono, Mensaje, Sector, Origen
    sheet.appendRow([
      new Date(),
      data.empresa,
      data.contacto_nombre,
      data.contacto_email,
      data.telefono || "",
      data.mensaje || "",
      data.sector || "General",
      data.fuente_trafico || "web"
    ]);
    
    // Notificación por correo instantánea
    var recipient = "focalisstrategagroup@gmail.com";
    var subject = "🚨 Nuevo Lead (" + (data.fuente_trafico || "web") + "): " + data.empresa;
    var body = "Se ha registrado un nuevo contacto comercial:\n\n" +
               "Empresa: " + data.empresa + "\n" +
               "Contacto: " + data.contacto_nombre + "\n" +
               "Email: " + data.contacto_email + "\n" +
               "Teléfono: " + (data.telefono || "No provisto") + "\n" +
               "Sector/Tipo: " + (data.sector || "General") + "\n" +
               "Mensaje: " + (data.mensaje || "Sin mensaje") + "\n" +
               "Origen: " + data.fuente_trafico + "\n";
    
    MailApp.sendEmail(recipient, subject, body);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Configuración en Variables de Entorno (`.env`):
```env
PUBLIC_BACKEND_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```

---

## 💻 Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/NexaSoft-SAS/Focalis-Stratega-Group.git
cd Focalis-Stratega-Group

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo
pnpm dev

# 4. Compilar para producción (genera static output en dist/)
pnpm build

# 5. Previsualizar la compilación
pnpm preview
```

> **Nota:** No se debe añadir ningún adaptador de servidor (`@astrojs/cloudflare`). El proyecto compila como sitio HTML estático puro compatible al 100% con Cloudflare Pages.
