/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey':'#222222',
        'light-grey': "#6A6A6A",
      }
    },
  },
  plugins: [],
}
