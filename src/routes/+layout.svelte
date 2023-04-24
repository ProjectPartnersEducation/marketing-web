<script>
	import '../app.css';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="bg-white">
	<TopBanner />
	<Header />
	<slot />
	<Footer />
</div>
