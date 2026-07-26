---
baseline_commit: 65f3ac9
---

# Story 1.3: Componente CV Interactivo con Acordeones (React Island)

Status: done

## Story

As a visitante,
I want ver el historial laboral en una línea de tiempo expandible,
So that pueda leer detalles técnicos solo de los proyectos que me interesan sin cambiar de página.

## Acceptance Criteria

1. **Given** que el usuario llega a la sección de Experiencia
   **When** hace clic en el encabezado de un rol
   **Then** un acordeón interactivo (React Island) debe expandirse suavemente hacia abajo (CSS animation) para revelar los detalles
   **And** debe actualizar los atributos semánticos (`aria-expanded`) para lectores de pantalla.

2. **Given** que el contenido del acordeón es muy extenso
   **When** el acordeón se expande
   **Then** el navegador debe ajustar el scroll automáticamente si es necesario, asegurando que el encabezado del rol siga visible.

3. **Given** que el acordeón está abierto
   **When** el usuario hace clic nuevamente en el encabezado o icono chevron
   **Then** el acordeón debe colapsarse.

## Developer Context

**Epic Goal**: Perfil Profesional y Validación (Landing Page). Permitir que los reclutadores y visitantes descubran la experiencia del candidato interactuando con su historial, y facilitar el contacto o validación mediante la descarga del CV y revisión de redes sociales.

**Business Value**: El historial laboral no debe ser un muro de texto; los acordeones permiten a los reclutadores escanear rápidamente los roles y profundizar solo en aquellos proyectos técnicos que validan los requisitos del puesto, reduciendo el ruido cognitivo.

## Dev Agent Guardrails

### Technical Requirements

- **Componente Interactivo**: Debe implementarse como un componente funcional de React.
- **Hidratación en Astro**: Debe usarse la directiva `client:load` o `client:visible` cuando se importe en la página de Astro para que la interactividad funcione.
- **Animaciones**: Las transiciones de altura (expandir/colapsar) y la rotación del icono chevron al abrir deben implementarse con transiciones suaves en CSS (`transition: height`, `transition: transform`), no mediante JavaScript de React, utilizando el estado local solo para alternar clases de estado de CSS.
- **Scroll Automático**: En React, se puede usar un `ref` al contenedor y llamar a `scrollIntoView` si el acordeón se expande.
- **Atributos Semánticos**: El elemento `button` o envoltorio clickable que dispara la acción debe tener `aria-expanded={isOpen}`.

### Architecture Compliance

- **Paradigm:** Component-Based SSG with Islands Architecture.
- **Styling:** Vanilla CSS con CSS Modules importados en el componente React (`import styles from './CVAccordion.module.css'`). NINGÚN framework utilitario (Tailwind).
- **Tokens de Diseño:** Utilizar el color de acento `var(--accent)` y el color para tarjetas elevadas `var(--surface-raised)` definidos en `src/styles/global.css`.

### Library & Framework Requirements

- **React 18+** (ya instalado mediante `@astrojs/react`).
- Las animaciones deben ser puramente manejadas con CSS.

### File Structure Requirements

