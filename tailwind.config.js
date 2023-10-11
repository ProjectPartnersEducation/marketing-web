/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svg}'],
  theme: {
    fontWeight: {
      'normal': 200,
      'black': 800,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

