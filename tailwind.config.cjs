/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          700: '#0f766e',
          800: '#115e59',
        },
      },
      borderRadius: {
        md: '8px',
      },
    },
  },
  plugins: [],
}
