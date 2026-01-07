// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cascadia: ['Cascadia Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Roboto Mono', 'Segoe UI Mono', 'monospace'],
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'word-marquee-left': 'word-marquee-left linear infinite',
        'word-marquee-right': 'word-marquee-right linear infinite',
      },
      fontWeight: {
        extralight: '200',
      },
      colors: {
        'tech-gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      gap: {
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};

export default config;