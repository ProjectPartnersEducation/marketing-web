<script lang="ts">
	import { assets } from '$app/paths';

	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
	import BigTopImage from '$lib/components/elements/bigtopimage/index.svelte';

	import ProjectPartnersActivitiesDiagram from '$lib/components/diagrams/ProjectPartnersActivities/index.svelte';
	import ThreeStagesOfEngagedLearningDiagram from '$lib/components/diagrams/ThreeStagesOfEngagedLearning/index.svelte';
	import Button from '$lib/components/elements/button.svelte';

	const teamMembers = [
		{ src: 'ts.jpg', name: 'Tom Shering', role: 'CEO' },
		{ src: 'jj.jpg', name: 'Jonny Jackson', role: 'Chair, Trustee' },
		{ src: 'su.jpg', name: 'Saiyara Uddin', role: 'Treasurer, Trustee' },
		{ src: 'sm.jpg', name: 'Sophie Martin', role: 'Secretary, Trustee' },
		{ src: 'rm.jpg', name: 'Renette Mbroh', role: 'Trustee' },
		{ src: 'sd.jpg', name: 'Suhaida D', role: 'Advisor, Operations' },
		{ src: 'nw.jpg', name: 'Nicola Whelan', role: 'Advisor, Community' },
		{ src: 'tb.png', name: 'Tim B', role: 'Advisor, Creative' }
	];
</script>

<svelte:head>
	<title>About Us | Project Partners Education</title>
	<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
	<script>
		Weglot.initialize({
			api_key: 'wg_64c47c59a31aa6dfcc0b6505d462c91f0'
		});
	</script>
</svelte:head>

<BigTopImage imgSrc={assets + '/images/class-with-hands-up.png'} text="About" />
<div class="hidden pt-32 ml-32 border-b border-r mr-80 rounded-br-xl lg:block"></div>
<div
	class="px-6 py-24 lg:px-32 lg:mx-32 md:px-24 sm:px-12 lg:border-b lg:border-l rounded-bl-xl"
	id="principles"
>
	<h3 class="mt-8 mb-2 text-xl text-left font-handwriting text-ppblue">What we say</h3>
	<h2 class="mb-8 text-5xl font-black text-left font-handwriting">Our Principles</h2>
	<p class="text-2xl leading-loose text-justify">
		We believe that education allows people to develop a fulfilled and resilient life. Our work
		focuses on engaging school students with their learning so that they are ready for a lifetime of
		curiosity and continuous development. In our view, learners showing interest and engagement with
		the world around them is therefore the most important indicator of a successful learning
		environment.
	</p>
	<p class="mt-8 text-2xl leading-loose text-justify">
		To make this happen, we focus on creating innovative learning materials that not only inspire
		students but also align with educational standards globally. We are also deeply committed to
		empowering teachers with the skills, resources, and workplace support structures needed to
		foster engaging and effective learning environments. In essence, our objective is to create an
		ecosystem where continuous learning and engagement are at the heart of education for all.
	</p>
</div>
<div class="px-6 md:px-24 sm:px-12 lg:px-32 lg:mx-32 lg:border-r py-36">
	<ThreeStagesOfEngagedLearningDiagram />
</div>
<!-- <div class="mx-64">
	<FourFormsOfEngagement />
</div> -->
<div class="hidden grid-cols-2 mx-32 lg:grid">
	<div />
	<div class="py-24 border-t border-l" />
