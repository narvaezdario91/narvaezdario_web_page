---
title: PRD - Portafolio y Sandbox IA Dario Narvaez
status: final
created: 2026-07-25
updated: 2026-07-25
---

# PRD: Portafolio y Sandbox IA (Fase 1.0)

## 1. Product Vision
El Portafolio y Sandbox IA es una plataforma web orientada a demostrar autoridad técnica y experiencia en AI Engineering y QA Automation. A diferencia de un currículum estático, el sitio funciona como un entorno vivo ("Sandbox") diseñado para impresionar a líderes técnicos y facilitar la toma de decisiones rápidas por parte de reclutadores, minimizando la fricción hacia el contacto directo.

## 2. Functional Requirements (Features)

### F.01 Perfil y CV Interactivo
El núcleo de la presentación profesional, diseñado para destacar experiencia de forma dinámica.
- **FR-1.01 Renderizado Dinámico de Experiencia:** La experiencia laboral y proyectos deben presentarse mediante componentes interactivos (ej. acordeones o tarjetas desplegables) que permitan al usuario explorar el detalle sin recargar la página.
- **FR-1.02 Llamados a la Acción (CTA) Claros:** Inclusión de un botón prominente, visible en todo momento (sticky o repetido estratégicamente), para descargar el CV en PDF.
- **FR-1.03 Enlaces de Validación:** Accesos directos y visibles a perfiles de GitHub y LinkedIn para validación técnica y social rápida.

### F.02 Blog Técnico Estructurado
Espacio de publicación para demostrar conocimientos en estrategias de automatización e IA.
- **FR-2.01 Listado de Artículos:** Una vista principal (feed) que muestre los artículos disponibles con título, extracto y fecha.
- **FR-2.02 Categorías y Etiquetas:** Sistema funcional que permita a los usuarios filtrar los artículos del blog haciendo clic en categorías específicas o etiquetas temáticas.
- **FR-2.03 Lectura de Artículos:** Páginas individuales por artículo con soporte para formato rico (Markdown/MDX para bloques de código).

### F.03 Placeholder del Sandbox IA (Expectativa)
Preparación del terreno para las funcionalidades avanzadas de IA.
- **FR-3.01 Sección "Sandbox":** Una sección o pestaña claramente identificada en la navegación global.
- **FR-3.02 Estado "Próximamente":** En la Fase 1.0, esta sección actuará como un "teaser", indicando que las características impulsadas por Inteligencia Artificial (como el recomendador semántico) están en desarrollo, generando expectativa.

## 3. Non-Functional Requirements (NFRs)

### Rendimiento y SEO
- **NFR-1.01 Carga Rápida:** El sitio debe aprovechar la generación de sitios estáticos (SSG) de Astro para asegurar tiempos de carga casi instantáneos.
- **NFR-1.02 Métricas Lighthouse:** El objetivo es mantener una puntuación mayor a 95 en las categorías de Performance, Accesibility, Best Practices y SEO en Google Lighthouse.

### Experiencia de Usuario y Diseño
- **NFR-2.01 Diseño Mobile-First:** La interfaz debe ser completamente responsiva, asumiendo que un alto porcentaje del tráfico inicial provendrá de dispositivos móviles (ej. enlaces abiertos desde la aplicación de LinkedIn).

### Calidad y Mantenibilidad del Código
- **NFR-3.01 El Código como Portafolio:** El repositorio del proyecto es en sí mismo una demostración de habilidades técnicas. Por lo tanto, el código fuente debe estar escrito con altos estándares.
- **NFR-3.02 Tipado Estricto:** Uso obligatorio de TypeScript.
- **NFR-3.03 Linting y Formateo:** Configuración rigurosa de herramientas como ESLint y Prettier para garantizar consistencia y calidad de código.

## 4. Success Metrics
- **Velocidad de Lanzamiento:** La Fase 1.0 (perfil, blog y placeholder del sandbox) debe estar codificada y desplegada en producción en un plazo estricto de **1 día** (24 horas).
- **Adquisición de Conocimiento:** Validación práctica de conceptos de desarrollo web modernos utilizando Astro (SSG, enrutamiento basado en archivos, hidratación parcial si aplica).

## 5. Out of Scope (Fase 1.0)
- **Modelos de IA / Recomendador Semántico:** Queda estrictamente pospuesto para la Fase 1.1+. Solo existirá un indicador (placeholder) en la UI.
- **Interacción Directa Compleja de Usuarios:** No habrá comentarios en el blog, sistema de cuentas, ni formularios interactivos que requieran backend. El foco es mostrar la hoja de vida de forma estática pero atractiva.
- **Métricas Complejas / Analítica Avanzada:** Se pospone la configuración de herramientas de rastreo exhaustivas; el objetivo primario es el despliegue del contenido.
