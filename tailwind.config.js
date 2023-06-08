/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      title: ['Gasoek One', 'sans-serif'],
      body: ['Assistant', 'sans-serif'],
      sans: ['Assistant', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

