/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Archivo Black', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace']
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
