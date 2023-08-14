/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#D03660',
        secondary: '#222222',
        disabledColor: '#B4B4B4',
      },
    },
  },
  plugins: [],
};
