module.exports = {
  mode: 'jit',
  prefix: 'tw-',

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {
      spacing: {
        '3.75': '0.9375rem', // 15px
        '7.5': '1.875rem', // 30px
      },
      fontSize: {
        '15px': '0.9375rem', // 15px
        '42px': '2.625rem', // 42px
      },
      letterSpacing: {
        '2px': '2px',
        '4px': '4px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
