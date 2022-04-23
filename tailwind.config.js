module.exports = {
    purge: ['./pages/**/*.{js, ts, jsx, tsx}', './components/**/*.{js, ts, jsx, tsx}'],
    darkmode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};