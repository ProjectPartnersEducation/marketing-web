<script lang="ts">
	import { fade } from 'svelte/transition';

	export let additionalClasses: string = '';
	export let text: string = '';
	export let link: string = text;
	let showCopyAlert: boolean = false;
</script>

<button
	class="cursor-pointer underline decoration-ppyellow decoration-1 decoration-dashed {additionalClasses}"
	on:click={() => {
		navigator.clipboard.writeText(link);
		showCopyAlert = true;
	}}
	on:keypress={() => {
		navigator.clipboard.writeText(link);
		showCopyAlert = true;
	}}>{text}</button
><slot name="beforemessage">.</slot>
<slot name="message">
	{#if showCopyAlert}
		<span
			class="inline-flex items-center px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full"
			transition:fade={{ duration: 100 }}>Copied!</span
		>
	{/if}
</slot>
