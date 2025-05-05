/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: { 200: "#FFFFFF" },
        blueShades: { 200: "#CBE4E8" },
        blackShades: {
          200: "#000000",
          300: "#0000004D",
        },
        redShades: { 200: "#DB4444" },
        whiteShades: {
          500: "#E4E4E7",
          600: "#F1F1F3",
          700: "#F7F7F8",
          800: "#FCFCFD",
        },
        greyShades: {
          200: "#2F2E30",
          300: "#FAFAFA",
          400: "#F5F5F5",
        },
        orangeBrown: {
          200: "#D37643",
        },
      },
    },
  },
  plugins: [],
};
