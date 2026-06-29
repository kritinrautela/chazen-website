import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171713",
        paper: "#f5f0e6",
        porcelain: "#fbfaf6",
        stone: "#d8d0c2",
        moss: "#52634f",
        leaf: "#203a2b",
        clay: "#a26d4f",
        brass: "#b59b65"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Avenir Next", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(32, 58, 43, 0.12)",
        object: "0 18px 40px rgba(23, 23, 19, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
