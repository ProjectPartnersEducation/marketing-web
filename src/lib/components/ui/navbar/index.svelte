<script lang="ts">
	import { assets } from '$app/paths';
	import { onMount, tick } from 'svelte';

	let scrollY: number;
	let windowHeight: number;
	let documentHeight: number;

	const calculateScrollValue = (y: number) => {
		if (documentHeight === undefined || windowHeight === undefined || y === undefined) {
			return 0;
		}

		const scrollValue = y / (documentHeight - windowHeight);

		return scrollValue > 1 ? 1 : scrollValue;
	};

	$: scrollValue = calculateScrollValue(scrollY);

	onMount(() => {
		documentHeight = document.body.scrollHeight;
	});
</script>

<svelte:window bind:scrollY bind:innerHeight={windowHeight} />

<nav class="sticky top-0 bg-white">
	<div class="grid grid-cols-[25%,75%] p-3 mx-64 align-middle">
		<img src={assets + '/logo.svg'} alt="logo" class="max-h-16" />
		<div class="grid h-full grid-cols-[25%,25%,50%] align-middle grid-rows place-items-center">
			<div>About</div>
			<div>Resources</div>
			<div>Get Involved</div>
		</div>
	</div>
	<div class="w-auto h-1 mx-64 border-b border-gray-200">
		<div
			class="w-full h-full bg-[#eeb019]"
			style="transform: scaleX({scrollValue}); transform-origin: 0 0;"
		/>
	</div>
</nav>
