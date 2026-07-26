---
id: SPEC-narvaezdario_web_page
companions: 
  - ../../planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md
sources: 
  - ../../planning-artifacts/prds/prd-narvaezdario_web_page-2026-07-25/prd.md
---

> **Canonical contract.** This SPEC and the files in `companions:` are the complete, preservation-validated contract for what to build, test, and validate. Source documents listed in frontmatter are for traceability only — consult them only if you need narrative rationale or prose color this contract intentionally omits.

# Portafolio y Sandbox IA Dario Narvaez

## Why

El proyecto busca demostrar autoridad técnica y experiencia en AI Engineering y QA Automation. A diferencia de un currículum estático, el sitio funcionará como un entorno vivo ("Sandbox") diseñado para impresionar a líderes técnicos y facilitar decisiones rápidas por parte de reclutadores, reduciendo la fricción hacia el contacto directo.

## Capabilities

- **CAP-1: Perfil y CV Interactivo**
  - **intent:** El usuario puede explorar la experiencia laboral y los proyectos de forma dinámica sin recargar la página, y tiene la opción de descargar el CV en PDF.
  - **success:** El contenido se revela mediante interacciones instantáneas (ej. acordeones/tarjetas) y existe un botón visible y funcional para descargar el PDF.

- **CAP-2: Validación Técnica y Social**
  - **intent:** El usuario puede acceder directamente a los perfiles de GitHub y LinkedIn del autor para validación técnica.
  - **success:** Los enlaces están siempre accesibles y dirigen correctamente a las plataformas externas correspondientes.

- **CAP-3: Blog Técnico Estructurado**
  - **intent:** El usuario puede leer artículos técnicos, y localizarlos usando filtros por categorías y etiquetas temáticas.
  - **success:** Se renderiza una lista de artículos navegable; hacer clic en categorías o etiquetas filtra exitosamente el listado; las páginas de artículos renderizan contenido rico (MDX/código).

- **CAP-4: Sandbox IA (Placeholder)**
  - **intent:** El usuario identifica una sección destinada a interacciones de IA, marcada claramente como "Próximamente" para la Fase 1.0.
  - **success:** Existe una pestaña "Sandbox" visible en la navegación principal. Al ingresar, muestra un estado vacío (empty state) estilizado con CSS puro, ofreciendo un breve "sneak peek" de los modelos a utilizar (Fase 1.1) para generar expectativa sin interacción real.

## Constraints

- Todo el proyecto empleará Astro (SSG) para generar HTML estático y optimizar carga.
- La interactividad se limitará a "Islas" manejadas exclusivamente con React (`client:load` / `client:visible`).
- Los estilos visuales se implementarán únicamente mediante Vanilla CSS y módulos nativos con variables HSL, descartando librerías utilitarias como Tailwind.
- La gestión de contenido (blog/datos) se realizará localmente mediante Astro Content Collections y esquemas Zod (Markdown/MDX y JSON), sin dependencias de CMS headless externos.
- La interfaz se diseñará con un enfoque "Mobile-First" asumiendo gran porcentaje de tráfico móvil.
- Uso obligatorio y estricto de TypeScript (`strict: true`).
- El despliegue de producción será automatizado hacia GitHub Pages mediante GitHub Actions.

## Non-goals

- No se implementarán modelos de Inteligencia Artificial funcionales ni características semánticas en la Fase 1.0.
- No habrá sistemas de cuentas, autenticación de usuarios, ni interacción social directa como comentarios de blog.
- No se incluirá un manejador de estado global complejo en esta iteración.
- No se integrarán herramientas avanzadas de analítica o rastreo exhaustivo.

## Success signal

El sitio (perfil, blog y placeholder) está completamente codificado y desplegado en producción en un plazo estricto de 24 horas, logrando tiempos de carga casi instantáneos y puntuaciones superiores a 95 en todas las categorías de Google Lighthouse (Performance, Accesibility, Best Practices, SEO).

## Assumptions

- Se asume que el volumen inicial de contenido será de máximo 5 artículos generados por IA, garantizando un impacto nulo en los tiempos de compilación estática.
- El dominio para la Fase 1.0 será el subdominio por defecto `.github.io`.
