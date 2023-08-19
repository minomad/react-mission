/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000063',
        secondary: '#3264ff',
        navColor: '#9DABCF',
        grayColor: '#E8EBF5'
      },
    },
  },
  plugins: [],
};

