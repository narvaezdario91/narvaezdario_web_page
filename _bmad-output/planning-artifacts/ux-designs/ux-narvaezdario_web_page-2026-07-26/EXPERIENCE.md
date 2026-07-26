---
name: narvaezdario_web_page
status: final
---

## Foundation

- **Form Factor:** Diseño "Mobile-First" nativo web. Optimizado para visualización en pantallas pequeñas (ej. accesos directos desde la aplicación móvil de LinkedIn) y escalable grácilmente a formato escritorio en columna única restringida.
- **UI System:** CSS puro mediante Vanilla CSS (CSS Modules) utilizando la identidad visual definida en `DESIGN.md`. No se emplean bibliotecas utilitarias como Tailwind.

## Information Architecture

El portafolio en la Fase 1.0 tiene una estructura plana enfocada en minimizar la fricción:

- **Inicio / Landing (Single Page principal):**
  - Cabecera fija (Nav) con enlaces rápidos (CV, Blog, Sandbox, GitHub, LinkedIn).
  - Perfil profesional / Header.
  - CV Interactivo (Línea de tiempo vertical con acordeones).
- **Blog Técnico (Ruta `/blog`):**
  - Lista de artículos con filtrado por categorías/etiquetas.
  - Vista de artículo individual (MDX).
- **Sandbox IA (Ruta `/sandbox` o panel anclado):**
  - Estado vacío (Placeholder) para la Fase 1.1.

## Voice and Tone

- **Tono Técnico y Autoridad:** Directo, estructurado y sin adornos. "El código habla por sí mismo".
- **Microcopy:** Breve. Botones y acciones usan verbos fuertes (`Descargar CV`, `Leer Post`, `Explorar Repositorio`).
- **Estados vacíos:** No intentan ser graciosos; comunican progreso técnico. (Ej. _"Entrenando modelos de recomendación - Fase 1.1..."_).

## Component Patterns

- **Navegación:** Sticky header al hacer scroll para retener siempre los "Call to Action" (Descargar PDF, Redes Sociales).
- **Tarjetas Expandibles (Acordeón de CV):**
  - _Trigger:_ El bloque entero del rol/puesto es clickeable.
  - _Behavior:_ Expandir/colapsar con animación de altura suave utilizando CSS.
  - _Indicator:_ Icono de chevron (flecha) o cruz a la derecha que rota al abrirse.

## State Patterns

- **Hover (Escritorio):** Ligera elevación de contraste de fondo o reborde de color acento (`{colors.accent}`) al pasar el ratón sobre tarjetas y acordeones. Transiciones de `0.2s ease`.
- **Active / Pressed:** Reducción visual (scale 0.98) para simular el click físico en botones y acordeones.
- **Empty State (Sandbox):** Animación de tipeo (typing effect) o pulso parpadeante en el cursor de la "consola simulada" en CSS puro.

## Interaction Primitives

- **Scrolling:** Suave y nativo.
- **Despliegue de Información:** Retención del contexto. Al hacer clic en un proyecto del CV, el usuario no es redirigido a otra página, el acordeón empuja el resto del contenido hacia abajo suavemente.

## Accessibility Floor

- **Contraste:** Los colores elegidos en `DESIGN.md` aseguran ratio WCAG 4.5:1 o superior, especialmente para textos sobre la superficie oscura base.
- **Enfoque (Focus):** Outline visible en botones y cabeceras de acordeones para navegación por teclado (usando un borde `{colors.accent}`).
- **Semántica:** Uso de `details` y `summary` de HTML5 o atributos `aria-expanded` si se usa React para las islas interactivas.

## Key Flows

**Flow 1: Reclutador Técnico (Descubrimiento Rápido)**

- _Protagonista:_ Alex (Technical Recruiter, abre el link desde LinkedIn en su móvil).
- _Paso 1:_ Aterriza en la pantalla inicial y percibe la estética "Terminal Moderna" que transmite autoridad inmediatamente.
- _Paso 2:_ Desliza hacia abajo (scroll) viendo los encabezados de los roles en la línea de tiempo del CV.
- _Paso 3:_ Hace clic en el puesto más reciente. El acordeón se despliega revelando detalles técnicos.
- _Clímax:_ Alex confirma la relevancia del perfil y hace tap en el botón fijo "Descargar CV", guardando el PDF sin cambiar de página.

**Flow 2: Ingeniero / Líder Técnico (Exploración y Expectativa)**

- _Protagonista:_ Sam (Engineering Manager, revisando desde su portátil).
- _Paso 1:_ Escanea rápidamente el perfil y hace clic en la pestaña "Sandbox IA" en el menú de navegación.
- _Paso 2:_ Entra a la sección que muestra una consola vacía con estilo _glassmorphism_.
- _Clímax:_ Lee el indicador parpadeante _"Entrenando modelos de recomendación - Fase 1.1..."_. Sam reconoce la arquitectura de intención y decide revisar el perfil de GitHub en su lugar, con altas expectativas técnicas.
