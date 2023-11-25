<script>
	export let snap = false;
</script>

<div
	class="md:py-24 py-16 lg:py-32 border-2 rounded-lg shadow-2xl border-slate-600 bg-[#fcfcff] md:px-24 sm:px-12 px-4 lg:px-36"
	class:snap-center={snap}
>
	<slot />
</div>
