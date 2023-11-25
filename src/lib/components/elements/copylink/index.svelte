<script lang="ts">
	export let additionalClasses: string = '';
	export let text: string = '';
	let showCopyAlert: boolean = false;
</script>

<button
	class="cursor-pointer {additionalClasses}"
	on:click={() => {
		navigator.clipboard.writeText(text);
		showCopyAlert = true;
	}}
	on:keypress={() => {
		navigator.clipboard.writeText(text);
		showCopyAlert = true;
	}}>{text}</button
><slot name="beforemessage">.</slot>
<slot name="message">
	{#if showCopyAlert}
		<span
			class="inline-flex items-center px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full"
			>Copied!</span
		>
	{/if}
</slot>
