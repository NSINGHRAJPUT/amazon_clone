/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonClone: {
          background: "#eaeded",
          light_blue: "#232fea",
          yellow: "#feb069",
          default: "#131921",
        },
      },
    },
  },
  plugins: [],
};
