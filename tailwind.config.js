module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: { DEFAULT: '#252525' },
        celeste: { DEFAULT: '#b9faf8' },
        amethyst: { DEFAULT: '#a663cc' },
        frenchviolet: { DEFAULT: '#6F2DBD' },
      },
      backgroundImage: theme => ({
        'home-background': "url('/png/background.png')",
      }),
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontSize: {
        '7.5xl': '5.5rem',
        '8xl': '10rem',
        '9xl': '12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
