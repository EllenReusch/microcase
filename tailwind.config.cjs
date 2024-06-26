/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Prompt"', ...defaultTheme.fontFamily.sans],

        display: ['"Roboto"', "monospace"], // Adds a new `font-display` class
      },
      colors: {
        persianmosaic: {
          100: "#d2dfe2",
          200: "#90b0b7",
          300: "#64929b",
          400: "#367480",
          500: "#196673",
          600: "#145863",
          700: "#0b3c45",
          800: "#042328",
          900: "#02171b",
        },
      },
    },
  },
};
