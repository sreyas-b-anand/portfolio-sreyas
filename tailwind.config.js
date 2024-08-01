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
      filter: {
        'none': 'none',
        'brightness': 'brightness(1.5)',
        'contrast': 'contrast(1.2)',
      },
    },
  },
  plugins: [],
}