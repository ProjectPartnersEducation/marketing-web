<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let text: string;
	export let withIcon: boolean = true;
	export let additionalClasses: string = '';
	export let target: string = '_self';
</script>

<a
	{href}
	{target}
	class="underline decoration-indigo-500 decoration-2 underline-offset-4 hover:text-indigo-600 {additionalClasses}"
	>{text}{#if withIcon}
		<Icon icon="solar:arrow-right-linear" class="inline-block w-4 h-4 ml-1" />
	{/if}
</a>
