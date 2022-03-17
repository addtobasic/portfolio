module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-dark-color': '#263238',
        'primary-light-color': '#F9F9F9',
        'bg-products-color': '#25292F',
        'bg-product-card-color': '#37474F',
      },
    },
    fontFamily: {
      'base-text': ['Roboto'],
    },
    screens: {
      sm: { max: '420px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
