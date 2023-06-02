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
	import ActionLinkList from '$lib/components/content/ActionLinkList.svelte';

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

	const actionLinks = [
		{
			title: "We're on WhatsApp",
			description:
				"We can send you any of our materials in PDF format via WhatsApp. Just send us a message and we'll get back to you as soon as we can.",
			icon: 'mdi:whatsapp',
			href: 'https://wa.me/447914054095',
			linkText: 'Start conversation (+44 7914 054095)',
			iconAdditionalClasses: 'bg-green-600'
		},
		{
			title: 'Printed Materials',
			description:
				'If you are an organisation such as a school or community group, please consider applying to become a partner, where we can support you with printed materials.',
			icon: 'solar:book-linear',
			href: `${base}/partnerships`,
			linkText: 'Partner with us'
		},
		{
			title: 'Contact Us',
			description:
				'For any other enquiries, please contact us and we will do our best to help you.',
			icon: 'solar:chat-round-like-outline',
			href: `${base}/contact`,
			linkText: 'Send us a message'
		}
	];

	onMount(() => {
		activeTab = $page.url.searchParams.get('project') ?? tabs[0].name;
	});
</script>

<div>
	<PageHeading
		title="Projects for learners"
		description="The projects on this page are designed to be used by learners independently, with minimal supervision.
				They are can be used in a variety of contexts, including at home, in the classroom, 
				or in an after-school club."
		aboveHeadingText="Our free materials for everyone"
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
	<div class="p-5 mt-8 bg-indigo-200 rounded-md">
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

	<ActionLinkList items={actionLinks} />
</div>
