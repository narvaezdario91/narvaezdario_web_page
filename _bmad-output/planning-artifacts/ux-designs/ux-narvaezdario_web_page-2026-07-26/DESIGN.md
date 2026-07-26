---
name: narvaezdario_web_page
status: final
colors:
  surface-base: '#ffffff'
  surface-raised: '#e0e7ff'
  ink-primary: '#1e1b4b'
  ink-secondary: '#4338ca'
  border-hairline: '#c7d2fe'
  accent: '#4338ca'
  surface-base-dark: '#0f0e26'
  surface-raised-dark: '#1e1b4b'
  ink-primary-dark: '#e0e7ff'
  ink-secondary-dark: '#a5b4fc'
  border-hairline-dark: '#3730a3'
  accent-dark: '#6366f1'
typography:
  title:
    note: 'Clean Sans Serif (e.g. Inter/Outfit) - Bold'
  body:
    note: 'Clean Sans Serif (e.g. Inter/Outfit) - Regular'
  meta:
    note: 'Monospace (e.g. JetBrains Mono/Fira Code) - Technical accents and metadata'
rounded:
  sm: 6px
  md: 12px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
---

## Brand & Style

El portafolio y Sandbox IA está diseñado para transmitir una vibra de "Terminal Moderna". Debe sentirse como el entorno de trabajo de un ingeniero de alto nivel: limpio, estructurado y altamente técnico, pero sin caer en el cliché del "texto verde sobre negro". Utiliza una paleta "Midnight Cobalt" que equilibra la pulcritud de los portafolios modernos con una identidad técnica profunda mediante azules intensos y sutiles efectos "glassmorphism" en las tarjetas.

El enfoque visual enfatiza el contenido. Las animaciones CSS son precisas y no intrusivas, destinadas a guiar la atención o generar expectativa (como en el caso del "Empty State" del Sandbox).

## Colors

La paleta "Midnight Cobalt" se apoya en fondos muy profundos para el modo oscuro (por defecto) y blancos fríos en el modo claro, con acentos en tonos cobalto/índigo vibrantes.

- **Fondo Base (`surface-base`)**: El lienzo principal. En oscuro es un índigo casi negro (`#0f0e26`), aportando profundidad sin la dureza del negro puro.
- **Tarjetas / Elementos Elevados (`surface-raised`)**: Ligeramente más claros (`#1e1b4b` oscuro / `#e0e7ff` claro) para destacar secciones como los acordeones del CV.
- **Acento Técnico (`accent`)**: Cobalto brillante (`#6366f1` oscuro / `#4338ca` claro). Se utiliza para botones de acción (descargar CV) y para resaltar detalles técnicos o estados de carga en terminal.
- **Bordes (`border-hairline`)**: Utilizados para demarcar suavemente las fronteras de los acordeones o artículos del blog.

## Typography

El contraste tipográfico es la principal herramienta de jerarquía técnica.

- **Sans Serif (Inter o similar)**: Utilizada para legibilidad general en títulos (`title`) y cuerpo de texto (`body`).
- **Monospace (Fira Code o similar)**: Restringida exclusivamente para acentos técnicos (`meta`), como fechas, etiquetas de versión, comandos simulados en el Sandbox, y bloques de código reales en el blog.

## Layout & Spacing

Escala estándar de 4/8/12/16/24/32px.
El diseño es Mobile-First, presentándose en una columna fluida. Los contenedores máximos (max-width) en escritorio asegurarán que el contenido no se extienda excesivamente. Los acordeones del CV tienen un padding interno generoso (24px) para mantener la limpieza cuando se expanden.

## Elevation & Depth

La profundidad se logra principalmente mediante la diferencia sutil de tonos (de `surface-base` a `surface-raised`) y un efecto de "glassmorphism" (desenfoque de fondo y opacidad reducida) en elementos superpuestos como menús o tarjetas destacadas. Las sombras paralelas se mantienen al mínimo.

## Components

- **CV Accordions**: Paneles interactivos apilados. En estado cerrado muestran el rol y fechas. Al hacer clic, se expanden hacia abajo revelando los detalles del proyecto. El borde cambia al color de acento.
- **Blog Article Card**: Tarjeta limpia con título sin serifas y metadatos (fecha/categoría) en fuente monoespaciada.
- **Sandbox Placeholder**: Diseño similar a una consola. Fondo oscuro, borde sutil. En el centro, texto animado (puro CSS) "Entrenando modelos de recomendación - Fase 1.1...".

## Do's and Don'ts

| Do                                                             | Don't                                                  |
| -------------------------------------------------------------- | ------------------------------------------------------ |
| Usar fuente monoespaciada para acentos y metadatos.            | Usar fuente monoespaciada para párrafos completos.     |
| Utilizar animaciones CSS sutiles y elegantes.                  | Depender de JavaScript para animaciones decorativas.   |
| Mantener el efecto glassmorphism sutil y en componentes clave. | Abusar del desenfoque en todo el contenedor principal. |
