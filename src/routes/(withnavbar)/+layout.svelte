<script>
	import GhanaBanner from '$lib/components/ui/banner/ghanaannouncement.svelte';
	import Navbar from '$lib/components/ui/navbar/index.svelte';
	import Footer from '$lib/components/ui/footer/index.svelte';
</script>

<GhanaBanner />
<Navbar />
<slot />
<Footer />
