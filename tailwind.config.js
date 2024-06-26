/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#000E5C",
        },
        light: {
          default: "#f7fffb",
        },
        dark: {
          default: "#666666",
        },
        success: {
          default: "#04802e",
          light: "#04f38e",
        },
        secondary: {
          light: "#ffece5",
        },
        danger: {
          default: "#d22620",
        },
      },
    },
  },
  plugins: [],
};
