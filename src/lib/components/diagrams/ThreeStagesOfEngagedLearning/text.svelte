<script lang="ts">
	import { createEventDispatcher } from 'svelte';
  	import { Tooltip } from 'flowbite-svelte';


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
	<div class="mb-6 text-xl text-center">
		<span>0{stepIndex + 1}</span>
		<span class="text-gray-300"> - </span>
		<span class="text-gray-300">0{nSteps}</span>
	</div>
	<div class="mb-6">
		<p class="text-xl text-center">
			{#if stepIndex === 0}
				The <span class="font-black">"Engaged Learning"</span> model of education is based on the
				hypothesis that learning is an
				<span id="ttap" class="underline decoration-dashed cursor-help">active process</span>, in which the
				learner is supported along a path self-driven discovery.
				<br /><br />
				To help us design and evaluate better education practice, we conside the model as a three-stage
				cycle of
				<span class="italic">curiosity</span>, <span class="italic">engagement</span>, and
				<span class="italic">discovery</span>.
				<Tooltip triggeredBy="#ttap" type="dark" class="max-w-md">Explanation of what active process means</Tooltip>
			{:else if stepIndex === 1}
				Before a person can be engaged in active learning, it is vital that they already have an
				innate interest in applying themselves to the task of learning.
				<br /><br />
				Therefore, the first objective of the educator is to stimulate curiosity in the learner, by preparing
				the
				<span id="ttle" class="underline decoration-dashed cursor-help">learning environment</span>, the
				<span id="ttnc" class="underline decoration-dashed cursor-help">narrative context</span>, and the
				<span id="ttrs" class="underline decoration-dashed cursor-help">reward story</span>.
				<Tooltip triggeredBy="#ttle" type="dark" class="max-w-md">Explanation of what learning environment means</Tooltip>
				<Tooltip triggeredBy="#ttnc" type="dark" class="max-w-md">Explanation of what narrative context means</Tooltip>
				<Tooltip triggeredBy="#ttrs" type="dark" class="max-w-md">Explanation of what reward story means</Tooltip>
			{:else if stepIndex === 2}
				Learner engagement is achieved when a person applies their <span
					class="underline decoration-dashed cursor-help">maximum available capacity</span
				>
				to the task of self-development.
				<br /><br />
				The second objective of the educator is to focus and maintain the activity of the learner by
				providing
				<span id="ttlm" class="underline decoration-dashed cursor-help">learning materials</span>,
				<span id="ttdt" class="underline decoration-dashed cursor-help">direct tuition</span>, and
				<span id="ttgt" class="underline decoration-dashed cursor-help">group tasks</span>.
			{:else if stepIndex === 3}
				An effective education experience is one in which the learner has discovered something,
				whether: explicit&mdash;such as when learning a new concept; or implicit&mdash;like when
				consolidating prior understanding.
				<br /><br />
				The third objective of the education is therefore to help the learner self-identify successful
				discovery through
				<span id="ttgp" class="underline decoration-dashed cursor-help">guided practice</span>,
				<span id="ttfa" class="underline decoration-dashed cursor-help">formative assessment</span>, and
				<span id="ttmc" class="underline decoration-dashed cursor-help">meta-cognition coaching</span>.
			{/if}
		</p>
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
