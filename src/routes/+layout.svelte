<script>
	import '../app.css';
	import TopBanner from '$lib/components/shared/TopBanner.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
</script>

<div class="bg-white">
	<TopBanner />
	<Header />
	<div class="container max-w-5xl mx-auto sm:px-6 lg:px-8">
		<slot />
	</div>
	<Footer />
</div>
