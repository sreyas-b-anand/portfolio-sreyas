/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#6b7280",
        bg: "#fefce8",
        bgnavbar: "#fefce8",
        cardbg: "#ffffff",
        border:'#deca7b',
        bg_dark:'#181A1F ',
        text_primary:'#E4E6EB',
        bg_navbar : '#20252B',
        bg_mininav:'#1F2227',
        bg_card_dark:'#2A2F35',
      },
      filter: {
        none: "none",
        brightness: "brightness(1.5)",
        contrast: "contrast(1.2)",
      },
    },
  },
  plugins: [],
};
