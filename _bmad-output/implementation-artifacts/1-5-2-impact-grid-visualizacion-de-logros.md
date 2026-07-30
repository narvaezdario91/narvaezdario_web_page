---
baseline_commit: 17792b7870eb79d4d206a7b6429f44f1b4ef7920
---

# Story 1.5.2: Impact Grid (Visualización de Logros)

## Story Requirements

**User Story:** As a visitante, I want ver gráficos de datos, So that el impacto cuantitativo del candidato (3 años a 1 año, 9 a 190, 4h a 5m, 100% agnosticismo) sea inmediatamente evidente.

**Acceptance Criteria:**

- Implementar gráficos usando Recharts o SVG para las métricas de impacto.
- Los gráficos deben ser responsivos y accesibles.

## Developer Context & Guardrails

### Technical Requirements

- Utilizar Tailwind CSS para estructurar la grilla o el layout del Impact Grid.
- Si se usa React (ej. Recharts), envolverlo en una "React Island" en Astro, utilizando la directiva `client:visible` para cargar el JS solo cuando el usuario haga scroll hacia el componente.
- Los gráficos deben utilizar la paleta "Midnight Cobalt" (por ejemplo, colores de acento como `#4338ca` o `#6366f1` definidos en `tailwind.config.mjs`) para integrarse perfectamente con el resto del sitio.

### Architecture Compliance

**AD-1 — Manejo de Estilos:**

- Se utilizará Tailwind CSS como motor principal de estilos. Todo el diseño, el layout y las animaciones deben implementarse utilizando sus clases utilitarias.

**AD-2 — Interactividad (Islands Architecture):**

- Se utilizará React de manera exclusiva para los componentes interactivos en las "islas" de Astro.

**AD-5 — Ecosistema UI:**

- Se permite el uso de librerías del ecosistema React (como Recharts para gráficos) dentro de las islas de Astro.

### Library & Framework Requirements

- Astro 4.x
- React 18
- Tailwind CSS 3.4
- Recharts (latest version) o SVG CSS/React puro, según decidas que sea más óptimo en peso y mantenibilidad.

### File Structure Requirements

- `src/components/ImpactGrid.tsx` (o similar, para la isla React interactiva).
- `src/pages/index.astro`: Integrar el `<ImpactGrid client:visible />` en el flujo de la página, por encima o por debajo del CV interactivo según convenga.

### Testing Requirements

- Ejecutar `npm run build` para asegurar que las dependencias de Recharts o cualquier SVG no rompan el tipado estricto o el empaquetado de Astro.
- Validar contraste WCAG 4.5:1 en los colores utilizados en los gráficos sobre los fondos de `surface-base`.
- Comprobar que en formato móvil los gráficos sigan siendo legibles, no se corten, ni provoquen scroll horizontal de toda la página.

## Previous Story Intelligence

- En la historia **1.5.1** se integró exitosamente Tailwind CSS y se resolvieron conflictos con los espaciados nativos y Preflight. Usa exclusivamente Tailwind utility classes para el espaciado (`gap-4`, `p-6`, etc.) y el diseño visual de este nuevo componente React.
- La navegación global cuenta con `backdrop-blur` (glassmorphism); si el gráfico tiene scroll por debajo, debe verse bien a través del header o quedar por detrás mediante el `z-index` adecuado.

## Project Context Reference

- [Epic 1.5](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/epics.md)
- [Architecture](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/architecture/architecture-narvaezdario_web_page-2026-07-25/ARCHITECTURE-SPINE.md)
- [UX Design](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/ux-designs/ux-narvaezdario_web_page-2026-07-26/DESIGN.md)
- [UX Experience](file:///c:/Users/narva/Documents/Proyectos_Propios/narvaezdario_web_page/_bmad-output/planning-artifacts/ux-designs/ux-narvaezdario_web_page-2026-07-26/EXPERIENCE.md)

## Dev Notes

- Las métricas a visualizar son:
  - **Aceleración E2E APIs:** 3 años a 1 año (Tiempo estimado para alcanzar 90% de cobertura).
  - **Democratización de QA:** Incremento de 9 a 190 escenarios E2E automatizados sin código.
  - **Feedback UX:** Reducción en tiempo de análisis de 4 horas a 5 minutos.
  - **Agnosticismo Tecnológico:** 0 líneas de código de refactorización (Playwright a Selenium vía orquestador LLM).
  - **Continuidad Operativa (Thales):** 100% Remoto, 0 dependencia de hardware físico mediante simulación virtual.
- Puedes utilizar un diseño "Bento Box" (grid asimétrico de Tailwind) donde algunas celdas sean tarjetas de texto grande con acento (`text-accent`) y otras celdas incluyan gráficos Recharts para mayor variedad visual.
- Recuerda que Recharts a veces requiere especificar un width/height explícito, por lo que el uso de `<ResponsiveContainer>` será obligatorio para diseño responsivo.

## Tasks/Subtasks

- [x] Tarea 1: Si decides usar Recharts, instalar la dependencia (ej. `npm install recharts`). Si no, asegurar SVG.
- [x] Tarea 2: Crear el componente base de React `ImpactGrid.tsx` o similar utilizando las clases de Tailwind CSS.
- [x] Tarea 3: Implementar la visualización de los datos concretos (ROI/métricas) usando ResponsiveContainer o SVGs escalables que se adapten a versión móvil.
- [x] Tarea 4: Ubicar el componente en `src/pages/index.astro`, configurando la hidratación perezosa (`client:visible`).
- [x] Tarea 5: Verificar contrastes de color, semántica, comportamiento responsive, y ejecutar validación local (build limpio y testing visual en dev).

### Review Findings

- [x] [Review][Patch] Accessibility / Screen Reader text handling (Faltan `aria-label`/`aria-hidden`) [`src/components/ImpactGrid.tsx`]
- [x] [Review][Patch] SVG animations will not play on mount (Falta estado de renderizado para disparar animaciones) [`src/components/ImpactGrid.tsx`]
- [x] [Review][Patch] Color contrast WCAG 4.5:1 violation (Colores de insignias no pasan contraste en modo claro) [`src/components/ImpactGrid.tsx`]
- [x] [Review][Patch] Font sizes `text-[10px]` and `text-[11px]` are too small for mobile legibility [`src/components/ImpactGrid.tsx`]

## Dev Agent Record

- **Debug Log:** Se aplicaron parches de accesibilidad (`aria-label`, `aria-hidden`), contraste WCAG 4.5:1, aumento de tamaño de fuentes a `text-xs` y activación de animaciones SVG con estado de hidratación.
- **Completion Notes:** Se creó el componente `src/components/ImpactGrid.tsx` implementando un diseño Bento Box responsivo con 4 tarjetas de impacto clave. Parches aplicados y verificados con `npm run build`.

## File List

- `src/components/ImpactGrid.tsx` (new)
- `src/pages/index.astro` (modified)

## Change Log

- Implementación de la historia 1.5.2 (Impact Grid - Visualización de Logros) y corrección de hallazgos de Code Review (accesibilidad, contraste y animaciones).

## Status

done
