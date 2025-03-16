// Cambiar el nombre del archivo a tailwind.config.cjs para que sea tratado como CommonJS
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}