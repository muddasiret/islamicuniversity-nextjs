module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: "#041e42",
        skyblue: "#19b5fe",
        lightyellow: "#f0f09a",
      },
      scale: {
        103: "1.03",
      },
    },
  },
  plugins: [],
};
