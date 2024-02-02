export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#01579b',
        'bg-black': '#171717',
        'bg-card-black': '#202124',
        'border-card': '#3c4043',
        'border-table': '#808080',
        'font-white-game' : '#bdc1c6',
      },
      width: {
        '760': '47.5rem',
      }
    }
  },
  plugins: [],
}