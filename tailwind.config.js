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
        'custom-480px': '480px',
        'custom-1450px': '1450px',
      },
      colors: {
        customSafron: '#D44A1C', 
        customGrey: '#F1F1F1', 
        customBlue: '#2a3292', 
        customPurple:'#9b0175',
        customlightGreen:'#46f4ce',
        customDarkblue:'#181d57',
        customoramge:'#f68712',
      },
    },
  },
  plugins: [],
}

