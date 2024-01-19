/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svg}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	theme: {
		fontWeight: {
			normal: 200,
			black: 800
		},
		fontFamily: {
			sans: ['Nunito Sans Variable', 'ui-sans-serif', 'system-ui'],
			handwriting: ['Libre Franklin Variable', 'Caveat Brush', 'ui-sans-serif', 'system-ui'],
			// handwriting: ['Caveat Brush', 'ui-sans-serif', 'system-ui'],
			pptext: ['Satisfy', 'ui-sans-serif', 'system-ui'],
			mono: ['VT323', 'ui-monospace', 'SFMono-Regular'],
		},
		extend: {
			colors: {
				pppink: "#cea0b5",
				ppgreen: "#93b195",
				ppyellow: "#eeb019",
				pporange: "#f3a061",
				ppblue: "#1e87ab",
				ppred: "#d01c1c",
			},
			listStyleType: {
				square: 'square',
			},
		}
	},
	plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'),]
};
