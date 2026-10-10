import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          elevated: "var(--bg-elevated)",
          soft: "var(--bg-soft)",
        },
        fg: {
          DEFAULT: "var(--fg)",
          soft: "var(--fg-soft)",
        },
        muted: "var(--muted)",
        line: "var(--line)",
        "card-ring": "var(--card-ring)",
        accent: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
        },
        background: "var(--bg)",
        foreground: "var(--fg)",
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
      },
      boxShadow: {
        glow: "var(--glow)",
        "glow-lift": "var(--glow-lift)",
      },
      maxWidth: {
        container: "1100px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
