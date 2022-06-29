/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "red-accent": "#fc0000",
        "red-dull": "#b20000",
        "black-dull": "#101010",
        "black-accent": "#1b1a1a",
        "black-base": "#252424"
      }
    }
  },
  plugins: []
};
