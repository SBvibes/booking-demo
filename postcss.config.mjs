const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};