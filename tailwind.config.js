/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero":"url('./src/assets/bgImages/heroBg.jpg')"
      },
      boxShadow:{
        "3xl":"0px 5px 40px rgba(255,255,255,0.40)"
      }
    },
  },
  plugins: [],
}