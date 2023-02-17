/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/banner.png')",
        "pattern-bg": "url('/assets/pattern-bg.jpg')",
        lenderz: "url('/assets/lenderz.jpg')",
        "small-banner": "url('/assets/small-banner.png')",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors:{
        "transparent-white": "#0011287d",
      },
    },
  },
  plugins: [],
};
