import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        accent: "#ff6b35",
        teal: "#00d4aa",
        surface: "#111111",
        border: "#1e1e1e",
        muted: "#666666",
      },
      animation: {
        "blink": "blink 0.8s step-end infinite",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { borderColor: "#ff6b35" },
          "50%": { borderColor: "transparent" },
        },
        scrollLine: {
          "0%, 100%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
