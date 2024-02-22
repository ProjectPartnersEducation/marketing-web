<script lang="ts">
	export let src: string;
	export let alt: string;

	export let srcset: string | null = null;
	export let href: string | null = null;
	export let addClass: string = '';
	export let srcsetScales: number[] = [256, 512, 768, 1024, 1280];
	export let defaultScale: number = 512;
	export let sizes: string = '(min-width: 50em) 50em, 100vw';
	export let cloudinaryPublicName = 'dywyr2kco';

	const getFormattedUrl = (
		cloudinaryPublicName: string,
		url: string,
		scale: number,
		withBreakpoint: boolean = false
	) => {
		if (!isCloudinarySrc) return url;

		const prefix = 'https://res.cloudinary.com/';
		const centreSlug = '/image/upload/';
		const cloudinarySettings = `f_auto/q_auto/c_scale,w_${scale}/`;
		const suffix = withBreakpoint ? ` ${scale}w` : '';

		return `${prefix}${cloudinaryPublicName}${centreSlug}${cloudinarySettings}${url}${suffix}`;
	};

	const getSrcset = (srcsetScales: number[]): string | null => {
		if (!isCloudinarySrc) return null;
		return srcsetScales
			.map((srcsetScale: number) =>
				getFormattedUrl(cloudinaryPublicName, srcUrl, srcsetScale, true)
			)
			.join(',');
	};

	$: isCloudinarySrc = src.startsWith('cloudinary://');
	$: srcUrl = isCloudinarySrc ? src.replace('cloudinary://', '') : src;
	$: srcsetUrls = srcset ? srcset : getSrcset(srcsetScales);
	$: formattedUrl = getFormattedUrl(cloudinaryPublicName, srcUrl, defaultScale, false);
</script>

{#if href}
	<a {href}>
		<img {sizes} {alt} srcset={srcsetUrls} src={formattedUrl} class={addClass} />
	</a>
{:else}
	<img {sizes} {alt} srcset={srcsetUrls} src={formattedUrl} class={addClass} />
{/if}
