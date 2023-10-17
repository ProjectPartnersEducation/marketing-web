<script lang="ts">
	import { onMount } from 'svelte';
	import './plyr.js';
	import './plyr.css';

	let player;
	export let videoSrc: string;
	export let plyrOptions: any = {};
	export let id = 'video';

	onMount(() => {
		player = new Plyr(`#${id}`, plyrOptions);
	});
</script>

<video crossorigin playsinline src={videoSrc} {id}>
	<source size="4320" src={videoSrc} type="video/mp4" />
	<!-- <source
		size="720"
		src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
		type="video/mp4"
	/>
	<source
		size="1080"
		src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
		type="video/mp4"
	/> -->
	<track
		default
		kind="captions"
		label="English"
		src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
		srclang="en"
	/>
	<track
		kind="captions"
		label="Français"
		src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
		srclang="fr"
	/>
	<a download="" href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4">
		Download
	</a>
</video>
