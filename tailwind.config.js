/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgStart:'rgba(var(--background-start))',
        bgEnd:'rgba(var(--background-end))',
        primary:'rgba(var(--primary-color))',
        secondary:'rgba(var(--secondary-color))',
        textPrimary:'rgba(var(--text-color))',
      }
    },
  },
  plugins: [require('daisyui'),],
}
