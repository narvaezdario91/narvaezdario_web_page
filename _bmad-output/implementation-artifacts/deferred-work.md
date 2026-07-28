# Deferred Work

## Deferred from: code review of 1-1-scaffold-del-proyecto-layout-base-y-sistema-de-diseno.md (2026-07-26)

- [Review][Defer] Variables CSS sin valor fallback literal en `body` [src/styles/global.css] — deferred, pre-existing
- [Review][Defer] `eslint-plugin-react` suprime toda regla `.astro` — demasiado amplio [eslint.config.mjs] — deferred, pre-existing
- [Review][Defer] Google Fonts sin fallback de red [src/styles/global.css] — deferred, pre-existing
- [Review][Defer] `data-theme="dark"` hardcodeado sin mecanismo de toggle [src/layouts/Layout.astro] — deferred, round 2
- [Review][Defer] Patrón `h1 { color: --text-ink }` global puede requerir tokenización de headings en el futuro [src/styles/global.css] — deferred, round 2
- [Review][Defer] Bloque `:root` fragmentado en dos secciones [src/styles/global.css] — deferred, round 3
- [Review][Defer] Orden semántico de `html {}` antes de `:root` (funciona correctamente en runtime) [src/styles/global.css] — deferred, round 4
- [Review][Defer] `lang="es"` hardcodeado sin i18n dinámico [src/layouts/Layout.astro] — deferred, round 4

## Deferred from: code review of 1-5-toggle-modo-oscuro.md (2026-07-26)

- [Review][Defer] Sincronización entre múltiples pestañas vía Storage Event — deferred, pre-existing

## Deferred from: code review of 1-5-1-scaffold-de-tailwind-css-e-infraestructura-ui (2026-07-28)

- [Review][Defer] `--legacy-peer-deps` con Astro 7.x — `@astrojs/tailwind@6.0.2` solo declara peer `astro@^3.0.0||^4.0.0||^5.0.0`. La versión 7.x no está en la matrix oficial de pruebas del paquete. Funciona hoy pero sin garantía de soporte a largo plazo. Reevaluar cuando salga una versión compatible con Astro 7.x o migrar a Tailwind CSS v4 con PostCSS nativo.
