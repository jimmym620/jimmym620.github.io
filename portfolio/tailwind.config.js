module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                main: "url('images/main-background.jpg')",
            },
            boxShadow: {
                nav: "0 .5rem 1rem #b0e0e6",
            },
            lineHeight: {
                11: "2.75rem",
                12: "3rem",
            },
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
