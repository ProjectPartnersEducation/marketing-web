<script lang="ts">
	import Diagram from './diagram.svelte';
	import Text from './text.svelte';

	export let stepIndex: number = 0;
</script>

<section class="grid md:grid-cols-[60%,40%] gap-16 place-items-center">
	<div class="order-2 md:order-1">
		<Text
			on:setstep={(e) => {
				stepIndex = e.detail.step;
			}}
			{stepIndex}
		/>
	</div>
	<div class="order-1 w-full h-full md:order-2">
		<Diagram {stepIndex} />
	</div>
</section>
