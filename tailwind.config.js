/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#18130F",
        card: "#221A14",
        cardHover: "#2A2119",
        accent: "#E7A33E",
        accentDeep: "#C9862B",
        chili: "#A84438",
        cream: "#F3EAD9",
        muted: "#A99A85",
        faint: "#766A5A",
        border: "#362A1F",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};