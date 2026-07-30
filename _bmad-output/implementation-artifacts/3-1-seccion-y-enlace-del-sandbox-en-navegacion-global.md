---
baseline_commit: 0740dfbd4579755eb9cf41a585948fc0dd5225c8
---

# Story 3.1: Sección y Enlace del Sandbox en Navegación Global

**Epic:** 3 - Generación de Expectativa Técnica (Sandbox Placeholder)

## User Story

As a visitante, I want ver un enlace al "Sandbox IA" en la cabecera principal, So that sepa que el candidato tiene experiencia o interés en Inteligencia Artificial.

## Acceptance Criteria

- **Given** que el usuario visualiza la navegación global
- **When** se renderiza la cabecera
- **Then** debe incluir un enlace claramente visible apuntando a la ruta `/sandbox`.
- **Given** que el usuario hace clic en el enlace
- **When** el navegador procesa la petición
- **Then** debe cargar la página correspondiente al Sandbox.

## Developer Context

### Technical Requirements

- Crear la ruta `/sandbox` implementando el archivo `src/pages/sandbox.astro`.
- La página `/sandbox` debe utilizar el layout principal (`Layout.astro`) para mantener la consistencia con el resto del sitio (Header y estilos base).
- Actualmente, el enlace a `/sandbox` **ya existe** en `src/components/Header.astro` (ver alrededor de la línea 16). El desarrollador debe verificar que al hacer clic no resulte en un error 404, ahora que la página existirá.

### Architecture Compliance

- **Framework Base:** Astro 4.x para generación de HTML estático.
- **Enrutamiento:** Basado en archivos usando el directorio `src/pages/` nativo de Astro.
- **Diseño / Estilos:** Usar Vanilla CSS con CSS Modules y variables HSL nativas. Asegurar que la nueva página utilice el layout existente.
- **Accesibilidad:** Mantener el soporte para el foco del teclado (esto está manejado por los estilos globales y el componente Header).

### File Structure Requirements

- **[NEW]** `src/pages/sandbox.astro`: Nueva página que responde a la ruta `/sandbox`. Deberá contener un placeholder simple por ahora, que luego será reemplazado en la historia 3.2.
- **[UPDATE]** `src/components/Header.astro`: Verificar que el enlace existente a `/sandbox` esté funcionando correctamente tras crear la página.

### Testing Requirements

- Verificar localmente que la navegación hacia `/sandbox` desde el Header funcione y renderice la página correctamente.
- Verificar que la página se vea correctamente tanto en tema claro como oscuro.
- Verificar que el pipeline CI/CD (lint, format, build) pase sin errores tras estos cambios.

## Status

- **Status:** review
- **Note:** Ultimate context engine analysis completed - comprehensive developer guide created.

## Tasks/Subtasks

- [x] Implementar `src/pages/sandbox.astro` utilizando el layout principal
- [x] Verificar funcionamiento del enlace en `Header.astro`

## Dev Agent Record

### Implementation Plan

Se creó el archivo `src/pages/sandbox.astro` usando el layout principal y un contenedor básico. Se verificó que el enlace existente en `Header.astro` funciona correctamente.

### Completion Notes

- Implementada la página base `/sandbox`.
- Creado placeholder descriptivo con los estilos definidos en el sistema.
- Build, lint y formatting ejecutados exitosamente, sin errores.

## File List

- `src/pages/sandbox.astro` (NEW)

## Change Log

- Agregada página placeholder para Sandbox.
