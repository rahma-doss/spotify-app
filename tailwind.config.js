/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
        darkGreen:"#1D1D1D",
        colorText:"#b3b3b3",
        bgRecent:"#ffffff1a"
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

