module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: { DEFAULT: '#151515' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}