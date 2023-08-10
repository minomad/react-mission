/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D03660',
        secondary: '#222222',
        disabledColor: '#DDDDDD',
      },
    },
  },
  plugins: [],
};
