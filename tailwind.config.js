/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2sm": "740px",
        // => @media (min-width: 740px) { ... }
      },
      colors: {
        "dark-1": "#111111",
        "dark-2": "#222222",
        "dark-3": "#0D0D0D",
        "dark-4": "#121417",
        "dark-5": "#0E0C0C",
        "dark-6": "#3F3F46",
        "light-green": "#A3DE83",
        "dark-green": "#08BF31",
        "shadow-green": "#9B9B1F",
        golden: "rgba(254, 197, 118, 0.54)",
      },
      fontFamily: {
        sans: ["Mirza", "cursive"],
        lato: ["Lato", "sans-serif"],
        tajwal: ["Tajawal", "sans-serif"],
        italiano: ["Italianno", "cursive"],
      },
    },
  },
  plugins: [],
};
