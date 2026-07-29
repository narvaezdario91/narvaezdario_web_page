import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          base: 'var(--surface-base)',
          raised: 'var(--surface-raised)',
        },
        accent: 'var(--accent)',
        border: {
          hairline: 'var(--border-hairline)',
        },
        text: {
          ink: 'var(--text-ink)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        layout: 'var(--layout-max-width)',
      }
    },
  },
  plugins: [tailwindcssAnimate],
};
