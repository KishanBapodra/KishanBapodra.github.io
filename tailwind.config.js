/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#F0E7DB',
        'extraLight': '#FFF8E6',
        'darknav': '#242f42',
      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
