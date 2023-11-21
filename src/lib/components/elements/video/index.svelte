<script lang="ts">
	// Import styles.
	import 'vidstack/player/styles/default/theme.css';
	import 'vidstack/player/styles/default/layouts/video.css';

	// Register elements.
	import 'vidstack/player';
	import 'vidstack/player/layouts';
	import 'vidstack/player/ui';

	import { onMount } from 'svelte';

	import type { MediaCanPlayEvent } from 'vidstack';
	import type { MediaPlayerElement } from 'vidstack/elements';

	export let src: string;
	export let textTracks: TextTrack[] = [];
	export let onCanPlay: (event: MediaCanPlayEvent) => void = () => {};

	let player: MediaPlayerElement;

	onMount(() => {
		for (const track of textTracks) player.textTracks.add(track);
	});
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
		<media-video-layout />
	</media-player>
</div>

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
