<script lang="ts">
	import { base, assets } from '$app/paths';
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import TextSection from '$lib/components/shared/TextSection.svelte';
	import Link from '$lib/components/shared/Link.svelte';

	interface TeamMember {
		name: string;
		possessive: string;
		role: string;
		image: string;
		bio: string;
		link?: string;
	}

	const teamMembers: TeamMember[] = [
		{
			name: 'Tom Shering',
			possessive: "Tom's",
			role: 'Co-founder & CEO',
			image: `${assets}/images/team/ts.jpg`,
			bio: ''
		},
		{
			name: 'Jonny Jackson',
			possessive: "Jonny's",
			role: 'Co-founder & Chair of Trustees',
			image: `${assets}/images/team/jj.jpg`,
			bio: 'Founder of Tech Natives, medical technology PhD, volunteer tutor in London, Masters in Engineering.'
		},
		{
			name: 'Sophie Martin',
			possessive: "Sophie's",
			role: 'Co-founder & Secretary of Trustees',
			image: `${assets}/images/team/sm.jpg`,
			bio: 'Founder of The Blackett Lab Family, artificial intelligence PhD, Masters in Physics.'
		},
		{
			name: 'Saiyara Uddin',
			possessive: "Saiyara's",
			role: 'Co-founder & Treasurer of Trustees',
			image: `${assets}/images/team/su.jpg`,
			bio: 'Associate at Lloyds Banking Group with business experience in Ghana. '
		},
		{
			name: 'Rennette Mbroh',
			possessive: "Rennette's",
			role: 'Co-founder & Trustee',
			image: `${assets}/images/team/rm.jpg`,
			bio: 'Masters in Education, teacher in Ghana.'
		},
		{
			name: 'Suhaida Dramani',
			possessive: "Suhaida's",
			role: 'Community and Programme Coordinator',
			image: `${assets}/images/team/sd.jpg`,
			bio: ''
		},
		{
			name: 'Tim Brockbank',
			possessive: "Tim's",
			role: 'Lead Designer',
			image: `${assets}/images/team/tb.png`,
			bio: ''
		},
		{
			name: 'Nicola Whelan',
			possessive: "Nicola's",
			role: 'Lead Community Relations Officer',
			image: `${assets}/images/team/nw.jpg`,
			bio: ''
		}
	];
</script>

<div class="py-24 bg-white sm:py-32">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<PageHeading
			title="Team"
			description="Meet the team behind Project Partners Education"
			aboveHeadingText="Our people"
		/>
		<SectionHeading title="Core Team & Trustees" />
		<ul class="space-y-12 divide-y divide-gray-200 xl:col-span-3">
			{#each teamMembers as teamMember}
				<li class="flex flex-col gap-10 pt-12 sm:flex-row">
					<img
						class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
						src={teamMember.image}
						alt="An image of {teamMember.name}"
					/>
					<div class="flex-auto max-w-xl">
						<h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
							{teamMember.name}
						</h3>
						<p class="text-base leading-7 text-gray-600">{teamMember.role}</p>
						<p class="mt-6 text-base leading-7 text-gray-600">
							{teamMember.bio}
						</p>
						{#if teamMember.link}
							<div class="flex mt-6 gap-x-6">
								<Link text="Read {teamMember.possessive} full bio" href={teamMember.link} />
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
		<SectionHeading title="Advisors" />
		<TextSection>
			We are looking for inspiring people to join us as an advisor. If you are interested, please
			read our <a href="{base}/volunteer/roles/member-board-of-advisors" class="text-indigo-500">
				job description page</a
			>
			or reach out to us at{' '}
			<a href="mailto:team@projectpartners.org" class="text-indigo-500">team@projectpartners.org</a
			>. We look forward to hearing from you!
		</TextSection>
	</div>
</div>
