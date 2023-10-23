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
        background:"#f2f2f2",
        CoWhite:'fff'
      },fontFamily:{
        body:['Roboto']
    },
      screens: {
        'sm': '600px',
        // => @media (min-width: 640px) { ... }
  
        'md': '728px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1636px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

