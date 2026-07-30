---
baseline_commit: 2bc705acf6a0f773f113716644a4b21133115411
---
# Story 2.1: Configuración de Colecciones de Contenido (Content Collections)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a content author,
I want que las colecciones de contenido de Astro validen automáticamente los metadatos usando un esquema estricto de Zod,
so that los visitantes nunca vean páginas de artículos rotas por datos incompletos o mal formateados.

## Acceptance Criteria

1. **Given** que se añade un nuevo archivo Markdown/MDX al directorio `src/content/blog`
   **When** el proyecto se compila
   **Then** Astro debe validar que el frontmatter cumple con el esquema definido en Zod (título, extracto, fecha y arreglo de etiquetas)
   **And** debe fallar el build si faltan metadatos obligatorios.

## Tasks / Subtasks

- [x] Task 1 (AC: 1): Configurar la Colección de Contenido (Content Collection)
  - [x] Crear o verificar que exista el archivo `src/content.config.ts` (Astro 5+ requiere `.config.ts`).
  - [x] Importar `defineCollection` y `z` desde `astro:content`.
  - [x] Definir el esquema estricto para la colección `blog`: `title` (string), `excerpt` (string), `date` (usar `z.coerce.date()`), y `tags` (array de strings, normalizados con `.toLowerCase()`).
  - [x] Exportar la constante `collections = { blog }`.
- [x] Task 2 (AC: 1): Crear un post de prueba
  - [x] Crear una carpeta `src/content/blog/` si no existe.
  - [x] Crear un archivo `sample-post.md` con frontmatter válido según el esquema para asegurar que `astro build` compile.

### Review Findings (AI)

- [x] [Review][Patch] Empty title or excerpt strings [src/content.config.ts:7] - Title or excerpt strings can be completely empty. Add `.min(1)` to `z.string()` to prevent this.
- [x] [Review][Patch] Tags with leading/trailing whitespace [src/content.config.ts:10] - Tags array does not trim whitespace before lowercasing. Add `.trim()` before `.toLowerCase()`.

## Dev Notes

- **Relevant architecture patterns and constraints:**
  - **AD-3 Capa de Datos:** "El contenido será gestionado de manera local mediante Astro Content Collections, usando archivos Markdown/MDX y JSON almacenados en el repositorio."
  - **Consistency Conventions:** "Estructura de Datos: Validada rígidamente a través de esquemas Zod integrados con Astro Content Collections."
  - "Tipado: Uso obligatorio y estricto de TypeScript en todo el proyecto (`strict: true`)."
  - Versión: Astro 4.x.
- **Source tree components to touch:**
  - `src/content/config.ts` (NUEVO)
  - `src/content/blog/*` (NUEVO)
- **Testing standards summary:**
  - Asegurar que `npm run build` corra sin problemas en el pipeline CI/CD (ref Epic 1).

### Project Structure Notes

- Astro 4 espera que las colecciones se definan en `src/content/config.ts`. Si se usan otras extensiones, respetar TypeScript estricto.

### References

- Cite all technical details with source paths and sections, e.g. [Source: docs/<file>.md#Section]
- [ARCHITECTURE-SPINE.md: AD-3 — Capa de Datos](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md#ad-3--capa-de-datos)
- [epics.md: Epic 2](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/epics.md#epic-2-demostracion-de-conocimiento-blog-tecnico)

## Dev Agent Record

### Agent Model Used

Gemini 3.1 Pro (High)

### Debug Log References

### Completion Notes List

- Implementado `src/content.config.ts` utilizando la API de Astro 5+ con `glob` loader.
- El esquema Zod valida correctamente título, extracto, fecha y el array de etiquetas.
- Se agregó `src/content/blog/sample-post.md` para probar la validación.
- Se comprobó mediante compilación (`npm run build`) que los metadatos incorrectos rompen el build adecuadamente, y que el frontmatter correcto compila con éxito.

### File List

- `[NEW] src/content.config.ts`
- `[NEW] src/content/blog/sample-post.md`
