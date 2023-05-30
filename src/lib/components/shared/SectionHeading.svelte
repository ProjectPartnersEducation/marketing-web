<script lang="ts">
	export let title: string | null = null;
	export let subtitle: string | null = null;
	export let id: string | null = null;
</script>

<h1 class="mt-12 text-2xl font-bold tracking-tight text-gray-900 lg:mt-24 sm:text-3xl" {id}>
	{#if title}
		{title}
	{:else}
		<slot name="title" />
	{/if}
</h1>
<p class="mt-6 text-lg leading-8 text-gray-600">
	{#if subtitle}
		{subtitle}
	{:else}
		<slot name="subtitle" />
	{/if}
</p>
