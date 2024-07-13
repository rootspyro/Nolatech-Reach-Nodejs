/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#E92100",
        "green-light": "#03B044",
        "green-base": "#07913B",
        "green-dark": "#025923",
        "gray-light": "#F5F6FA",
        "gray-base":"#9A9A9A",
        "gray-dark": "#170B01",

      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

