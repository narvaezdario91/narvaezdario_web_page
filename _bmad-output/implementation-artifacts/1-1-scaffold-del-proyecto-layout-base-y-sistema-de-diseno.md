---
baseline_commit: 041a633471f04a9c460f69d4a187581f0c9a652b
---

# Story 1.1: Scaffold del Proyecto, Layout Base y Sistema de Diseño

Status: done

## Story

As a visitante,
I want el proyecto correctamente inicializado y el layout global con las variables CSS configuradas,
so that el resto de componentes mantengan la estética "Midnight Cobalt" y el código cumpla con los estándares de calidad desde el inicio.

## Acceptance Criteria

1. **Given** que el proyecto se inicializa por primera vez
   **When** se ejecuta el scaffold de Astro
   **Then** el proyecto debe estar configurado con Astro 4.x, la integración de React (`@astrojs/react`), y TypeScript en modo estricto (`strict: true` en `tsconfig.json`)
   **And** ESLint y Prettier deben estar configurados y funcionales (`npm run lint` y `npm run format` ejecutan sin errores).

2. **Given** que el usuario carga el sitio
   **When** el navegador renderiza la página
   **Then** el fondo y tipografías deben usar las variables HSL nativas definidas (ej. `surface-base`, fuente Sans Serif base)
   **And** el diseño debe ser responsive (flujo de una sola columna en móviles y contenedor de ancho máximo en escritorio).

## Developer Context

**Epic Goal**: Permitir que los reclutadores y visitantes descubran la experiencia del candidato interactuando con su historial, y facilitar el contacto o validación mediante la descarga del CV y revisión de redes sociales. (Perfil Profesional y Validación / Landing Page)

**Business Value**: Sentar las bases del proyecto "narvaezdario_web_page" como un portafolio de grado de ingeniería. Esto incluye las herramientas fundamentales (Astro + React + TypeScript + Linting) y el sistema de variables CSS (Midnight Cobalt) que se usarán a lo largo de todo el sitio para dar la vibra de "Terminal Moderna".

## Dev Agent Guardrails

### Technical Requirements

- **Framework Base:** Astro 4.x para generación de HTML estático.
- **Integraciones:** `@astrojs/react` para los "islands" futuros (no se necesita hidratar JS en esta historia, pero el framework debe estar listo).
- **Tipado estricto:** TypeScript con configuración `strict: true` en `tsconfig.json`.

### Architecture Compliance

- **Paradigm:** Component-Based SSG (Static Site Generation) with Islands Architecture.
- **Styling:** Vanilla CSS con CSS Modules y variables HSL nativas. ABSOLUTAMENTE NINGÚN framework utilitario como Tailwind.
- Todo el diseño y las animaciones deben implementarse mediante hojas de estilo estándar.

### File Structure Requirements

- Seguir la semilla estructural definida en la arquitectura:
  ```
  src/
    components/      # Componentes UI reutilizables
    layouts/         # Envoltorios de diseño para consistencia (aquí irá el Layout base)
    pages/           # Enrutamiento (index.astro)
    styles/          # Archivos Vanilla CSS globales (variables HSL)
  ```
- Nombres de archivos y directorios deben ser limpios y consistentes (kebab-case preferido para URLs/archivos).

### Styling & UX Tokens (Midnight Cobalt)

Deben definirse las siguientes variables CSS globales en un archivo de estilos principal (ej. `src/styles/global.css`) e importarse en el Layout principal:

**Colors (Dark mode by default, fallback to Light if preferred, but Dark is main):**

- `surface-base`: `#0f0e26` (Oscuro) / `#ffffff` (Claro)
- `surface-raised`: `#1e1b4b` (Oscuro) / `#e0e7ff` (Claro)
- `accent`: `#6366f1` (Oscuro) / `#4338ca` (Claro)
- `border-hairline`: `#3730a3` (Oscuro) / `#c7d2fe` (Claro)
- Text Ink: `#e0e7ff` (Oscuro) / `#1e1b4b` (Claro)

**Typography:**

- `title` & `body`: Clean Sans Serif (e.g., Inter, Outfit)
- `meta`: Monospace (e.g., JetBrains Mono, Fira Code)

**Spacing & Layout:**

- 4px, 8px, 12px, 16px, 24px, 32px
- Mobile-First: Columna fluida que crece hasta un `max-width` razonable (ej. `800px` o `1024px`) centrado en escritorio.

### Code Quality & Testing Requirements

