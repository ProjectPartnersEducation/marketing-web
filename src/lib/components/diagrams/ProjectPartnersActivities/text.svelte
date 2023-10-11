<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import ProgressBar from './progress.svelte';
	import Button from '$lib/components/elements/button.svelte';

	export let activeElement:
		| ''
		| 'Learners'
		| 'Teachers'
		| 'EducationalLeaders'
		| 'GovernmentAndNGOs' = '';

	export let progress: number;
	export let intervalPeriod: number;
	export let showProgressBar: boolean;

	const dispatch = createEventDispatcher();

	const hoverEnterTextBox = (id: string) => {
		if (id !== activeElement) {
			return;
		}

		dispatch('hoverentertextbox');
	};

	const hoverExitTextBox = (id: string) => {
		if (id !== activeElement) {
			return;
		}

		dispatch('hoverexittextbox');
	};

	const setActiveGroup = (id: string) => {
		dispatch('setactivegroup', { id });
	};
</script>

<div class="grid grid-cols-[4px,98%] gap-4 px-4">
	<div>
		{#if showProgressBar && activeElement === ''}
			<ProgressBar {progress} {intervalPeriod} />
		{/if}
	</div>
	<div
		class="px-5 py-3 rounded-md"
		on:mouseenter={() => hoverEnterTextBox('')}
		on:mouseleave={() => hoverExitTextBox('')}
	>
		<h2
			class="mb-6 text-2xl cursor-pointer"
			class:font-black={activeElement === ''}
			on:click={() => {
				setActiveGroup('');
			}}
			on:keypress={() => {
				setActiveGroup('');
			}}
		>
			We're engaged at every level
		</h2>
		{#if activeElement === ''}
			<div transition:slide>
				<p>As a charity, we work at every level</p>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'Learners'}
			<ProgressBar {progress} {intervalPeriod} />
		{/if}
	</div>
	<div
		class="px-5 py-3 rounded-md"
		on:mouseenter={() => hoverEnterTextBox('Learners')}
		on:mouseleave={() => hoverExitTextBox('Learners')}
	>
		<h2
			class="mb-6 text-2xl cursor-pointer"
			class:font-black={activeElement === 'Learners'}
			on:click={() => {
				setActiveGroup('Learners');
			}}
			on:keypress={() => {
				setActiveGroup('Learners');
			}}
		>
			We develop learning materials
		</h2>
		{#if activeElement === 'Learners'}
			<div transition:slide>
				<p>Our learning materials are good</p>
				<div class="mt-6 text-center">
					<Button text="Try our learning materials" href="/learning-materials" />
				</div>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'Teachers'}
			<ProgressBar {progress} {intervalPeriod} />
		{/if}
	</div>
	<div
		class="px-5 py-3 rounded-md"
		on:mouseenter={() => hoverEnterTextBox('Teachers')}
		on:mouseleave={() => hoverExitTextBox('Teachers')}
	>
		<h2
			class="mb-6 text-2xl cursor-pointer"
			class:font-black={activeElement === 'Teachers'}
			on:click={() => {
				setActiveGroup('Teachers');
			}}
			on:keypress={() => {
				setActiveGroup('Teachers');
			}}
		>
			We support teachers' development
		</h2>
		{#if activeElement === 'Teachers'}
			<div transition:slide>
				<p>We do teacher training</p>
				<div class="mt-6 text-center">
					<Button text="Find out about our teacher training" href="/learning-materials" />
				</div>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'EducationalLeaders'}
			<ProgressBar {progress} {intervalPeriod} />
		{/if}
	</div>
	<div
		class="px-5 py-3 rounded-md"
		on:mouseenter={() => hoverEnterTextBox('EducationalLeaders')}
		on:mouseleave={() => hoverExitTextBox('EducationalLeaders')}
	>
		<h2
			class="mb-6 text-2xl cursor-pointer"
			class:font-black={activeElement === 'EducationalLeaders'}
			on:click={() => {
				setActiveGroup('EducationalLeaders');
			}}
			on:keypress={() => {
				setActiveGroup('EducationalLeaders');
			}}
		>
			We connect education leaders globally
		</h2>
		{#if activeElement === 'EducationalLeaders'}
			<div transition:slide>
				<p>Our community for educational leaders is also good</p>
				<div class="mt-6 text-center">
					<Button text="Join the community" href="/learning-materials" />
				</div>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'GovernmentAndNGOs'}
			<ProgressBar {progress} {intervalPeriod} />
		{/if}
	</div>
	<div
		class="px-5 py-3 rounded-md"
		on:mouseenter={() => hoverEnterTextBox('GovernmentAndNGOs')}
		on:mouseleave={() => hoverExitTextBox('GovernmentAndNGOs')}
	>
		<h2
			class="mb-6 text-2xl cursor-pointer"
			class:font-black={activeElement === 'GovernmentAndNGOs'}
			on:click={() => {
				setActiveGroup('GovernmentAndNGOs');
			}}
			on:keypress={() => {
				setActiveGroup('GovernmentAndNGOs');
			}}
		>
			We partner with government and NGOs
		</h2>
		{#if activeElement === 'GovernmentAndNGOs'}
			<div transition:slide>
				<p>We collaborate at the highest levels of government to make stuff happen</p>
				<div class="mt-6 text-center">
					<Button text="Read about our collaboration with UNESCO" href="/learning-materials" />
				</div>
			</div>
		{/if}
	</div>
</div>
