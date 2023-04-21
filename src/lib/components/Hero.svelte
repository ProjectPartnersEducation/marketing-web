<script lang="ts">
	export let headlineContent1: string;
	export let headlineContent2: string;
	export let cta1Text: string;
	export let cta1Link: string;
	export let cta2Text: string;
	export let cta2Link: string;
</script>

<!-- Hero section -->
<div class="relative overflow-hidden isolate -z-10 bg-gradient-to-b from-indigo-100/20 pt-14">
	<div
		class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
		aria-hidden="true"
	/>
	<div class="px-6 py-32 mx-auto max-w-7xl sm:py-40 lg:px-8">
		<div
			class="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
		>
			<h1
				class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
			>
				{headlineContent1}
			</h1>
			<div class="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
				<p class="text-lg leading-8 text-gray-600">
					{headlineContent2}
				</p>
				<div class="flex items-center mt-10 gap-x-6">
					<a
						href={cta1Link}
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>{cta1Text}</a
					>
					<a href={cta2Link} class="text-sm font-semibold leading-6 text-gray-900"
						>{cta2Text} <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<img
				src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
				alt=""
				class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
			/>
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white sm:h-32" />
</div>
