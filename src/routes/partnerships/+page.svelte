<script lang="ts">
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import ContactForm from '$lib/components/form/Contact.svelte';
</script>

<PageHeading
	title="Partnerships"
	description="We work with schools, organisations, and governments to further our charitable aims. If you are interested in partnering with us, please get in touch."
/>

<PageIntroSummary
	subtitle="
        Whether you are an existing partner or are interested in working with us, this page will
        explain how to get in touch and what to expect from partnering with us.
    "
	menuItems={[
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
			href: '#'
		},
		{
			title: 'Requirements and expectations',
			desc: `
                We have a set of requirements and expectations for our partners. You can read more about
                these on our requirements page.
            `,
			linkText: 'Read our requirements',
			href: '#'
		}
	]}
/>

<div id="book-a-meeting">
	<SectionHeading
		title="Book a meeting with us"
		subtitle="We are a small team and we are always happy to meet with our partners and
potential partners. We hold regular drop-in sessions where you can meet with us to discuss your
project or ask any questions you may have."
	/>
</div>
<iframe
	src="https://koalendar.com/e/drop-in-with-project-partners?embed=true"
	width="100%"
	height="800px"
	frameborder="0"
	title="Drop in with Project Partners"
/>

<div id="send-us-a-message">
	<SectionHeading title="Send us a message">
		<span slot="subtitle">
			If you have a question or would like to get in touch, you can send us a message using our
			contact form. You can also email us at <a
				href="mailto:hello@projectpartners.org"
				class="text-indigo-600">hello@projectpartners.org</a
			>.
		</span>
	</SectionHeading>
</div>
<ContactForm />
