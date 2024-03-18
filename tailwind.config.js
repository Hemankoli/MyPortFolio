/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(13,36, 56)', // Define your custom color
      },
    },
  },  
  plugins: [],
}