/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f8fafc",
        dark: "#020617",
        grey: "#64748b",
      },
    },
  },
  plugins: [],
};
