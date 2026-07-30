---
baseline_commit: d08339d4267059b30c05035dde9fba669a2e4d78
---

# Story 1.5: Toggle de Modo Oscuro (Vainilla)

Status: done

## Story

As a visitante,
I want poder cambiar entre modo claro y oscuro en el portafolio,
so that pueda leer el contenido cómodamente según mi preferencia visual o entorno.

## Acceptance Criteria

1. **Given** que el usuario visita el portafolio
   **When** hace clic en el botón de alternancia de tema en la navegación (sticky-header)
   **Then** el tema de la página debe cambiar de claro a oscuro (o viceversa).

2. **Given** que el usuario cambia el tema
   **When** recarga la página o navega a otra sección
   **Then** su preferencia de tema debe ser recordada (persistencia mediante `localStorage`).

3. **Given** que el usuario visita el sitio por primera vez
   **When** no tiene una preferencia guardada en `localStorage`
   **Then** el sistema debe respetar la preferencia de color de su sistema operativo (`prefers-color-scheme`).

## Developer Context

**Epic Goal**: Perfil Profesional y Validación (Landing Page).
**Business Value**: Añadir modo oscuro no solo mejora la accesibilidad, sino que transmite una estética "premium" y técnica, acorde a la regla de diseño establecida para el portafolio de un Ingeniero Senior de Software.

## Dev Agent Guardrails

### Technical Requirements

- **Zero JS Frameworks:** (ARCH/YUI) No utilizar un componente de React para esto. Implementar la lógica con Vanilla JavaScript directamente en el Astro layout o en el componente Header mediante una etiqueta `<script>`.
- **CSS Custom Properties:** La alternancia de colores debe manejarse aplicando un atributo (ej. `data-theme="dark"` o una clase `.dark`) al elemento `<html>` y actualizando variables CSS en `index.css`.
- **Prevención de FOUC:** Añadir un script inline pequeño y bloqueante en el `<head>` del layout principal para leer el tema del `localStorage` antes de que se pinte la pantalla por primera vez.

### File Structure Requirements

- Crear/Modificar `src/components/Header.astro` para agregar el botón de toggle (íconos de sol/luna en SVG o texto estilizado).
- Modificar `src/layouts/Layout.astro` para inyectar el script inline del `<head>`.
- Modificar `src/styles/index.css` (o equivalente) para definir la paleta de colores de modo oscuro (`[data-theme="dark"]`).

### Architecture Compliance

- Cumplir estrictamente con mantener la lógica de UI liviana. Todo el scripting debe ser Vanilla JS del lado del cliente.
- Mantener la accesibilidad (atributos `aria-label` para el botón del toggle).

## Tasks / Subtasks

- [x] 1. Definir estilos CSS y paletas para el modo oscuro en `index.css`.
  - [x] 1.1 Configurar variables CSS base en `:root` para modo claro y modo oscuro (mediante atributo `data-theme="dark"`).
- [x] 2. Configurar prevención de FOUC en Layout principal.
  - [x] 2.1 Modificar `<head>` en `Layout.astro` para incluir un script en línea que lea `localStorage` y `matchMedia` para inyectar inmediatamente el atributo `data-theme`.
- [x] 3. Agregar el botón de Toggle en el Header.
  - [x] 3.1 Actualizar `Header.astro` y agregar un `<button>` con un ícono SVG minimalista para alternar temas.
  - [x] 3.2 Escribir un `<script>` al final de `Header.astro` para escuchar clics en el botón, alternar el `data-theme` y guardar en `localStorage`.
- [x] 4. Validar funcionalidad (redibujado sin parpadeos, persistencia en recarga, reacción del CSS).

## Dev Agent Record

### Agent Model Used

Gemini 3.1 Pro (High)

### Debug Log References

### Completion Notes List

- Añadidos `transition` en `global.css` para suavizar el cambio de colores del modo oscuro/claro.
- Removido `data-theme="dark"` estático y agregado script inline preventor de FOUC en `Layout.astro`.
- Integrado el botón de Toggle nativo SVG (`#theme-toggle`) en `Header.astro` manejado sin framework.
- Persistencia local habilitada usando `window.localStorage`.
- Validado mediante `npm run build` y `npm run lint`.

### File List

- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/components/Header.astro`

### Review Findings

- [x] [Review][Patch] Manejo de excepciones en localStorage faltante [`src/components/ThemeScript.astro`:19]
- [x] [Review][Patch] Añadir `type="button"` al botón de toggle [`src/components/Header.astro`:21]
- [x] [Review][Patch] Refactorizar SVG y `display` quitando `!important` [`src/components/Header.astro`:23]
- [x] [Review][Patch] Faltan atributos de accesibilidad dinámica (ARÍA) en el botón [`src/components/Header.astro`:21]
- [x] [Review][Patch] Falta event listener de cambio de tema a nivel SO (`matchMedia` listener) [`src/components/ThemeScript.astro`:12]
- [x] [Review][Patch] Prevenir FOUC causado por CSS `transition` al cargar la página [`src/styles/global.css`:65]
- [x] [Review][Defer] Sincronización entre múltiples pestañas vía Storage Event — deferred, pre-existing
