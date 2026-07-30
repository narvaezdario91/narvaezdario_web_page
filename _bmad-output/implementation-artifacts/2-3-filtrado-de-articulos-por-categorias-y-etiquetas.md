---
baseline_commit: HEAD
---
# Story 2.3: Filtrado de Artículos por Categorías y Etiquetas

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Tasks/Subtasks

- [x] 1. Crear ruta estática para filtrado de etiquetas (ej. `src/pages/blog/tag/[tag].astro`).
- [x] 2. Implementar `getStaticPaths` para generar páginas pre-renderizadas por cada etiqueta única en las colecciones de blog.
- [x] 3. Renderizar el listado de artículos que corresponden a la etiqueta, reutilizando `BlogArticleCard.astro`.
- [x] 4. Actualizar etiquetas para que funcionen como enlaces (`<a>`) hacia `/blog/tag/[tag]`.

### Review Findings

- [x] [Review][Patch] Posible URL malformada con doble barra '//' en concatenación con import.meta.env.BASE_URL [`src/components/BlogArticleCard.astro:24`]
- [x] [Review][Patch] Posible desalineación de rutas en etiquetas con espacios/caracteres especiales [`src/pages/blog/tag/[tag].astro:10`]
- [x] [Review][Patch] pointer-events-none en extracto dificulta selección de texto [`src/components/BlogArticleCard.astro:32`]

## Story

As a visitante,
I want poder hacer clic en una etiqueta técnica (ej. "QA Automation"),
so that pueda ver únicamente los artículos relacionados a ese tema sin recargar elementos innecesarios.

## Acceptance Criteria

1. **Given** que el usuario visualiza una tarjeta de artículo con etiquetas
   **When** hace clic en una etiqueta específica
   **Then** el sistema debe enrutar al usuario a una página estática (generada previamente por Astro en build-time) mostrando solo los artículos con esa etiqueta
   **And** no debe requerir JavaScript de cliente para el filtrado.

## Developer Context & Guardrails

### Technical Requirements
- **Framework:** Astro 4.x/5.x
- **Data Source:** Fetch posts from `src/content/blog/` using `getCollection('blog')`.
- **Styling:** Tailwind CSS para layouts y botones (estilos Midnight Cobalt).
- **Dynamic Routing:** Utilizar rutas dinámicas (`[tag].astro`) y `getStaticPaths()` para SSG (Static Site Generation). Esto asegura "0 JavaScript extra" (FR).

### Architecture Compliance
- **AD-1 (Manejo de Estilos):** Utilizar Tailwind CSS como motor principal.
- **AD-2 (Interactividad):** La navegación y filtrado deben realizarse estáticamente mediante enrutamiento de páginas, sin requerir client-side JavaScript.
- **AD-3 (Capa de Datos):** Extraer categorías/etiquetas iterando sobre los artículos obtenidos de Astro Content Collections.

### Previous Story Intelligence
- **From Story 2.2:** La página `/blog` (index) y el componente `BlogArticleCard.astro` fueron implementados.
- El componente `BlogArticleCard.astro` puede/debe ser reutilizado en la vista de resultados por etiqueta.

### File Structure Requirements
- `src/pages/blog/tag/[tag].astro` (NUEVO) - Ruta dinámica para listar posts por etiqueta.
- `src/components/BlogArticleCard.astro` (UPDATE) - Modificar para que los tags sean enlaces cliqueables (`<a>` apuntando a `/blog/tag/[tag]`), o asegurar que lo sean si ya lo son (sin romper estilos de card). *Cuidado*: Evitar enlaces anidados (nested `<a>` tags) si la tarjeta entera ya es un enlace en HTML. Considera el uso de `z-index` y posicionamiento, o separar el link del tag del link de la tarjeta.

### Testing Requirements
- Confirmar que la ruta `/blog/tag/nombre-de-etiqueta` se genera estáticamente.
- Al hacer clic en un tag desde una tarjeta, debe enrutar correctamente a su página.
- Validar contraste de accesibilidad en los textos (WCAG 4.5:1) y HTML semántico (evitar nested links).
- El listado filtrado debe estar ordenado por fecha de forma descendente.

## References

- [ARCHITECTURE-SPINE.md: AD-3 — Capa de Datos](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md#ad-3--capa-de-datos)
- [epics.md: Epic 2](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/epics.md#epic-2-demostracion-de-conocimiento-blog-tecnico)
- [DESIGN.md](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/ux-designs/ux-narvaezdario_web_page-2026-07-26/DESIGN.md)

## File List

- `src/pages/blog/tag/[tag].astro` (NUEVO)
- `src/components/BlogArticleCard.astro` (UPDATE)

## Change Log

- Ultimate context engine analysis completed - comprehensive developer guide created

## Dev Agent Record

### Agent Model Used
Gemini 3.1 Pro (High)

### Completion Notes List
- Ultimate context engine analysis completed - comprehensive developer guide created.
- [x] Tareas 1-4 completadas: Ruta dinámica generada en src/pages/blog/tag/[tag].astro con getStaticPaths y visualización reutilizando BlogArticleCard. Tarjeta actualizada para evitar anclajes anidados e incluir hover states en tags cliqueables.
