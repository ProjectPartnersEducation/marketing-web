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
	<button
		class="w-full px-4 py-3 border-4 border-black rounded-sm"
		aria-label="Engage at every level"
		on:mouseover={() => hoverEnterTextBox('')}
		on:focus={() => hoverEnterTextBox('')}
		on:mouseleave={() => hoverExitTextBox('')}
		class:cursor-pointer={activeElement !== ''}
		on:click={() => {
			setActiveGroup('');
		}}
		on:keypress={() => {
			setActiveGroup('');
		}}
		tabindex="0"
	>
		<h2 class="my-3 text-2xl font-black">We're engaged at every level</h2>
		{#if activeElement === ''}
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					We operate across the education spectrum, focusing on improving education by engaging
					learners, educators, and leaders.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					We strive for impactful, sustainable change, collaborating with educational institutions,
					governments, and NGOs.
				</p>
			</div>
		{/if}
	</button>

	<div>
		{#if showProgressBar && activeElement === 'Learners'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-pporange" />
		{/if}
	</div>
	<button
		class="px-5 py-3 border-4 border-black rounded-sm"
		on:mouseover={() => hoverEnterTextBox('Learners')}
		on:focus={() => hoverEnterTextBox('Learners')}
		on:mouseleave={() => hoverExitTextBox('Learners')}
		class:cursor-pointer={activeElement !== 'Learners'}
		on:click={() => {
			setActiveGroup('Learners');
		}}
		on:keypress={() => {
			setActiveGroup('Learners');
		}}
		tabindex="0"
	>
		<h2 class="my-3 text-2xl font-black cursor-pointer">We develop learning materials</h2>
		{#if activeElement === 'Learners'}
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					Our learning materials, including the flagship Project:Maths project packs, are designed
					for learners of all ages. These resources foster active, creative learning experiences.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					All of our materials are accessible for free download on our website, forever.
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button text="Go to our Learning Portal" href="/resources#learners" color="pporange" />
				</div>
			</div>
		{/if}
	</button>

	<div>
		{#if showProgressBar && activeElement === 'Teachers'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-ppyellow" />
		{/if}
	</div>
	<button
		class="px-5 py-3 border-4 border-black rounded-sm"
		aria-label="Support for teachers"
		on:mouseover={() => hoverEnterTextBox('Teachers')}
		on:focus={() => hoverEnterTextBox('Teachers')}
		on:mouseleave={() => hoverExitTextBox('Teachers')}
		class:cursor-pointer={activeElement !== 'Teachers'}
		on:click={() => {
			setActiveGroup('Teachers');
		}}
		on:keypress={() => {
			setActiveGroup('Teachers');
		}}
		tabindex="0"
	>
		<h2 class="my-3 text-2xl font-black cursor-pointer">We support teachers' development</h2>
		{#if activeElement === 'Teachers'}
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					Our teacher support extends beyond learning materials to include accessible, free training
					programmes, enhancing pedagogical skills and methodologies.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					We also aim to provide all the resources needed to foster a collaborative and
					growth-oriented professional environment.
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button
						text="Find out about our teacher training"
						href="/resources#teachers"
						color="ppyellow"
					/>
				</div>
			</div>
		{/if}
	</button>

	<div>
		{#if showProgressBar && activeElement === 'EducationalLeaders'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-ppgreen" />
		{/if}
	</div>
	<button
		class="px-5 py-3 border-4 border-black rounded-sm"
		aria-label="Connecting education leaders"
		on:mouseover={() => hoverEnterTextBox('EducationalLeaders')}
		on:focus={() => hoverEnterTextBox('EducationalLeaders')}
		on:mouseleave={() => hoverExitTextBox('EducationalLeaders')}
		class:cursor-pointer={activeElement !== 'EducationalLeaders'}
		on:click={() => {
			setActiveGroup('EducationalLeaders');
		}}
		on:keypress={() => {
			setActiveGroup('EducationalLeaders');
		}}
		tabindex="0"
	>
		<h2 class="my-3 text-2xl font-black cursor-pointer">We connect education leaders globally</h2>
		{#if activeElement === 'EducationalLeaders'}
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					The Engaging Educators Network is our initiative to connect education leaders worldwide,
					offering an open platform for sharing innovative practices and fostering professional
					growth.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					Within this network, leaders in education come together to discuss challenges, share
					successes, and collaborate on projects that further our mission of engaging and effective
					education.
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button text="Join our leaders' community" href="/resources#leaders" color="ppgreen" />
				</div>
			</div>
		{/if}
	</button>

	<div>
		{#if showProgressBar && activeElement === 'GovernmentAndNGOs'}
			<ProgressBar {progress} {intervalPeriod} bgColor="bg-ppblue" />
		{/if}
	</div>
	<button
		class="px-5 py-3 border-4 border-black rounded-sm"
		aria-label="Advocacy for education policy"
		on:mouseover={() => hoverEnterTextBox('GovernmentAndNGOs')}
		on:focus={() => hoverEnterTextBox('GovernmentAndNGOs')}
		on:mouseleave={() => hoverExitTextBox('GovernmentAndNGOs')}
		class:cursor-pointer={activeElement !== 'GovernmentAndNGOs'}
		on:click={() => {
			setActiveGroup('GovernmentAndNGOs');
		}}
		on:keypress={() => {
			setActiveGroup('GovernmentAndNGOs');
		}}
		tabindex="0"
	>
		<h2 class="my-3 text-2xl font-black cursor-pointer">We advocate for better education policy</h2>
		{#if activeElement === 'GovernmentAndNGOs'}
			<div transition:slide class="mb-3 space-y-4">
				<p class="text-xl leading-relaxed text-justify">
					We collaborate at the governmental level with organisations like UNESCO and the Ghanaian
					Education Service (GES) to enhance the quality of maths teaching wherever we operate.
				</p>
				<p class="text-xl leading-relaxed text-justify">
					Our advocacy focuses on shaping policies and initiatives that align with our vision of
					engaging, creative, and practical education, ensuring long-term, sustainable impact in the
					educational sector.
				</p>
				<div class="text-xl leading-relaxed text-center">
					<Button
						text="Read about our collaboration with UNESCO"
						href="/about/ghana-case-study"
						color="ppblue"
					/>
				</div>
			</div>
		{/if}
	</button>
</div>
