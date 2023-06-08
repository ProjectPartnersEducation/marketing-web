<script lang="ts">
	import { getMediaURL } from '$lib/shared/media';
	let screenSize: number = -1;
</script>

<svelte:head>
	<title>Project Partners Education</title>
</svelte:head>

<svelte:window bind:innerWidth={screenSize} />

<section class="relative flex flex-col items-center justify-center h-screen shrink-0">
	{#if screenSize > 0}
		<video
			muted
			autoplay
			loop
			playsinline
			disablepictureinpicture
			class="absolute object-cover w-full h-full -z-10 brightness-130"
		>
			<source src={getMediaURL('v1686225469/samples/elephants.mp4', screenSize)} type="video/mp4" />
		</video>
	{/if}
	<h1 class="max-w-xl text-white text-9xl font-title">
		<span>The</span><br />
		<span class="underline decoration-red-600">engaging</span><br />
		<span class="underline decoration-yellow-600">education</span><br />
		<span class="underline decoration-indigo-600">charity</span>
	</h1>
	<button
		type="button"
		class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>Watch the full video</button
	>
</section>

<section class="flex flex-row items-center justify-center h-[50vh]">
	<div class="basis-1/2">
		<h2 class="text-5xl font-title">When life comes to learning, learning comes to life.</h2>
		<p class="text-2xl leading-9">
			We've been telling captivating stories for thousands of years.<br />Why should education be
			any different?
		</p>
	</div>
	<div class="basis-1/2">
		<p>Here's the rest of it</p>
	</div>
</section>
<section class="flex flex-row items-center justify-center h-[50vh]">
	<div class="basis-1/2">
		<p>Here's the rest of it</p>
	</div>
	<div class="basis-1/2">
		<h2 class="text-5xl font-title">Curiosity is future-proof.</h2>
		<p>
			In a world that keeps reinventing itself, there's one skill that stands the test of time:
			curiosity.<br />Discover how we're fuelling it in education.
		</p>
	</div>
</section>
<section class="flex flex-row items-center justify-center h-[50vh]">
	<div class="basis-1/2">
		<h2 class="text-5xl font-title">A future for everyone.</h2>
		<p>
			We stand proudly with learners, parents, teachers, and leaders around the world with a shared
			vision for the future of education.
		</p>
	</div>
	<div class="basis-1/2">
		<p>Here's the rest of it</p>
	</div>
</section>

<section class="flex flex-row items-center justify-center h-[50vh]">
	<div class="basis">
		<h2 class="text-5xl font-title">We are Project Partners.</h2>
		<p>
			Bringing together diverse voices, we're transforming the learning landscape. Join our movement
			and help us reimagine a future of learning.
		</p>
	</div>
</section>
