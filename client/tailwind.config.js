/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        primary: "#2F3E46",
        secondary: "#00C8A4",
      },
      colors: {
        "teal-secondary": "#00C8A4",
      },
    },
    screens: {
      xs: "379px",
      sm: "479px",
      md: "639px",
      lg: "767px",
      xl: "867px",
      "2xl": "947px",
      "3xl": "1023px",
      "4xl": "1179px",
      "5xl": "1279px",
    },
  },
  plugins: [],
};
