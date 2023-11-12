<script lang="ts">
	import { assets } from '$app/paths';

	import ProjectPartnersActivitiesDiagram from '$lib/components/diagrams/ProjectPartnersActivities/index.svelte';
	import ThreeStagesOfEngagedLearningDiagram from '$lib/components/diagrams/ThreeStagesOfEngagedLearning/index.svelte';
	import FourFormsOfEngagement from '$lib/components/diagrams/FourFormsOfEngagement/index.svelte';
</script>

<svelte:head>
	<title>About Us | Project Partners Education</title>
</svelte:head>

<div class="px-48">
	<h1 class="relative mb-40 text-center">
		<img src={assets + '/images/class-with-hands-up.jpg'} class="w-full" />

		<h1
			class="absolute top-0 left-0 inline-block px-4 py-2 m-1 font-black text-center text-white bg-black border-4 border-white text-8xl font-handwriting"
		>
			About
		</h1>
		<h1
			class="absolute bottom-0 right-0 inline-block px-4 py-2 m-1 font-black text-center text-white bg-black border-4 border-white text-8xl font-handwriting"
		>
			About
		</h1>
	</h1>
</div>
<div id="team"></div>

<div class="mx-64 mt-32" id="principles">
	<h2 class="mt-8 mb-20 text-5xl text-left font-handwriting">Our Principles</h2>
	<p class="mt-8 text-2xl leading-loose">
		Let's start with some important bits. <br />First off, we're a <em>charity</em>. That means that
		we measure our success by the amount of good we do, not the number of academic papers we
		publish.
		<br />We're also a <em>non-profit</em>, which means that everything we can make free for
		everyone, we do.
		<br />We're also a
		<em>non-governmental organisation</em>, which means that we're not affiliated with any
		government, and we're not trying to push any government's agenda. <br />Finally, we will always
		choose <em>experience over theory</em>. While it can be tempting to try and solve problems with
		a new theory, we believe that the best way to solve problems is to learn from people who have
		already solved them.
	</p>
	<ThreeStagesOfEngagedLearningDiagram />
</div>
<hr class="my-24 mx-[25%]" />
<div class="mx-64">
	<FourFormsOfEngagement />
</div>
<hr class="my-24 mx-[25%]" />
<div class="mx-64">
	<h2 class="mt-8 mb-20 text-5xl text-left font-handwriting" id="work">Our Activities</h2>
	<ProjectPartnersActivitiesDiagram />
</div>
<hr class="my-24" />
<div class="grid grid-cols-2 mx-64 gap-x-16">
	<h2 class="col-span-2 mb-8 text-4xl text-center underline font-handwriting decoration-[#cea0b5]">
		Project Partners for Learners
	</h2>
	<div class="col-span-2 mb-8 text-3xl text-center">
		<div class="inline-block px-8 pt-8 bg-slate-200">
			<h3 class="mb-8 text-center">Developed In Partnership With:</h3>
			<div class="flex flex-row justify-center col-span-2 mb-16">
				<img src={assets + '/images/supporters/unesco-ghana-logo.png'} class="px-4 max-h-24" />
				<img src={assets + '/images/supporters/nacca-logo.png'} class="px-4 max-h-24" />
			</div>
		</div>
	</div>
	<div>
		<h3 class="text-3xl font-black text-center">Where we are today</h3>
		<ul class="py-4 text-2xl leading-relaxed list-disc">
			<li class="my-2">The third version of our Maths Project Pack is available for free online</li>
			<li class="my-2">
				Our managed programmes have been completed by more than 300 students in Ghana and the UK
			</li>
			<li class="my-2">
				Pupils on our managed programmes demonstrated an average of 3 grades of improvement within a
				single school term and increased interest in and enjoyment of school mathematics
			</li>
		</ul>
	</div>
	<div>
		<h3 class="text-3xl font-black text-center">What we're doing next</h3>
		<ul class="py-4 text-2xl leading-relaxed list-disc">
			<li class="my-2">
				We have partnered with the National Council for Curriculum and Assessment (NaCCA), Ghana to
				achieve accredited status for our Maths Project Packs, which will qualify them for official
				use throughout Ghana.
			</li>
			<li class="my-2">
				We are developing our next-generation Digital Learning Experience to further support
				self-guided learning, even in low-internet environments
			</li>
		</ul>
	</div>
</div>
<hr class="my-24" />
<div class="grid grid-cols-2 gap-8 mx-64">
	<div class="relative grid grid-cols-2 bg-black border-4 border-black cursor-pointer">
		<div>
			<img src="{assets}/images/IMG_0034.jpg" class="w-full h-auto" />
			<div class="w-1/2 h-auto fade-right"></div>
		</div>
		<div class="flex items-center justify-center px-2">
			<h3 class="text-6xl text-center text-white font-handwriting">See our resources</h3>
		</div>
	</div>
	<div class="relative grid grid-cols-2 bg-black border-4 border-black cursor-pointer">
		<div class="flex items-center justify-center px-2">
			<h3 class="text-4xl text-center text-white font-handwriting">
				Case Study: Project Partners in Ghana
			</h3>
		</div>
		<div class="relative">
			<img src="{assets}/images/IMG_0459.jpg" class="w-full h-auto" />
			<div class="w-1/2 h-auto fade-left"></div>
		</div>
	</div>
</div>

<style>
	.fade-right {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to right, transparent, transparent, rgba(0, 0, 0, 1));
	}
	.fade-left {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to left, transparent, transparent, rgba(0, 0, 0, 1));
	}
</style>
