<script lang="ts">
	export let src: string;
	export let alt: string;
	export let bgColor: string = '';
	export let href: string | null = null;
</script>

<div class="relative group">
	<div
		class="absolute top-0 left-0 w-full h-full transition-all bg-{bgColor} -z-10 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4"
	></div>
	{#if href}
		<a {href}>
			<img
				{src}
				{alt}
				class="transition-all border-8 border-black cursor-pointer hover:scale-105"
			/>
		</a>
	{:else}
		<img {src} {alt} class="transition-all border-8 border-black cursor-pointer hover:scale-105" />
	{/if}
</div>
