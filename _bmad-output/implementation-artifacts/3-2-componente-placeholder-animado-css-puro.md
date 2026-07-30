---
baseline_commit: a8191326fa3be5731dfad085368619752af70ee1
---

# Story 3.2: Componente Placeholder Animado (CSS Puro)

**Epic:** 3 - Generación de Expectativa Técnica (Sandbox Placeholder)

## User Story

As a visitante, I want ver una interfaz que simule una consola de comandos en desarrollo, So that perciba la complejidad técnica de lo que se está construyendo, sin necesidad de que sea funcional todavía.

## Acceptance Criteria

- **Given** que el usuario entra a la ruta `/sandbox`
- **When** el componente placeholder se renderiza
- **Then** debe lucir como una ventana de terminal, utilizando las variables del tema oscuro y fuente monoespaciada de "Midnight Cobalt".
- **Given** que el texto principal se muestra en pantalla
- **When** el usuario lo visualiza
- **Then** debe tener una animación de tipeo (typing effect) o un cursor parpadeante (blinking pulse) construido exclusivamente con CSS puro (0 JavaScript)
- **And** el texto debe decir exactamente: "Entrenando modelos de recomendación - Fase 1.1...".

## Developer Context

### Technical Requirements

- Reemplazar el contenido actual estático en `src/pages/sandbox.astro` con una interfaz que simule una consola/terminal.
- La animación (tipeo o cursor parpadeante) debe realizarse estrictamente con CSS (`@keyframes`, `steps()`, `animation`, etc.) **sin añadir JavaScript del lado del cliente**.
- El texto exacto a mostrar debe ser: `"Entrenando modelos de recomendación - Fase 1.1..."`.

### Architecture Compliance

- **Estilos:** Utilizar Vanilla CSS dentro de `<style>` en Astro. Usar las variables de diseño existentes (e.g. `--font-mono` para la tipografía monospace, `--surface-raised` o `--surface-base` para el fondo de la terminal, etc.).
- **JavaScript:** 0 JavaScript extra para la animación. Todo debe ser CSS puro.
- **Rendimiento:** Debe mantener la naturaleza de carga rápida (SSG) y puntuación Lighthouse >95.
- **Diseño / UX:** Mantener el sistema de color "Midnight Cobalt". Asegurar que haya suficiente contraste (WCAG 4.5:1).

## Tasks/Subtasks

- [x] 1. Crear el layout de la ventana de terminal en `src/pages/sandbox.astro` usando clases CSS utilitarias base para estructura (borde, fondo, padding).
- [x] 2. Implementar la animación del cursor parpadeante usando `@keyframes` en un bloque `<style>` dentro de Astro.
- [x] 3. Implementar el efecto de máquina de escribir usando la función `steps()` en la animación CSS.
- [x] 4. Ajustar estilos para garantizar responsividad, y probar contraste.
- [x] 5. Validar con NPM run build para asegurar que es un componente estático exitoso.

## File List

- [UPDATE] src/pages/sandbox.astro

## Dev Agent Record

### Debug Log

- N/A

### Completion Notes

- Implementado el layout de terminal utilizando CSS base y variables de diseño.
- Animaciones añadidas exitosamente con `@keyframes` (efecto typewriter y cursor parpadeante usando `steps()`).
- Responsive hasta 500px, adaptando el tamaño de fuente.
- Test de construcción (`npm run build`) validó exitosamente 0 errores.

## Change Log

- 2026-07-30: Implementado terminal de CSS puro en `sandbox.astro`.

## Status

- **Status:** review
- **Note:** Ultimate context engine analysis completed - comprehensive developer guide created.
