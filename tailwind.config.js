/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BDEB00",
        blackDefault: '#090909',
        white:{
         default: "white" ,
          dark:"#8F8F8F"
        },
        customBlack:{
          light:"#101010"
        },
        darkGreen:"#1D1D1D"
      },
    },
  },
  plugins: [],
}

// const colors = require('tailwindcss/colors')
// module.exports = {
//   theme: {
//     colors: {
//       black: {
//         light: '#85d7ff',
       
//         dark: '#009eeb',
//       },
//       balckDEFAULT: '#121212',
//     }
//   }
// }