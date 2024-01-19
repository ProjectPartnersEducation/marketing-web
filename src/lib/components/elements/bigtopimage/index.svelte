<script lang="ts">
	export let imgSrc: string;
	export let text: string;
</script>

<div class="relative border-8 border-black xl:mx-64 lg:mx-32">
	<img src={imgSrc} class="w-full rounded-sm" />
	{#each ['md:bottom-2 md:right-2 bottom-1 right-1'] as position}
		<h1
			class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white rounded-sm {position} text-5xl sm:text-8xl font-handwriting"
		>
			{text}
		</h1>
	{/each}
</div>