</div>
<div class="text-center lg:mx-32 md:mx-16 sm:mx-8 xl:mx-48">
	<StrongBox>
		<h3
			class="inline-block px-4 py-2 mb-8 text-4xl font-black text-white bg-black rounded-sm font-handwriting"
		>
			The Engaging Education Code
		</h3>
		<p class="text-2xl leading-relaxed text-left sm:text-justify">
			The Engaging Education Code represents our ongoing journey to define and refine our
			educational beliefs. It's a flexible, evolving framework, reflective of our commitment to
			open-mindedness and adaptability in the face of new evidence and perspectives.
		</p>
		<div class="relative w-full h-full bg-black top-4 left-4"></div>
		<ol
			class="pl-8 my-8 space-y-4 text-2xl leading-relaxed text-left list-inside border-l-8 border-black rounded-sm sm:text-justify max-w"
		>
			<li>
				<span class="font-black">Ignite Curiosity and Creativity:</span> I integrate curiosity and creativity
				in my teaching, transforming learning into an active, imaginative journey accessible to all learners.
			</li>
			<li>
				<span class="font-black">Foster Collaboration and Inclusivity:</span> I cultivate educational
				communities where collaboration is essential, and every person is included and valued, regardless
				of their background or abilities.
			</li>
			<li>
				<span class="font-black">Connect Learning with Life:</span> I ensure that education is linked
				to real-life contexts, making learning pertinent and equipping learners for future challenges.
			</li>
			<li>
				<span class="font-black">Nurture Critical and Independent Thinking:</span> I inspire learners
				to question, analyse, and think for themselves, fostering minds capable of innovation and problem-solving.
			</li>
			<li>
				<span class="font-black">Embrace and Drive Change:</span> As a proactive member of an evolving
				educational community, I am dedicated to continually enhancing and updating teaching practices
				to keep them effective and relevant.
			</li>
		</ol>
		<p class="text-2xl leading-relaxed text-left sm:text-justify">
			This Code guides how we operate as a charity and approach education, envisioned to evolve
			democratically through our Engaging Educators Network, a collaborative platform for educators,
			learners, and leaders. While not binding, it represents the ethos we strive to develop and
			embody in our educational practices.
		</p>
		<div class="mt-8">
			<Button
				href="https://projectpartners.thinkific.com/products/communities/engaging-educators-network"
				target="_blank"
				color="ppyellow"
				text="Join our leaders' community"
			/>
		</div>
	</StrongBox>
</div>
<div class="hidden grid-cols-2 mx-32 lg:grid">
	<div class="py-16 border-b border-r"></div>
</div>
<div class="px-2 py-32 lg:px-32 lg:mx-32 md:px-24 sm:px-12 lg:border-b lg:border-l rounded-bl-xl">
	<h3 class="mt-8 mb-2 text-xl text-left font-handwriting text-ppred">What we do</h3>
	<h2 class="mb-8 text-5xl font-black text-left font-handwriting" id="work">Our Activities</h2>
	<ProjectPartnersActivitiesDiagram />
</div>
<!-- <div class="grid grid-cols-2 px-8 lg:px-36 md:px-24 sm:px-16 gap-x-16">
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
</div> -->
<div
	id="team"
	class="px-6 py-24 lg:px-32 lg:mx-32 md:px-24 sm:px-12 lg:border-b lg:border-r rounded-br-xl"
>
	<h3 class="mt-8 mb-2 text-xl text-left font-handwriting text-ppyellow">Who we are</h3>
	<h2 class="mb-8 text-5xl font-black text-left font-handwriting" id="work">Our Team</h2>
	<div class="flex flex-wrap justify-around flex-none gap-16">
		{#each teamMembers as person}
			<div class="">
				<img
					src="{assets}/images/team/{person.src}"
					alt=""
					class="object-cover object-center w-32 h-32 rounded-full sm:w-48 sm:h-48"
				/>
				<h3 class="w-full mt-2 text-lg font-black text-center">{person.name}</h3>
				<h4 class="w-full text-center">{person.role}</h4>
			</div>
		{/each}
	</div>
	<div class="mt-16 text-center">
		<Button href="/about/team" text="Meet the team" />
	</div>
</div>
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
		text: 'Case Study: Ghana',
		href: '/about/ghana-case-study',
		hoverColor: 'ppgreen'
	}}
	bigLink={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'Get Involved',
		href: '/get-involved',
		hoverColor: 'ppred'
	}}
/>
