import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 베이지 베이스
        cream: {
          DEFAULT: "#f5f1ea",
          deep: "#ede7dc",
        },
        // 잉크 (텍스트)
        ink: {
          DEFAULT: "#1a1817",
          soft: "#4a4644",
          mute: "#8a8480",
        },
        // 액센트 컬러
        accent: {
          red: "#e8472a",
          "red-deep": "#c43818",
          blue: "#7eb8d4",
          "blue-deep": "#4a8ba8",
          orange: "#f47b3c",
          gold: "#d4a847",
        },
        line: "#d8d2c5",
      },
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      animation: {
        blob: "blob 20s infinite ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
