---
stepsCompleted: [1, 2, 3]
inputDocuments:
  [
    'prds/prd-narvaezdario_web_page-2026-07-25/prd.md',
    'architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md',
    'ux-designs/ux-narvaezdario_web_page-2026-07-26/DESIGN.md',
    'ux-designs/ux-narvaezdario_web_page-2026-07-26/EXPERIENCE.md',
  ]
---

# narvaezdario_web_page - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for narvaezdario_web_page, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

- **FR1:** Renderizado Dinámico de Experiencia (Acordeones interactivos para experiencia sin recargar página).
- **FR2:** Llamados a la Acción (CTAs) (Botón prominente, sticky o repetido para descargar el CV en PDF).
- **FR3:** Enlaces de Validación (Accesos directos a GitHub y LinkedIn).
- **FR4:** Listado de Artículos (Feed del blog técnico con título, extracto y fecha).
- **FR5:** Categorías y Etiquetas (Sistema de filtrado al hacer clic en categorías/etiquetas).
- **FR6:** Lectura de Artículos (Páginas de artículos individuales soportando Markdown/MDX).
- **FR7:** Sección "Sandbox" (Enlace en la navegación global al Sandbox IA).
- **FR8:** Estado "Próximamente" (Placeholder en la sección Sandbox generando expectativa para la Fase 1.1).
- **FR9:** Visualización Dinámica de Impacto (Gráficos visuales/animados con Recharts que muestren ROI y resultados cuantitativos).
- **FR10:** CV Estructurado (Organización avanzada del historial laboral con navegación interna por equipos).
- **FR11:** Bento Grid (Visualización modular de certificaciones y educación).

### NonFunctional Requirements

- **NFR1:** Carga Rápida (Sitio estático - SSG - usando Astro).
- **NFR2:** Métricas Lighthouse (Puntuación >95 en Performance, Accessibility, Best Practices, SEO).
- **NFR3:** Diseño Mobile-First (Interfaz completamente responsiva).
- **NFR4:** Calidad y Código como Portafolio (Uso estricto de TypeScript).
- **NFR5:** Linting y Formateo (Prettier y ESLint rigurosamente configurados).

### Additional Requirements

- **ARCH1:** Framework Base: Astro 4.x para generación de HTML estático.
- **ARCH2:** Interactividad: Componentes React "Islands" hidratados únicamente donde sea necesario (0 JS extra por defecto).
- **ARCH3:** Estilos: Vanilla CSS con CSS Modules y variables HSL nativas (Sin Tailwind).
- **ARCH4:** Capa de Datos: Uso de Astro Content Collections validado estrictamente con Zod.
- **ARCH5:** Infraestructura: Despliegue automatizado en GitHub Pages mediante GitHub Actions CI/CD.

### UX Design Requirements

- **UX-DR1:** Sistema de color "Midnight Cobalt" (Variables HSL para `surface-base`, `surface-raised`, `accent`, en dark/light mode).
- **UX-DR2:** Contraste Tipográfico: Sans Serif (Inter/Outfit) para lectura general, y Monospace (Fira Code) para detalles técnicos/metadatos.
- **UX-DR3:** Tokens de espaciado estándar (4 a 32px) y bordes redondeados (6px, 12px).
- **UX-DR4:** Efecto visual de "Glassmorphism" sutil en tarjetas elevadas y menú de navegación.
- **UX-DR5:** Componente _CV Accordions_ (Área completamente interactiva, transiciones suaves de altura, icono chevron rotatorio).
- **UX-DR6:** Componente _Blog Article Card_ (Título limpio sin serifas y detalles técnicos monoespaciados).
- **UX-DR7:** Componente _Sandbox Placeholder_ (Estilo consola, animación typing / pulso CSS con texto "Entrenando modelos de recomendación - Fase 1.1...").
- **UX-DR8:** Patrón de navegación global con _Sticky Header_ para retener los CTAs en todo momento al hacer scroll.
- **UX-DR9:** Estados interactivos (Hover: transición `0.2s ease` de reborde color accent; Active: reducción tamaño `scale 0.98` en clicks).
- **UX-DR10:** Accesibilidad UX (Contraste superior a WCAG 4.5:1, Outline visible en foco de teclado, y atributos semánticos `details`/`summary` o `aria-expanded`).

