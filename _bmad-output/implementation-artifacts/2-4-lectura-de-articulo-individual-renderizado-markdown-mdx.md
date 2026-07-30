---
baseline_commit: HEAD
---
# Story 2.4: Lectura de Artículo Individual (Renderizado Markdown/MDX)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Tasks/Subtasks

- [x] 1. Crear ruta dinámica `src/pages/blog/[slug].astro` para artículos individuales utilizando `getStaticPaths()`.
- [x] 2. Renderizar el contenido usando el componente `<Content />` de Astro Content Collections.
- [x] 3. Aplicar estilos base para contenido HTML/Markdown (encabezados, párrafos, listas), garantizando consistencia con la paleta Midnight Cobalt.
- [x] 4. Configurar estilos para bloques de código que cumplan estrictamente con el ratio de contraste WCAG 4.5:1 (fondo oscuro y sintaxis clara) configurando Shiki en `astro.config.mjs` o usando estilos CSS.
- [x] 5. Incluir tipografía Monospace (Fira Code/JetBrains Mono u otra definida) en bloques de código y permitir scroll horizontal `overflow-x: auto` en móviles.

## Story

As a visitante,
I want abrir un artículo individual,
So that pueda leer el contenido completo con el formato adecuado, especialmente ejemplos de código.

## Acceptance Criteria

1. **Given** que el usuario hace clic en un artículo del listado
   **When** se carga la ruta de la página individual
   **Then** el contenido Markdown/MDX debe renderizarse correctamente
   **And** los bloques de código deben mantener la fuente monoespaciada y la paleta de colores.

2. **Given** que el artículo renderiza un bloque de código
   **When** se verifica la accesibilidad
   **Then** el contraste de los colores de sintaxis sobre el fondo oscuro debe cumplir estrictamente con el ratio WCAG 4.5:1.

## Developer Context & Guardrails

### Technical Requirements
- **Framework:** Astro 4.x/5.x
- **Data Source:** `src/content/blog/` y `getCollection('blog')`.
- **Dynamic Routing:** `getStaticPaths` en `[slug].astro` de acuerdo con la documentación de Astro sobre Content Collections para renderizar el post y sus slugs.
- **Styling:** Astro provee soporte built-in para Markdown. Configurar el tema de sintaxis de código (ej. Shiki) en `astro.config.mjs` asegurando cumplir la directriz de accesibilidad y el esquema de color oscuro Midnight Cobalt (e.g. un tema como `github-dark` o `dracula` suele cumplir los ratios de contraste).

### Architecture Compliance
- **AD-1 (Manejo de Estilos):** Usa la configuración de Tailwind (ej. `@tailwindcss/typography` si está instalado, o clases directas si se crea un wrapper) y/o CSS variables para el contenido en Markdown.
- **AD-2 (Interactividad):** La página es puramente estática. NO usar React para renderizar el contenido del post, la hidratación aquí no es necesaria.
- **AD-3 (Capa de Datos):** Astro Content Collections. Se llama a `entry.render()` para extraer y renderizar el componente `<Content />`.

### File Structure Requirements
- `src/pages/blog/[slug].astro` (NEW) - Renderiza el post individual.
- `src/layouts/Layout.astro` (UPDATE - opcional) - O crear un layout específico para artículos (ej. `src/layouts/BlogPostLayout.astro`) para aplicar márgenes legibles de lectura (ej. max-width más angosto).
- `astro.config.mjs` (UPDATE) - Si es necesario ajustar el soporte de Markdown o el tema de syntax highlighting de Shiki.

### Previous Story Intelligence
- **From Story 2.3 & 2.2:** La navegación del blog (index) y el filtrado por tags ya funcionan estáticamente. La estructura y los esquemas de Content Collections están validados con Zod.
- **From Git History:** Se corrigieron problemas de anidamiento de enlaces en tarjetas previas y overflow. Mantén en cuenta el diseño responsive.

### Testing Requirements
- Confirmar que al navegar desde el feed a un artículo individual se renderiza el contenido sin errores (HTTP 200).
- Ejecutar validación de accesibilidad (Lighthouse / axe) para asegurar que el contraste de sintaxis es superior a 4.5:1.
- Verificar el comportamiento mobile de los bloques de código (overflow-x) para que no rompan el layout ni extiendan el ancho de la página.

## References

- [ARCHITECTURE-SPINE.md: AD-3 — Capa de Datos](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md#ad-3--capa-de-datos)
- [epics.md: Epic 2](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/epics.md#story-24-lectura-de-artículo-individual-renderizado-markdownmdx)
- [DESIGN.md](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/ux-designs/ux-narvaezdario_web_page-2026-07-26/DESIGN.md)

## File List

- `src/pages/blog/[slug].astro` (NUEVO)
- `astro.config.mjs` (UPDATE - shiki theme "dracula" configured)
- `tailwind.config.mjs` (UPDATE - added @tailwindcss/typography plugin)
- `package.json` (UPDATE - installed @tailwindcss/typography)
- `src/content.config.ts` (UPDATE - fixed z deprecation)
- `src/components/TechMarquee.astro` (UPDATE - fixed type errors)
- `src/components/CredentialsBentoBox.astro` (UPDATE - fixed type errors)
- `src/pages/index.astro` (UPDATE - fixed type errors)

## Dev Agent Record

### Debug Log
- N/A

### Completion Notes
- Implementación completada de `[slug].astro` mediante `getStaticPaths` extraído desde `getCollection('blog')`.
- Integración de `<Content />` con estilos prose personalizados de Tailwind Typography compatibles con modo claro y Midnight Cobalt (dark mode).
- Bloques de código configurados usando el tema Shiki "dracula" asegurando un alto contraste, junto con soporte horizontal de overflow.
- Errores preexistentes de Astro `key` (React-like) resueltos durante el check y dependencias instaladas.

## Change Log

- Ultimate context engine analysis completed - comprehensive developer guide created
- Completada la lectura de artículo individual. Rutas dinámicas, renderizado Markdown y estilos tipográficos aplicados.
