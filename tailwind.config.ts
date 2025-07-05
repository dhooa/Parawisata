import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#c88037',
          dark: '#a1662c',
        },
        'dark': {
          DEFAULT: '#1a1a1a',
          light: '#333333'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
