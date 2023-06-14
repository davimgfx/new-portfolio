/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      md1200: { max: "1200px" },
      md1024: { max: "1024px" },
      md1000: { max: "1000px" },
      min820: { max: "820px" },
      min800: { max: "800px" },
      min680: { max: "680px" },
      min620: { max: "620px" },
      min540: { max: "540px" },
      min480: { max: "480px" },
      min450: { max: "450px" },
      min375: { max: "375px" },
      min300: { max: "300px" },
    },
  },
  plugins: [],
}

