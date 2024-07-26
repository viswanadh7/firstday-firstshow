/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                nunito: "Nunito",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
        require("tailwind-scrollbar-hide"),
    ],
};
