import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Iron & Ember palette — built for a strength-coaching brand,
        // not the default cream/terracotta or near-black/acid-green combos.
        ink: {
          DEFAULT: "#151417", // primary background — warm graphite, not pure black
          soft: "#1D1C21", // raised surface
          line: "#2C2B31", // hairline borders on dark
        },
        bone: {
          DEFAULT: "#F2EFE9", // primary text on dark
          dim: "#B8B4AC", // secondary text on dark
        },
        ember: {
          DEFAULT: "#FF4B1F", // primary accent — power / CTA
          dark: "#D93A12",
          light: "#FF7A4D",
        },
        steel: {
          DEFAULT: "#5D6B7A", // secondary accent — cool, disciplined counterweight
          light: "#8E9AA6",
        },
        brass: "#C9A24B", // sparing third accent — ratings / achievements only
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "plate-grid":
          "linear-gradient(180deg, rgba(255,75,31,0) 0%, rgba(255,75,31,0.06) 100%)",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
