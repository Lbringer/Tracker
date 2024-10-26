/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#fafafa",
        lightAlt: "#d4d4d4",
        dark: "#171717",
        grey: "#525252",
        darkAlt: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