- Configurar ESLint y Prettier. Deben añadirse scripts en el `package.json`:
  - `"lint": "eslint ."` (o equivalente para astro)
  - `"format": "prettier --write ."`
- No debe haber errores de linting tras la inicialización.

## Project Context Reference

- **PRD**: `prd-narvaezdario_web_page-2026-07-25`
- **Architecture**: `architecture-narvaezdario_web_page-2026-07-25`
- **UX**: `ux-narvaezdario_web_page-2026-07-26`

## Tasks/Subtasks

- [x] 1. Inicialización del Proyecto
  - [x] Ejecutar el scaffold de Astro en modo no interactivo (`npx create-astro --yes --install --no-git`).
  - [x] Instalar `@astrojs/react`.
  - [x] Configurar TypeScript en modo estricto.
  - [x] Configurar ESLint y Prettier.
- [x] 2. Sistema de Diseño
  - [x] Crear `src/styles/global.css` con variables CSS Midnight Cobalt.
  - [x] Configurar tipografía base y estructura responsive.
- [x] 3. Layout Base
  - [x] Modificar `src/layouts/Layout.astro` para usar estilos globales.
  - [x] Actualizar `src/pages/index.astro` para usar el Layout.

## Dev Agent Record

### Debug Log

- Linter reportó un error con `class` vs `className` en `Layout.astro` debido a las reglas de React. Se deshabilitó `react/no-unknown-property` para archivos `.astro` en `eslint.config.mjs`.

### Completion Notes

- Scaffold de Astro exitoso.
- Integración con React (`@astrojs/react`) y TypeScript estricto configurada.
- Linters (ESLint 9 + Prettier) instalados y funcionando con scripts en `package.json`.
- Sistema de diseño "Midnight Cobalt" implementado usando CSS variables y `prefers-color-scheme`.
- Layout base creado y en uso por `index.astro`.
- Todas las pruebas de linting y formateo pasaron al 100%.

### File List

- `package.json` (modificado)
- `eslint.config.mjs` (nuevo)
- `.prettierrc` (nuevo)
- `src/styles/global.css` (nuevo)
- `src/layouts/Layout.astro` (nuevo)
- `src/pages/index.astro` (modificado)

### Change Log

- Añadido boilerplate de Astro y dependencias.
- Añadido sistema de estilo global Midnight Cobalt.
- Configurados linters.

### Review Findings (Ronda 1, 2 & 3)

- [x] [Review][Patch] Convertir variables a HSL [src/styles/global.css]
- [x] [Review][Patch] Doble mecanismo de theming sin coordinación [src/styles/global.css, src/layouts/Layout.astro]
- [x] [Review][Patch] `html` con `background-color` incorrecto / cascade [src/styles/global.css]
- [x] [Review][Patch] `box-sizing: border-box` duplicado [src/styles/global.css]
- [x] [Review][Patch] `meta viewport` sin `initial-scale=1` [src/layouts/Layout.astro]
- [x] [Review][Patch] Mover regla `html` base antes de selectores de tema en cascade [src/styles/global.css]
- [x] [Review][Patch] Eliminar trailing whitespace y corregir comentario engañoso en `html` base [src/styles/global.css]
- [x] [Review][Patch] Sincronizar `html` background-color con `var(--surface-base)` para overscroll móvil [src/styles/global.css]
- [x] [Review][Patch] Mover `@import` de Google Fonts a `<link preconnect>` en `<head>` [src/layouts/Layout.astro, src/styles/global.css]
- [x] [Review][Defer] Variables CSS sin valor fallback literal en `body` [src/styles/global.css] — deferred, pre-existing
- [x] [Review][Defer] `eslint-plugin-react` suprime toda regla `.astro` [eslint.config.mjs] — deferred, pre-existing
- [x] [Review][Defer] Google Fonts sin fallback de red [src/styles/global.css] — deferred, pre-existing
- [x] [Review][Defer] `data-theme="dark"` hardcodeado sin mecanismo de toggle [src/layouts/Layout.astro] — deferred, round 2
- [x] [Review][Defer] Patrón `h1 { color: --text-ink }` global puede requerir tokenización de headings en el futuro [src/styles/global.css] — deferred, round 2
- [x] [Review][Defer] Bloque `:root` fragmentado en dos secciones [src/styles/global.css] — deferred, round 3

## Story Completion Status

Ultimate context engine analysis completed - comprehensive developer guide created.
