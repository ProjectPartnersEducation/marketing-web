<script>
	import Hero from '$lib/components/frontpage/Hero.svelte';
	import Timeline from '$lib/components/frontpage/Timeline.svelte';
	import Philosophy from '$lib/components/frontpage/Philosophy.svelte';
	import BigButton from '$lib/components/frontpage/BigButton.svelte';
	import Mission from '$lib/components/frontpage/Mission.svelte';

	const headlineContent1 = 'Redefining success in education';
	const headlineContent2 =
		'We are on a mission to recentre learning around engagement, individuality, and collaboration. Through our network of partners, collaborators, and schools, we are working with young people across the planet to support the next generation of learning.';
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
	<BigButton />
	<Philosophy />
	<Mission />
	<Timeline />
</main>
