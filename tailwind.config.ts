import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise' : "url('/noise.png')",
        'key': "url('/key.jpg')",
        'mountain': "url('/mount.jpg')",
        'random': "url('/pc2.jpg')",
      },
      keyframes: {
        shift: {
          '0%': { transform: 'translateX(10%) translateY(10%)' },
          '100%': { transform: 'translateX(-10%) translateY(-10%)' },
        },
      },
      animation: {
        shift: 'shift 0.1s  linear infinite both',
      },
    },
  },
  plugins: [],
};
export default config;
