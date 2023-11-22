<script>
	export let snap = false;
</script>

<div
	class="py-32 border-2 rounded-lg shadow-2xl border-slate-600 bg-[#fcfcff] px-36"
	class:snap-center={snap}
>
	<slot />
</div>
