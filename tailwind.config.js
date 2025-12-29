/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#66BB6A',
          hover: '#2C6B28',
        },
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          input: '#2C2C2C',
          hover: '#242424',
        },
      },
    },
  },
  plugins: [],
}
