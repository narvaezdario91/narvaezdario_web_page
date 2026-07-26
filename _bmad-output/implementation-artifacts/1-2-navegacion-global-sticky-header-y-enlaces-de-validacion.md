---
baseline_commit: 041a633471f04a9c460f69d4a187581f0c9a652b
---

# Story 1.2: Navegación Global (Sticky Header) y Enlaces de Validación

Status: done

## Story

As a reclutador,
I want una cabecera fija con botones de acción y redes sociales,
So that pueda descargar el CV o ir a GitHub/LinkedIn sin perder mi lugar.

## Acceptance Criteria

1. **Given** que el usuario hace scroll hacia abajo
   **When** la cabecera original sale de la vista inicial
   **Then** el menú de navegación debe quedarse fijo (sticky) en la parte superior
   **And** debe mostrar un outline visible de color acento al navegar con teclado para accesibilidad.

2. **Given** que el usuario hace clic en "Descargar CV"
   **When** la acción es procesada
   **Then** debe descargar un documento PDF sin sacarlo de la página actual.

## Developer Context

**Epic Goal**: Perfil Profesional y Validación (Landing Page). Permitir que los reclutadores y visitantes descubran la experiencia del candidato interactuando con su historial, y facilitar el contacto o validación mediante la descarga del CV y revisión de redes sociales.

**Business Value**: Proporcionar acceso rápido a los enlaces de validación más importantes (CV, GitHub, LinkedIn). Los reclutadores suelen tener poco tiempo; si hacen scroll y pierden el botón del CV, la fricción aumenta. El Sticky Header resuelve este problema.

## Dev Agent Guardrails

### Technical Requirements

- **Navegación:** `Header` o componente similar integrado en `Layout.astro`.
- **Efecto Sticky:** Usar `position: sticky` en CSS. No se requiere JavaScript para esto.
- **Glassmorphism:** El header debe usar un efecto sutil de glassmorphism (desenfoque de fondo y opacidad reducida) para asegurar que el contenido debajo sea legible cuando se hace scroll.
- **Botón CV:** Debe apuntar a un archivo estático PDF (que puede colocarse en `public/`).

### Architecture Compliance

- **Paradigm:** Component-Based SSG.
- **Styling:** Vanilla CSS con CSS Modules. Absolutamente NINGÚN framework utilitario (Tailwind).
- Uso estricto de las variables HSL de "Midnight Cobalt" (`--surface-raised`, `--accent`, `--border-hairline`) definidas en la Story 1.1 en `src/styles/global.css`.

### Library & Framework Requirements

- Astro 4.x.
- No se requiere React para esta historia, ya que la funcionalidad sticky es puramente CSS.
- Si se necesita añadir íconos (GitHub, LinkedIn), usar SVG puros (inline). No añadir dependencias pesadas de iconos si se puede evitar, para mantener el JS/CSS extra al mínimo.

### File Structure Requirements

- Crear componente en `src/components/Header.astro` (o similar).
- Importar y usar en `src/layouts/Layout.astro` para que esté disponible globalmente.

### Testing Requirements

- Asegurar que al navegar con tabulador (`Tab`), los enlaces y el botón obtengan un `outline` visible de color `--accent` (requisito de accesibilidad WCAG).
- Verificar que el contraste visual sea mínimo de 4.5:1.

## Previous Story Intelligence (Story 1.1)

- **Learnings & Patterns:**
  - En la Story 1.1, las variables CSS se configuraron en `src/styles/global.css`. Úsalas en lugar de definir colores rígidos.
  - Prestar atención a las reglas de cascade de CSS que dieron problemas en la primera revisión.
  - La estructura en `Layout.astro` ya establece el viewport y el background color en `<body>` o `<html>`. El Header debe encajar correctamente allí (por ejemplo, al inicio de `<body>`).

## Latest Tech Information

