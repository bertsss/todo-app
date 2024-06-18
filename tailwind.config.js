/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {

        extend: {
            colors: {
                'card-border': '#d4d4d4',
                'card-shadow': '#c9c9c9',
            }
        },
    },
    plugins: [],
}

