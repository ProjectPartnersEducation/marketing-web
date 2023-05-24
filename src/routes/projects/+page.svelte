<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import SideNavSpace from '$lib/components/shared/SideNavSpace.svelte';
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import Icon from '@iconify/svelte';

	const projects = [
		{
			name: 'Introduction',
			url: 'https://drive.google.com/file/d/1A9b2qydmyPgkBWRaXqtJkIDufmoxSv4B/preview',
			icon: null
		},
		{
			name: 'Project 1: The Trotro Mate',
			url: 'https://drive.google.com/file/d/1HD1pab7WO5HBZPXQYx_fco3YKcxaQRwa/preview',
			icon: null
		},
		{
			name: 'Project 2: Coconut Seller',
			url: 'https://drive.google.com/file/d/16XkcVcLlG710W7VM-2AdEZPjRnVwCDN9/preview',
			icon: null
		},
		{
			name: 'Project 3: Corn Farming',
			url: 'https://drive.google.com/file/d/1hEG2LP99EaaoofKvUgYeMx_gnevrWWM8/preview',
			icon: null
		},
		{
			name: "Project 4: The Architect's Office",
			url: 'https://drive.google.com/file/d/1s8c3MCr1KmESjI-nR0Uz-Sy_wlq6psbh/preview',
			icon: null
		},
		{
			name: 'Project 5: Engineer',
			url: 'https://drive.google.com/file/d/1mvXxvZRy89dPSAb_OtTq4paNKyZMazav/preview',
			icon: null
		},
		{
			name: 'Project 6: Chop Bar',
			url: 'https://drive.google.com/file/d/1XAiakRCljn-rbD8LDHHxogk2117OuC4E/preview',
			icon: null
		},
		{
			name: 'Project 7: Football Manager',
			url: 'https://drive.google.com/file/d/169ABH54xssW2DFPqMFVl23gR_t8sgtHQ/preview',
			icon: null
		},
		{
			name: 'Project 8: Retail Business',
			url: 'https://drive.google.com/file/d/1_d_bW6-buyXtITASyj8sZkVEbcyKlC6-/preview',
			icon: null
		},
		{
			name: 'Project 9: Property Manager',
			url: 'https://drive.google.com/file/d/1O3uIzu4Vr1Ji3G7_Rp0WBhP0ziAAhQNj/preview',
			icon: null
		},
		{
			name: 'Project 10: The Investor',
			url: 'https://drive.google.com/file/d/1UjFFUDghksiEECEwXT_uzLNx_rq569jv/preview',
			icon: null
		}
	];

	const tabs = [
		...projects.map((project) => ({
			name: project.name,
			icon: project.icon
		})),
		{},
		{
			name: 'Complete Pack',
			url: 'https://drive.google.com/file/d/1a9UZYsRL9yYCq4XZDdtSkE3kHMr9pr-S/preview',
			icon: null
		},
		{
			name: 'Boost Your Skills',
			url: '/skills',
			icon: 'something'
		}
	];

	let activeTab = tabs[0].name;
	let contentLoading = true;
</script>

