/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#0A0B0B",
      },
    },
  },
  plugins: [],
  safelist: ["bg-red-600", "bg-blue-600", "bg-yellow-600", "bg-green-600"],
};
