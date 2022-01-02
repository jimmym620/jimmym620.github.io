module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            lineHeight: {
                11: "2.75rem",
                12: "3rem",
            },
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