### FR Coverage Map

- **FR1:** Epic 1 - Renderizado Dinámico de Experiencia
- **FR2:** Epic 1 - Llamados a la Acción (CTAs)
- **FR3:** Epic 1 - Enlaces de Validación
- **FR4:** Epic 2 - Listado de Artículos
- **FR5:** Epic 2 - Categorías y Etiquetas
- **FR6:** Epic 2 - Lectura de Artículos
- **FR7:** Epic 3 - Sección "Sandbox" Global
- **FR8:** Epic 3 - Estado "Próximamente"
- **FR9:** Epic 1.5 - Data Viz
- **FR10:** Epic 1.5 - Data Viz
- **FR11:** Epic 1.5 - Data Viz

## Epic List

### Epic 1: Perfil Profesional y Validación (Landing Page)

Permitir que los reclutadores y visitantes descubran la experiencia del candidato interactuando con su historial, y facilitar el contacto o validación mediante la descarga del CV y revisión de redes sociales.
**FRs covered:** FR1, FR2, FR3
**NFRs covered:** NFR4, NFR5
**ARCH covered:** ARCH1, ARCH5

#### Story 1.1: Scaffold del Proyecto, Layout Base y Sistema de Diseño

As a visitante,
I want el proyecto correctamente inicializado y el layout global con las variables CSS configuradas,
So that el resto de componentes mantengan la estética "Midnight Cobalt" y el código cumpla con los estándares de calidad desde el inicio.

**Acceptance Criteria:**

**Given** que el proyecto se inicializa por primera vez
**When** se ejecuta el scaffold de Astro
**Then** el proyecto debe estar configurado con Astro 4.x, la integración de React (`@astrojs/react`), y TypeScript en modo estricto (`strict: true` en `tsconfig.json`)
**And** ESLint y Prettier deben estar configurados y funcionales (`npm run lint` y `npm run format` ejecutan sin errores).

**Given** que el usuario carga el sitio
**When** el navegador renderiza la página
**Then** el fondo y tipografías deben usar las variables HSL nativas definidas (ej. `surface-base`, fuente Sans Serif base)
**And** el diseño debe ser responsive (flujo de una sola columna en móviles y contenedor de ancho máximo en escritorio).

#### Story 1.2: Navegación Global (Sticky Header) y Enlaces de Validación

As a reclutador,
I want una cabecera fija con botones de acción y redes sociales,
So that pueda descargar el CV o ir a GitHub/LinkedIn sin perder mi lugar.

**Acceptance Criteria:**

**Given** que el usuario hace scroll hacia abajo
**When** la cabecera original sale de la vista inicial
**Then** el menú de navegación debe quedarse fijo (sticky) en la parte superior
**And** debe mostrar un outline visible de color acento al navegar con teclado para accesibilidad.

**Given** que el usuario hace clic en "Descargar CV"
**When** la acción es procesada
**Then** debe descargar un documento PDF sin sacarlo de la página actual.

#### Story 1.3: Componente CV Interactivo con Acordeones (React Island)

As a visitante,
I want ver el historial laboral en una línea de tiempo expandible,
So that pueda leer detalles técnicos solo de los proyectos que me interesan sin cambiar de página.

**Acceptance Criteria:**

**Given** que el usuario llega a la sección de Experiencia
**When** hace clic en el encabezado de un rol
**Then** un acordeón interactivo (React Island) debe expandirse suavemente hacia abajo (CSS animation) para revelar los detalles
**And** debe actualizar los atributos semánticos (`aria-expanded`) para lectores de pantalla.

**Given** que el contenido del acordeón es muy extenso
**When** el acordeón se expande
**Then** el navegador debe ajustar el scroll automáticamente si es necesario, asegurando que el encabezado del rol siga visible.

