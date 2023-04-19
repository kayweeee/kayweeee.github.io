/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FBFBF2',
        'grey': '#E5E6E4',
        'timberwolf': 'CFD2CD',
        'silver': 'A6A2A2'
      }
    },
    fontFamily: {
      'display': ["Bree Serif"],
      'body': ["Alegreya"]
    }
  },
  plugins: [],
}