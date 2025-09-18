/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'josefin':["Josefin Sans", "sans-serif"],
      },
      backgroundColor: {
        'bgColorPrim': '#5a1711',
        'bgColorSec': '#631a13',
        'bgInput': '#7c4341',
        'bgColorThird': '#4f1611'
      },
      colors: {
        'redone': '#680000'
      },
     
    },
  },
  plugins: [],
}

