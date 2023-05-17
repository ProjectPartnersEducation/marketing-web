<script>
	export const title = 'Initiatives';
	export const mainItemTitle = 'Project Partners x UNESCO Ghana Commission';
	export const mainItemSubtitle =
		'We are proud to be working with the following partners to bring our mission to life. Find out more...';

	export const articles = [
		{
			title: 'The Good Tree Foundation',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			imageUrl:
				'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
			imageAlt: '',
			link: '#'
		},
		{
			title: 'Greater Accra Engaged Network',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			imageUrl:
				'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
			imageAlt: '',
			link: '#'
		},
		{
			title: 'South England Engaged Network',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			imageUrl:
				'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
			imageAlt: '',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl lg:flex">
		<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
		</div>
	</div>
	<div
		class="relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16"
	>
		<h2 class="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">
			{mainItemTitle}
		</h2>
		<p class="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
			{mainItemSubtitle}
		</p>
		<div class="absolute right-0 -top-24 -z-10 transform-gpu blur-3xl" aria-hidden="true">
			<div
				class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
				style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
			/>
		</div>
	</div>
	<div
		class="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each articles as article}
			<article class="flex flex-col items-start justify-between">
				<div class="relative w-full">
					<img
						src={article.imageUrl}
						alt={article.imageAlt}
						class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
					/>
					<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
				</div>
				<div class="max-w-xl">
					<div class="relative group">
						<h3
							class="mt-8 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
						>
							<a href={article.link}>
								<span class="absolute inset-0" />
								{article.title}
							</a>
						</h3>
						<p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
							{article.description}
						</p>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>
