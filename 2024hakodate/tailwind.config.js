/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "ejs.config.js",
    "./src/**/*.{ejs,js,ts,jsx,tsx}",
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        black: "#222",
        bg: "#FFF",
        jpa: "#10355E",
        red: "#C32121",
        "bg-dark": "#EFEFEF",
        "header-bg": "rgba(255,255,255,0.3)",
      },
    },
  },
  plugins: [],
};
