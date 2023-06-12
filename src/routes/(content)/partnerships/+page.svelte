<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import ContactForm from '$lib/components/form/Contact.svelte';
	import TextSection from '$lib/components/shared/TextSection.svelte';
</script>

<PageHeading
	title="Partnerships"
	aboveHeadingText="Together we are better"
	description="We work with schools, organisations, and governments to further our charitable aims. If you are interested in partnering with us, please get in touch."
/>

<PageIntroSummary
	subtitle="
        Whether you are an existing partner or are interested in working with us, this page will
        explain how to get in touch and what to expect from partnering with us.
    "
	menuItems={[
		{
			title: 'School and Club partnerships',
			desc: `
                If you are a school or club interested in joining our network, you can read our comprehensive
				guide to the process and benefits of becoming a partner.
            `,
			linkText: 'Read our guide',
			href: '#schools-and-clubs'
		},
		{
			title: 'Book a meeting with us',
			desc: `
                There's nothing like a face-to-face meeting to get to know each other. You can book a
                meeting with our team to discuss how we can work together.
            `,
			linkText: 'Schedule a meeting',
			href: '#book-a-meeting'
		},
		{
			title: 'Send us a message',
			desc: `
                If you have a question or would like to get in touch, you can send us a message using our
                contact form.
            `,
			linkText: 'Message us',
			href: '#send-us-a-message'
		}
	]}
/>

<SectionHeading title="School and Club partnerships" id="schools-and-clubs" />
<TextSection>
	You can explore our Becoming a School or Club Partner page to gain a comprehensive understanding
	of the journey towards joining the Engaged Education network administered by Project Partners.
	Learn about the policy alignment process, the steps to becoming a Provisional and then a Certified
	Partner, and the vibrant life that awaits as a member of our global network.
</TextSection>
<TextSection>
	<a href="{base}/partnerships/schools-and-clubs" class="underline decoration-indigo-600">
		Read our guide to becoming a school or club partner <Icon
			icon="solar:arrow-right-linear"
			class="inline-block w-4 h-4 no-underline"
		/>
	</a>
</TextSection>
<SectionHeading
	title="Book a meeting with us"
	subtitle="We are a small team and we are always happy to meet with our partners and
potential partners. We hold regular drop-in sessions where you can meet with us to discuss your
project or ask any questions you may have."
	id="book-a-meeting"
/>
<iframe
	src="https://koalendar.com/e/drop-in-with-project-partners?embed=true"
	width="100%"
	height="800px"
	frameborder="0"
	title="Drop in with Project Partners"
/>

<SectionHeading title="Send us a message" id="send-us-a-message">
	<span slot="subtitle">
		If you have a question or would like to get in touch, you can send us a message using our
		contact form. You can also email us at <a
			href="mailto:hello@projectpartners.org"
			class="text-indigo-600">hello@projectpartners.org</a
		>.
	</span>
</SectionHeading>
<ContactForm />
