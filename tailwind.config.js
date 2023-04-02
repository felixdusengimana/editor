/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BCD4",
        "primary-transparent-80": "#00BCD4CC",
        "code-comment": "#66BB6A",
        "code-keyword": "#BA68C8",
        "code-variable": "#81D4FA",
        "code-string": "#FFB74D",
        "code-function": "#FF8A65",
        "code-class-name": "#FFCC80",
        "black-transparent-80": "#000000CC",
        "white-transparent-80": "#FFFFFFCC",
        "white-transparent-40": "#FFFFFF66",
        "white-transparent-10": "#FFFFFF1A",
        "white-transparent-5": "#FFFFFF0D",
        secondary: "#2d3748",
        accent: "#ed8936",
      },
      backgroundImage:{
        'wallpaper': "url('/wallpaper.jpg')",
      }
    },
  },
  plugins: [],
}

