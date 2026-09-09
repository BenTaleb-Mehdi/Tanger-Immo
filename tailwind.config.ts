import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1128",
          navyDark: "#060B1A",
          navyLight: "#131E3D",
          teal: "#0D9488",
          tealLight: "#14B8A6",
          tealSoft: "#E6F6F4",
          tealBg: "#F0FDFA",
          green: "#16A34A",
          greenSoft: "#DCFCE7",
          cardBg: "#FFFFFF",
          bgLight: "#F8FAFC",
          slateText: "#64748B",
          darkText: "#0F172A",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(10, 17, 40, 0.08), 0 4px 6px -2px rgba(10, 17, 40, 0.04)",
        dropdown: "0 20px 40px -10px rgba(10, 17, 40, 0.15)",
        floating: "0 20px 50px -12px rgba(10, 17, 40, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
