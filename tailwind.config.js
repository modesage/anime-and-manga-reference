/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#121212',
        ceramicWhite: '#f0f4f8',
        marbelWhite: '#e8e8e8',
        yellowishWhite: '#f8f5e3',
      }
    },
  },
  plugins: [],
}