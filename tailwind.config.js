const colors = require('tailwindcss/colors')
module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#222385',
        },
        secondary: {
          default: '#131515',
        },
        tertiary: {
          default: '#EDEDF5',
        },
        highlighted: {
          default: '#04007A',
        },
        hovering: {
          default: '#3331F5',
        },
        whiteIsh: {
          default: '#E7F3F3',
        },
      }
    },
  },
  plugins: [],
};
