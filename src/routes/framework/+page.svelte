<script>
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<PageHeading
	title="Framework"
	description="At the core of our work lies the Project Partners Pedagogical Principles. These principles encompass the unique and innovative pedagogical approach we use to make education engaging, meaningful, and globally relevant."
	aboveHeadingText="Our pedagogical principles"
/>

<PageIntroSummary
	subtitle="Discover our transformative pedagogical model, where we demonstrate the principles and practical applications that are redefining success in education."
	menuItems={[
		{
			title: 'Our Principles',
			desc: 'Five key principles guide all our operations and initiatives. They represent our philosophy of education, which we support our partners to adopt.',
			linkText: 'Read more',
			href: '/framework/principles'
		},
		{
			title: 'How We Implement Them',
			desc: 'Find out how we implement our philosophy in our curriculum and teaching methods, creating an engaging and culturally inclusive learning environment.',
			linkText: 'Read more',
			href: '/framework/implementation'
		},
		{
			title: 'FAQs',
			desc: "Here you'll find answers to common questions about our pedagogical framework and how to implement it.",
			linkText: 'Read more',
			href: '/framework/faqs'
		}
	]}
/>

<SectionHeading
	title="Our pedagogical principles"
	subtitle="Our pedagogical principles are the foundation of our work. They are the guiding principles that inform our curriculum, teaching methods, and assessment practices."
/>

<SectionHeading
	title="How we implement them"
	subtitle="We measure ourselves by our actions, not our words. Here, we illustrate how we bring our principles life through our educational approach and practices."
/>

<SectionHeading title="Frequently asked questions" />
