<script>
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import ListContainer from '$lib/components/shared/ListContainer.svelte';
	import ListItem from '$lib/components/shared/ListItem.svelte';
	import Link from '$lib/components/shared/Link.svelte';
</script>

<PageHeading title="Annual Reports" />
<ListContainer>
	<ListItem>
		<Link
			href="{base}/annual-reports/2020-21"
			target="_blank"
			text="Our Annual Report for 2020-21"
		/>
	</ListItem>
</ListContainer>
