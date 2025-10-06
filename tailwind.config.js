/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aileron: ['Aileron', 'sans-serif'],
        upright: ['"Cormorant Upright"', 'serif'],
        infant: ['"Cormorant Infant"', 'serif'],
        alata: ['Alata','sans-serif'],
        corinthia: ['Corinthia','sans-serif'],
      },
    },
  },
  plugins: [],
};
