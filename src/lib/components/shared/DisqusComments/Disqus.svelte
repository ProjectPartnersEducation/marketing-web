<script lang="ts">
	import DisqusThread from '$lib/components/shared/DisqusComments/action';

	import { page } from '$app/stores';

	export let container = 'disqus_container';
	export let url = $page.url.href;
	export let identifier = $page.url.pathname;
	const siteName = 'projectpartners';
</script>

<div
	use:DisqusThread={{
		identifier,
		url,
		siteName
	}}
	class={container}
/>
