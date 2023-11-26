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

<div class="grid items-stretch gap-2" class:grid-cols-[4px,98%]={showProgressBar}>
	<div class="w-full">
		{#if showProgressBar && activeElement === ''}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-black" />
		{/if}
	</div>
	<div
		class="w-full px-4 py-3 border-black rounded-sm"
		on:mouseover={() => hoverEnterTextBox('')}
		on:focus={() => hoverEnterTextBox('')}
		on:mouseleave={() => hoverExitTextBox('')}
		class:bg-white={activeElement === ''}
		class:border-4={activeElement === ''}
		class:bg-black={activeElement !== ''}
		class:text-white={activeElement !== ''}
		class:cursor-pointer={activeElement !== ''}
		on:click={() => {
			setActiveGroup('');
		}}
		on:keypress={() => {
			setActiveGroup('');
		}}
	>
		<h2 class="my-3 text-2xl font-black">We're engaged at every level</h2>
		{#if activeElement === ''}
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					As a charity, we work at every level of the education system to ensure that we engage as
					many people as possible in our mission to improve education.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					This allows us to have the greatest impact on the lives of learners, teachers, and
					educational leaders. We also work with governments and NGOs to ensure that our work is
					sustainable and scalable.
				</p>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'Learners'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-pporange" />
		{/if}
	</div>
	<div
		class="px-5 py-3 border-black rounded-sm"
		on:mouseover={() => hoverEnterTextBox('Learners')}
		on:focus={() => hoverEnterTextBox('Learners')}
		on:mouseleave={() => hoverExitTextBox('Learners')}
		class:bg-white={activeElement === 'Learners'}
		class:border-4={activeElement === 'Learners'}
		class:bg-black={activeElement !== 'Learners'}
		class:text-white={activeElement !== 'Learners'}
		class:cursor-pointer={activeElement !== 'Learners'}
		on:click={() => {
			setActiveGroup('Learners');
		}}
		on:keypress={() => {
			setActiveGroup('Learners');
		}}
	>
		<h2
			class="my-3 text-2xl font-black cursor-pointer"
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
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					We develop learning materials for learners of all ages. Central to our work with learners
					are our Project Packs, with our flagship Maths programme our current focus.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					All of our learning materials are free to download and use via our website or on WhatsApp.
					Furthermore, we are currently working on a new online platform to make our learning
					materials even more accessible and engaging.
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button text="Go to our Learning Portal" href="/learning-materials" color="pporange" />
				</div>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'Teachers'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-ppyellow" />
		{/if}
	</div>
	<div
		class="px-5 py-3 border-black rounded-sm"
		on:mouseover={() => hoverEnterTextBox('Teachers')}
		on:focus={() => hoverEnterTextBox('Teachers')}
		on:mouseleave={() => hoverExitTextBox('Teachers')}
		class:bg-white={activeElement === 'Teachers'}
		class:border-4={activeElement === 'Teachers'}
		class:bg-black={activeElement !== 'Teachers'}
		class:text-white={activeElement !== 'Teachers'}
		class:cursor-pointer={activeElement !== 'Teachers'}
		on:click={() => {
			setActiveGroup('Teachers');
		}}
		on:keypress={() => {
			setActiveGroup('Teachers');
		}}
	>
		<h2
			class="my-3 text-2xl font-black cursor-pointer"
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
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					We support teachers' development through our learning materials and teacher training
					programmes. Our teacher training programmes are designed to be as accessible as possible
					and are free to attend.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					We also provide teachers with a range of resources to support their professional
					development, including our Teacher Toolkit and our Teacher Community.
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button
						text="Find out about our teacher training"
						href="/learning-materials"
						color="ppyellow"
					/>
				</div>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'EducationalLeaders'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-ppgreen" />
		{/if}
	</div>
	<div
		class="px-5 py-3 border-black rounded-sm"
		on:mouseover={() => hoverEnterTextBox('EducationalLeaders')}
		on:focus={() => hoverEnterTextBox('EducationalLeaders')}
		on:mouseleave={() => hoverExitTextBox('EducationalLeaders')}
		class:bg-white={activeElement === 'EducationalLeaders'}
		class:border-4={activeElement === 'EducationalLeaders'}
		class:bg-black={activeElement !== 'EducationalLeaders'}
		class:text-white={activeElement !== 'EducationalLeaders'}
		class:cursor-pointer={activeElement !== 'EducationalLeaders'}
		on:click={() => {
			setActiveGroup('EducationalLeaders');
		}}
		on:keypress={() => {
			setActiveGroup('EducationalLeaders');
		}}
	>
		<h2
			class="my-3 text-2xl font-black cursor-pointer"
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
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					Our community for educational leaders is also good
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button text="Join our leaders' community" href="/learning-materials" color="ppgreen" />
				</div>
			</div>
		{/if}
	</div>

	<div>
		{#if showProgressBar && activeElement === 'GovernmentAndNGOs'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-ppblue" />
		{/if}
	</div>
	<div
		class="px-5 py-3 border-black rounded-sm"
		on:mouseover={() => hoverEnterTextBox('GovernmentAndNGOs')}
		on:focus={() => hoverEnterTextBox('GovernmentAndNGOs')}
		on:mouseleave={() => hoverExitTextBox('GovernmentAndNGOs')}
		class:bg-white={activeElement === 'GovernmentAndNGOs'}
		class:border-4={activeElement === 'GovernmentAndNGOs'}
		class:bg-black={activeElement !== 'GovernmentAndNGOs'}
		class:text-white={activeElement !== 'GovernmentAndNGOs'}
		class:cursor-pointer={activeElement !== 'GovernmentAndNGOs'}
		on:click={() => {
			setActiveGroup('GovernmentAndNGOs');
		}}
		on:keypress={() => {
			setActiveGroup('GovernmentAndNGOs');
		}}
	>
		<h2
			class="my-3 text-2xl font-black cursor-pointer"
			on:click={() => {
				setActiveGroup('GovernmentAndNGOs');
			}}
			on:keypress={() => {
				setActiveGroup('GovernmentAndNGOs');
			}}
		>
			We advocate for better education policy
		</h2>
		{#if activeElement === 'GovernmentAndNGOs'}
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					We collaborate at the highest levels of government to make stuff happen
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button
						text="Read about our collaboration with UNESCO"
						href="/learning-materials"
						color="ppblue"
					/>
				</div>
			</div>
		{/if}
	</div>
</div>
