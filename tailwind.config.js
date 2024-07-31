/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', 
        bg: '#1E1E1E', 
        bgnavbar: '#141414', 
        cardbg : '#2D2D2D',
       
      },
    },
  },
  plugins: [],
}