- Crear componente: `src/components/CVAccordion.tsx`.
- Crear estilos locales: `src/components/CVAccordion.module.css`.
- Modificar página principal: `src/pages/index.astro` para importar e instanciar múltiples `<CVAccordion client:visible />` utilizando **exactamente** la siguiente información extraída del CV real:

  1. **QA Automation Senior | AI Engineer** (06/2021 – Presente)
     _Compañía:_ AVAL DIGITAL LABS (ADL)
     _Descripción:_ Profesional Senior enfocado en la aplicación de Inteligencia Artificial, automatización y arquitectura de pruebas para transformar procesos de ingeniería de software.
     _Logros:_
     - **Arquitectura y Aceleración E2E de APIs (Servicios Compartidos):** Diseñé una arquitectura de automatización para APIs basada en Java, Rest Assured y Serenity BDD, integrada en pipelines de CI/CD mediante Jenkins y Git...
     - **Agilidad en el proceso de QA:** Diseñé e implementé un agente autónomo integrado con Jira mediante Atlassian Rovo para analizar historias de usuario y generar automáticamente casos de prueba...
     - **Optimización en el proceso de UX:** Construí un motor de análisis de sentimientos basado en IA para procesar comentarios de usuarios, reduciendo el tiempo de análisis de UX de 4 horas a 5 minutos.
     - **Democratización de QA Automation:** Diseñé una arquitectura de automatización basada en Playwright y TypeScript bajo el enfoque KDT.
     - **Estandarización de Performance Testing:** Apoyé en el liderazgo de la definición y adopción del estándar corporativo para pruebas de rendimiento (K6 y Docker).

  2. **Ingeniero Validador** (06/2019 – 06/2021)
     _Compañía:_ THALES (Antes Gemalto)
     _Descripción:_ Responsable de la evaluación y calidad de soluciones mediante pruebas manuales y automatizadas para sistemas críticos gubernamentales.
     _Logros:_
     - **Automatización de Sistemas Biométricos (Nuevo León, México):** Lideré la automatización end-to-end del enrolamiento ciudadano (ABIS).
     - **Continuidad Operativa (Ministerio del Interior, Paraguay):** Diseñé una solución de automatización que sustituyó la dependencia de dispositivos biométricos físicos mediante mecanismos de simulación.

  3. **Desarrollador de Software** (04/2017 – 03/2019)
     _Compañía:_ SERATIC
     _Logros:_
     - **Desarrollo de Middleware e Integraciones:** Diseñé y codifiqué sistemas intermedios (Groovy / Grails).
     - **Arquitectura y Rendimiento:** Construí y ejecuté pruebas automatizadas de carga (jMeter y SOAP UI).
     - **Gestión de Producto Internacional:** Actué como Product Owner asignado en Perú (ENEL, MAPFRE, Telefónica, SOLGAS).

  4. **Desarrollador de Software** (03/2014 – 03/2017)
     _Compañía:_ AGILCON S.A.S.
     _Logros:_
     - **Liderazgo Ágil y Desarrollo Fullstack:** Scrum Master y desarrollador web/móvil (Bancolombia, Alpopular, Ripley).
     - **Modernización de Arquitecturas:** Lideré migración tecnológica legacy (Oracle Forms) a arquitecturas modernas (Groovy/Grails).

### Testing Requirements

- Asegurar que al navegar con tabulador (`Tab`), el encabezado reciba un outline visible de foco (usar `:focus-visible` con `outline` del color `var(--accent)`).
- Verificar el contraste tipográfico del componente WCAG 4.5:1.

## Previous Story Intelligence (Story 1.2)

- **Learnings & Patterns:**
  - El proyecto ha establecido el uso estricto de variables HSL `var(--accent)`, `var(--surface-raised)` y otras variables en `src/styles/global.css`. En los CSS Modules del componente, úsalas para aplicar colores.
  - Asegurar el uso de `:focus-visible` para la accesibilidad del teclado, de forma consistente a como se implementó en el `<Header />`.

## Git Intelligence Summary

- En los commits anteriores (`65f3ac9`), el scaffold base y sistema de diseño se configuraron sólidamente, así como la estructura del Layout en Astro. React está integrado y listo para "Islands Architecture".

## Latest Tech Information

- **CSS Height Animation:** Para animar la apertura y cierre sin saber la altura explícita en px, una técnica moderna es usar `grid-template-rows` en `display: grid`.
  ```css
  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }
  .accordion-content.open {
    grid-template-rows: 1fr;
  }
  .accordion-content-inner {
    overflow: hidden;
  }
  ```

## Project Context Reference

- **PRD**: `prd-narvaezdario_web_page-2026-07-25`
- **Architecture**: `architecture-narvaezdario_web_page-2026-07-25`
- **UX**: `ux-narvaezdario_web_page-2026-07-26`

