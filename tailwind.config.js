/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },

    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },

    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
      white: "#FFFFFF",

      PRIMARY_CYAN: "#2acfcf",
      PRIMARY_DARK_VIOLET: "#3b3054",

      RED: {
        _100: "#f46262",
      },

      NEUTRAL: {
        _100: "#bfbfbf",
        _200: "#9e9aa7",
        _300: "#35323e",
        _400: "#232127",
      },

    },
  },
  plugins: [],
}
