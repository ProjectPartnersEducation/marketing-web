<script>
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import ListContainer from '$lib/components/shared/ListContainer.svelte';
	import ListItem from '$lib/components/shared/ListItem.svelte';
	import Link from '$lib/components/shared/Link.svelte';
</script>

<PageHeading title="Governance" />
<SectionHeading title="Charity Governing Documents" />
<ListContainer>
	<ListItem>
		<Link href="{base}/policies/constitution" target="_blank" text="Our Constitution" />
	</ListItem>
</ListContainer>