**Given** que el acordeón está abierto
**When** el usuario hace clic nuevamente en el encabezado o icono chevron
**Then** el acordeón debe colapsarse.

#### Story 1.4: Pipeline CI/CD con GitHub Actions

As a visitante,
I want que el sitio se despliegue automáticamente con cada cambio,
So that siempre pueda acceder a la versión más reciente del portafolio sin interrupciones.

**Acceptance Criteria:**

**Given** que se realiza un push a la rama principal del repositorio
**When** GitHub Actions detecta el cambio
**Then** debe ejecutarse automáticamente un workflow que compile el proyecto con Astro (`astro build`) y despliegue el resultado en GitHub Pages
**And** el workflow debe fallar si el build produce errores de TypeScript o linting.

**Given** que el despliegue se completa exitosamente
**When** el visitante accede a la URL pública del sitio
**Then** debe ver la versión actualizada del portafolio.

### Epic 1.5: Visualización Dinámica de Logros y CV Híbrido (Data Viz)

Crear componentes dinámicos e interactivos usando React, Tailwind CSS y librerías del mercado para mostrar visualmente el impacto de negocio del candidato y organizar su extensa hoja de vida.
**FRs covered:** FR9, FR10, FR11

#### Story 1.5.1: Scaffold de Tailwind CSS e Infraestructura UI

As a visitante,
I want un sistema de diseño consistente utilizando Tailwind CSS,
So that los componentes complejos (gráficos, pestañas) tengan una apariencia ultra-premium alineada a 'Midnight Cobalt'.

**Acceptance Criteria:**

- Tailwind CSS debe estar configurado en el proyecto Astro.
- Los tokens 'Midnight Cobalt' deben mapearse a las variables de Tailwind.
- El proyecto debe compilar sin errores en el pipeline de CI/CD.

#### Story 1.5.2: Impact Grid (Visualización de Logros)

As a visitante,
I want ver gráficos de datos,
So that el impacto cuantitativo del candidato (3 años a 1 año, 9 a 190, 4h a 5m, 100% agnosticismo) sea inmediatamente evidente.

**Acceptance Criteria:**

- Implementar gráficos usando Recharts o SVG para las métricas de impacto.
- Los gráficos deben ser responsivos y accesibles.

#### Story 1.5.3: Componente Avanzado de Experiencia (Tabs por Equipos)

As a reclutador,
I want navegar la experiencia en AVAL DIGITAL LABS por equipos,
So that pueda diferenciar el impacto como QA Senior del impacto como AI Engineer.

**Acceptance Criteria:**

- La tarjeta de AVAL debe contener pestañas internas (Tabs) usando Radix UI o similar.
- Debe tener secciones separadas para Re:Act, AV Villas/Occidente, Servicios Compartidos, y Transversal.
- Tarjetas separadas para el resto del historial laboral.

#### Story 1.5.4: Grid de Credenciales (Bento Box) y Tech Marquee

As a reclutador,
I want ver de un vistazo el stack técnico y certificaciones formales,
So that pueda hacer check de los requisitos del cargo.

**Acceptance Criteria:**

- Un Marquee infinito horizontal con las herramientas técnicas.
- Un layout Bento Box listando las 8 certificaciones (AWS/ISTQB/Scrum) y la maestría/publicaciones.

### Epic 2: Demostración de Conocimiento (Blog Técnico)

Demostrar autoridad técnica permitiendo a los visitantes explorar, filtrar y leer artículos sobre ingeniería y automatización sin fricción.
**FRs covered:** FR4, FR5, FR6

#### Story 2.1: Configuración de Colecciones de Contenido (Content Collections)

As a content author,
I want que las colecciones de contenido de Astro validen automáticamente los metadatos usando un esquema estricto de Zod,
So that los visitantes nunca vean páginas de artículos rotas por datos incompletos o mal formateados.

**Acceptance Criteria:**

