/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        Staatliches: ['Staatliches', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'custom-sm': '365px',
        'custom-400px': '430px',
      },
      colors: {
        customSafron: '#D44A1C', 
        customGrey: '#F1F1F1', 
        customBlue: '#2a3292', 
        customPurple:'#9b0175',
        customlightGreen:'#46f4ce'
      },
    },
  },
  plugins: [],
}

