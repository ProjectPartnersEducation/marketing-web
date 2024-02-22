<script>
	import { assets } from '$app/paths';

	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';

	const cookiesPolicy = assets + '/cookies_policy.html';
</script>

<StandardMargins>
	<iframe src={cookiesPolicy} frameborder="0" title="cookies" class="w-full h-screen"></iframe>
</StandardMargins>
