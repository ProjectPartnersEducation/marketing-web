<script>
	import '../../app.css';
	import TopBanner from '$lib/components/shared/TopBanner.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
</script>

<Header sticky={true} />
<slot />
<Footer />
