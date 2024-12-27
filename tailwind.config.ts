import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe7',
          300: '#a9bcd3',
          400: '#7a97bc',
          500: '#5676a3',
          600: '#435d87',
          700: '#374c6f',
          800: '#2f405d',
          900: '#2b384f',
        },
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
