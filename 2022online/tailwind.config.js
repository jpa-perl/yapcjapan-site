module.exports = {
  content: ['./*.mustache', './data/**/*.json5'],
  theme: {
    extend: {
      colors: {
        primary: '#5A3434',
        tint: '#ED2628',
        pink: '#F05A59',
        bg: '#F6F6F6',
        jpa: '#10355E',
        'bg-dark': '#EFEFEF',
      },
      backgroundImage: {
        'footer-logo': "url('/2022online/assets/images/logo.svg')"
      }
    },
  },
  plugins: [],
};
