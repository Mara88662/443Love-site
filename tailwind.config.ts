import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff7f3',
          100: '#fce7de',
          200: '#f8cabf',
          300: '#f1a78f',
          400: '#e97863',
          500: '#d94a4d',
          600: '#ba2e45',
          700: '#96233b',
          800: '#7a1e32',
          900: '#651c2d'
        }
      },
      boxShadow: {
        glow: '0 0 80px rgba(255, 34, 138, 0.25)',
        luxe: '0 20px 80px rgba(0, 0, 0, 0.45)'
      }
    }
  },
  plugins: []
} satisfies Config;
