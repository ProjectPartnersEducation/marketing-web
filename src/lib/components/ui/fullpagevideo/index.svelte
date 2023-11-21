<script lang="ts">
	// Import styles.
	import 'vidstack/player/styles/default/theme.css';
	import 'vidstack/player/styles/default/layouts/video.css';

	// Register elements.
	import 'vidstack/player';
	import 'vidstack/player/layouts';
	import 'vidstack/player/ui';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import type { MediaCanPlayEvent } from 'vidstack';
	import type { MediaPlayerElement } from 'vidstack/elements';
	import IntersectionObserver from 'svelte-intersection-observer';

	import { assets } from '$app/paths';
	import { textTracks } from './tracks';

	import Button from '$lib/components/elements/button.svelte';

	enum VideoStage {
		PREINIT,
		AUTO,
		AWAITING,
		USERCONTROLLED
	}

	let pauseTimeout: any = null;
	let currentStage: VideoStage = VideoStage.PREINIT;
	let showContinueButton: boolean = false;
	let showVideoControls: boolean = false;
	let navAwayObserverEl: HTMLElement;

	let player: MediaPlayerElement;
	let src =
		// 'https://storage.googleapis.com/pp-marketing-web-public/videos/Project%20Partners_Doc_temp.mp4';
		`${assets}/pp_local_temp.mp4`;

	const startPreInitStage = (player: MediaPlayerElement) => {
		let currentStage: VideoStage = VideoStage.PREINIT;
		let showContinueButton: boolean = false;
		let showVideoControls: boolean = false;
	};

	const startAutoStage = (player: MediaPlayerElement) => {
		currentStage = VideoStage.AUTO;

		player.muted = true;
		player.autoplay = true;
		player.play();

		pauseTimeout = setTimeout(() => {
			startAwaitingStage(player);
		}, 1000 * 5);
	};

	const startAwaitingStage = (player: MediaPlayerElement) => {
		currentStage = VideoStage.AWAITING;
		player.pause();
		showContinueButton = true;
	};

	const startUserControlledStage = (player: MediaPlayerElement) => {
		currentStage = VideoStage.USERCONTROLLED;
		player.muted = false;
		showContinueButton = false;
		showVideoControls = true;
		player.play();
	};

	onMount(() => {
		for (const track of textTracks) player.textTracks.add(track);

		startPreInitStage(player);

		return () => {
			clearTimeout(pauseTimeout);
		};
	});

	// We can listen for the `can-play` event to be notified when the player is ready.
	function onCanPlay(event: MediaCanPlayEvent) {
		startAutoStage(player);
	}
</script>

<div class="relative">
	<media-player
		class="player"
		title="Introducing Project Partners"
		{src}
		crossorigin
		playsinline
		on:can-play={onCanPlay}
		bind:this={player}
	>
		<media-provider>
			<media-poster
				class="vds-poster"
				src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200"
				alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
			/>
		</media-provider>
		<media-video-layout class:hidden={!showVideoControls} />
	</media-player>
	{#if showContinueButton}
		<div class="absolute z-10 w-full text-center -translate-x-1/2 left-1/2 bottom-32 top-32">
			<img
				src={assets + '/logo.svg'}
				alt="logo"
				class="inline-block max-h-40"
				transition:slide={{ duration: 700 }}
			/>
			<div class="mt-24" transition:slide={{ delay: 400, duration: 400 }}>
				<Button
					text="Continue video"
					href=""
					color="ppred"
					action={() => {
						startUserControlledStage(player);
					}}
				/>
			</div>
		</div>
	{/if}
</div>
<IntersectionObserver
	element={navAwayObserverEl}
	on:intersect={() => {
		startAwaitingStage(player);
	}}
>
	<div class="absolute w-1 h-1 translate-y-[102vh] bg-red-600" bind:this={navAwayObserverEl} />
</IntersectionObserver>

<style>
	.player {
		--brand-color: #f5f5f5;
		--focus-color: #4e9cf6;

		--audio-brand: var(--brand-color);
		--audio-focus-ring-color: var(--focus-color);
		--audio-border-radius: 2px;

		--video-brand: var(--brand-color);
		--video-focus-ring-color: var(--focus-color);
		--video-border-radius: 2px;
	}
</style>
