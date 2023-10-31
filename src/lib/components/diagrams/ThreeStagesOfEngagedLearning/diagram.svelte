<script lang="ts">
	import { onMount } from 'svelte';

	export let stepIndex: number = 0;

	let svg: SVGElement;
	let visible: boolean = true;

	let arrowElements: Map<string, SVGElement>;
	let textElements: Map<string, SVGElement>;

	const arrowOpacitySequence = [
		{
			CtoE: '1',
			EtoD: '1',
			DtoC: '1'
		},
		{
			CtoE: '0',
			EtoD: '0',
			DtoC: '0'
		},
		{
			CtoE: '1',
			EtoD: '0',
			DtoC: '0'
		},
		{
			CtoE: '0.4',
			EtoD: '1',
			DtoC: '0'
		}
	];
	const textOpacitySequence = [
		{
			Curiosity: '1',
			Engagement: '1',
			Discovery: '1'
		},
		{
			Curiosity: '1',
			Engagement: '0',
			Discovery: '0'
		},
		{
			Curiosity: '0.4',
			Engagement: '1',
			Discovery: '0'
		},
		{
			Curiosity: '0.4',
			Engagement: '0.4',
			Discovery: '1'
		}
	];

	const setStep = (step: number) => {
		if (!arrowElements || !textElements) {
			return;
		}

		if (step < 0 || step >= arrowOpacitySequence.length) {
			return;
		}

		arrowElements.forEach((el, id) => {
			el.style.opacity = arrowOpacitySequence[step][id];
		});

		textElements.forEach((el, id) => {
			el.style.opacity = textOpacitySequence[step][id];
		});
	};

	$: setStep(stepIndex);

	onMount(() => {
		arrowElements = new Map(
			['CtoE', 'EtoD', 'DtoC'].map((id) => [id, svg.querySelector(`#${id}`) as SVGElement])
		);

		textElements = new Map(
			['Curiosity', 'Engagement', 'Discovery'].map((id) => [
				id,
				svg.querySelector(`#${id}`) as SVGElement
			])
		);

		arrowElements.forEach((el, id) => {
			el.setAttribute('style', 'transition: opacity 0.7s ease-in;');
		});

		textElements.forEach((el, id) => {
			el.setAttribute('style', 'transition: opacity 0.3s ease-in;');
		});

		setStep(stepIndex);
	});
</script>

{#if visible}
	<svg inline-src="ThreeStagesOfEngagedLearning" bind:this={svg} />
{/if}
