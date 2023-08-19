/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "hsl(150, 100%, 66%)",
        "light-cyan": "hsl(193, 38%, 86%)",
        "dark-blue": "hsl(218, 23%, 16%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
      },
      boxShadow: {
        "main": " 0 0 25px 0px hsl(150, 100%, 66%);"
      }
    },
  },
  plugins: [],
}

