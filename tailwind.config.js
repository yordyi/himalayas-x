/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Switzer, system-ui, sans-serif',
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffd',
          300: '#7cc2fc',
          400: '#36a1f8',
          500: '#0c84eb',
          600: '#0068c9',
          700: '#0054a3',
          800: '#004786',
          900: '#003c6f',
          950: '#002347',
        },
        secondary: {
          50: '#f4f7fb',
          100: '#e9eff5',
          200: '#cdddeb',
          300: '#a3c1d8',
          400: '#729ec1',
          500: '#4f7faa',
          600: '#3d658f',
          700: '#325274',
          800: '#2c4661',
          900: '#283c52',
          950: '#1a2736',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(115deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
