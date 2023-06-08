<script>
	import Icon from '@iconify/svelte';

	export const title = 'Mission 2026';
	export const text = `
Our mission is to instill a love for learning that extends beyond the classroom, fosters global awareness, and prepares our students for an interconnected world.
We are committed to achieving the following goals by 2026:`;

	export const stats = [
		{
			title: '95%',
			subtitle: 'Student engagement'
		},
		{
			title: '95%',
			subtitle: 'Teacher satisfaction'
		},
		{
			title: '1,000,000',
			subtitle: 'Students reached'
		},
		{
			title: '£0',
			subtitle: 'The cost to access all of our digital resources'
		}
	];
</script>

<div class="py-32 bg-white">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
			<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
			<div class="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
				<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
					<p class="text-xl leading-8 text-gray-600">
						{text}
					</p>
					<ol>
						<li class="max-w-xl mt-4 text-base leading-7 text-gray-700">
							<h3 class="text-xl font-semibold text-gray-900">
								Learner Engagement
								<span
									class="inline-flex align-middle items-center gap-x-1.5 rounded-full bg-sky-100 px-2 py-1 ml-1 text-xs font-medium text-sky-600"
								>
									<!-- <svg class="h-1.5 w-1.5 fill-sky-400" viewBox="0 0 6 6" aria-hidden="true">
										<circle cx="3" cy="3" r="3" />
									</svg> -->
									<Icon
										icon="solar:graph-up-bold-duotone"
										class="flex-none w-6 h-6 fill-emerald-400"
									/>
									On Track
								</span>
							</h3>
							<p class="mt-2">
								Achieve 95% learner engagement in our partners schools, as measured by self-reported
								interest and time spent on academic activities outside of the school environment.
							</p>
						</li>
						<li class="max-w-xl mt-4 text-base leading-7 text-gray-700">
							<h3 class="text-xl font-semibold text-gray-900">
								Teacher Support
								<span
									class="inline-flex align-middle items-center gap-x-1.5 rounded-full bg-sky-100 px-2 py-1 ml-1 text-xs font-medium text-sky-600"
								>
									<!-- <svg class="h-1.5 w-1.5 fill-sky-400" viewBox="0 0 6 6" aria-hidden="true">
										<circle cx="3" cy="3" r="3" />
									</svg> -->
									<Icon
										icon="solar:graph-up-bold-duotone"
										class="flex-none w-6 h-6 fill-emerald-400"
									/>
									On Track
								</span>
							</h3>
							<p class="mt-2">
								Achieve 95% teacher satisfaction in our partners schools, as assessed by yearly
								surveys, reflecting the positive impact of our pedagogical approach on professional
								development and teaching satisfaction.
							</p>
						</li>
						<li class="max-w-xl mt-4 text-base leading-7 text-gray-700">
							<h3 class="text-xl font-semibold text-gray-900">
								A Global Network
								<span
									class="inline-flex align-middle items-center gap-x-1.5 rounded-full bg-sky-100 px-2 py-1 ml-1 text-xs font-medium text-sky-600"
								>
									<!-- <svg class="h-1.5 w-1.5 fill-sky-400" viewBox="0 0 6 6" aria-hidden="true">
										<circle cx="3" cy="3" r="3" />
									</svg> -->
									<Icon
										icon="solar:graph-up-bold-duotone"
										class="flex-none w-6 h-6 fill-emerald-400"
									/>
									On Track
								</span>
							</h3>
							<p class="mt-2">
								Expand our network of partner schools to at least 5 more countries, thereby
								providing our distinctive educational approach to over 1,000,000 more students
								across the globe.
							</p>
						</li>
						<li class="max-w-xl mt-4 text-base leading-7 text-gray-700">
							<h3 class="text-xl font-semibold text-gray-900">
								Zero-cost Access
								<span
									class="inline-flex align-middle items-center gap-x-1.5 rounded-full bg-emerald-100 px-2 py-1 ml-1 text-sm font-medium text-emerald-600"
								>
									<!-- <svg class="h-1.5 w-1.5 fill-emerald-400" viewBox="0 0 6 6" aria-hidden="true">
										<circle cx="3" cy="3" r="3" />
									</svg> -->
									<Icon
										icon="solar:star-fall-2-bold-duotone"
										class="flex-none w-6 h-6 fill-emerald-400"
									/>
									Achieved
								</span>
							</h3>
							<p class="mt-2">
								Provide all of our learning materials digitally to any student, teacher, and parent
								across the world at no cost.
							</p>
						</li>
					</ol>
				</div>
				<div class="lg:flex lg:flex-auto lg:justify-center">
					<dl class="w-64 space-y-8 xl:w-80">
						{#each stats as stat}
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">{stat.subtitle}</dt>
								<dd class="text-5xl font-semibold text-gray-900">{stat.title}</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>
	</div>
</div>
