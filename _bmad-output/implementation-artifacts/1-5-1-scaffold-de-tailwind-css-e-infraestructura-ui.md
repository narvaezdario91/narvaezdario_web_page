---
baseline_commit: e21688269d076dfd39a097bd990304283cb54c46
---

# Story 1.5.1: Scaffold de Tailwind CSS e Infraestructura UI

## Story Requirements

**User Story:** As a visitante, I want un sistema de diseño consistente utilizando Tailwind CSS, So that los componentes complejos (gráficos, pestañas) tengan una apariencia ultra-premium alineada a 'Midnight Cobalt'.

**Acceptance Criteria:**

- Tailwind CSS debe estar configurado en el proyecto Astro.
- Los tokens 'Midnight Cobalt' deben mapearse a las variables de Tailwind.
- El proyecto debe compilar sin errores en el pipeline de CI/CD.

## Developer Context & Guardrails

### Technical Requirements

- Asegurar que la integración oficial `@astrojs/tailwind` se utilice y configure correctamente en `astro.config.mjs`.
- Migrar o referenciar los tokens de color base definidos en los archivos CSS actuales (Midnight Cobalt theme variables) hacia la configuración de Tailwind (`tailwind.config.mjs`), asegurando retrocompatibilidad para los componentes Astro ya construidos (historias 1.1 a 1.4).
- Evitar refactorizaciones masivas de código heredado, salvo que sea necesario para la coherencia del theme o prevenir fallos visuales. El estilo principal de Tailwind se usará prioritariamente en los nuevos componentes interactivos (React Islands).

### Architecture Compliance

**AD-1 — Manejo de Estilos:**

- Se utilizará Tailwind CSS como motor principal de estilos. Todo el diseño, el layout y las animaciones deben implementarse utilizando sus clases utilitarias para maximizar la velocidad de desarrollo y la consistencia del ecosistema, configurando los tokens de la paleta "Midnight Cobalt" en `tailwind.config.mjs`.

### Library & Framework Requirements

- Astro 4.x
- Tailwind CSS
- Validar las recomendaciones de configuración entre React e integraciones con Astro CSS.

### File Structure Requirements

- `tailwind.config.mjs`: Centralizar aquí los tokens.
- `astro.config.mjs`: Asegurarse de que la integración esté inyectada.
- `src/styles/global.css`: (o donde se defina la inyección de las directivas de tailwind `@tailwind base; @tailwind components; @tailwind utilities;`).

### Testing Requirements

- Confirmar un build limpio sin advertencias ni errores usando `npm run build`.
- Verificar visualmente (`npm run dev`) que la importación de Tailwind no corrompa el layout existente, en especial la cascada nativa que se introdujo en la historia 1.1.

## Previous Story Intelligence

- Las iteraciones anteriores establecieron una navegación global y un CV interactivo base usando CSS nativo y Astro. Se cuidaron detalles de accesibilidad y una cascada de "Midnight Cobalt". Al introducir Tailwind, no romper el diseño "Glassmorphism" del `Sticky Header` o los CTAs.
- Recordar que en historias previas se configuró ESLint y Prettier. Asegurarse que Prettier formatee los archivos correctamente y no entre en conflicto.

## Project Context Reference

- [Epic 1.5](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/epics.md)
- [Architecture](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md)

## Dev Notes

- Asegurar que el plugin `prettier-plugin-tailwindcss` se configure si es necesario para mantener el orden de las clases, o mantener la compatibilidad con el Prettier existente.
- Revisar `src/styles/global.css` para identificar las variables CSS de Midnight Cobalt (ej. `--color-primary`, `--color-background`) y mapearlas explícitamente en el `theme.extend.colors` de Tailwind.

## Tasks/Subtasks

- [x] Tarea 1: Instalar dependencias de Tailwind CSS y la integración de Astro (`@astrojs/tailwind`, `tailwindcss`).
- [x] Tarea 2: Configurar `astro.config.mjs` para inyectar la integración de Tailwind.
- [x] Tarea 3: Crear y configurar `tailwind.config.mjs`, mapeando los tokens de 'Midnight Cobalt' de las variables CSS existentes (como colores, tipografías y sombras).
- [x] Tarea 4: Añadir las directivas de Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`) al archivo `src/styles/global.css`.
- [x] Tarea 5: Ejecutar validaciones (build y dev) para asegurar que la integración es correcta y que los estilos anteriores no se corrompen, comprobando especialmente el Sticky Header y los CTAs.

### Review Findings

- [x] [Review][Patch] Eliminar `theme.extend.spacing` — sobrescribe claves nativas de Tailwind ('1','2','4'...) con valores px fijos, rompiendo el sistema de spacing estándar en componentes futuros. [`tailwind.config.mjs:23-30`]
- [x] [Review][Patch] Registrar `prettier-plugin-tailwindcss` en la configuración de Prettier — el plugin está instalado pero inerte sin activación explícita en `.prettierrc` o `prettier.config.js`. [`package.json`]
- [x] [Review][Patch] Verificar retrocompatibilidad de Preflight — `@tailwind base` activa Preflight que puede silenciar estilos de `a`, `h1-h6` etc. en el CSS global o en componentes `.astro` existentes. Agregar comentario documentando la decisión o suprimir Preflight selectivamente. [`src/styles/global.css:2`]
- [x] [Review][Patch] Añadir fallbacks de sistema en `fontFamily` — `['var(--font-sans)']` no tiene fallbacks de sistema en el array; si la variable CSS no se resuelve no hay fuente de respaldo en las utilities de Tailwind. [`tailwind.config.mjs:20-21`]
- [x] [Review][Defer] `--legacy-peer-deps` con Astro 7.x — `@astrojs/tailwind` solo declara peer `astro@^3.0.0||^4.0.0||^5.0.0`. La versión 6.x del proyecto no está en la matrix de pruebas oficial del paquete. Funciona ahora pero sin garantía de soporte. [`package.json`] — deferred, pre-existing

## Dev Agent Record

- **Debug Log:**
  - `tailwindcss` version `^3.4.0` was installed to ensure compatibility with `@astrojs/tailwind@6.0.2` and avoid PostCSS v4 configuration errors during the Astro build process.
- **Completion Notes:**
  - Tailwind CSS se configuró exitosamente en el proyecto utilizando las integraciones oficiales de Astro.
  - Se mapearon los tokens de la paleta 'Midnight Cobalt' a variables de CSS en `tailwind.config.mjs` para mantener retrocompatibilidad.
  - El pipeline y el build se ejecutan limpiamente (`npm run build`).

## File List

- `package.json` (modified)
- `package-lock.json` (modified)
- `astro.config.mjs` (modified)
- `tailwind.config.mjs` (new)
- `src/styles/global.css` (modified)

## Change Log

- Añadido Tailwind CSS e integración de Astro.
- Configuración de tokens base en `tailwind.config.mjs` y directivas en `global.css`.
- Aplicadas correcciones de Code Review: eliminación de override de spacing nativo, activación de prettier-plugin-tailwindcss en .prettierrc, adición de fallbacks de fuentes y documentación de Preflight.

## Status

done
