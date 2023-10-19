/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svg}'],
	theme: {
		fontWeight: {
			normal: 200,
			black: 800
		},
		fontFamily: {
			handwriting: ['Love Ya Like A Sister', 'Permanent Marker', 'ui-sans-serif', 'system-ui'],
			pptext: ['Satisfy', 'ui-sans-serif', 'system-ui'],
			mono: ['VT323', 'ui-monospace', 'SFMono-Regular'],
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
