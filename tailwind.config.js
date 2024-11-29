/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // adjust the paths based on your project structure
    "./src/**/*.{js,ts,jsx,tsx}", // if you're using React
    "./src/**/*.{html}", // if you have any HTML files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
