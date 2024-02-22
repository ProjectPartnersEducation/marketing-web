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
	export let isDynamic: boolean = true;

	let el: HTMLElement;

	let elements: ActiveElement[] = [
		'',
		'Learners',
		'Teachers',
		'EducationalLeaders',
		'GovernmentAndNGOs'
	];

	let currentElementIdx = 0;
	let msPerSegment = 40000;
	let msInCurrentSegment = 0;

	let intervalPeriod = 300;

	let showProgressBar = false;
	let progressBarIsActive = false;

	let windowWidth: number;

	$: progressBarIsActive = windowWidth >= 1280 && isDynamic;
	$: showProgressBar = windowWidth >= 1280;

	$: activeElement = elements[currentElementIdx];
	$: progressBarWidth = (msPerSegment - msInCurrentSegment) / msPerSegment;

	let intervalId: number;

	const updateProgressBar = () => {
		if (!progressBarIsActive) {
			return;
		}

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
		if (!progressBarIsActive) {
			return;
		}

		msInCurrentSegment += intervalPeriod;
		clearInterval(intervalId);
		intervalId = setInterval(updateProgressBar, intervalPeriod);
	};

	const onEnterHover = () => {
		clearInterval(intervalId);
	};

	const onExitHover = () => {
		startProgressBar();
	};

	const handleSetActiveElement = (e: CustomEvent<{ id: string }>) => {
		const { id } = e.detail;

		currentElementIdx = elements.indexOf(id as ActiveElement);

		msInCurrentSegment = 0;
	};

	onMount(() => {
		return () => clearInterval(intervalId);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<IntersectionObserver element={el} on:intersect={startProgressBar}>
	<div class="flex flex-wrap" bind:this={el}>
		<div class="order-2 w-full xl:pr-4 xl:w-1/2 xl:order-1">
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
		<div class="order-1 w-full mb-8 xl:pl-4 xl:w-1/2 xl:order-2">
			<Diagram {activeElement} on:setactivegroup={handleSetActiveElement} />
		</div>
	</div>
</IntersectionObserver>
