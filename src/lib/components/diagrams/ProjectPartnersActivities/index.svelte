<script lang="ts">
	import { onMount, tick } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	import Diagram from './diagram.svelte';
	import Text from './text.svelte';

	type ActiveElement = '' | 'Learners' | 'Teachers' | 'EducationalLeaders' | 'GovernmentAndNGOs';

	export let activeElement:
		| ''
		| 'Learners'
		| 'Teachers'
		| 'EducationalLeaders'
		| 'GovernmentAndNGOs' = '';

	let el: HTMLElement;

	let elements: ActiveElement[] = [
		'',
		'Learners',
		'Teachers',
		'EducationalLeaders',
		'GovernmentAndNGOs'
	];

	let currentElementIdx = 0;
	let msPerSegment = 20000;
	let msInCurrentSegment = 0;

	let intervalPeriod = 300;

	let showProgressBar = true;

	$: activeElement = elements[currentElementIdx];
	$: progressBarWidth = (msPerSegment - msInCurrentSegment) / msPerSegment;

	let intervalId: number;

	const updateProgressBar = () => {
		msInCurrentSegment += intervalPeriod;
		if (msInCurrentSegment > msPerSegment) {
			msInCurrentSegment = 0;
			currentElementIdx = (currentElementIdx + 1) % elements.length;

			showProgressBar = false;
			tick().then(() => {
				showProgressBar = true;
			});
		}
	};

	const startProgressBar = () => {
		return;
		msInCurrentSegment += intervalPeriod;
		clearInterval(intervalId);
		intervalId = setInterval(updateProgressBar, intervalPeriod);
	};

	const onEnterHover = () => {
		// clearInterval(intervalId);
	};

	const onExitHover = () => {
		// startProgressBar();
	};

	const handleSetActiveElement = (e: CustomEvent<{ id: string }>) => {
		const { id } = e.detail;

		currentElementIdx = elements.indexOf(id as ActiveElement);

		msInCurrentSegment = 0;
	};

	onMount(() => {
		// return () => clearInterval(intervalId);
	});
</script>

<IntersectionObserver element={el} on:intersect={startProgressBar}>
	<div class="flex flex-wrap" bind:this={el}>
		<div class="w-full p-4 md:w-1/2">
			<Diagram {activeElement} on:setactivegroup={handleSetActiveElement} />
		</div>
		<div class="w-full p-4 md:w-1/2">
			<Text
				{activeElement}
				progress={progressBarWidth}
				{showProgressBar}
				intervalPeriod={intervalPeriod * 0.96}
				on:hoverentertextbox={onEnterHover}
				on:hoverexittextbox={onExitHover}
				on:setactivegroup={handleSetActiveElement}
			/>
		</div>
	</div>
</IntersectionObserver>
