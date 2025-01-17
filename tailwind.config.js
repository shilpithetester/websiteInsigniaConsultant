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
    },
  },
  plugins: [],
}

