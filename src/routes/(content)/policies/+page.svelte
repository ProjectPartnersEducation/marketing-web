<script>
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import ListContainer from '$lib/components/shared/ListContainer.svelte';
	import ListItem from '$lib/components/shared/ListItem.svelte';
	import Link from '$lib/components/shared/Link.svelte';
</script>

<PageHeading title="Policies" />
<ListContainer>
	<ListItem>
		<Link
			href="{base}/policies/data-protection"
			target="_blank"
			text="Our Data Protection Policy"
		/>
	</ListItem>
	<ListItem>
		<Link
			href="{base}/policies/equality-diversity-and-inclusion"
			target="_blank"
			text="Our Equality, Diversity, and Inclusion Policy"
		/>
	</ListItem>
	<ListItem>
		<Link
			href="{base}/policies/safeguarding"
			target="_blank"
			text="Our Child Safeguarding Policy"
		/>
	</ListItem>
	<ListItem>
		<Link href="{base}/policies/whistleblowing" target="_blank" text="Our Whistleblowing Policy" />
	</ListItem>
</ListContainer>
