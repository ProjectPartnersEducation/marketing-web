<script lang="ts">
	import { assets } from '$app/paths';

	import BigTopImage from '$lib/components/elements/bigtopimage/index.svelte';
	import Button from '$lib/components/elements/button.svelte';
	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';

	const executiveTeam = [
		{ src: 'ts.jpg', name: 'Tom Shering', role: 'CEO', bioUrl: 'tom-shering' }
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
</script>

<BigTopImage imgSrc={assets + '/images/class-with-hands-up.jpg'} text="Our Team" />
{#each teams as team}
	<StandardMargins addClass="grid grid-cols-2 gap-8 pt-24">
		<h2 class="col-span-2 text-6xl font-handwriting">{team.name}</h2>
		{#each team.members as person}
			<div class="flex flex-row w-full border-8 border-black">
				<img
					src="{assets}/images/team/{person.src}"
					alt=""
					class="object-cover object-center w-32 h-32 sm:w-48 sm:h-48"
				/>
				<div class="flex flex-col w-full text-center place-content-center gap-y-2">
					<h4 class="text-2xl text-slate-500">{person.role}</h4>
					<h3 class="text-3xl">{person.name}</h3>
					{#if person.bioUrl}
						<a href="/about/team/{person.bioUrl}" class="text-xl underline decoration-ppblue"
							>Read {person.name.split(' ')[0]}'s Bio</a
						>
					{/if}
				</div>
			</div>
		{/each}
	</StandardMargins>
{/each}
<StandardMargins addClass="grid justify-center grid-cols-1 border-8 border-black mt-24 py-8">
	<div class="pb-8 text-center font-handwriting text-7xl">Can you picture yourself here?</div>
	<div class="text-center">
		<Button
			text="See our available roles"
			href="https://projectpartners.jobspage.co/"
			target="_blank"
		/>
	</div>
</StandardMargins>
