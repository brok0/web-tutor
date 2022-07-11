module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "(msngr-height)": "calc(100vh - 12rem)",
      },
      width: {
        "(msngr-width)": "calc(100vw - 22rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
