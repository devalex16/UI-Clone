/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '.7rem',
      xl: '2rem',
      sm: '.8rem',
      lg: '1.4rem'
    },
    extend: {},
  },
  plugins: [],
}
