/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        xmas: "url('../public/img/christmas-bg.png')",
        xmasLight: "url('../public/img/xmas-light.png')",
      },
    },
    fontFamily: {
      dancing: ['Dancing Script'],
      xmas: ['Mountains of Christmas'],
    },
  },
  plugins: [],
};
