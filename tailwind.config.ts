import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
        "gradient-accent": "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))",
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.15) 0%, transparent 60%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(222 47% 6%) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-flow": "gradientFlow 4s ease infinite",
        "heartbeat": "heartbeat 1.2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" },
          "50%": { boxShadow: "0 0 60px hsl(var(--primary) / 0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.15)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(1.15)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        'glow': '0 0 40px hsl(var(--primary) / 0.3)',
        'glow-lg': '0 0 60px hsl(var(--primary) / 0.4)',
        'glow-xl': '0 0 80px hsl(var(--primary) / 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
