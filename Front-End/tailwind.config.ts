import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bgCadastro: "#D9D9D9",
        primaryColor: "#3C117E",
        amarelo: "#FBB03B",
        vermelho: "#FE0000",
        azul: "#29AAE1",
        verde: "#006837",
        preto: "#000000",
        roxo: "#3C117E",
        roxoClaro: "#E6E1EE",
        roxoClaro2: "#F2EFF5",
        roxoHover: "#794EBA",
        cinza: "#A5A5A5",
        blueDiff: "#083A50",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        dropCadastro: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        dropShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        inputPadding: "12px 16px",
      },
      width: {
        "47%": "47%",
        "48%": "48%",
        "49%": "49%",
      },
      screens: {
        "1.5xl": "1360px",
      },
      fontSize: {
        sm2: "0.95rem",
      },
      backgroundColor: {
        pretoOverlay: "rgba(0, 0, 0, 0.55)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
