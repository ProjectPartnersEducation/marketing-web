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

<nav class="sticky top-0 z-50 bg-white">
	<div class="grid grid-cols-[20%,60%,20%] p-3 mx-64 align-middle border-b-8 border-gray-800 items-center">
		<div>
			Hi
		</div>
		<a href="/">
			<img src={assets + '/logo.svg'} alt="logo" class="max-h-16" />
		</a>
		<div
			class="text-xl"
		>
			<!-- <div class="font-black">About</div>
			<div class="font-black">Resources</div> -->
			<div>
				<a class="text-xl fancy" href="/get-involved">
					<span class="top-key" />
					<span class="font-black text">Get Involved</span>
					<span class="bottom-key-1" />
					<span class="bottom-key-2" />
				</a>
			</div>
		</div>
	</div>
	<div class="w-auto h-1 mx-64 border-b border-gray-200">
		<div
			class="w-full h-full bg-[#f3a061]"
			style="transform: scaleX({scrollValue}); transform-origin: 0 0;"
		/>
	</div>
</nav>

<style>
	.fancy {
		background-color: transparent;
		border: 2px solid #000;
		border-radius: 0;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		float: right;
		margin: 0;
		outline: none;
		overflow: visible;
		padding: 0.5em 1em;
		position: relative;
		text-align: center;
		text-decoration: none;
		text-transform: none;
		transition: all 0.3s ease-in-out;
		user-select: none;
	}

	.fancy::before {
		content: ' ';
		width: 1.5625rem;
		height: 2px;
		background: black;
		top: 50%;
		left: 1.5em;
		position: absolute;
		transform: translateY(-50%);
		transform-origin: center;
		transition: background 0.3s linear, width 0.3s linear;
	}

	.fancy .text {
		line-height: 1.33333em;
		padding-left: 2em;
		display: block;
		text-align: left;
		transition: all 0.3s ease-in-out;
		text-decoration: none;
		color: black;
	}

	.fancy .top-key {
		height: 2px;
		width: 1.5625rem;
		top: -2px;
		left: 0.625rem;
		position: absolute;
		background: #e8e8e8;
		transition: width 0.5s ease-out, left 0.3s ease-out;
	}

	.fancy .bottom-key-1 {
		height: 2px;
		width: 1.5625rem;
		right: 1.875rem;
		bottom: -2px;
		position: absolute;
		background: #e8e8e8;
		transition: width 0.5s ease-out, right 0.3s ease-out;
	}

	.fancy .bottom-key-2 {
		height: 2px;
		width: 0.625rem;
		right: 0.625rem;
		bottom: -2px;
		position: absolute;
		background: #e8e8e8;
		transition: width 0.5s ease-out, right 0.3s ease-out;
	}

	.fancy:hover {
		color: white;
		background: black;
	}

	.fancy:hover::before {
		width: 0.9375rem;
		background: white;
	}

	.fancy:hover .text {
		color: white;
		padding-left: 1.5em;
	}

	.fancy:hover .top-key {
		left: -2px;
		width: 0px;
	}

	.fancy:hover .bottom-key-1,
	.fancy:hover .bottom-key-2 {
		right: 0;
		width: 0;
	}
</style>
