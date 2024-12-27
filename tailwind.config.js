/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
        serif: ['var(--font-merriweather)', 'serif'],
      },
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe7',
          300: '#a9bdd3',
          400: '#799abc',
          500: '#557ba6',
          600: '#3f6089',
          700: '#344c6e',
          800: '#2d405b',
          900: '#29374d',
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 