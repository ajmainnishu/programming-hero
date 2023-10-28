/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto':  ['Roboto', 'sans-serif'],
        'avenir': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}