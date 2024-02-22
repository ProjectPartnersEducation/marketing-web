<script>
	import { assets } from '$app/paths';

	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';

	const privacyPolicy = assets + '/privacy_policy.html';
</script>

<StandardMargins>
	<iframe src={privacyPolicy} frameborder="0" title="privacy" class="w-full h-screen"></iframe>
</StandardMargins>
