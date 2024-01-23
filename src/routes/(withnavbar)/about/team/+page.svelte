<script lang="ts">
	import { assets } from '$app/paths';

	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import Button from '$lib/components/elements/button.svelte';
	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';
	import CopyLink from '$lib/components/elements/copylink/index.svelte';

	const executiveTeam = [
		{ src: 'ts.jpg', name: 'Tom Shering', role: 'Chief Executive', bioUrl: 'tom-shering' }
	];

	const trustees = [
		{ src: 'jj.jpg', name: 'Jonny Jackson', role: 'Chair, Trustee', bioUrl: 'jonny-jackson' },
		{ src: 'su.jpg', name: 'Saiyara Uddin', role: 'Treasurer, Trustee', bioUrl: 'saiyara-uddin' },
		{ src: 'sm.jpg', name: 'Sophie Martin', role: 'Secretary, Trustee', bioUrl: 'sophie-martin' },
		{ src: 'rm.jpg', name: 'Renette Mbroh', role: 'Trustee', bioUrl: 'renette-mbroh' }
	];

	const advisors = [
		{ src: 'sd.jpg', name: 'Suhaida D', role: 'Advisor, Operations', bioUrl: false },
		{ src: 'nw.jpg', name: 'Nicola Whelan', role: 'Advisor, Community', bioUrl: false },
		{ src: 'tb.png', name: 'Tim B', role: 'Advisor, Creative', bioUrl: false }
	];

	const teams = [
		{ name: 'Executive Team', members: executiveTeam },
		{ name: 'Board of Trustees', members: trustees },
		{ name: 'Advisors', members: advisors }
	];

	const biosAreActive = false;
</script>

<svelte:head>
	<title>Our Team | Project Partners Education</title>
	<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
	<script>
		Weglot.initialize({
			api_key: 'wg_64c47c59a31aa6dfcc0b6505d462c91f0'
		});
	</script>
</svelte:head>

<StandardMargins addClass="grid gap-8 pt-24">
	<h1 class="text-5xl font-black font-heading">Our Team</h1>
	<p class="text-2xl leading-loose text-justify">
		Project Partners operates as a remote-first, entirely volunteer-run team, united in our passion
		for accessible education. We're a global and open group, dedicated to meaningful impact and open
		to conversations that drive change. If you're considering volunteering with us, know that your
		contributions will be vital and valued, making a real difference in the world of education.
	</p>
	{#each teams as team}
		<h2 class="mt-8 text-4xl font-black font-heading">{team.name}</h2>
		<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
			{#each team.members as person}
				<div class="flex flex-row w-full border-4 border-black rounded-sm">
					<img
						src="{assets}/images/team/{person.src}"
						alt="A portrait of {person.name}"
						class="object-cover object-center w-32 h-32 sm:w-48 sm:h-48"
					/>
					<div class="flex flex-col w-full mx-8 text-left place-content-center gap-y-2">
						<div>
							<h4 class="text-md text-slate-500">{person.role}</h4>
							<h3 class="text-3xl font-black font-heading">{person.name}</h3>
						</div>
						{#if biosAreActive && person.bioUrl}
							<a href="/about/team/{person.bioUrl}" class="text-xl underline decoration-ppblue"
								>Read {person.name.split(' ')[0]}'s Bio</a
							>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</StandardMargins>
<StandardMargins addClass="border-8 border-black mt-24 py-8 px-8 rounded-sm">
	<div class="flex flex-row w-full">
		<img
			src="{assets}/images/team/unknown-person.png"
			alt="An abstract face with a question mark inside"
			class="hidden object-cover object-center h-full lg:block"
		/>
		<div class="flex flex-col w-full text-left md:mx-16 place-content-center gap-y-8">
			<div class="text-4xl font-black font-heading">Can you picture yourself here?</div>
			<div class="text-xl leading-loose">
				We'd love to hear from you! You can email us directly at <CopyLink
					text="hello@projectpartners.org"
				/> Or you can see our open positions below:
			</div>
			<div>
				<Button
					text="See our available roles"
					href="https://projectpartners.jobspage.co/"
					target="_blank"
				/>
			</div>
		</div>
	</div>
	<!-- <div class="pb-8 text-6xl font-black text-center font-heading">
		Can you picture yourself here?
	</div>
	<div class="text-center">
		<Button
			text="See our available roles"
			href="https://projectpartners.jobspage.co/"
			target="_blank"
		/>
	</div> -->
</StandardMargins>

<hr class="my-24 snap-start" />
<StrongLinks
	link1={{
		imgsrc: `${assets}/images/IMG_0459.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'See our resources',
		href: '/resources',
		hoverColor: 'ppyellow'
	}}
	link2={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'Two children looking at a book',
		text: 'Read about us',
		href: '/about',
		hoverColor: 'ppgreen'
	}}
	bigLink={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'Get Involved',
		href: '/get-involved',
		hoverColor: 'ppred'
	}}
/>
