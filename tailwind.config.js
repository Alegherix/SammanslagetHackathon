const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        ocean: '#1F2C65',
        ocean_floor: '#101329',
        // accent: '#15A2EF',
        // accent_200: "#0d79b3"
        accent: 'rgb(239, 68, 68)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
