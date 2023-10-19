/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#209389",
        background:"#ebebeb"
      }
    },
  },
  plugins: [],
}

