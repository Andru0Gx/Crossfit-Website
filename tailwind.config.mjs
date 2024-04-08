/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},

        fontFamily: {
            main: "Saira Stencil One",
            secondary: "Onest Variable",
        },

        colors: {
            primary: "var(--primary-color)",
            secondary: "var(--secondary-color)",
            bg: "var(--background-color)",
        },
    },
    plugins: [],
};
