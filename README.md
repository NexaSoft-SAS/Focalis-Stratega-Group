# FOCALIS STRATEGA GROUP

Estrategia, IA y sostenibilidad para convertir proyectos en resultados verificables y valor empresarial.

## Astro Website

**Deployed 🧑‍🚀:**

> https://focalis-stratega-group.pages.dev/ 


## 🌱 Sustainability Widget - Diagnostico Verde Platform

### API Endpoints

#### Public Endpoints
```
POST /api/diagnostico/          # Submit diagnosis request
GET  /api/                      # Health check
GET  /api/health               # Detailed health check
```

#### Admin Endpoints (JWT Required)
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
  "fecha_solicitud": "2024-01-15T10:30:00Z"
}
```