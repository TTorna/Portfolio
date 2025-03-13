/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          800: '#362417',
          900: '#2B1810',
        }
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transformOrigin: {
        'center-right': 'center right',
      }
    },
  },
  plugins: [],
};