<script lang="ts">
	import { assets } from '$app/paths';

	export let headlineContent1: string;
	export let headlineContent2: string;
	export let cta1Text: string;
	export let cta1Link: string;
	export let cta2Text: string;
	export let cta2Link: string;
</script>

<!-- Hero section -->
<div class="relative overflow-hidden isolate pt-14">
	<div class="px-6 pt-32 pb-16 mx-auto max-w-7xl sm:pt-40 lg:px-8 sm:pb-20">
		<div
			class="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
		>
			<h1 class="max-w-2xl text-4xl font-bold text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
				<span class="inline-block mx-auto"> We bring </span>
				<br /> <span class="text-white">and </span><span class="text-indigo-400"
					>life to learning</span
				><br />
				<span class="text-gray-800">and</span>
				<span class="text-indigo-700">learning to life</span>
			</h1>
			<div class="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
				<p class="text-lg leading-8 text-gray-600">
					{headlineContent2}
				</p>
				<div class="flex items-center mt-10 gap-x-6">
					<a
						href={cta1Link}
						class="rounded-md bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>{cta1Text}</a
					>
					<a href={cta2Link} class="font-semibold leading-6 text-gray-900"
						>{cta2Text} <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<img
				src="{assets}/images/corn-image.png"
				alt=""
				class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
			/>
		</div>
	</div>
</div>