<div>
	<PageHeading
		title="Projects for learners"
		description="Our projects are designed to be used by learners independently, with minimal supervision.
				They are designed to be used in a variety of contexts, including in the classroom, at home,
				or in an after-school club."
		aboveHeadingText="All of our materials are free forever"
	>
		<!-- <div class="p-4 mt-4 rounded-md bg-blue-50" slot="below-heading">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="w-5 h-5 text-blue-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="flex-1 ml-3 md:flex md:justify-between">
					<p class="text-sm text-blue-700">
						Our materials are also accessible in other formats that are more suitable for
						low-internet regions
					</p>
					<p class="mt-3 text-sm md:ml-6 md:mt-0">
						<a href="#" class="font-medium text-blue-700 whitespace-nowrap hover:text-blue-600">
							Find out more
							<span aria-hidden="true"> &rarr;</span>
						</a>
					</p>
				</div>
			</div>
		</div> -->
	</PageHeading>

	<PageIntroSummary
		subtitle="
			If you're here to learn, you're in the right place. We've got everything you need to get started.
		"
		menuItems={[
			{
				title: 'Use our learning materials',
				desc: 'Browse our learning materials and projects in our project viewer, and download everything for free.',
				linkText: 'Start Learning',
				href: '#project-viewer'
			},
			{
				title: 'Find alternative access',
				desc: 'Our materials are also accessible in other formats that are more suitable for low-internet regions.',
				linkText: 'Find out more',
				href: '#get-access'
			}
		]}
	/>

	<div id="project-viewer">
		<SectionHeading
			title="Projects"
			subtitle="Browse all of our learning materials here. You can also download everything for free."
		/>
	</div>
	<br />
	<SideNavSpace
		{tabs}
		{activeTab}
		on:tabChange={(e) => {
			activeTab = e.detail;
			contentLoading = true;
			$page.url.searchParams.set('project', activeTab || '');
			goto(`?${$page.url.searchParams.toString()}`, {
				noScroll: true,
				keepFocus: true
			});
		}}
	>
		<div slot="content" class:bg-gray-100={contentLoading}>
			{#if contentLoading}
				<div
					class="flex items-center justify-center w-full border-none h-screen lg:h-[calc(100vh-12rem)] animate-pulse"
				>
					Loading...
					<Icon icon="solar:wi-fi-router-minimalistic-linear" class="w-6 h-6 ml-2" />
				</div>
			{/if}
			<iframe
				src={projects.find((project) => project.name === activeTab)?.url || projects[0].url}
				class="w-full border-none h-screen lg:h-[calc(100vh-12rem)]"
				class:hidden={contentLoading}
				allow="autoplay"
				title="PDF Viewer"
				on:load={() => {
					contentLoading = false;
				}}
			/>
		</div>
	</SideNavSpace>
	<div id="get-access">
		<SectionHeading
			title="Other ways to access our materials"
			subtitle="
				Are you have trouble accessing our materials? Do you know someone who would benefit from
				accessing our materials in a different way? We have a number of alternative formats
				available, as part of our commitment to making our materials accessible to everyone.
			"
		/>
	</div>

	<div class="px-6 py-12 bg-white isolate sm:py-18 lg:px-8">
		<div class="max-w-lg mx-auto mt-20 space-y-16">
			<div class="flex gap-x-6">
				<div class="flex items-center justify-center w-10 h-10 bg-green-600 rounded-lg shrink-0">
					<Icon icon="mdi:whatsapp" class="w-6 h-6 text-white" />
				</div>
				<div>
					<h3 class="text-base font-semibold leading-7 text-gray-900">We're on WhatsApp</h3>
					<p class="mt-2 leading-7 text-gray-600">
						We can send you any of our materials in PDF format via WhatsApp. Just send us a message
						and we'll get back to you as soon as we can.
					</p>
					<p class="mt-4">
						<a
							href="https://wa.me/447914054095"
							target="_blank"
							class="text-sm font-semibold leading-6 text-indigo-600"
							>Start conversation (+44 7914 054095)<Icon
								icon="solar:arrow-right-linear"
								class="inline w-4 h-4 ml-1"
							/>
						</a>
					</p>
				</div>
			</div>
			<div class="flex gap-x-6">
				<div class="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg shrink-0">
					<Icon icon="solar:book-linear" class="w-6 h-6 text-white" />
				</div>
				<div>
					<h3 class="text-base font-semibold leading-7 text-gray-900">Printed Materials</h3>
					<p class="mt-2 leading-7 text-gray-600">
						If you are an organisation such as a school or community group, please consider applying
						to become a partner, where we can support you with printed materials.
					</p>
					<p class="mt-4">
						<a href="/partners" class="text-sm font-semibold leading-6 text-indigo-600"
							>Partner with us<Icon icon="solar:arrow-right-linear" class="inline w-4 h-4 ml-1" />
						</a>
					</p>
				</div>
			</div>
			<div class="flex gap-x-6">
				<div class="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg shrink-0">
					<Icon icon="solar:chat-round-like-outline" class="w-6 h-6 text-white" />
				</div>
				<div>
					<h3 class="text-base font-semibold leading-7 text-gray-900">Contact Us</h3>
					<p class="mt-2 leading-7 text-gray-600">
						For any other enquiries, please contact us and we will do our best to help you.
					</p>
					<p class="mt-4">
						<a href="/partners" class="text-sm font-semibold leading-6 text-indigo-600"
							>Send us a message<Icon icon="solar:arrow-right-linear" class="inline w-4 h-4 ml-1" />
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
