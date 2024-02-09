/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2d3d8b",
          normal: "#1e295d",
          dark: "#0f142e",
        },
      },
    },
  },
  plugins: [],
}
