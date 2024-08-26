/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#10201c",
        secondary: "#947c2e",
        tertiary: "#0c3b2d",
        "black-100": "#0c3b2d",
        "black-200": "#4d907c",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #95dfc9",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};