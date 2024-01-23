<script lang="ts">
	import Image from '$lib/components/elements/image/index.svelte';

	export let imgSrc: string;
	export let text: string;
</script>

<div class="relative border-8 border-black xl:mx-64 lg:mx-32">
	<Image src={imgSrc} addClass="w-full rounded-sm" alt="A classroom and a child with her hand up" />
	<h1
		class="absolute inline-block px-4 py-2 text-5xl font-black text-center text-white bg-black border-4 border-white rounded-sm md:bottom-2 md:right-2 bottom-1 right-1 sm:text-8xl font-heading"
	>
		{text}
	</h1>
</div>
