/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
      },
      // ...
    },
  },
  plugins: [typography],
};