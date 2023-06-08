<script lang="ts">
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
</script>

<PageHeading
	title="Publications"
	description="Discover our research findings, articles, and case studies on the impact of our pedagogical model."
/>
<div>
	<div class="py-10 my-10 space-y-16 border-gray-200 border-y sm:my-16 sm:py-16">
		<h2 class="text-2xl font-bold text-gray-400 sm:text-3xl">Coming soon...</h2>
		<p class="text-lg leading-7 text-gray-500">
			We are currently working on our first publications. Please check back soon.
		</p>
		<!-- <article class="flex flex-col items-start justify-between max-w-xl">
			<div class="flex items-center text-xs gap-x-4">
				<time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
				<a
					href="#"
					class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
					>Marketing</a
				>
			</div>
			<div class="relative group">
				<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
					<a href="#">
						<span class="absolute inset-0" />
						Boost your conversion rate
					</a>
				</h3>
				<p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
					Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid
					explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel
					iusto corrupti dicta laboris incididunt.
				</p>
			</div>
			<div class="relative flex items-center mt-8 gap-x-4">
				<img
					src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
					class="w-10 h-10 rounded-full bg-gray-50"
				/>
				<div class="text-sm leading-6">
					<p class="font-semibold text-gray-900">
						<a href="#">
							<span class="absolute inset-0" />
							Michael Foster
						</a>
					</p>
					<p class="text-gray-600">Co-Founder / CTO</p>
				</div>
			</div>
		</article> -->

		<!-- More posts... -->
	</div>
	<div class="bg-white">
		<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
			<div class="max-w-2xl mx-auto text-center">
				<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Contributors welcome!</h2>
				<p class="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">
					If you are a researcher, educator, or student and would like to contribute to our
					publications, please consider joining our community of volunteer contributors.
				</p>
				<div class="flex items-center justify-center mt-10 gap-x-6">
					<a
						href="{base}/contact"
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Get in touch</a
					>
					<a href="{base}/volunteer" class="text-sm font-semibold leading-6 text-gray-900"
						>Read more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
