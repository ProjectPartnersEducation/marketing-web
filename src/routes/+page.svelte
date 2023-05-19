<script>
	import { assets } from '$app/paths';

	import Hero from '$lib/components/frontpage/Hero.svelte';
	import Timeline from '$lib/components/frontpage/Timeline.svelte';
	import Philosophy from '$lib/components/frontpage/Philosophy.svelte';
	import BigButton from '$lib/components/frontpage/BigButton.svelte';
	import Mission from '$lib/components/frontpage/Mission.svelte';

	const headlineContent1 = 'Where life comes to learning, learning comes to life.';
	const headlineContent2 =
		'Project Partners is on a mission to recentre education on engagement, creativity, and teamwork. Through our network of partners, collaborators, and schools, we are working with young people across the planet to support the next generation of learning.';
</script>

<main class="isolate">
	<Hero
		{headlineContent1}
		{headlineContent2}
		cta1Text="Learn with us"
		cta1Link="#"
		cta2Text="Become a supporter"
		cta2Link="#"
	/>
	<BigButton />
	<Philosophy />
	<Mission />
	<!-- <Timeline /> -->
	<div class="bg-white">
		<div class="py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div
				class="relative px-6 pt-4 overflow-hidden bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
			>
				<svg
					viewBox="0 0 1024 1024"
					class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
					aria-hidden="true"
				>
					<circle
						cx="512"
						cy="512"
						r="512"
						fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
						fill-opacity="0.7"
					/>
					<defs>
						<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
							<stop stop-color="#7775D6" />
							<stop offset="1" stop-color="#E935C1" />
						</radialGradient>
					</defs>
				</svg>
				<div class="max-w-md mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Help us change education for the better, globally
					</h2>
					<div class="flex items-center justify-center mt-10 gap-x-6 lg:justify-start">
						<a
							href="#"
							class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>Get involved</a
						>
						<a href="#" class="text-sm font-semibold leading-6 text-white"
							>Become a supporter <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
				<div class="relative mt-16 h-80 lg:mt-8">
					<img
						class="absolute left-0 top-0 w-[33rem] max-w-none rounded-sm"
						src="{assets}/images/focusgroup2-scale-2_00x.jpg"
						alt="A happy project partners classroom"
						width="100%"
					/>
				</div>
			</div>
		</div>
	</div>
</main>
