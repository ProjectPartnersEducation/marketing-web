<script lang="ts">
	import { assets } from '$app/paths';

	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';

	import ProjectPartnersActivitiesDiagram from '$lib/components/diagrams/ProjectPartnersActivities/index.svelte';
	import ThreeStagesOfEngagedLearningDiagram from '$lib/components/diagrams/ThreeStagesOfEngagedLearning/index.svelte';
	import FourFormsOfEngagement from '$lib/components/diagrams/FourFormsOfEngagement/index.svelte';
</script>

<svelte:head>
	<title>About Us | Project Partners Education</title>
</svelte:head>

<div class="px-64">
	<h1 class="relative text-center">
		<img src={assets + '/images/class-with-hands-up.jpg'} class="w-full rounded-sm" />

		<h1
			class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white rounded-sm top-2 left-2 text-8xl font-handwriting"
		>
			About
		</h1>
		<h1
			class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white rounded-sm bottom-2 right-2 text-8xl font-handwriting"
		>
			About
		</h1>
	</h1>
</div>
<div class="pt-32 ml-32 border-b border-r mr-80 rounded-br-xl"></div>
<div class="px-32 py-24 mx-32 border-b border-l rounded-bl-xl" id="principles">
	<h2 class="mt-8 mb-8 text-5xl text-left font-handwriting">Our Principles</h2>
	<p class="text-2xl leading-loose text-justify">
		Some preamble text here which introduces us in a personal way.
	</p>
</div>
<div class="px-32 mx-32 border-r py-36">
	<ThreeStagesOfEngagedLearningDiagram />
</div>
<!-- <div class="mx-64">
	<FourFormsOfEngagement />
</div> -->
<div class="grid grid-cols-2 mx-32">
	<div />
	<div class="py-24 border-t border-l" />
</div>
<div class="mx-48 text-center">
	<StrongBox>
		<h3 class="inline-block px-4 py-2 mb-4 text-4xl text-white bg-black font-handwriting">
			The Engaging Education Code
		</h3>
		<p class="text-2xl leading-relaxed text-justify">
			The Engaging Education Code is a blueprint for educators, learners, and all stakeholders in
			education to foster environments where curiosity, creativity, and collaboration flourish. This
			Code is not just a set of ideals; it's a living guide that evolves with our collective
			insights and experiences.
		</p>
		<div class="relative w-full h-full bg-black top-4 left-4"></div>
		<ol
			class="px-12 py-8 mt-16 space-y-4 text-2xl leading-relaxed text-justify text-white list-inside bg-black border-2 border-black rounded-sm max-w"
		>
			<h4 class="text-4xl font-handwriting">The Code</h4>
			<li>
				<span class="font-black">I Ignite Curiosity and Creativity:</span> In my teaching, I blend curiosity
				with creativity, making learning an active, imaginative journey that resonates with every learner.
			</li>
			<li>
				<span class="font-black">I Foster Collaboration and Inclusivity:</span> I build communities in
				education, where collaboration is key and every individual, regardless of background or ability,
				is valued and supported.
			</li>
			<li>
				<span class="font-black">I Connect Learning with Life:</span> My approach ties education to real-world
				scenarios, ensuring that learning is relevant, engaging, and prepares learners for the challenges
				ahead.
			</li>
			<li>
				<span class="font-black">I Nurture Critical and Independent Thinking:</span> I encourage learners
				to question, analyse, and think independently, developing minds that can innovate and solve problems.
			</li>
			<li>
				<span class="font-black">I Embrace and Drive Change:</span> As part of a dynamic community, I
				am committed to continuously evolving educational practices, ensuring they remain effective and
				relevant.
			</li>
		</ol>
	</StrongBox>
</div>
<div class="grid grid-cols-2 mx-32">
	<div class="py-16 border-b border-r"></div>
</div>
<div class="px-32 py-24 mx-32 border-b border-l rounded-bl-xl">
	<h2 class="mt-8 mb-8 text-5xl text-left font-handwriting" id="work">Our Activities</h2>
	<ProjectPartnersActivitiesDiagram />
</div>
<hr class="my-24" />
<div class="grid grid-cols-2 mx-64 gap-x-16">
	<h2 class="col-span-2 mb-8 text-4xl text-center underline font-handwriting decoration-pppink">
		Project Partners for Learners
	</h2>
	<div class="col-span-2 mb-8 text-2xl text-center">
		<div class="inline-block px-8 pt-8 bg-slate-200">
			<h3 class="mb-8 text-center">Developed In Partnership With:</h3>
			<div class="flex flex-row justify-center col-span-2 mb-16">
				<img src={assets + '/images/supporters/unesco-ghana-logo.png'} class="px-4 max-h-16" />
				<img src={assets + '/images/supporters/nacca-logo.png'} class="px-4 max-h-16" />
			</div>
		</div>
	</div>
	<div>
		<h3 class="text-2xl font-black text-center">Where we are today</h3>
		<ul class="py-4 space-y-2 text-xl leading-relaxed text-justify list-disc">
			<li>The third version of our Maths Project Pack is available for free online</li>
			<li>
				Our managed programmes have been completed by more than 300 students in Ghana and the UK
			</li>
			<li>
				Pupils on our managed programmes demonstrated an average of 3 grades of improvement within a
				single school term and increased interest in and enjoyment of school mathematics
			</li>
		</ul>
	</div>
	<div>
		<h3 class="text-2xl font-black text-center">What we're doing next</h3>
		<ul class="py-4 space-y-2 text-xl leading-relaxed text-justify list-disc">
			<li>
				We have partnered with the National Council for Curriculum and Assessment (NaCCA), Ghana to
				achieve accredited status for our Maths Project Packs, which will qualify them for official
				use throughout Ghana.
			</li>
			<li>
				We are developing our next-generation Digital Learning Experience to further support
				self-guided learning, even in low-internet environments
			</li>
		</ul>
	</div>
</div>
<div id="team"></div>
<hr class="my-24" />
<StrongLinks
	link1={{
		imgsrc: `${assets}/images/IMG_0459.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'See our resources',
		href: '/resources',
		hoverColor: 'ppyellow'
	}}
	link2={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'Two children looking at a book',
		text: 'Case Study: Project Partners in Ghana',
		href: '',
		hoverColor: 'ppblue'
	}}
	bigLink={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'Get Involved',
		href: '/get-involved',
		hoverColor: 'ppred'
	}}
/>
