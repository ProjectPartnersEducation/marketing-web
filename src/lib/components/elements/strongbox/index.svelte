<script>
	export let snap = false;
</script>

<div
	class="px-4 py-16 border-2 rounded-sm shadow-2xl md:py-24 lg:py-32 border-slate-600 md:px-16 sm:px-12 lg:px-24 xl:px-32"
	class:snap-center={snap}
>
	<slot />
</div>