- `position: sticky` requiere que se defina `top: 0` (o un valor fijo) para activarse.
- Para lograr un efecto glassmorphism eficiente y con buen rendimiento en Astro sin preprocesadores complejos, se recomienda usar opacidad en el background color junto con `backdrop-filter: blur(...)`. Por ejemplo:
  ```css
  .header {
    /* Color de fondo oscuro semi-transparente para dar el efecto */
    background-color: rgba(15, 14, 38, 0.8);
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0;
    z-index: 50;
  }
  ```

## Project Context Reference

- **PRD**: `prd-narvaezdario_web_page-2026-07-25`
- **Architecture**: `architecture-narvaezdario_web_page-2026-07-25`
- **UX**: `ux-narvaezdario_web_page-2026-07-26`

## Tasks/Subtasks

- [x] 1. Asset del CV
  - [x] Crear o añadir un archivo PDF dummy (`cv.pdf`) en la carpeta `public/` para asegurar que el enlace funcione.
- [x] 2. Componente Header (HTML/CSS)
  - [x] Crear el componente `src/components/Header.astro`.
  - [x] Añadir semántica HTML `<header>` y `<nav>`.
  - [x] Implementar los enlaces principales (Inicio, Blog, Sandbox).
  - [x] Implementar los enlaces sociales (GitHub, LinkedIn) usando SVGs inline.
  - [x] Implementar el CTA "Descargar CV".
  - [x] Añadir clases de CSS Module para el estilo visual (Midnight Cobalt).
- [x] 3. Comportamiento Sticky y Glassmorphism
  - [x] Implementar `position: sticky; top: 0;` en el contenedor del header.
  - [x] Añadir efecto `backdrop-filter` para el glassmorphism.
- [x] 4. Accesibilidad y Estados
  - [x] Implementar estilos para `:hover`.
  - [x] Implementar estilos para `:active` (`transform: scale(0.98)`).
  - [x] Implementar `:focus-visible` con `outline` color accent.
- [x] 5. Integración en Layout
  - [x] Importar y montar el componente `Header` dentro de `src/layouts/Layout.astro`.

## Dev Agent Record

### Debug Log

- Sin problemas de linting ni de build. Prettier, ESLint y Astro Build pasaron al 100% sin advertencias ni errores.

### Completion Notes

- Creado el asset PDF `cv.pdf` en `public/`.
- Creado el componente `src/components/Header.astro` con navegación global, marca, links a GitHub/LinkedIn en SVG e integración de descarga del CV.
- Aplicado diseño responsive mobile-first y estética "Midnight Cobalt" con glassmorphism (`backdrop-filter: blur(12px)` + `position: sticky`).
- Garantizada la accesibilidad con `:focus-visible` outline de color `--accent` y estados interactivos `:hover`/`:active`.
- Integrado el componente `<Header />` en `src/layouts/Layout.astro`.

### File List

- `public/cv.pdf` (nuevo)
- `src/components/Header.astro` (nuevo)
- `src/layouts/Layout.astro` (modificado)

### Change Log

- Implementada navegación global fija (Sticky Header) con enlaces de validación y descarga de CV.

## Story Completion Status

Ultimate context engine analysis completed - comprehensive developer guide created.

### Review Findings

- [x] [Review][Patch] Enlace de LinkedIn es un placeholder genérico (`https://linkedin.com`) — Actualizar con el perfil real o dejar un TODO claro. [src/components/Header.astro]
- [x] [Review][Patch] Soporte de fallback `@supports` para `backdrop-filter` en glassmorphism. [src/components/Header.astro]
- [x] [Review][Patch] Corrección de especificidad CSS en `:hover` para evitar conflicto con `global.css`. [src/components/Header.astro]
- [x] [Review][Patch] Limpieza de espacios en blanco extra en el botón "Descargar CV". [src/components/Header.astro]
- [x] [Review][Patch] Especificidad CSS en `@media (max-width: 600px)` corregida para usar `a.nav-link` y `a.btn-cv`. [src/components/Header.astro]
- [x] [Review][Patch] Separación de bloques `@supports` para máxima compatibilidad con parsers CSS strict. [src/components/Header.astro]
