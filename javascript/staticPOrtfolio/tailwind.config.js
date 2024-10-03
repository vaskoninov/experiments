/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customBg: "#F4F2EE",
                secondBG: "#FFFFFF",
            },
        },
    },
    plugins: [],
};
