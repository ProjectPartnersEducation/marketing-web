<script lang="ts">
	export let src: string;
	export let alt: string;
	export let bgColor: string = '';
	export let href: string | null = null;

	import Image from '$lib/components/elements/image/index.svelte';
</script>

<div class="relative group">
	<div
		class="absolute top-0 left-0 w-full h-full transition-all rounded-sm bg-{bgColor} -z-10 md:group-hover:scale-105 translate-y-2 translate-x-2 md:group-hover:translate-x-4 md:group-hover:translate-y-4"
	></div>
	<Image
		{src}
		{alt}
		{href}
		addClass="transition-all border-8 border-black rounded-sm cursor-pointer md:hover:scale-105"
	/>
</div>
