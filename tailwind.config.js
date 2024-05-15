/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "todo-navbar-bg":
          "url('https://images.template.net/100962/wood-texture-background-8n22y.png')",
      },
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"],
      },
      colors: {
        "wheat-text": "#FFF9D0",
        "money-bg": "#FFDB5C",
        "todo-content-bg": "#FFF2D7",
        "buy-content-bg": "#FFEC9E",
        "gray-text": "#524C42",
      },
    },
  },
  plugins: [],
};
