/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'matt-blue':{
        100: '#c5e5fc',
        200: '#a5d5f8',
        300: '#8bcbf9',
        400: '#6ebef7',
        500: '#49a6e9',
        600: '#2d87c8',
        700: '#1a6aa2',
        800: '#104e7a',
        900: '#063251',
      }
    },
  },
  plugins: [],
}
