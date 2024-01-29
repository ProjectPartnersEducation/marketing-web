import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import inlineSvg from '@svelte-put/preprocess-inline-svg';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		inlineSvg([
			{
				directories: 'src/assets/diagrams',
			},
			{
				directories: 'src/assets/ui',
			},
		])
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},
		csp: dev
			? {}
			: {
				directives: {
					'script-src': [
						"'self'",
						'https://projectpartners.org',
						'https://res.cloudinary.com',
						'https://stream.mux.com',
						'https://mux.com',
						'https://cdn.jsdelivr.com',
						'https://api.iconify.design',
						'https://donorbox.org',
						'https://www.googletagmanager.com'
					],
					'object-src': ["'none'"],
					'style-src': [
						"'self'",
						"'unsafe-inline'",
						'https://fonts.googleapis.com',
						'https://c.disquscdn.com'
					],
					'base-uri': ["'self'"],
					'child-src': ["'self'", 'https://donorbox.org'],
					'frame-src': ["'self'", 'https://donorbox.org']
				}
			}
	}
};

export default config;
