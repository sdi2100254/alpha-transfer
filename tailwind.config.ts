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
        "alpha-black": "#0A0A0A", // Deep Luxury Black
        "alpha-warm": "#FAF9F6",  // Off-White / Cream
        "alpha-brown": "#A68A64", // Gold/Bronze Accent
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;