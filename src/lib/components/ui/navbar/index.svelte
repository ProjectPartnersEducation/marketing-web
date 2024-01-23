<script lang="ts">
	import { assets } from '$app/paths';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { fly, fade, slide } from 'svelte/transition';

	enum OnlineDetectorState {
		NONE,
		OFFLINE,
		ONLINE
	}

	let scrollY: number;
	let windowHeight: number;
	let documentHeight: number;

	let fullscreenMenuVisible = false;
	let onlineDetectorState: OnlineDetectorState = OnlineDetectorState.NONE;

	let svg: SVGElement;

	const calculateScrollValue = (y: number) => {
		if (documentHeight === undefined || windowHeight === undefined || y === undefined) {
			return 0;
		}

		const scrollValue = y / (documentHeight - windowHeight);

		return scrollValue > 1 ? 1 : scrollValue;
	};

	$: scrollValue = calculateScrollValue(scrollY);

	const showFullscreenMenu = () => {
		fullscreenMenuVisible = true;
	};

	const hideFullscreenMenu = () => {
		fullscreenMenuVisible = false;
	};

	onMount(() => {
		documentHeight = document.body.scrollHeight;
	});
</script>

<svelte:window bind:scrollY bind:innerHeight={windowHeight} />

<nav class="sticky top-0 z-40">
	<div class="bg-white">
		<div
			class="flex flex-row items-center justify-between flex-auto grid-cols-3 p-4 align-middle border-b-8 border-l-2 border-r-2 border-gray-800 lg:mx-32 xl:mx-64"
		>
			<div class="order-3 w-12 h-12 ml-4 mr-6 md:order-1">
				<div
					on:click={showFullscreenMenu}
					on:keypress={showFullscreenMenu}
					class="toggle grayscale hover:grayscale-0"
					id="checkbox"
				>
					<div class="bars" id="bar1"></div>
					<div class="bars" id="bar2"></div>
					<div class="bars" id="bar3"></div>
				</div>
			</div>
			<a href="/" class="order-2 md:order-2">
				<svg inline-src="logo" class="w-full h-16 transition-transform hover:scale-105" />
			</a>
			<div class="order-1 md:order-3">
				<a class="hidden text-lg md:inline-block md:text-xl fancy" href="/get-involved">
					<span class="top-key" />
					<span class="font-black text">Get Involved</span>
					<span class="bottom-key-1" />
					<span class="bottom-key-2" />
				</a>
			</div>
		</div>
		<div class="w-auto h-1 border-b border-gray-200 xl:mx-64 lg:mx-32">
			<div
				class="w-full h-full bg-ppyellow"
				style="transform: scaleX({scrollValue}); transform-origin: 0 0;"
			/>
		</div>
	</div>
	{#if !fullscreenMenuVisible && onlineDetectorState === OnlineDetectorState.OFFLINE}
		<div class="text-center xl:mx-64 lg:mx-32">
			<div class="inline-block px-6 py-3 text-xl text-white bg-red-600 rounded-sm">
				You're offline! This website may not function properly until you're back online.
				<Icon icon="mdi-light:warning" class="inline" />
			</div>
		</div>
	{:else if !fullscreenMenuVisible && onlineDetectorState === OnlineDetectorState.ONLINE}
		<div class="text-center xl:mx-64 lg:mx-32">
			<div class="inline-block px-6 py-3 text-xl text-white bg-green-600 rounded-sm">
				You're back online!
				<Icon icon="mdi-light:warning" class="inline" />
			</div>
		</div>
	{/if}
</nav>
{#if fullscreenMenuVisible}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen overflow-y-scroll bg-white inset-4 overscroll-contain"
	>
		<div
			out:slide
			class="grid items-center max-w-5xl grid-cols-2 px-8 py-12 mx-auto md:py-24 gap-x-8 md:gap-x-16 gap-y-8"
		>
			<div class="flex flex-row justify-between col-span-2 gap-x-4 place-items-center">
				<div class="order-2 md:order-1">
					<svg
						inline-src="cross"
						class="w-16 h-16 transition-all cursor-pointer sm:w-20 sm:h-20 md:w-24 md:h-24"
						on:click={hideFullscreenMenu}
						on:keypress={hideFullscreenMenu}
						on:mouseenter={() => {
							svg.style.fill = 'var(--ppred)';
						}}
						on:mouseleave={() => {
							svg.style.fill = '#000';
						}}
						bind:this={svg}
					/>
				</div>
				<a href="/" on:click={hideFullscreenMenu} class="order-1 md:order-2">
					<img
						src={assets + '/logo.svg'}
						alt="logo"
						class="w-full h-16 transition-all sm:h-20 hover:scale-105"
					/>
				</a>
			</div>
			<a
				href="/about"
				on:click={hideFullscreenMenu}
				class="col-span-2 px-8 py-4 text-4xl font-black text-right text-white transition-colors bg-black rounded-sm md:col-span-1 sm:text-5xl md:text-6xl hover:text-ppyellow font-heading"
			>
				About...
			</a>
			<div class="grid grid-cols-1 col-span-2 gap-8 text-right md:col-span-1 md:text-left">
				<div class="text-3xl link-text" in:fly={{ duration: 400, y: -10 }}>
					<a href="/about#principles" on:click={hideFullscreenMenu}> Our principles </a>
				</div>
				<div class="text-3xl link-text" in:fly={{ duration: 400, y: -10, delay: 30 }}>
					<a href="/about#work" on:click={hideFullscreenMenu}> Our activities </a>
				</div>
				<div class="text-3xl link-text" in:fly={{ duration: 400, y: -10, delay: 60 }}>
					<a href="/about#team" on:click={hideFullscreenMenu}> Our team </a>
				</div>
			</div>
			<div class="w-full col-span-2 border-4 border-b border-black"></div>
			<a
				href="/resources"
				class="col-span-2 px-8 py-4 text-4xl font-black text-right text-white transition-colors bg-black rounded-sm md:col-span-1 sm:text-5xl md:text-6xl hover:text-pporange font-heading"
				on:click={hideFullscreenMenu}
			>
				Resources...
			</a>
			<div
				transition:fly
				class="grid grid-cols-1 col-span-2 gap-8 text-right md:col-span-1 md:text-left"
			>
				<div class="text-3xl link-text" transition:fly={{ duration: 400, y: -10, delay: 90 }}>
					<a href="/resources#learners" on:click={hideFullscreenMenu}> For learners </a>
				</div>
				<div class="text-3xl link-text" transition:fly={{ duration: 400, y: -10, delay: 120 }}>
					<a href="/resources#teachers" on:click={hideFullscreenMenu}> For teachers </a>
				</div>
				<div class="text-3xl link-text" transition:fly={{ duration: 400, y: -10, delay: 150 }}>
					<a href="/resources#leaders" on:click={hideFullscreenMenu}> For leaders </a>
				</div>
			</div>
			<div class="w-full col-span-2 border-4 border-b border-black"></div>
			<a
				href="/get-involved"
				class="col-span-2 px-8 py-4 text-4xl font-black text-right text-white transition-colors bg-black rounded-sm sm:text-5xl md:text-6xl md:col-span-1 hover:text-ppred font-heading"
				on:click={hideFullscreenMenu}
			>
				Get Involved...
			</a>
			<div
				transition:fly
				class="grid grid-cols-1 col-span-2 gap-8 text-right md:col-span-1 md:text-left"
			>
				<div class="text-3xl link-text" transition:fly={{ duration: 400, y: -10, delay: 180 }}>
					<a href="/get-involved#donate" on:click={hideFullscreenMenu}> Donate </a>
				</div>
				<div class="text-3xl link-text" transition:fly={{ duration: 400, y: -10, delay: 210 }}>
					<a href="/get-involved#volunteer" on:click={hideFullscreenMenu}> Volunteer </a>
				</div>
				<div class="text-3xl link-text" transition:fly={{ duration: 400, y: -10, delay: 240 }}>
					<a href="/get-involved#contact-us" on:click={hideFullscreenMenu}> Contact us </a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.fancy {
		background-color: #000;
		border: 2px solid #000;
		border-radius: 0;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
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
		background: white;
		top: 50%;
		left: 1.5em;
		position: absolute;
		transform: translateY(-50%);
		transform-origin: center;
		transition:
			background 0.3s linear,
			width 0.3s linear;
	}

	.fancy .text {
		line-height: 1.33333em;
		padding-left: 2em;
		display: block;
		text-align: left;
		transition: all 0.3s ease-in-out;
		text-decoration: none;
		color: white;
	}

	.fancy .top-key {
		height: 2px;
		width: 1.5625rem;
		top: -2px;
		left: 0.625rem;
		position: absolute;
		background: #fff;
		transition:
			width 0.5s ease-out,
			left 0.3s ease-out;
	}

	.fancy .bottom-key-1 {
		height: 2px;
		width: 1.5625rem;
		right: 1.875rem;
		bottom: -2px;
		position: absolute;
		background: #fff;
		transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
	}

	.fancy .bottom-key-2 {
		height: 2px;
		width: 0.625rem;
		right: 0.625rem;
		bottom: -2px;
		position: absolute;
		background: #fff;
		transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
	}

	.fancy:hover {
		color: white;
		background: ppred;
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

	.toggle {
		position: relative;
		width: 40px;
		height: 40px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		transition-duration: 0.2s;
	}

	.bars {
		width: 100%;
		height: 4px;
		background-color: var(--ppred);
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
	}

	.toggle:hover #bar1 {
		width: 110%;
	}

	.toggle:hover #bar2 {
		width: 60%;
	}

	.toggle:hover #bar3 {
		width: 30%;
	}

	/* Link styles */
	.link-text > a {
		display: inline;
		position: relative;
	}
	.link-text > a:after {
		content: '';
		display: block;
		position: absolute;
		width: 1em;
		bottom: 0;
		height: 3px;
		margin: -5px 0;
		left: 0;
		background-color: black;
		transition: all 0.1s ease-in-out 0s;
	}
	.link-text > a:hover:after {
		width: 100%;
	}
</style>
