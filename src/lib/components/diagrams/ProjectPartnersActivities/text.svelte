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
		on:mouseover={() => hoverEnterTextBox('')}
		on:focus={() => hoverEnterTextBox('')}
		on:mouseleave={() => hoverExitTextBox('')}
		class:bg-slate-300={activeElement === ''}
		class:bg-slate-200={activeElement !== ''}
		class:cursor-pointer={activeElement !== ''}
		on:click={() => {
			setActiveGroup('');
		}}
		on:keypress={() => {
			setActiveGroup('');
		}}
	>
		<h2 class="my-3 text-2xl" class:font-black={activeElement === ''}>
			We're engaged at every level
		</h2>
		{#if activeElement === ''}
			<div transition:slide>
				<p>
					As a charity, we work at every level of the education system to ensure that we engage as
					many people as possible in our mission to improve education.
				</p>
				<p class="mt-4">
					This allows us to have the greatest impact on the lives of learners, teachers, and
					educational leaders. We also work with governments and NGOs to ensure that our work is
					sustainable and scalable.
				</p>
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
		on:mouseover={() => hoverEnterTextBox('Learners')}
		on:focus={() => hoverEnterTextBox('Learners')}
		on:mouseleave={() => hoverExitTextBox('Learners')}
		class:bg-slate-300={activeElement === 'Learners'}
		class:bg-slate-200={activeElement !== 'Learners'}
		class:cursor-pointer={activeElement !== 'Learners'}
		on:click={() => {
			setActiveGroup('Learners');
		}}
		on:keypress={() => {
			setActiveGroup('Learners');
		}}
	>
		<h2
			class="my-3 text-2xl cursor-pointer"
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
				<p>
					We develop learning materials for learners of all ages. Central to our work with learners
					are our Project Packs, with our flagship Maths programme our current focus.
				</p>
				<p class="mt-4">
					All of our learning materials are free to download and use via our website or on WhatsApp.
					Furthermore, we are currently working on a new online platform to make our learning
					materials even more accessible and engaging.
				</p>
				<div class="mt-6 text-center">
					<Button text="Go to our Learning Portal" href="/learning-materials" />
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
		on:mouseover={() => hoverEnterTextBox('Teachers')}
		on:focus={() => hoverEnterTextBox('Teachers')}
		on:mouseleave={() => hoverExitTextBox('Teachers')}
		class:bg-slate-300={activeElement === 'Teachers'}
		class:bg-slate-200={activeElement !== 'Teachers'}
		class:cursor-pointer={activeElement !== 'Teachers'}
		on:click={() => {
			setActiveGroup('Teachers');
		}}
		on:keypress={() => {
			setActiveGroup('Teachers');
		}}
	>
		<h2
			class="my-3 text-2xl cursor-pointer"
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
				<p>
					We support teachers' development through our learning materials and teacher training
					programmes. Our teacher training programmes are designed to be as accessible as possible
					and are free to attend.
				</p>
				<p class="mt-4">
					We also provide teachers with a range of resources to support their professional
					development, including our Teacher Toolkit and our Teacher Community.
				</p>
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
		on:mouseover={() => hoverEnterTextBox('EducationalLeaders')}
		on:focus={() => hoverEnterTextBox('EducationalLeaders')}
		on:mouseleave={() => hoverExitTextBox('EducationalLeaders')}
		class:bg-slate-300={activeElement === 'EducationalLeaders'}
		class:bg-slate-200={activeElement !== 'EducationalLeaders'}
		class:cursor-pointer={activeElement !== 'EducationalLeaders'}
		on:click={() => {
			setActiveGroup('EducationalLeaders');
		}}
		on:keypress={() => {
			setActiveGroup('EducationalLeaders');
		}}
	>
		<h2
			class="my-3 text-2xl cursor-pointer"
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
					<Button text="Join our leaders' community" href="/learning-materials" />
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
		on:mouseover={() => hoverEnterTextBox('GovernmentAndNGOs')}
		on:focus={() => hoverEnterTextBox('GovernmentAndNGOs')}
		on:mouseleave={() => hoverExitTextBox('GovernmentAndNGOs')}
		class:bg-slate-300={activeElement === 'GovernmentAndNGOs'}
		class:bg-slate-200={activeElement !== 'GovernmentAndNGOs'}
		class:cursor-pointer={activeElement !== 'GovernmentAndNGOs'}
		on:click={() => {
			setActiveGroup('GovernmentAndNGOs');
		}}
		on:keypress={() => {
			setActiveGroup('GovernmentAndNGOs');
		}}
	>
		<h2
			class="my-3 text-2xl cursor-pointer"
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
