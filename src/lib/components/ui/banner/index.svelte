<script lang="ts">
	export let preambleText: string;
	export let linkText: string;
	export let linkHref: string;
	export let showCloseButton: boolean = false;
	export let bgColor: string = 'ppblue';
	export let textColor: string = 'white';
	export let linkTarget: string = '_blank';

	let closeButtonIsVisible = showCloseButton;

	const hideBanner = () => {
		closeButtonIsVisible = false;
	};
</script>

<div
	class="relative isolate flex items-center gap-x-6 overflow-hidden bg-ppblue px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
>
	<p class="text-sm leading-6 text-white">
		{preambleText}
		<a href={linkHref} target={linkTarget} class="font-black whitespace-nowrap"
			>{linkText}&nbsp;<span aria-hidden="true">&rarr;</span></a
		>
	</p>
	<div class="flex justify-end flex-1">
		{#if closeButtonIsVisible}
			<button
				type="button"
				class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
				on:click={hideBanner}
			>
				<span class="sr-only">Dismiss</span>
				<svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
					/>
				</svg>
			</button>
		{/if}
	</div>
</div>
