<script lang="ts">
	import { assets } from '$app/paths';

	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
	import BigTopImage from '$lib/components/elements/bigtopimage/index.svelte';
	import Image from '$lib/components/elements/image/index.svelte';

	import ProjectPartnersActivitiesDiagram from '$lib/components/diagrams/ProjectPartnersActivities/index.svelte';
	import ThreeStagesOfEngagedLearningDiagram from '$lib/components/diagrams/ThreeStagesOfEngagedLearning/index.svelte';
	import Button from '$lib/components/elements/button.svelte';

	const teamMembers = [
		{ src: 'cloudinary://v1706051830/img/team/ts_szuqzp.jpg', name: 'Tom Shering', role: 'CEO' },
		{
			src: 'cloudinary://v1706051767/img/team/jj_yddjwa.jpg',
			name: 'Jonny Jackson',
			role: 'Chair, Trustee'
		},
		{
			src: 'cloudinary://v1706051828/img/team/su_oncdiv.jpg',
			name: 'Saiyara Uddin',
			role: 'Treasurer, Trustee'
		},
		{
			src: 'cloudinary://v1706051827/img/team/sm_pqanth.jpg',
			name: 'Sophie Martin',
			role: 'Secretary, Trustee'
		},
		{
			src: 'cloudinary://v1706051768/img/team/rm_fnncwy.jpg',
			name: 'Renette Mbroh',
			role: 'Trustee'
		},
		{
			src: 'cloudinary://v1706051799/img/team/sd_zpchq9.jpg',
			name: 'Suhaida D',
			role: 'Advisor, Operations'
		},
		{
			src: 'cloudinary://v1706051768/img/team/nw_azopt2.jpg',
			name: 'Nicola Whelan',
			role: 'Advisor, Community'
		},
		{
			src: 'cloudinary://v1706051831/img/team/tb_vrgt7x.png',
			name: 'Tim B',
			role: 'Advisor, Creative'
		}
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

<BigTopImage imgSrc="cloudinary://v1706051653/img/class-with-hands-up_poj2u6.png" text="About" />
<div class="hidden pt-32 ml-32 border-b border-r mr-80 rounded-br-xl lg:block"></div>
<div
	class="px-6 py-24 lg:px-32 lg:mx-32 md:px-24 sm:px-12 lg:border-b lg:border-l rounded-bl-xl"
	id="principles"
>
	<h3 class="mt-8 mb-2 text-xl text-left font-heading text-ppblue">What we say</h3>
	<h2 class="mb-8 text-5xl font-black text-left font-heading">Our Principles</h2>
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
			class="inline-block px-4 py-2 mb-8 text-4xl font-black text-white bg-black rounded-sm font-heading"
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
	<h3 class="mt-8 mb-2 text-xl text-left font-heading text-ppred">What we do</h3>
	<h2 class="mb-8 text-5xl font-black text-left font-heading" id="work">Our Activities</h2>
	<ProjectPartnersActivitiesDiagram />
</div>
<div
	id="team"
	class="px-6 py-24 lg:px-32 lg:mx-32 md:px-24 sm:px-12 lg:border-b lg:border-r rounded-br-xl"
>
	<h3 class="mt-8 mb-2 text-xl text-left font-heading text-ppyellow">Who we are</h3>
	<h2 class="mb-8 text-5xl font-black text-left font-heading" id="work">Our Team</h2>
	<div class="flex flex-wrap justify-around flex-none gap-16">
		{#each teamMembers as person}
			<div class="">
				<Image
					src={person.src}
					alt="A small portrait of {person.name}"
					addClass="object-cover object-center w-32 h-32 rounded-full sm:w-48 sm:h-48"
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
		imgsrc: `cloudinary://v1706050229/img/IMG_0459_bkjyzw.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'See our resources',
		href: '/resources',
		hoverColor: 'ppyellow'
	}}
	link2={{
		imgsrc: `cloudinary://v1706050214/img/IMG_0034_bwy8cq.jpg`,
		imgalt: 'Two children looking at a book',
		text: 'Case Study: Ghana',
		href: '/about/ghana-case-study',
		hoverColor: 'ppgreen'
	}}
	bigLink={{
		imgsrc: `cloudinary://v1706050214/img/IMG_0034_bwy8cq.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'Get Involved',
		href: '/get-involved',
		hoverColor: 'ppred'
	}}
/>
