const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  mode:"jit",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Permanent Marker"',],
      },
    },
  },
  plugins: [],
}
