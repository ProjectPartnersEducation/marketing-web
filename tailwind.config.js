/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svg}'],
	theme: {
		fontWeight: {
			normal: 200,
			black: 800
		},
		fontFamily: {
			handwriting: ['Permanent Marker', 'ui-sans-serif', 'system-ui']
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
