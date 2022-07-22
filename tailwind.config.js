/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#87AAAA',
        main: '#F6D7A7',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
