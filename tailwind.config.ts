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
        background: "#050505",
        "secondary-background": "#0A0A0C",
        "accent-violet": "#6B00FF",
        "accent-cyan": "#00D6FF",
      },
      animation: {
        "scroll-y": "scroll-y 45s ease-in-out infinite",
      },
      keyframes: {
        "scroll-y": {
          "0%, 100%": { objectPosition: "top" },
          "50%": { objectPosition: "bottom" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
};
export default config;
