---
baseline_commit: 5bf8fdf72afd1ae01f21070530504901c9a2b3ba
---
# Story 2.2: Listado y Componente de Tarjeta de Artículo (Feed del Blog)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Tasks/Subtasks

- [x] 1. Create `BlogArticleCard.astro` component with interactive states and Tailwind styles
- [x] 2. Create `/blog` page (`src/pages/blog/index.astro`) to display sorted articles using `getCollection`
- [x] 3. Validate accessibility and visual design guidelines

## Story

As a visitante,
I want ver un listado de artículos del blog usando un diseño limpio de tarjeta,
so that pueda explorar los temas y extraer rápidamente su valor.

## Acceptance Criteria

1. **Given** que el usuario visita la ruta `/blog`
   **When** la página renderiza
   **Then** se debe mostrar una lista de _Blog Article Cards_ ordenadas por fecha
   **And** el título de la tarjeta debe usar fuente Sans Serif, mientras que la fecha y etiquetas deben usar fuente Monospace.
2. **Given** que el usuario interactúa visualmente con la tarjeta
   **When** pasa el cursor por encima (hover) o hace focus
   **Then** toda la tarjeta debe actuar como enlace, mostrando un borde color `accent` y un sutil `scale 0.98` (CSS puro)
   **And** el extracto del artículo debe estar truncado (line-clamp) a un máximo de 3 líneas para mantener simetría
   **And** las etiquetas deben destacar visualmente (estilo badge, ej. fondo surface-raised) para diferenciarse del resto de metadatos.

## Developer Context & Guardrails

### Technical Requirements
- **Framework:** Astro 4.x/5.x
- **Data Source:** Fetch posts from `src/content/blog/` using `getCollection('blog')`.
- **Styling:** Tailwind CSS should be used for all layout and styling. Must align with 'Midnight Cobalt' theme (`surface-base`, `surface-raised`, `accent`). Implementar truncado de texto (`line-clamp-2` o `line-clamp-3`) y estados interactivos de tarjeta entera (`hover`, `active`, `focus-visible`) estrictamente con clases de Tailwind.
- **Typography:** Use Sans Serif for titles and body, Monospace for metadata (date, tags). Las etiquetas (tags) deben tener estilo de badge.

### Architecture Compliance
- **AD-1 (Manejo de Estilos):** Utilizar Tailwind CSS como motor principal.
- **AD-2 (Interactividad):** Este componente probablemente no requiere interactividad del cliente, por lo que debe ser puro HTML/CSS (Astro Component) sin React a menos que sea estrictamente necesario. Todo el feedback visual (hover/click) debe lograrse con CSS.
- **AD-3 (Capa de Datos):** Extraer artículos mediante Astro Content Collections.
- **UX-DR2:** Contraste tipográfico entre Sans Serif y Monospace.
- **UX-DR9:** Estados interactivos (Hover: transición `0.2s ease` de reborde color accent; Active: reducción tamaño `scale 0.98` en clicks).

### Previous Story Intelligence
- **From Story 2.1:** Content collection `blog` is correctly configured using `zod` in `src/content.config.ts`.
- It expects `title` (string), `excerpt` (string), `date` (date), and `tags` (array of strings, lowercased).
- Hay un `sample-post.md` disponible para probar el listado.

### File Structure Requirements
- `src/pages/blog/index.astro` (NUEVO) - Para mostrar la lista de artículos.
- `src/components/BlogArticleCard.astro` (NUEVO) - Componente UI para la tarjeta de artículo individual.

### Testing Requirements
- Confirmar que la ruta `/blog` carga correctamente.
- Validar contraste de accesibilidad en los textos (WCAG 4.5:1).
- Comprobar accesibilidad con teclado (`focus-visible`) en las tarjetas.
- El listado debe estar ordenado por fecha de forma descendente (los más recientes primero).

## References

- [ARCHITECTURE-SPINE.md: AD-3 — Capa de Datos](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md#ad-3--capa-de-datos)
- [epics.md: Epic 2](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/epics.md#epic-2-demostracion-de-conocimiento-blog-tecnico)
- [DESIGN.md](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/ux-designs/ux-narvaezdario_web_page-2026-07-26/DESIGN.md)

## File List

- `src/components/BlogArticleCard.astro` (NUEVO)
- `src/pages/blog/index.astro` (NUEVO)

## Change Log

- Se implementó la página `/blog` para listar los artículos.
- Se creó el componente `BlogArticleCard.astro` con estilos de Tailwind CSS (Midnight Cobalt theme).
- Se aplicaron estados interactivos (`hover`, `active`, `focus-visible`).

## Dev Agent Record

### Agent Model Used
Gemini 3.1 Pro (High)

### Completion Notes List
- Ultimate context engine analysis completed - comprehensive developer guide created.
- [Dev Agent] Implementación completada con éxito.
- Componente `BlogArticleCard.astro` creado implementando todos los estados interactivos requeridos en CSS.
- Página `/blog` (`index.astro`) creada listando artículos ordenados descendentemente.
- Las validaciones y chequeos estáticos de Astro pasaron exitosamente.
