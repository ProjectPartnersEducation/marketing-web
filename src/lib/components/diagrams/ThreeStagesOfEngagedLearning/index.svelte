<script lang="ts">
	import Diagram from './diagram.svelte';
	import Text from './text.svelte';

	export let stepIndex: number = 0;
</script>

<section class="hidden md:grid md:grid-cols-[60%,40%] gap-16 place-items-center">
	<div class="">
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

<section class="grid gap-16 md:hidden place-items-center">
	<div class="w-full h-full">
		<Diagram stepIndex={0} />
	</div>
	<div class="">
		<Text stepIndex={0} showButtons={false} />
	</div>
	<div class="w-full h-full">
		<Diagram stepIndex={1} />
	</div>
	<div class="">
		<Text stepIndex={1} showButtons={false} />
	</div>
	<div class="w-full h-full">
		<Diagram stepIndex={2} />
	</div>
	<div class="">
		<Text stepIndex={2} showButtons={false} />
	</div>
	<div class="w-full h-full">
		<Diagram stepIndex={3} />
	</div>
	<div class="">
		<Text stepIndex={3} showButtons={false} />
	</div>
</section>
