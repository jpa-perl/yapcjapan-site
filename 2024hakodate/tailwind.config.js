/** @type {import('tailwindcss').Config} */

const colors = {
  jpa: "#10355E",
  key: {
    DEFAULT: "#004B6D",
    50: "#A0E1FF",
    100: "#8CDBFF",
    200: "#63CEFF",
    300: "#3AC2FF",
    400: "#11B5FF",
    500: "#009FE7",
    600: "#0083BF",
    700: "#006796",
    800: "#004B6D",
    900: "#002435",
    950: "#001119",
  },
};

module.exports = {
  content: [
    "ejs.config.js",
    "./data/*.js",
    "./src/**/*.{ejs,js,ts,jsx,tsx}",
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    backgroundColor: {
      ...colors,
      default: "#000",
    },
    textColor: {
      ...colors,
      default: "#fff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
