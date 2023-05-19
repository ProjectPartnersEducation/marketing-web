<script>
	import { assets } from '$app/paths';

	export const title = 'Our Philosophy';
	export const text1 =
		'We believe in the transformative power of education. Central to our work and our vision are five key principles.';
	export const text2 =
		"These principles are the central framework of Project Partners, shaping our resources, guiding our approach, and driving our mission to redefine educational success. As we help our partners embrace these principles, we're collectively creating engaging, inclusive, and globally conscious learning experiences that inspire lifelong curiosity.";

	export const principles = [
		{
			title: 'Contextual and Collaborative Learning',
			desc: 'Learning should be rooted in engaging narratives that provide context for new topics and should emphasize the power of collaboration and peer teaching. This approach enhances student engagement and fosters empathy, clear communication, and deeper understanding.',
			open: false
		},
		{
			title: 'Facilitative Role of Teachers',
			desc: 'Teachers should primarily act as facilitators of learning, guiding the student learning journey, promoting creativity, and ensuring a safe and effective environment. Concurrently, a commitment to ongoing professional development is essential for teachers to adopt innovative pedagogical approaches and sustain their well-being.',
			open: false
		},
		{
			title: 'Global Awareness and Cultural Sensitivity',
			desc: 'Educational practices should incorporate real-world issues, fostering awareness of local and global challenges. Learning environments and materials should reflect a wide range of cultures, settings, and characters, fostering cultural awareness and respect for diversity.',
			open: false
		},
		{
			title: 'Integrative Assessment Practices as Evidence of Success',
			desc: 'Assessments should be integrated seamlessly into learning processes, serving as tools for learning as well as measures of knowledge. Both formative and summative assessments are essential components of a comprehensive learning strategy. Moreover, educational practices should be guided by research and feedback. This evidence-based approach promotes continuous improvement and ensures the relevance and effectiveness of the learning experience.',
			open: false
		},
		{
			title: 'Scalability and Accessibility in Technology Usage',
			desc: 'Educational initiatives should aim for maximum accessibility and scalability, minimizing dependency on technology to avoid creating disparities among different populations. The use of technology should enhance learning without becoming a barrier, ensuring that quality education reaches every learner, irrespective of their access to advanced technology.',
			open: false
		}
	];

	export const images = [
		{
			url: `${assets}/images/Classroom 1.jpeg`,
			alt: ''
		},
		{
			url: `${assets}/images/IMG_1951.jpg`,
			alt: ''
		},
		{
			url: `${assets}/images/IMG_0290.jpeg`,
			alt: ''
		}
	];
</script>

<div class="mt-32 overflow-hidden sm:mt-40">
	<div class="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
		<div
			class="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
		>
			<div class="lg:col-end-1 lg:w-full lg:max-w-xl lg:pb-8">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
				<p class="mt-6 text-xl leading-8 text-gray-600">
					{text1}
				</p>
				<dl class="space-y-6 divide-y divide-gray-900/10">
					{#each principles as principle}
						<div class="pt-6">
							<dt>
								<!-- Expand/collapse question button -->
								<button
									type="button"
									class="flex items-start justify-between w-full text-left text-gray-900"
									aria-controls="faq-0"
									aria-expanded="false"
									on:click={() => {
										principle.open = !principle.open;
									}}
								>
									<span class="text-base font-semibold leading-7">{principle.title}</span>
									<span class="flex items-center ml-6 h-7">
										{#if principle.open}
											<svg
												class="w-6 h-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
											</svg>
										{:else}
											<svg
												class="w-6 h-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
											</svg>
										{/if}
									</span>
								</button>
							</dt>
							{#if principle.open}
								<dd class="pr-12 mt-2" id="faq-0">
									<p class="text-base leading-7 text-gray-600">
										{principle.desc}
									</p>
								</dd>
							{/if}
						</div>
					{/each}
				</dl>
				<p class="mt-6 text-base leading-7 text-gray-600">
					{text2}
				</p>
			</div>
			<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents col">
				<div class="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
					<img
						src={images[0].url}
						alt={images[0].alt}
						class="aspect-[7/5] w-[32rem] max-w-none rounded-2xl bg-gray-50 object-cover"
					/>
				</div>
				<div
					class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
				>
					<div class="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
						<img
							src={images[1].url}
							alt={images[1].alt}
							class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
						/>
					</div>
					<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
						<img
							src={images[2].url}
							alt={images[2].alt}
							class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
