/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#10201c",
        secondary: "#000000",
        tertiary: "#493828",
        "black-100": "#0c3b2d",
        "black-200": "#0c3b2d",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/background.png')",
      // },
    },
  },
  plugins: [],
};