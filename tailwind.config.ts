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
                background: "var(--background)",
                foreground: "var(--foreground)",
                "brand-primary": "#F39C12",
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
            },
            keyframes: {
                "slow-zoom": {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.1)" },
                },
            },
            animation: {
                "slow-zoom": "slow-zoom 20s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
