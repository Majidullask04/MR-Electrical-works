/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F59E0B', // Bright safety yellow/orange
          dark: '#D97706',
        },
        secondary: {
          DEFAULT: '#1E3A8A', // Deep industrial blue
          dark: '#172554',
        },
        dark: '#1F2937',
        light: '#F3F4F6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