**Given** que se añade un nuevo archivo Markdown/MDX al directorio `src/content/blog`
**When** el proyecto se compila
**Then** Astro debe validar que el frontmatter cumple con el esquema definido en Zod (título, extracto, fecha y arreglo de etiquetas)
**And** debe fallar el build si faltan metadatos obligatorios.

#### Story 2.2: Listado y Componente de Tarjeta de Artículo (Feed del Blog)

As a visitante,
I want ver un listado de artículos del blog usando un diseño limpio de tarjeta,
So that pueda explorar los temas y extraer rápidamente su valor.

**Acceptance Criteria:**

**Given** que el usuario visita la ruta `/blog`
**When** la página renderiza
**Then** se debe mostrar una lista de _Blog Article Cards_ ordenadas por fecha
**And** el título de la tarjeta debe usar fuente Sans Serif, mientras que la fecha y etiquetas deben usar fuente Monospace.

#### Story 2.3: Filtrado de Artículos por Categorías y Etiquetas

As a visitante,
I want poder hacer clic en una etiqueta técnica (ej. "QA Automation"),
So that pueda ver únicamente los artículos relacionados a ese tema sin recargar elementos innecesarios.

**Acceptance Criteria:**

**Given** que el usuario visualiza una tarjeta de artículo con etiquetas
**When** hace clic en una etiqueta específica
**Then** el sistema debe enrutar al usuario a una página estática (generada previamente por Astro en build-time) mostrando solo los artículos con esa etiqueta
**And** no debe requerir JavaScript de cliente para el filtrado.

#### Story 2.4: Lectura de Artículo Individual (Renderizado Markdown/MDX)

As a visitante,
I want abrir un artículo individual,
So that pueda leer el contenido completo con el formato adecuado, especialmente ejemplos de código.

**Acceptance Criteria:**

**Given** que el usuario hace clic en un artículo del listado
**When** se carga la ruta de la página individual
**Then** el contenido Markdown/MDX debe renderizarse correctamente
**And** los bloques de código deben mantener la fuente monoespaciada y la paleta de colores.

**Given** que el artículo renderiza un bloque de código
**When** se verifica la accesibilidad
**Then** el contraste de los colores de sintaxis sobre el fondo oscuro debe cumplir estrictamente con el ratio WCAG 4.5:1.

### Epic 3: Generación de Expectativa Técnica (Sandbox Placeholder)

Mostrar la intención arquitectónica y generar interés por las futuras integraciones de IA (Fase 1.1) a través de una experiencia simulada estilo consola.
**FRs covered:** FR7, FR8

#### Story 3.1: Sección y Enlace del Sandbox en Navegación Global

As a visitante,
I want ver un enlace al "Sandbox IA" en la cabecera principal,
So that sepa que el candidato tiene experiencia o interés en Inteligencia Artificial.

**Acceptance Criteria:**

**Given** que el usuario visualiza la navegación global
**When** se renderiza la cabecera
**Then** debe incluir un enlace claramente visible apuntando a la ruta `/sandbox`.

**Given** que el usuario hace clic en el enlace
**When** el navegador procesa la petición
**Then** debe cargar la página correspondiente al Sandbox.

#### Story 3.2: Componente Placeholder Animado (CSS Puro)

As a visitante,
I want ver una interfaz que simule una consola de comandos en desarrollo,
So that perciba la complejidad técnica de lo que se está construyendo, sin necesidad de que sea funcional todavía.

**Acceptance Criteria:**

**Given** que el usuario entra a la ruta `/sandbox`
**When** el componente placeholder se renderiza
**Then** debe lucir como una ventana de terminal, utilizando las variables del tema oscuro y fuente monoespaciada de "Midnight Cobalt".

**Given** que el texto principal se muestra en pantalla
**When** el usuario lo visualiza
**Then** debe tener una animación de tipeo (typing effect) o un cursor parpadeante (blinking pulse) construido exclusivamente con CSS puro (0 JavaScript)
**And** el texto debe decir exactamente: "Entrenando modelos de recomendación - Fase 1.1...".
