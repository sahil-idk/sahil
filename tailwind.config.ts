import type { Config } from "tailwindcss";


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'noise' : "url('/noise3.jpg')",
        'key': "url('/key.jpg')",
        'mountain': "url('/mount.jpg')",
        'random': "url('/pc2.jpg')",
      },
      keyframes: {
        shift: {
          '0%': { transform: 'translateX(0%) translateY(0%)' },
          '100%': { transform: 'translateX(10%) translateY(10%)' },
        },
      },
      animation: {
        shift: 'shift  ',  /* Slowed down to 2 seconds with a smoother easing function */
      },
      
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
};
export default config;


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}