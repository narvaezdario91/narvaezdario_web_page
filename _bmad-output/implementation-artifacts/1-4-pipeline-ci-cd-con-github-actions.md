---
baseline_commit: 2a3bde914f3c3da040f2575b32801a3491ef64c8
---
# Story 1.4: Pipeline CI/CD con GitHub Actions

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitante,
I want que el sitio se despliegue automáticamente con cada cambio,
so that siempre pueda acceder a la versión más reciente del portafolio sin interrupciones.

## Acceptance Criteria

1. **Given** que se realiza un push a la rama principal del repositorio
   **When** GitHub Actions detecta el cambio
   **Then** debe ejecutarse automáticamente un workflow que compile el proyecto con Astro (`astro build`) y despliegue el resultado en GitHub Pages
   **And** el workflow debe fallar si el build produce errores de TypeScript o linting.

2. **Given** que el despliegue se completa exitosamente
   **When** el visitante accede a la URL pública del sitio
   **Then** debe ver la versión actualizada del portafolio.

## Developer Context

**Epic Goal**: Perfil Profesional y Validación (Landing Page). Permitir que los reclutadores y visitantes descubran la experiencia del candidato interactuando con su historial, y facilitar el contacto o validación mediante la descarga del CV y revisión de redes sociales.

**Business Value**: Asegurar un proceso automatizado que permita integraciones continuas, manteniendo el portafolio online siempre disponible y con alta calidad gracias a las verificaciones de CI.

## Dev Agent Guardrails

### Technical Requirements

- **GitHub Actions**: Configurar un workflow de GitHub Actions que ejecute el build.
- **Astro Build**: El comando de build será `npm run build`.
- **Linting & Formatting**: Se debe ejecutar `npm run lint` y verificaciones de TypeScript (o formato) antes de compilar para asegurar la calidad.
- **GitHub Pages**: Configurar las acciones oficiales de GitHub Pages para publicar la carpeta estática.

### Architecture Compliance

- **Despliegue y Entornos:** (ARCH5) El proyecto se desplegará en GitHub Pages utilizando un flujo de integración continua automatizado mediante GitHub Actions, consolidando el código y el alojamiento.
- **Calidad de Código**: Uso estricto de TypeScript (`strict: true`) y validación de ESLint en los pipelines.

### Library & Framework Requirements

- Node.js >= 20. (Usar la acción `actions/setup-node` con versión 20).
- Gestor de paquetes npm (`npm ci` para instalaciones limpias y reproducibles).

### File Structure Requirements

- Crear el archivo del workflow de GitHub Actions: `.github/workflows/deploy.yml`.
- No se debe modificar lógica de negocio o componentes.

### Testing Requirements

- El workflow DEBE fallar explícitamente si hay errores en el comando de lint (`npm run lint`).
- El workflow DEBE fallar explícitamente si falla la compilación (`npm run build`).

## Previous Story Intelligence (Story 1.3)

- **Learnings & Patterns:**
  - El proyecto ha establecido comprobaciones base en el `package.json` (`npm run lint`, `npm run build`, `npm run format`). El pipeline debe utilizarlas para asegurar que todo código que pase a producción cumpla las reglas.
  - El proyecto ya compila de manera exitosa estáticamente.

## Latest Tech Information

- **GitHub Pages y Astro**: Se recomienda usar la integración de GitHub Actions para Astro que facilita el proceso. El modelo estándar incluye un step con permisos de `contents: read`, `pages: write`, e `id-token: write`.

## Tasks / Subtasks

- [x] 1. Configurar archivo de workflow (`.github/workflows/deploy.yml`)
  - [x] 1.1 Definir triggers en `push` a la rama por defecto (ej. `main` o `develop` / `master`) y `workflow_dispatch`.
  - [x] 1.2 Configurar permisos necesarios (`contents: read`, `pages: write`, `id-token: write`).
- [x] 2. Configurar el trabajo (Job) de Build y Validaciones
  - [x] 2.1 Hacer checkout del código y configurar Node.js v20.
  - [x] 2.2 Instalar dependencias limpiamente (`npm ci`).
  - [x] 2.3 Ejecutar verificación de linter (`npm run lint`).
  - [x] 2.4 Compilar el sitio estático (`npm run build`).
  - [x] 2.5 Subir el artefacto (carpeta de salida, habitualmente `dist`) usando la acción correspondiente.
- [x] 3. Configurar el trabajo (Job) de Deploy
  - [x] 3.1 Añadir dependencia del job de Build (`needs: build`).
  - [x] 3.2 Desplegar usando `actions/deploy-pages`.

## Project Context Reference

- **PRD**: `prd-narvaezdario_web_page-2026-07-25`
- **Architecture**: `architecture-narvaezdario_web_page-2026-07-25`

## Dev Agent Record

### Agent Model Used
Gemini 3.1 Pro (High)

### Debug Log References

### Completion Notes List
- Configurado archivo `deploy.yml` para GitHub Actions.
- Workflow configurado para trigger en pushes a `main`, `master` y `develop`, y `workflow_dispatch`.
- Se añadieron permisos para pages, contents e id-token.
- Configurado job de build con `actions/checkout@v4`, `actions/setup-node@v4` con node 20.
- Ejecuta `npm ci`, `npm run lint` y `npm run build`.
- Artifact upload configurado con `actions/upload-pages-artifact@v3`.
- Deploy job configurado usando `actions/deploy-pages@v4`.
- Validado linting y build exitoso de manera local.

### File List
- `.github/workflows/deploy.yml`
