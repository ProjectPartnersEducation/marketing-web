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
	<div class="mb-6 text-2xl text-center">
		<span>0{stepIndex + 1}</span>
		<span class="text-gray-300"> - </span>
		<span class="text-gray-300">0{nSteps}</span>
	</div>
	<div class="mb-6">
		<p class="text-2xl leading-loose text-justify">
			{#if stepIndex === 0}
				Our <span class="font-black">Engaged Learning Model</span> of education is based on the
				hypothesis that learning is an active process, in which the learner is supported along a
				path of self-driven discovery.
				<br /><br />
				To help us design and evaluate better education practice, we conside the model as a three-stage
				cycle of
				<span class="italic">curiosity</span>, <span class="italic">engagement</span>, and
				<span class="italic">discovery</span>.
			{:else if stepIndex === 1}
				Before a person can be engaged in <span
					id="ttap"
					class="underline decoration-dashed cursor-help">active learning</span
				>, it is vital that they already have an innate interest in applying themselves to the task
				of learning.
				<br /><br />
				Therefore, the first objective of the educator is to stimulate curiosity in the learner, by preparing
				the
				<span id="ttle" class="underline decoration-dashed cursor-help">learning environment</span>,
				the
				<span id="ttnc" class="underline decoration-dashed cursor-help">narrative context</span>,
				and the
				<span id="ttrs" class="underline decoration-dashed cursor-help">reward story</span>.
				<Tooltip triggeredBy="#ttap" type="dark" class="max-w-md"
					>A dynamic method of learning where students actively participate and engage with the
					material, as opposed to passively receiving information</Tooltip
				>
				<Tooltip triggeredBy="#ttle" type="dark" class="max-w-md"
					>A space designed to stimulate mindful and reflective responses to a learning task</Tooltip
				>
				<Tooltip triggeredBy="#ttnc" type="dark" class="max-w-md"
					>The use of storytelling or situational scenarios to provide a relatable and immersive
					backdrop for learning activities</Tooltip
				>
				<Tooltip triggeredBy="#ttrs" type="dark" class="max-w-md"
					>An element in a narrative designed to motivate learners by demonstrating how their
					efforts lead to meaningful outcomes, reinforcing their belief in the value of hard work
					and persistence</Tooltip
				>
			{:else if stepIndex === 2}
				Learner engagement is achieved when a person applies their <span
					id="ttmac"
					class="underline decoration-dashed cursor-help">maximum available capacity</span
				>
				to the task of self-development.
				<br /><br />
				The second objective of the educator is to focus and maintain the activity of the learner by
				providing
				<span id="ttlm" class="underline decoration-dashed cursor-help">learning materials</span>,
				<span id="ttdt" class="underline decoration-dashed cursor-help">direct tuition</span>, and
				<span id="ttgt" class="underline decoration-dashed cursor-help">collaboration tasks</span>.
				<Tooltip triggeredBy="#ttmac" type="dark" class="max-w-md"
					>The concept that each learner, at any given time, has a varying capacity for engagement
					and learning, influenced by factors such as mood, recent experiences, and individual
					needs, including special educational requirements</Tooltip
				>
				<Tooltip triggeredBy="#ttlm" type="dark" class="max-w-md"
					>A broad range of resources used in teaching and learning, which can include anything from
					simple physical objects to interactive digital tools, tailored to maintain student
					engagement and accommodate diverse classroom environments</Tooltip
				>
				<Tooltip triggeredBy="#ttdt" type="dark" class="max-w-md"
					>A teaching method where instructors directly convey knowledge or skills to students,
					typically through explanations or demonstrations</Tooltip
				>
				<Tooltip triggeredBy="#ttgt" type="dark" class="max-w-md"
					>Learning activities designed for groups of students to work together, encouraging
					teamwork, communication, and shared problem-solving</Tooltip
				>
			{:else if stepIndex === 3}
				An effective education experience is one in which the learner has discovered something,
				whether: explicit&mdash;such as when learning a new concept; or implicit&mdash;like when
				consolidating prior understanding.
				<br /><br />
				The third objective of the education is therefore to help the learner self-identify successful
				discovery through
				<span id="ttgp" class="underline decoration-dashed cursor-help">guided practice</span>,
				<span id="ttfa" class="underline decoration-dashed cursor-help">formative assessment</span>,
				and
				<span id="ttmc" class="underline decoration-dashed cursor-help"
					>meta-cognition coaching</span
				>.
				<Tooltip triggeredBy="#ttgp" type="dark" class="max-w-md"
					>An instructional approach where teachers provide direction and feedback as students
					practice new skills or concepts, gradually moving towards independent mastery</Tooltip
				>
				<Tooltip triggeredBy="#ttfa" type="dark" class="max-w-md"
					>Continuous evaluation methods used to monitor student learning progress and provide
					ongoing feedback, rather than to assign grades</Tooltip
				>
				<Tooltip triggeredBy="#ttmc" type="dark" class="max-w-md"
					>Teaching strategies aimed at helping students understand and regulate their own learning
					processes, enhancing their self-awareness and learning efficiency</Tooltip
				>
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
