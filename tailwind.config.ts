import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "hsl(var(--accent-foreground))",
        },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // border: "var(--border)",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // chart: {
        //   "1": "hsl(var(--chart-1))",
        //   "2": "hsl(var(--chart-2))",
        //   "3": "hsl(var(--chart-3))",
        //   "4": "hsl(var(--chart-4))",
        //   "5": "hsl(var(--chart-5))",
        // },
      },
      boxShadow: {
        nav: "0 4px 5px rgba(0, 0, 0, 0.3)",
        card: "5px 5px 0 1px",
      },
      backgroundImage: {
        hero: "url(/hero.jpg)",
      },
      borderRadius: {
				DEFAULT: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    borderColor: {
      DEFAULT: "#000",
      transparent: "rgba(0,0,0,0)",
      gray: "#aeb5bd",
    },
    borderWidth: {
      "1": "1px",
      DEFAULT: "2px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
