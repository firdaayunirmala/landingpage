/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans : ["Satoshi", "cursive"],
      },
      colors: {
        primary1 : "#1C64F2",
      }
    },
  },
  plugins: [],
}

