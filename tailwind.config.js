/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#45C4E9",
        "bg-pri": "#002447",
        "bg-sec": "#FEB249",
        "bg-ter": "#53D3D1",
        "bg-fou": "#FBECEB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
