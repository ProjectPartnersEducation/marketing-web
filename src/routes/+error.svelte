<script>
	import Navbar from '$lib/components/ui/navbar/index.svelte';
	import Footer from '$lib/components/ui/footer/index.svelte';

	import Button from '$lib/components/elements/button.svelte';
</script>

<Navbar />
<main class="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-base font-semibold text-ppblue">404</p>
		<h1 class="mt-4 text-3xl font-black tracking-tight sm:text-5xl font-heading">Page not found</h1>
		<p class="mt-6 text-2xl leading-7 text-gray-600">
			We're sorry but we can't find the page you're looking for.
		</p>
		<div class="grid justify-center mt-10">
			<Button text="Back to the homepage" href="/home" />
			<a href="mailto:hello@projectpartners.org" class="mt-4 text-sm"
				>Or send us an email <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</div>
</main>
<Footer />
