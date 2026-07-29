---
baseline_commit: ab25d5a3dd7ad793fba8355f34202b6e5e134ae1
---
# Story 1.5.4: Grid de Credenciales (Bento Box) y Tech Marquee

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reclutador,
I want ver de un vistazo el stack técnico y certificaciones formales,
so that pueda hacer check de los requisitos del cargo.

## Acceptance Criteria

1. Implementar un Marquee infinito horizontal que muestre las herramientas técnicas.
2. Implementar un layout estilo Bento Box que liste las 8 certificaciones (AWS/ISTQB/Scrum) y la maestría/publicaciones.
3. El diseño debe ser responsivo, colapsando a una columna en móviles y mostrando la estructura Bento Box en pantallas más grandes.
4. Las animaciones (como el Marquee) deben detenerse al hacer `:hover` y respetar las preferencias del usuario de reducción de movimiento (`prefers-reduced-motion`).

## Tasks / Subtasks

- [x] Task 1: Configurar animaciones en Tailwind (AC: 1, 4)
  - [x] Subtask 1.1: Añadir `keyframes` y `animation` para el marquee en `tailwind.config.mjs`.
- [x] Task 2: Crear componente `TechMarquee` (AC: 1, 3, 4)
  - [x] Subtask 2.1: Crear `TechMarquee.astro`.
  - [x] Subtask 2.2: Añadir la lista de herramientas técnicas extraídas de `cv-source-data.md`.
  - [x] Subtask 2.3: Implementar la animación CSS con Tailwind asegurando accesibilidad.
- [x] Task 3: Crear componente `CredentialsBentoBox` (AC: 2, 3)
  - [x] Subtask 3.1: Crear `CredentialsBentoBox.astro`.
  - [x] Subtask 3.2: Estructurar los datos de educación y certificaciones basándose en `cv-source-data.md`.
  - [x] Subtask 3.3: Aplicar diseño CSS Grid (ej. `grid-cols-1 md:grid-cols-4`) alineado con los tokens de color 'Midnight Cobalt'.
- [x] Task 4: Integrar los componentes en la página principal (AC: 1, 2)
  - [x] Subtask 4.1: Importar `TechMarquee` y `CredentialsBentoBox` en `src/pages/index.astro`.
  - [x] Subtask 4.2: Renderizar los componentes debajo de la sección de Experiencia Laboral con un título adecuado (ej. "Stack Tecnológico y Credenciales").

## Dev Notes

- **Relevant architecture patterns and constraints**: 
  - Usar componentes de Astro puros siempre que sea posible, ya que la animación puede manejarse completamente mediante CSS y CSS Grid.
  - El diseño visual debe utilizar las utilidades de Tailwind en conjunto con los tokens de color (ej. `var(--surface-raised)`, `var(--accent)`).
- **Source tree components to touch**:
  - `tailwind.config.mjs`
  - `src/components/TechMarquee.astro` (Nuevo)
  - `src/components/CredentialsBentoBox.astro` (Nuevo)
  - `src/pages/index.astro`
- **Testing standards summary**:
  - Compilación sin errores (`npm run build`).
  - Verificación manual de las clases responsivas y contraste de accesibilidad.

### Project Structure Notes

- Mantener los componentes en `src/components/` y usarlos dentro de `src/pages/index.astro` sin la directiva `client:visible` ya que no hay estado de React envuelto, solo UI.

### References

- [Epic Source: _bmad-output/planning-artifacts/epics.md#Epic 1.5]
- [CV Data Source: _bmad-output/planning-artifacts/cv-source-data.md]

## Dev Agent Record

### Agent Model Used

Gemini 3.1 Pro (High)

### Debug Log References

### Completion Notes List

- ✅ Añadidos keyframes y animation para Marquee infinito en `tailwind.config.mjs`.
- ✅ Creado `TechMarquee.astro` con soporte `prefers-reduced-motion` y hover pause.
- ✅ Creado `CredentialsBentoBox.astro` con CSS Grid responsive de 4 columnas para listar educación (tarjeta grande) y 8 certificaciones.
- ✅ Componentes integrados en `index.astro` bajo nueva sección "Stack Tecnológico y Credenciales".
- ✅ Build del proyecto exitoso, sin errores.

### File List

- `tailwind.config.mjs` (MODIFIED)
- `src/components/TechMarquee.astro` (NEW)
- `src/components/CredentialsBentoBox.astro` (NEW)
- `src/pages/index.astro` (MODIFIED)

### Review Findings

- [x] [Review][Patch] set:html sin sanitización — patrón XSS latente si data se externaliza [CredentialsBentoBox.astro]
- [x] [Review][Patch] motion-reduce:animate-none deja el div duplicado visible al usuario [TechMarquee.astro]
- [x] [Review][Patch] Hover pause actúa sobre div interno, no el contenedor overflow-hidden [TechMarquee.astro]
- [x] [Review][Patch] Falta role="list"/role="listitem" en spans del marquee para accesibilidad [TechMarquee.astro]
- [x] [Review][Defer] md:row-span-2 sin grid-rows puede comportarse diferente en Firefox/Safari [CredentialsBentoBox.astro] — deferred, comportamiento aceptable en pruebas actuales, revisar en QA cross-browser
