<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';

	import SideNavSpace from '$lib/components/shared/SideNavSpace.svelte';
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import PdfViewer from '$lib/components/materials/pdfViewer.svelte';

	const projects = [
		{
			name: 'Introduction',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Introduction.pdf',
			icon: null
		},
		{
			name: 'Project 1: The Trotro Mate',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%201.pdf',
			icon: null
		},
		{
			name: 'Project 2: Coconut Seller',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%202.pdf',
			icon: null
		},
		{
			name: 'Project 3: Corn Farming',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%203.pdf',
			icon: null
		},
		{
			name: "Project 4: The Architect's Office",
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%204.pdf',
			icon: null
		},
		{
			name: 'Project 5: Engineer',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%205.pdf',
			icon: null
		},
		{
			name: 'Project 6: Chop Bar',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%206.pdf',
			icon: null
		},
		{
			name: 'Project 7: Football Manager',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%207.pdf',
			icon: null
		},
		{
			name: 'Project 8: Retail Business',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%208.pdf',
			icon: null
		},
		{
			name: 'Project 9: Property Manager',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%209.pdf',
			icon: null
		},
		{
			name: 'Project 10: The Investor',
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019%20-%20Project%2010.pdf',
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
			url: 'https://storage.googleapis.com/pp-public-resources/project-packs/maths-ghana-2019/Project%20Pack%20-%202019.pdf',
			icon: null
		},
		{
			name: 'Boost Your Skills',
			url: '/skills',
			icon: 'something'
		}
	];

	let activeTab = tabs[0].name;
	let contentLoading = false;

	onMount(() => {
		activeTab = $page.url.searchParams.get('project') ?? tabs[0].name;
	});
</script>

<div>
	<PageHeading
		title="Projects for learners"
		description="Our projects are designed to be used by learners independently, with minimal supervision.
				They are designed to be used in a variety of contexts, including in the classroom, at home,
				or in an after-school club."
		aboveHeadingText="All of our materials are free forever"
	/>

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

	<SectionHeading
		title="Projects"
		subtitle="Browse all of our learning materials here. You can also download everything for free."
		id="project-viewer"
	/>
	<div class="p-5 bg-indigo-200 rounded-md">
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
				<PdfViewer
					url={projects.find((project) => project.name === activeTab)?.url || projects[0].url}
					name={activeTab || projects[0].name}
				/>
			</div>
		</SideNavSpace>
	</div>

	<SectionHeading
		title="Other ways to access our materials"
		subtitle="
				Are you have trouble accessing our materials? Do you know someone who would benefit from
				accessing our materials in a different way? We have a number of alternative formats
				available, as part of our commitment to making our materials accessible to everyone.
			"
		id="get-access"
	/>

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
						<a href="{base}/partnerships" class="text-sm font-semibold leading-6 text-indigo-600"
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
						<a href="{base}/contact" class="text-sm font-semibold leading-6 text-indigo-600"
							>Send us a message<Icon icon="solar:arrow-right-linear" class="inline w-4 h-4 ml-1" />
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
