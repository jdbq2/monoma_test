/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                pokemon: ["pokemon", "sans"],
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                slideInUp: {
                    from: {
                        transform: "translate3d(0, -20%, 0)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translate3d(0, 0, 0)",
                        opacity: "1",
                    },
                },
                slideInDown: {
                    from: {
                        transform: "translate3d(0, 20%, 0)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translate3d(0, 0, 0)",
                        opacity: "1",
                    },
                },
            },
            animation: {
                fadeIn: "fadeIn 250ms linear forwards",
                slideInDown: "slideInDown 0.5s linear forwards",
                slideInUp: "slideInUp 0.5s linear forwards",
            },
            height: {
                90: "22rem",
            },
        },
    },
    plugins: [],
};