## Tasks/Subtasks

- [x] 1. Componente React Island (`src/components/CVAccordion.tsx`)
  - [x] 1.1 Definir interfaz de Props (`roleTitle`, `company`, `period`, `description`, `achievements`, `defaultOpen`).
  - [x] 1.2 Implementar estado local `isOpen` y toggle interactivo.
  - [x] 1.3 Implementar `ref` y comportamiento de `scrollIntoView` al expandir.
  - [x] 1.4 Garantizar semántica accesible (`button` con `aria-expanded` y `aria-controls`).
- [x] 2. Estilos CSS Module (`src/components/CVAccordion.module.css`)
  - [x] 2.1 Crear contenedor de acordeón con tarjeta elevada (`var(--surface-raised)`, `var(--border-hairline)`).
  - [x] 2.2 Implementar animación de altura con CSS Grid (`grid-template-rows 0.3s ease`).
  - [x] 2.3 Implementar animación/rotación del icono chevron.
  - [x] 2.4 Implementar `:focus-visible` con `outline` color `var(--accent)`.
- [x] 3. Integración en `src/pages/index.astro`
  - [x] 3.1 Crear sección "Experiencia Laboral" en `index.astro`.
  - [x] 3.2 Instanciar `<CVAccordion client:visible />` con la información de los 4 roles del CV real.
- [x] 4. Validaciones y Calidad de Código
  - [x] 4.1 Verificar sintaxis, linter y formateo.
  - [x] 4.2 Ejecutar build de Astro (`npm run build`) para asegurar que no hay errores de SSR/hidratación.

## Dev Agent Record

### Debug Log

- Linter ejecutado sin advertencias (`npm run lint`).
- Build estático de Astro verificado con éxito (`npm run build`, 12:34:43 - 1 page built cleanly).
- Formateador Prettier verificado (`npm run format`).

### Completion Notes

- Creado el componente React Island `src/components/CVAccordion.tsx` y su módulo de estilos `src/components/CVAccordion.module.css`.
- Transición suave de apertura y cierre usando la técnica de CSS Grid (`grid-template-rows 0.3s ease`) y rotación de chevron (`transform 0.3s ease`).
- Implementado ajuste automático de vista (`scrollIntoView({ behavior: 'smooth', block: 'nearest' })`) al expandir acordeones.
- Garantizada la accesibilidad WCAG con atributos semánticos (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) y `:focus-visible` con `outline: 2px solid var(--accent)`.
- Integrado en `src/pages/index.astro` con la directiva `client:visible` renderizando la información completa de los 4 roles reales del candidato.

### File List

- `src/components/CVAccordion.tsx` (nuevo)
- `src/components/CVAccordion.module.css` (nuevo)
- `src/pages/index.astro` (modificado)

### Change Log

- Implementado componente CVAccordion interactivo (React Island) con acordeones para la sección de Experiencia Laboral en la página principal.

## Story Completion Status

Ultimate context engine analysis completed - comprehensive developer guide created.

### Senior Developer Review (AI)

#### Action Items

- [x] [Review][Patch] `scrollIntoView` se ejecuta antes de terminar la transición de altura. Requiere `setTimeout` o esperar el final de la animación CSS. [src/components/CVAccordion.tsx:64]
- [x] [Review][Patch] Lógica frágil para procesar texto en negrita (`split('**')`), borra texto antes de la negrita y pierde formato si hay múltiples secciones. [src/components/CVAccordion.tsx:99]
- [x] [Review][Patch] Animaciones ignoran preferencias del sistema; faltan media queries `@media (prefers-reduced-motion)`. [src/components/CVAccordion.module.css:4]
- [x] [Review][Patch] `behavior: 'smooth'` en JS ignora preferencias del usuario para evitar motion sickness. [src/components/CVAccordion.tsx:64]
