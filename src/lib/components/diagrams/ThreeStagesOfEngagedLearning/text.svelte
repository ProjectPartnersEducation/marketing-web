<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Button from '$lib/components/elements/button2.svelte';

	const dispatch = createEventDispatcher();

	export let stepIndex = 0;
	const nSteps = 4;

	const incrementSteps = () => {
		stepIndex += 1;

		if (stepIndex >= nSteps) {
			stepIndex = 0;
		}

		dispatch('setstep', { step: stepIndex });
	};

	const decrementSteps = () => {
		if (stepIndex <= 0) return;
		stepIndex -= 1;

		dispatch('setstep', { step: stepIndex });
	};
</script>

<div class="flex flex-col">
	<div class="text-xl text-center">
		<span>0{stepIndex + 1}</span>
		<span class="text-gray-300"> - </span>
		<span class="text-gray-300">0{nSteps}</span>
	</div>
	<div class="my-20">
		{#if stepIndex === 0}
			<h2 class="mb-12 text-3xl font-black text-center">The Three Stages of Engaged Learning</h2>
			<p class="text-xl text-center">
				Repeated cycles of curiosity, engagement, and discovery lead to engaged learning.
			</p>
		{:else if stepIndex === 1}
			<h2 class="mb-12 text-3xl font-black text-center">Curiosity</h2>
			<p class="text-xl text-center">
				Curiosity is the first stage of engaged learning. It is the <span class="underline"
					>urge to discover</span
				>.
			</p>
		{:else if stepIndex === 2}
			<h2 class="mb-12 text-3xl font-black text-center">Engagement</h2>
			<p class="text-xl text-center">
				Engagement is the second stage of engaged learning. It is the <span class="underline"
					>application of curiosity</span
				>.
			</p>
		{:else if stepIndex === 3}
			<h2 class="mb-12 text-3xl font-black text-center">Discovery</h2>
			<p class="text-xl text-center">
				Discovery is the third stage of engaged learning. It is the <span class="underline"
					>result of engagement</span
				>.
			</p>
		{/if}
	</div>
	<div class="grid grid-cols-2 gap-2">
		<div class="text-right">
			{#if stepIndex > 0}
				<Button text="Previous" direction="left" onClick={decrementSteps} />
			{/if}
		</div>
		<div>
			<Button text="Next" onClick={incrementSteps} />
		</div>
	</div>
</div>
