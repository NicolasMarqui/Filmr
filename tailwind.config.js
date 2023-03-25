/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9AB01",
        green: "#29B473",
        dark: "#0D1321",
      },
      fontFamily: {
        logo: ["Delicious Handrawn", "cursive"],
      },
      backgroundImage: {
        "home-bg": "url('/assets/bg.jpeg')",
      },
    },
    container: {
      center: true,
      padding: ".75rem",
    },
  },
  plugins: [],
};
