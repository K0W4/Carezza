/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F6EDD9',
        sage: {
          DEFAULT: '#86927E',
          dark: '#4C5745',
          deep: '#182212',
        },
        gold: '#BCA37F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        serif: ['Playfair Display', 'serif'], 
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}