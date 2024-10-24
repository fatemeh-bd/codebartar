import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1d4ed8",
        secondary: {
          100: "#fafafa",
          200: "#f4f4f5",
          500: "#e4e4e7",
          700: "#4b5563",
        },
        black: "#09090b",
      },
      fontSize:{
        xl:"1.125rem"
      }
    },
  },
  plugins: [],
};
export default config;
