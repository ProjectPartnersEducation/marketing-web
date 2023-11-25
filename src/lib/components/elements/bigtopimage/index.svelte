<script lang="ts">
	export let imgSrc: string;
	export let text: string;
</script>

<div class="relative">
	<img src={imgSrc} class="w-full rounded-sm" />
	<h1
		class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white rounded-sm top-2 left-2 text-8xl font-handwriting"
	>
		{text}
	</h1>
	<h1
		class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white rounded-sm bottom-2 right-2 text-8xl font-handwriting"
	>
		{text}
	</h1>
</div>
