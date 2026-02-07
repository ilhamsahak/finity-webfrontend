import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030305", // Very dark, almost black
        surface: "#0A0A10",   // Slightly lighter for cards
        primary: {
          DEFAULT: "#00F0FF", // Neon Cyan
          glow: "#00F0FF80",
        },
        secondary: {
          DEFAULT: "#7000FF", // Neon Purple
          glow: "#7000FF80",
        },
        accent: "#BC13FE",    // Pink/Magenta
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, rgba(3, 3, 5, 0) 70%)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
        heading: ["var(--font-orbitron)"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00F0FF, 0 0 10px #00F0FF' },
          '100%': { boxShadow: '0 0 20px #00F0FF, 0 0 30px #00F0FF' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
