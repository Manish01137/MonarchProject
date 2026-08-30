import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Dark base (unchanged)
        navy: {
          900: "#0B1F3F",
          800: "#13294B",
        },
        // Primary accent — coral-orange, from the Monarch logo mark
        brand: {
          50: "#FCEEE8",
          100: "#FBDCCF",
          400: "#F1703F",
          500: "#E44E29",
          600: "#E44E29",
          700: "#C23F1F",
        },
        // Secondary accent — maroon, from the Monarch wordmark (replaces the old gold)
        maroon: {
          400: "#A84059",
          500: "#8A2A43",
          600: "#701F34",
          700: "#5A1A2B",
        },
        ink: "#4B5563",
        mist: "#F7F8FB",
        hair: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h2": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card: "0 10px 30px rgba(11,31,63,0.08)",
        "card-hover": "0 16px 40px rgba(11,31,63,0.14)",
        nav: "0 8px 24px rgba(11,31,63,0.08)",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
