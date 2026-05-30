# FOCALIS STRATEGA GROUP

Gerencia integral de proyectos de ingeniería (PMO), aseguramiento de cumplimiento regulatorio colombiano e ingeniería estratégica asistida por IA — enfocada en agua, energía, carbono neutralidad y agroindustria.

## Deployed 🧑‍🚀

> https://focalis-stratega-group.pages.dev/

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 6.x |
| UI Library | React | 19.x |
| Styling | Tailwind CSS | 4.x |
| Bundler | Vite | 7.x |
| Package Manager | pnpm | 10.x |
| Deployment | Cloudflare Pages | Static |

## Getting Started

```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server
pnpm build       # Production build (static output to dist/)
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — brochure corporativo con portafolio de servicios y tabla de normatividad |
| `/ai-projects` | Panel de ingeniería asistida por IA — soluciones por sector regulatorio con KPIs de ahorro |
| `/sustainability` | Panel de cumplimiento y ahorro industrial — diagnóstico exprés y métricas de cumplimiento |
| `/renewable-energies` | Showcase de energías renovables |

## Enfoque de Negocio

Focalis Stratega Group opera como una **firma PMO de alto margen** que:

- **No ejecuta obra civil directamente** — subcontrata interventoría y contratistas locales.
- **No vende software/IA directamente** — las herramientas digitales y dashboards SaaS son provistos por **Nexasoft SAS**, su empresa hermana.
- **Vende cumplimiento regulatorio pre-empaquetado** — informes listos para radicar ante UPME, CAR, ANLA o INVIMA.
- **Maximiza incentivos tributarios** — estructuración de proyectos bajo Ley 1715 (exclusión IVA, deducción renta 50%, depreciación acelerada).

### Normatividad Colombiana Integrada

| Sector | Norma Principal | Ente de Control |
|--------|----------------|-----------------|
| Agua y Vertimientos | Resolución 0631 de 2015 | CAR / ANLA |
| Energía Renovable | Ley 1715 de 2014 | UPME |
| Carbono e Impuestos | Ley 2169 de 2021 / Decreto 926 | DIAN |
| Alimentos (BPM) | Resolución 2674 de 2013 | INVIMA |

> Ver el compendio completo en [`REGULATIONS.md`](./REGULATIONS.md)

## 📋 Ciclo de Venta Disruptivo

1. **Diagnóstico Exprés (14 días)** — auditoría rápida de cumplimiento, 100% anticipado.
2. **Retenedor PMO (50-30-20)** — estructuración técnica, vetting de proveedores, radicación.
3. **Monitoreo SaaS** — licencia de dashboards de cumplimiento continuo vía Nexasoft SAS.

## 🌱 API — Diagnóstico de Cumplimiento

### Public Endpoints
```
POST /api/diagnostico/          # Submit diagnosis request
GET  /api/                      # Health check
GET  /api/health               # Detailed health check
```

### Admin Endpoints (JWT Required)
```
POST /api/auth/login           # Admin authentication
GET  /api/diagnostico/         # List all requests
GET  /api/diagnostico/{id}     # Get specific request
PUT  /api/diagnostico/{id}     # Update request
DELETE /api/diagnostico/{id}   # Delete request
GET  /api/diagnostico/analytics/dashboard # Analytics data
```

## 📈 Data Models

### DiagnosticoVerde
```json
{
  "empresa": "Company Name",
  "contacto_nombre": "Contact Person",
  "contacto_email": "email@company.com",
  "telefono": "+57 300 123 456",
  "mensaje": "Additional details",
  "sector": "Industry sector",
  "fuente_trafico": "web|linkedin|email|referencia|directo",
  "estado": "pendiente|en_proceso|completado|cancelado",
  "fecha_solicitud": "2025-01-15T10:30:00Z"
}
```

---

## 📊 Integración Serverless con Google Sheets (Costo Cero)

Para operar sin costos de servidores de base de datos ni hosting API durante la fase pre-seed, puedes recibir los leads en tiempo real directamente en una hoja de cálculo y un correo de notificación.

### Configuración del script:
1. Crea un documento nuevo en **Google Sheets**.
2. Ve al menú superior **Extensiones > Apps Script**.
3. Reemplaza todo el código del editor con el siguiente script:

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
    var subject = "🚨 Nuevo Lead: " + data.empresa;
    var body = "Se ha registrado un nuevo contacto:\n\n" +
               "Empresa: " + data.empresa + "\n" +
               "Contacto: " + data.contacto_nombre + "\n" +
               "Email: " + data.contacto_email + "\n" +
               "Teléfono: " + (data.telefono || "No provisto") + "\n" +
               "Mensaje: " + (data.mensaje || "Sin mensaje") + "\n" +
               "Sector/Reto: " + (data.sector || "General") + "\n" +
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

4. Haz clic en **Implementar > Nueva implementación**.
5. Selecciona el tipo **Aplicación web** (ícono de engranaje).
6. Configura los accesos:
   - **Ejecutar como:** `Tú (tu-correo@gmail.com)`
   - **Quién tiene acceso:** `Cualquiera`
7. Haz clic en **Implementar** y aprueba los permisos que te pida Google en tu cuenta.
8. Copia la URL de la aplicación web que te entrega (comienza con `https://script.google.com/macros/s/...`).

### Configuración en el Proyecto:
Pega esa URL en tu archivo `.env` local y en las variables de entorno de tu dashboard de Cloudflare Pages:
```env
PUBLIC_BACKEND_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```

*(El cliente web de Astro detecta automáticamente si la URL es de Google Script para evitar bloqueos de CORS usando `no-cors` de manera transparente).*