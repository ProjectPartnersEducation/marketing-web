<script lang="ts">
	import Diagram from './diagram.svelte';
	import Text from './text.svelte';

	export let stepIndex: number = 0;
</script>

<section class="grid grid-cols-[60%,40%] place-items-center p-10">
	<div class="w-full col-span-2 text-5xl text-left font-handwriting">
		The Engaged Learning Model
	</div>
	<div>
		<Text
			on:setstep={(e) => {
				stepIndex = e.detail.step;
			}}
			{stepIndex}
		/>
	</div>
	<div class="w-full h-full">
		<Diagram {stepIndex} />
	</div>
</section>
