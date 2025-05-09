module.exports = {
  content: ['./app/**/*.html', './app/**/*.js', './app/**/*.jsx', './app/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'below400': { max: '399px' },
      },
    },
  },
  plugins: [],
};
