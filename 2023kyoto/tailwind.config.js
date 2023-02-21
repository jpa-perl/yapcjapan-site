/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'ejs.config.js',
    './src/**/*.{ejs,js,ts,jsx,tsx}',
    './dist/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFF',
        jpa: '#10355E',
        'bg-dark': '#EFEFEF',
        'header-bg': 'rgba(255,255,255,0.3)',
      },
    },
  },
  plugins: [],
};
