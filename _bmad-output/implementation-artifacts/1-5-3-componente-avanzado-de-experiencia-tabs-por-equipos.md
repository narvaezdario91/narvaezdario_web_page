---
baseline_commit: 0046f82548d0b444575ad78cc506650af6752bf6
---

# Story 1.5.3: Componente Avanzado de Experiencia (Tabs por Equipos)

## Story Requirements
**User Story:** As a reclutador, I want navegar la experiencia en AVAL DIGITAL LABS por equipos, So that pueda diferenciar el impacto como QA Senior del impacto como AI Engineer.

**Acceptance Criteria:**
- La tarjeta de AVAL debe contener pestañas internas (Tabs) usando Radix UI o similar.
- Debe tener secciones separadas para Re:Act, AV Villas/Occidente, Servicios Compartidos, y Transversal.
- Tarjetas separadas para el resto del historial laboral.

## Developer Context & Guardrails

### Technical Requirements
- Utilizar Tailwind CSS para estructurar los Tabs.
- Implementar un componente de React (Island) para las Tabs dado que requieren interactividad, usando Radix UI Tabs (`@radix-ui/react-tabs`) o estado de React puro.
- Utilizar `client:visible` en Astro para cargar la interactividad cuando el componente entre en pantalla.
- Extraer el contenido del historial laboral de `cv-source-data.md` asegurando separar la experiencia en AVAL (con sus 4 divisiones) de THALES, SERATIC y AGILCON.

### Architecture Compliance
**AD-1 — Manejo de Estilos:**
- Se utilizará Tailwind CSS como motor principal de estilos. Todo el diseño, el layout y las animaciones de las pestañas deben implementarse utilizando sus clases utilitarias integradas con los colores Midnight Cobalt.

**AD-2 — Interactividad (Islands Architecture):**
- Se utilizará React de manera exclusiva para los componentes interactivos en las "islas" de Astro.

**AD-3 — Capa de Datos:**
- La fuente de datos local debe extraerse y organizarse en el componente o de la Content Collection (si aplica). Las secciones de AVAL son: Servicios Compartidos, AV Villas/Occidente, Re:Act, Transversal.

**AD-5 — Ecosistema UI:**
- Se permite el uso de librerías del ecosistema React (Radix UI) para componentes interactivos base como Tabs dentro de las islas de Astro.

### Library & Framework Requirements
- Astro 4.x
- React 18.x
- Tailwind CSS 3.4
- Se recomienda Radix UI (`@radix-ui/react-tabs`) para asegurar una accesibilidad (WAI-ARIA) robusta con navegación por teclado, o alternativamente implementar la semántica correcta (aria-controls, aria-selected) manualmente en React.

### File Structure Requirements
- `src/components/ExperienceTabs.tsx` o similar (Isla de React).
- `src/pages/index.astro`: Integrar `<ExperienceTabs client:visible />` en la sección del CV en reemplazo o en convivencia con la solución actual.

### Testing Requirements
- Ejecutar `npm run build` para asegurar que las nuevas dependencias no rompan Astro.
- Validar accesibilidad de teclado en los Tabs (navegación con flechas, outline de foco activo).
- Comprobar modo responsive: en pantallas móviles, las pestañas deben poder hacer scroll horizontal o envolverse (`flex-wrap`) para no romper el layout.

## Previous Story Intelligence
- En la historia **1.5.2** se resolvieron problemas de accesibilidad (aria-labels, manejo de `aria-hidden`) y se usó `text-xs` para mejorar legibilidad en móvil. Asegúrate de aplicar estas mejoras de tipografía en los textos técnicos dentro de cada tab.
- Se implementaron efectos hover y transiciones en otros componentes (glassmorphism, rebordes color accent). Las pestañas activas deben tener una indicación visual clara que respete el WCAG 4.5:1.
- Usa exclusivamente clases utilitarias de Tailwind, evitando mezclar con CSS global donde no sea necesario (hallazgo recurrente en las retrospectivas).

## Latest Tech Information
- `@radix-ui/react-tabs` es altamente accesible. Requiere instalar el paquete y proveer los subcomponentes `Tabs.Root`, `Tabs.List`, `Tabs.Trigger` y `Tabs.Content`.
- En Tailwind, con Radix UI los triggers inactivos cambian al estar activos a través del atributo `data-[state=active]`, lo cual puede estilizarse con clases como `data-[state=active]:bg-accent`.

## Project Context Reference
- [Epic 1.5](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/epics.md)
- [Architecture](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md)
- [CV Source Data](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/cv-source-data.md)

## Dev Notes
- Información Específica para los Tabs de AVAL:
  1. **Servicios Compartidos (QA Senior):** Arquitectura y Aceleración E2E de APIs (Java, Rest Assured, Serenity BDD).
  2. **Vivienda Digital AV Villas y Occidente (QA Senior):** Democratización de QA Automation (Playwright, KDT, TypeScript).
  3. **Re:Act (AI Engineer):** Optimización UX con IA y Agilidad QA (LangGraph, LangChain, OpenAI, Atlassian Rovo).
  4. **Transversal:** Estandarización de Performance Testing (K6, Docker).
- El resto de empresas (THALES, SERATIC, AGILCON) deben seguir renderizándose como tarjetas independientes o acordeones, fuera de los tabs específicos de la experiencia de AVAL.

## Tasks/Subtasks
- [x] Instalar `@radix-ui/react-tabs` u otra solución seleccionada.
- [x] Crear el componente `ExperienceTabs.tsx` implementando los tabs y paneles para cada equipo de AVAL.
- [x] Trasladar el contenido correspondiente desde el `cv-source-data.md` hacia la estructura de los tabs.
- [x] Estilizar los triggers (pestañas) y los paneles usando Tailwind CSS, verificando contraste y responsive.
- [x] Integrar el componente en la página principal, manejando correctamente los componentes ya existentes del CV para el resto del historial laboral.
- [x] Verificar con `npm run build` y testeo visual manual.

## Dev Agent Record
- **Debug Log:** Integrado correctamente @radix-ui/react-tabs en la página index.astro. Verificado la build usando `npm run build`.
- **Completion Notes:** Creado `ExperienceTabs.tsx` que muestra la experiencia detallada de AVAL de forma accesible.

## File List
- `package.json` (modified)
- `package-lock.json` (modified)
- `src/components/ExperienceTabs.tsx` (new)
- `src/pages/index.astro` (modified)

## Change Log
- Se instaló la dependencia `@radix-ui/react-tabs`.
- Se implementó el componente `ExperienceTabs.tsx` y se removió a AVAL de `experienceData` en `index.astro`, reemplazándolo por el nuevo componente renderizado como isla de React (`client:visible`).

## Status
done
### Review Findings
- [x] [Review][Patch] Separación de datos: Extraer datos hardcodeados y pasarlos por props [src/components/ExperienceTabs.tsx]
- [x] [Review][Patch] defaultValue dinámico: Evitar 'react' hardcodeado en Tabs.Root [src/components/ExperienceTabs.tsx]
- [x] [Review][Patch] Animaciones: Falta instalar y configurar tailwindcss-animate para las clases animate-in [package.json]
- [x] [Review][Patch] Tipografía: Usar text-xs en lugar de text-sm para alinear con mejoras previas [src/components/ExperienceTabs.tsx]
- [x] [Review][Defer] Missing Error Boundary en Astro Island — deferred, pre-existing
- [x] [Review][Defer] Fechas hardcodeadas — deferred, pre-existing
- [x] [Review][Defer] Falla gracefully sin JavaScript — deferred, pre-existing
- [x] [Review][Defer] Falta interfaz de props genérica — deferred, pre-existing
