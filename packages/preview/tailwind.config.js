/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: ["selector", "[data-theme='dark']"],
    corePlugins: {
        preflight: false
    },
    important: "#root",
    theme: {
    },
    plugins: []
}
