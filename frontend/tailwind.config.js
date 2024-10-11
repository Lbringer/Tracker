/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#fafafa",
        light2: "#f5f5f5",
        dark: "#171717",
        grey: "#525252",
      },
    },
  },
  plugins: [],
};
