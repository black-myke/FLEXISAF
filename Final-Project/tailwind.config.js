/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantGreen: '#00C853',
        dullRed: '#ff2a2a',
        deepRed: '#ff0000'
      }
    },
  },
  plugins: [],
}
