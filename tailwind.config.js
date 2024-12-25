/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue 55"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
