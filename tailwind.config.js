/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
    height:{
      70:"70vh"

    },
    fontFamily:{
      'rubik': ['rubik-mono-one-regular'],
    }
    },
  },
  plugins: [],
}

