<script lang="ts">
	import { page } from '$app/stores';

	import '../app.css';
	import '@fontsource/satisfy';
	import '@fontsource/vt323';
	import '@fontsource/caveat-brush';
	import '@fontsource-variable/nunito-sans';
	import '@fontsource-variable/libre-franklin';
</script>

<svelte:head>
	{#if $page.data && $page.data.metaDescription}
		<meta name="description" content={$page.data.metaDescription} />
	{/if}
</svelte:head>

<div class="overflow-x-clip">
	<slot />
</div>
