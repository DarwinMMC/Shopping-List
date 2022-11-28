/** @type {import('tailwindcss').Config} */
const colors = require("./colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white:colors.white,
      black:colors.black,
      secondary: colors.secondary,
      accent:colors.accent,
      error:colors.error
    },
    extend: {},
  },
  plugins: [],
};
