<script lang="ts">
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import ContactForm from '$lib/components/form/Contact.svelte';
</script>

<PageHeading title="Contact us">
	<div slot="below-heading" class="mt-6 text-lg leading-8 text-gray-600">
		If you have a question or would like to get in touch, you can send us a message using our
		contact form. Or you can contact us directly at <a
			href="mailto:
		hello@projectpartners.org"
			class="text-indigo-600 hover:text-indigo-700"
		>
			hello@projectpartners.org</a
		>
	</div>
</PageHeading>

<ContactForm />
