/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FFB5A7",
        "light-pink": "#FCD5CE",
        "off-white": "#F8EDEB",
        "light-orange": "#F9DCC4",
        orange: "#FEC89A",
      },
    },
    fontFamily: {
      display: ["Bree Serif"],
      body: ["Poppins"],
    },
    keyframes: {
      "fade-in-up": {
        "0%": {
          transform: "translateY(19%)",
          opacity: "0",
        },
        "100%": {
          transform: "tranlateY(0)",
          opacity: "1",
        },
      },
    },
    animation: {
      "fade-in-up": "fade-in-up 0.5s ease-out",
    },
  },
  plugins: [],
};
