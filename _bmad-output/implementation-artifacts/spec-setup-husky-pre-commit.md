---
title: 'setup-husky-pre-commit'
type: 'chore'
created: '2026-07-30'
status: 'done'
baseline_commit: '781ebc0ac5e0e635e49c87b560e9790393c5239d'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Los commits con errores de linting o tipado están pasando al repositorio remoto y causando fallos en el pipeline CI/CD (GitHub Actions) al hacer despliegue, debido a conflictos imprevistos entre ESLint y Astro.

**Approach:** Instalar y configurar `husky` y `lint-staged` para ejecutar de manera automática `eslint` y `astro check` localmente en cada intento de `git commit`. Si detectan un error, el commit será rechazado, forzando la corrección local antes del push.

## Boundaries & Constraints

**Always:** Mantener el rendimiento local. Usar `lint-staged` para que ESLint y Prettier evalúen solo los archivos modificados, aunque `astro check` deba correr en todo el proyecto.

**Ask First:** Cambiar drásticamente las reglas de ESLint o dependencias principales de Astro.

**Never:** Silenciar errores de ESLint globalmente para que pase el pre-commit.

</frozen-after-approval>

## Code Map

- `package.json` -- Configuración de dependencias (husky, lint-staged) y scripts.
- `.husky/pre-commit` -- Archivo bash (generado por husky) que se ejecuta antes de cada commit.

## Tasks & Acceptance

**Execution:**

- [x] `package.json` -- Añadir dependencias (`husky`, `lint-staged`), agregar script `"prepare": "husky"`, y configurar bloque `"lint-staged"` para correr `eslint` y `prettier`.
- [x] `.husky/pre-commit` -- Crear el archivo hook que ejecute `npx lint-staged` y luego `npx astro check`.

**Acceptance Criteria:**

- Given archivos modificados con errores de ESLint o Typescript, when ejecuto `git commit`, then el commit debe ser bloqueado y mostrar el error en consola.
- Given archivos correctos y sin errores, when ejecuto `git commit`, then el hook corre exitosamente y el commit se crea en la historia de git.

## Verification

**Commands:**

- `npm run lint` -- expected: Pasa sin errores (o se pueden corregir).
- `npx astro check` -- expected: Sin errores de tipos.
- Ejecutar commit manual con un error introducido a propósito para confirmar que el commit es rechazado.

## Suggested Review Order

- Añadidas dependencias de lint-staged y configurado script.
  [`package.json:43`](../../package.json#L43)

- Creado hook pre-commit para validar código con lint-staged y astro check.
  [`pre-commit:1`](../../.husky/pre-commit#L1)
