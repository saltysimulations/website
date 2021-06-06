module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: { DEFAULT: '#252525' },
        celeste: { DEFAULT: '#b9faf8' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
