<script lang="ts">
	// Import styles.
	import 'vidstack/player/styles/default/theme.css';
	import 'vidstack/player/styles/default/layouts/video.css';
	import type { TextTrackInit } from 'vidstack';
	import HLS from 'hls.js';

	// Register elements.
	import 'vidstack/player';
	import 'vidstack/player/layouts';
	import 'vidstack/player/ui';

	import { onMount } from 'svelte';
	import {
		isHLSProvider,
		type MediaProviderAdapter,
		type MediaProviderChangeEvent,
		type MediaCanPlayEvent
	} from 'vidstack';
	import type { MediaPlayerElement } from 'vidstack/elements';

	export let src: string;
	export let textTracks: TextTrackInit[] = [];
	export let onCanPlay: (event: MediaCanPlayEvent) => void = () => {};

	let player: MediaPlayerElement;

	function onProviderChange(
		provider: MediaProviderAdapter | null,
		nativeEvent: MediaProviderChangeEvent
	) {
		if (isHLSProvider(provider)) {
			provider.library = HLS;
		}
	}

	onMount(async () => {
		// await import('@mux/mux-player');
		for (const track of textTracks) player.textTracks.add(track);
	});
</script>

<div class="relative max-w-full">
	<media-player
		class="player"
		title="Introducing Project Partners"
		{src}
		crossorigin
		playsinline
		on:can-play={onCanPlay}
		on:provider-change={onProviderChange}
		bind:this={player}
	>
		<media-provider>
			<media-poster
				class="vds-poster"
				src="https://image.mux.com/A4yMUY477Z7NzmVEXJzUpuHtYd1H02Cw96kK9RlpsA00A/thumbnail.png?width=214&height=121&time=12"
				alt="The Project Partners Education logo"
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
