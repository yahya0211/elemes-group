import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      overflowScrolling: {
        touch: "touch",
      },
      fontFamily: {
        allura: ["Allura", "cursive"],
        oleo: ["Oleo Script Swash Caps", "cursive"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".overflow-scrolling-touch": {
          "-webkit-overflow-scrolling": "touch",
        },
      };
      addUtilities(newUtilities, {
        respectPrefix: false,
        respectImportant: false,
      });
    },
  ],
} satisfies Config;
