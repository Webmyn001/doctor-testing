/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins'],
        montserat:['Montserrat'],
        josefins:['Josefin Sans'],
        jost:['Jost'],
        arabic:['Noto Naskh Arabic']
      }
    },
  },
  plugins: [],
}