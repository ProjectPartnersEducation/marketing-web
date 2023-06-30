<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let text: string;
	export let withIcon: boolean = true;
</script>

<a {href} class="mt-4 text-base leading-10 text-indigo-600"
	>{text}
	{#if withIcon}
		<Icon icon="solar:arrow-right-linear" class="inline-block w-4 h-4" />
	{/if}
</a>
