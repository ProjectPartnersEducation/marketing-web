<script>
	import Hero from '$lib/components/Hero.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Philosophy from '$lib/components/Philosophy.svelte';
	import BigButton from '$lib/components/BigButton.svelte';
	import Mission from '$lib/components/Mission.svelte';

	const headlineContent1 = 'Redefining success in education';
	const headlineContent2 =
		'We are on a mission to recentre learning around engagement, individuality, and collaboration. Through our network of research partners, collaborators, and schools, we are working with young people across the planet to unlock the next generation of learning.';
</script>

<main class="isolate">
	<Hero
		{headlineContent1}
		{headlineContent2}
		cta1Text="Get involved"
		cta1Link="#"
		cta2Text="Become a supporter"
		cta2Link="#"
	/>
	<BigButton
		title="Project Partners x UNESCO Ghana Commission"
		subtitle="We are proud to be working with the following partners to bring our mission to life. Find out more..."
	/>
	<Philosophy />
	<Mission />
	<Timeline />
</main>
