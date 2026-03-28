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
        "surface": "rgba(254, 200, 154, 0.15)",
        "surface-hover": "rgba(254, 200, 154, 0.22)",
        "border-subtle": "rgba(254, 200, 154, 0.22)",
        "border-medium": "rgba(254, 200, 154, 0.35)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "card": "12px",
        "card-sm": "8px",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.04)",
        "nav": "0 1px 2px rgba(0, 0, 0, 0.04)",
      },
      fontFamily: {
        display: ["Bree Serif", "Georgia", "serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            transform: "translateY(24px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
