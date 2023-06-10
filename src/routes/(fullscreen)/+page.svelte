<script lang="ts">
	import { base, assets } from '$app/paths';
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
		<span class="underline decoration-[#cf1111]">engaging</span><br />
		<span class="underline decoration-[#f49d5c]">education</span><br />
		<span class="underline decoration-[#1483a9]">charity</span>
	</h1>
</section>

<section class="flex flex-row items-center justify-center min-h-[50vh] bg-[#cf1111]">
	<div class="mx-10 text-white">
		<h2 class="text-5xl font-title">When life comes to learning, learning comes to life.</h2>
		<p class="mt-4 text-2xl leading-9">
			We've been sharing captivating stories for thousands of years.<br />
			Our story is a learning experience.
		</p>
		<p class="mt-12 text-2xl leading-9 text-center text-white underline">
			<a href="{base}/resources" class="px-12 py-6 border hover:bg-[#f04242]"
				>Discover our resources</a
			>
		</p>
	</div>
	<div class="">
		<img
			src="{assets}/images/Classroom 1.jpeg"
			class="object-cover w-full h-full"
			alt="A group of school children using Project Partners materials in a classroom"
		/>
	</div>
</section>
<section class="flex flex-row items-center justify-center min-h-[50vh] bg-[#eeae14]">
	<div class="">
		<img
			src="{assets}/images/Classroom 3.JPG"
			class="object-cover w-full h-full"
			alt="A happy student listening intently to their teacher"
		/>
	</div>
	<div class="mx-10 text-white">
		<h2 class="text-5xl font-title">Curiosity is future-proof.</h2>
		<p class="mt-4 text-2xl leading-9">
			In our world, inspiration stands the test of time.<br />Discover how we're fuelling it in
			education.
		</p>
		<p class="mt-12 text-2xl leading-9 text-center text-white underline">
			<a href="{base}/resources" class="px-12 py-6 border hover:bg-[#f3c558]">Read about us</a>
		</p>
	</div>
</section>
<section class="flex flex-row items-center justify-center min-h-[50vh] bg-[#1483a9]">
	<div class="mx-10 text-white">
		<h2 class="text-5xl font-title">A space for everyone.</h2>
		<p class="mt-4 text-2xl leading-9">
			We stand proudly with learners, parents, teachers, and leaders around the world.<br />
			For a shared vision for the future of education.
		</p>
		<p class="mt-12 text-2xl leading-9 text-center text-white underline">
			<a href="{base}/resources" class="px-12 py-6 border hover:bg-[#1bb2e4]"
				>Be part of the story</a
			>
		</p>
	</div>
	<div class="">
		<img
			src="{assets}/images/focusgroup2-scale-2_00x.jpg"
			class="object-cover w-full h-full"
			alt="A group of school children using Project Partners materials in a classroom"
		/>
	</div>
</section>
<section class="flex flex-row items-center justify-center h-[50vh]">
	<div class="p-10 text-center border border-black border-1 basis">
		<h2 class="text-5xl font-title">We are Project Partners.</h2>
		<p class="mt-4 text-2xl leading-9">
			We're bringing together diverse voices to transform the learning landscape.<br />
			Join our movement and help us reimagine a future of engaging education.
		</p>
	</div>
</section>
