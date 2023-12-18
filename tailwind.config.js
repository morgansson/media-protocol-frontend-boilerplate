/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx", "./src/**/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        dark: {
          2000: "rgb(0 2 6)",
          1950: "rgb(3 5 9)",
          1900: "rgb(6 8 12)",
          1850: "rgb(9 11 15)",
          1800: "rgb(12 14 18)",
          1750: "rgb(15 17 21)",
          1700: "rgb(18 20 25)",
          1650: "rgb(21 23 28)",
          1600: "rgb(24 26 31)",
          1550: "rgb(27 29 36)",
          1500: "rgb(30 32 39)",
          1450: "rgb(32 34 41)",
          1400: "rgb(35 37 44)",
          1375: "rgb(37 39 46)",
          1350: "rgb(39 41 48)",
          1300: "rgb(41 43 50)",
          1250: "rgb(44 46 53)",
          1200: "rgb(47 49 56)",
          1150: "rgb(50 52 59)",
          1100: "rgb(54 56 63)",
          1050: "rgb(58 60 67)",
          1000: "rgb(63 65 72)",
          900: "rgb(72 74 81)",
          850: "rgb(77 79 86)",
          800: "rgb(81 83 90)",
          700: "rgb(91 93 100)",
          600: "rgb(101 103 110)",
          500: "rgb(118 120 127)",
          400: "rgb(132 134 140)",
          350: "rgb(142 144 150)",
          300: "rgb(152 154 160)",
          250: "rgb(166 168 174)",
          200: "rgb(181 183 189)",
          150: "rgb(203 205 211)",
          100: "rgb(213 215 221)",
          50: "rgb(226 228 234)",
          0: "rgb(239 241 247)",
        },
      },
    },
  },
  plugins: [],
};
