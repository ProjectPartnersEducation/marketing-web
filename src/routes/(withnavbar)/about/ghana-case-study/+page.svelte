<script lang="ts">
	import { assets } from '$app/paths';

	import Icon from '@iconify/svelte';
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import Button from '$lib/components/elements/button.svelte';
</script>

<section class="px-6 mt-8 xl:px-48 lg:px-32 md:px-24 sm:px-12">
	<h2 class="mt-8 text-xl text-ppblue">Case Study</h2>
	<h1 class="mb-12 text-5xl font-black font-handwriting">Project:Maths Ghana</h1>

	<div class="grid lg:grid-cols-[70%,30%] gap-8 my-16">
		<img
			src="{assets}/images/IMG_0034.jpg"
			class="border-8 border-black"
			alt="Two children reviewing a Project:Maths project together"
		/>
		<div class="grid grid-cols-1 gap-8">
			<div>
				<h3 class="mb-2 text-2xl text-slate-600">Lead partner</h3>
				<img src="{assets}/logo.svg" class="max-w-sm" alt="Logo of Project Partners Education" />
			</div>
			<div>
				<h3 class="mb-2 text-2xl text-slate-600">Supporting Partners</h3>
				<div class="grid grid-cols-2 gap-4">
					<img
						src="{assets}/images/supporters/unesco-ghana-logo.png"
						alt="Logo of Ghana Commission for UNESCO"
					/>
					<img src="{assets}/images/supporters/ntc-logo.jpg" alt="Logo of NTC" />
					<img src="{assets}/images/supporters/ges-logo.png" alt="Logo of GES" />
					<img src="{assets}/images/supporters/nacca-logo.png" alt="Logo of NaCCA" />
				</div>
			</div>
		</div>
	</div>
	<div class="my-48">
		<div class="grid lg:grid-cols-[75%,25%] place-items-center gap-12">
			<div class="pl-8 border-l-8 border-black">
				<p class="text-2xl leading-relaxed md:text-justify">
					"Welcome to our journey in Ghana! Since 2019, Project Partners has been revolutionising
					education through innovative, project-based learning. Our programme, initially reaching
					numerous schools and impacting thousands of students, has not only boosted grades but also
					transformed how young Ghanaians engage with mathematics. As we step into our next phase,
					we're expanding to even more schools and refining our approach, backed by continuous
					feedback and research. Join us as we explore this story of educational transformation and
					collaborative growth in Ghana."
				</p>
				<div class="text-2xl font-black text-right font-handwriting text-slate-800">
					Tom Shering, Co-founder & CEO
				</div>
			</div>
			<img src="{assets}/images/team/ts.jpg" class="border-2 border-black rounded-sm shadow-lg" />
		</div>
	</div>
	<div class="mt-8">
		<h2 class="text-3xl font-black font-handwriting">Key statistics:</h2>
		<div class="grid gap-4 mt-8 lg:grid-cols-3 place-items-center">
			<div class="w-full h-full px-8 py-4 border-4 border-black">
				<div class="text-5xl font-black font-handwriting">242</div>
				<div class="text-xl">Students from 8 schools</div>
			</div>
			<div class="w-full h-full px-8 py-4 border-4 border-black">
				<div class="text-5xl font-black font-handwriting">2.5 grades</div>
				<div class="text-xl">Average improvement after 9 weeks</div>
			</div>
			<div class="w-full h-full px-8 py-4 border-4 border-black">
				<div class="text-5xl font-black font-handwriting">86%</div>
				<div class="text-xl">Say they are more maths-confident</div>
			</div>
		</div>
	</div>
	<hr class="w-1/2 mx-auto my-32 border-b border-black" />

	<div class="mt-8">
		<h2 class="text-3xl font-black font-handwriting">The Road to Ghana</h2>
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			In 2019, Project Partners embarked to support the transformation of mathematics education in
			Ghana. Recognising a key opportunity in engaging and effective maths instruction, we initiated
			the Project:Maths programme aimed at reimagining the way math is taught and perceived. Our
			goal was to build beyond the traditional rote learning methods, making mathematics not only
			more accessible but genuinely exciting for young minds.
		</p>
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			Our strategy is rooted in project-based learning, an pedagogical approach where students
			engage in real-life problem-solving, fostering a deeper connection with mathematical concepts.
			The programme started with a network of 8 schools across Ghana, impacting hundreds of
			students. Teacher training was a cornerstone of this initiative, focusing on equipping
			educators with the tools and skills necessary to deliver this new curriculum. We provided
			comprehensive training sessions, resources, and ongoing support to ensure the successful
			implementation of the programme in diverse classroom settings.
		</p>
		<h2 class="mt-16 text-3xl font-black font-handwriting">High Impact at Low Cost</h2>
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			The programme's impact is both significant and wide-reaching. Participating students
			demonstrate remarkable improvement in their maths scores (we use English GCSE standards to
			measure attainment), with an average increase of 2.5 grades in just 9 weeks of our programme.
			Beyond academic performance, the programme fostered a newfound enthusiasm for mathematics
			among students, with 86% saying they feel more confident with maths after the programme and
			96% saying they would like to do another Maths programme like ours. Teachers also reported a
			positive shift in their teaching experiences, noting increased student engagement and
			participation in maths lessons.
		</p>
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			Our financial analysis also reveals the programme's strong cost-effectiveness. With an
			investment of £28.93 per student and £11.57 per grade improvement, the programme stands out as
			an efficient model for delivering quality education which tangibly improves students learning.
			These figures highlight the potential for replicating this model in other regions, affirming
			its scalability and sustainable impact.
		</p>
	</div>

	<div class="my-32">
		<h2 class="mb-8 text-3xl font-black font-handwriting">
			Project:Maths Ghana in 2024 and beyond
		</h2>
		<Timeline order="horizontal" class="gap-4">
			<TimelineItem
				title="Project:Partners launches in Ghana"
				date="April-July 2018"
				classLi="font-handwriting font-black"
			>
				<svelte:fragment slot="icon">
					<div class="flex items-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0"
						>
							<Icon icon="solar:rocket-bold-duotone" class="w-full h-full text-ppdarkorange" />
						</div>
						<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
					</div>
				</svelte:fragment>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					The first Project Partners school maths programmes run in Ghana and the UK.
				</p>
			</TimelineItem>
			<TimelineItem
				title="Partnership with UNESCO"
				date="July 2022"
				classLi="font-handwriting font-black"
			>
				<svelte:fragment slot="icon">
					<div class="flex items-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0"
						>
							<Icon
								icon="solar:diploma-verified-bold-duotone"
								class="w-full h-full text-ppyellow"
							/>
						</div>
						<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
					</div>
				</svelte:fragment>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					A strategic partnership is agreed to scale Project Partners activities across
					UNESCO-managed ASPNet school network
				</p>
			</TimelineItem>
			<TimelineItem
				title="Project:Maths Phase I"
				date="February-August 2024"
				classLi="font-handwriting font-black"
			>
				<svelte:fragment slot="icon">
					<div class="flex items-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0"
						>
							<Icon icon="solar:earth-bold-duotone" class="w-full h-full text-ppblue" />
						</div>
						<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
					</div>
				</svelte:fragment>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					The first stage of the next generation of Project Partners maths workshops is launch in a
					small number of ASPNet partner schools.
				</p>
			</TimelineItem>
			<TimelineItem
				title="Project:Maths scales up"
				date="From September 2024"
				classLi="font-handwriting font-black"
			>
				<svelte:fragment slot="icon">
					<div class="flex items-center">
						<div
							class="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0"
						>
							<Icon icon="solar:circle-top-up-bold-duotone" class="w-full h-full text-gray-600" />
						</div>
						<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
					</div>
				</svelte:fragment>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					Following a consolidation process integrating NaCCA, NTC, and GES requirements and further
					feedback from Phase I beneficiaries, Project:Maths will be scaled out across Ghana.
				</p>
			</TimelineItem>
		</Timeline>
	</div>
	<div class="my-32">
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			Our work in Ghana is entering an exciting new phase, marked by key collaborations with several
			important organisations, each bringing unique strengths and resources to our mission. In
			partnership with the Ghana Commission for UNESCO, we are implementing our innovative
			programmes within their ASPNet school network. This collaboration goes beyond implementation;
			it's about co-creating the next generation of Project:Maths content. By directly involving
			students, teachers, and other stakeholders, we ensure our materials are deeply relevant and
			resonate with the local educational community's needs.
		</p>
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			In a significant move to integrate Project:Maths into Ghana's national curriculum, we are
			working closely with the National Council for Curriculum and Assessment (NaCCA). This
			partnership aims to align and accredit our school materials, making our creative and engaging
			teaching resources accessible to a wider array of schools across the country. Furthermore,
			recognising the central role of educators in the learning process, we have teamed up with the
			National Teaching Council (NTC) to design new professional development pathways specifically
			for maths teachers. This initiative is focused on elevating the quality of maths instruction
			throughout Ghana, enhancing both the creativity and engagement in maths classrooms.
		</p>
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			Expanding our reach within Ghana's education ecosystem, our engagement with the Ghanaian
			Education Service (GES) allows us to address a broad spectrum of educational needs and
			beneficiaries. This alliance is crucial for making impactful interventions at various levels,
			from policy formulation to classroom practice. Complementing these efforts, we are also
			looking to foster a network of excellence and collaboration among schools. By connecting our
			school partners with a growing network of active and alumni Project Partners schools, we aim
			to promote leadership excellence and collaboration between schools, sharing best practices and
			innovations in education.
		</p>
		<p class="mt-8 text-2xl leading-relaxed md:text-justify">
			Our vision for the future remains focused and ambitious: to reach more educators and students,
			to keep refining our approach based on evidence and feedback, and to maintain our commitment
			to open, constructive educational dialogue.
		</p>
	</div>
	<StrongBox>
		<p class="text-2xl leading-relaxed md:text-justify">
			You too can be part of our transformative journey. Whether through donations, volunteering, or
			partnership, your contribution plays a pivotal role in reshaping education in Ghana and
			beyond. Join us in making a difference.
		</p>
		<div class="mt-6 text-center">
			<Button text="Get Involved today" href="/get-involved" big={true} />
		</div>
	</StrongBox>
</section>
<div class="mt-48">
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
</div>
