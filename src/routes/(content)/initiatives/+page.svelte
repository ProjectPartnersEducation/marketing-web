<script>
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<PageHeading
	title="Initiatives"
	description="Through our various initiatives, we bring our educational model to life, addressing specific educational challenges and fostering lifelong learning. This page outlines the diverse range of projects we have implemented and the impacts they've had."
	aboveHeadingText="Actions, not words"
/>

<PageIntroSummary
	subtitle="Through our various initiatives, we bring our educational model to life, addressing specific educational challenges and fostering lifelong learning. This page outlines the diverse range of projects we have implemented and the impacts they've had."
	menuItems={[
		{
			title: 'Current Initiatives',
			desc: 'We are always working on new initiatives to improve our educational model. Here you can find out what we are currently working on.',
			linkText: 'Read more',
			href: '#current-initiatives'
		},
		{
			title: 'Past Initiatives',
			desc: 'Our past initiatives have helped us to develop our educational model and give us new insights into how we can improve it.',
			linkText: 'Read more',
			href: '#past-initiatives'
		},
		{
			title: 'Impact and Success Stories',
			desc: "We are proud of the impact our initiatives have had on our students and the wider community. Here you can find out more about the impact we've had.",
			linkText: 'Read more',
			href: '#impact-and-success-stories'
		}
	]}
/>

<SectionHeading
	title="Current Initiatives"
	subtitle="Discover how we are currently working with our partner schools and organisations to improve our educational model."
	id="current-initiatives"
/>
<div class="overflow-hidden bg-white rounded-lg shadow">
	<div class="px-4 py-5 sm:p-6">
		<!-- Content goes here -->
	</div>
</div>

<SectionHeading
	title="Past Initiatives"
	subtitle="Find out more about the initiatives we have implemented in the past and the impact they have had."
	id="past-initiatives"
/>

<SectionHeading
	title="Impact and Success Stories"
	subtitle="Hear from some of our students and teachers about the impact our initiatives have had on them."
	id="impact-and-success-stories"
/>
