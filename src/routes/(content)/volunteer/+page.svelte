<script>
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
</script>

<PageHeading
	title="Volunteer"
	description="Become part of our story - help us to make a difference in the lives of young people through better education."
/>
<PageIntroSummary
	title="We're a growing charity with big ambitions"
	subtitle="Joining our team as a volunteer is a chance to make a tangible impact on education, empowering
			children across the globe to reach their full potential. You'll be part of a vibrant,
			inclusive, and passionate team dedicated to transforming learning experiences and shaping a
			brighter future, all while growing personally and professionally."
	menuItems={[
		{
			title: 'Member, Board of Advisors',
			desc: 'Help us reshape education for the better by joining our Board of Advisors. Worldwide (Remote). Volunteer position.',
			linkText: 'Apply now',
			href: `${base}/volunteer/roles/member-board-of-advisors`
		},
		{
			title: 'School, club, or organisation leader',
			desc: 'If you are already a leader in your school, club, or organisation, you can help us to bring our educational model to life as a Partner.',
			linkText: 'Find out more',
			href: `${base}/partnerships`
		}
	]}
/>
