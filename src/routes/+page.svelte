<script>
	import Hero from '$lib/components/Hero.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Philosophy from '$lib/components/Philosophy.svelte';
	import BigButton from '$lib/components/BigButton.svelte';

	const headlineContent1 = 'Redefining success in education';
	const headlineContent2 =
		'We want to recenter learning around collaboration, free thinking and enjoyment. We are currently developing our best educational programmes yet. We are looking for research partners, collaborators and partner schools to join us on our mission.';
</script>

<main class="isolate">
	<Hero
		{headlineContent1}
		{headlineContent2}
		cta1Text="Get in touch"
		cta1Link="#"
		cta2Text="Learn more"
		cta2Link="#"
	/>
	<Timeline />
	<BigButton
		title="Project Partners x UNESCO Ghana Commission"
		subtitle="We are proud to be working with the following partners to bring our mission to life. Find out more..."
	/>
	<Philosophy />

	<!-- Stats -->
	<div class="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
		<div class="max-w-2xl mx-auto lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				We approach the workplace as something that adds to our lives and adds value to world.
			</h2>
			<p class="mt-6 text-base leading-7 text-gray-600">
				Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non
				placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.
			</p>
		</div>
		<div
			class="flex flex-col max-w-2xl gap-8 mx-auto mt-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
		>
			<div
				class="flex flex-col-reverse justify-between p-8 gap-x-16 gap-y-8 rounded-2xl bg-gray-50 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
			>
				<p class="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
				<div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
					<p class="text-lg font-semibold tracking-tight text-gray-900">Users on the platform</p>
					<p class="mt-2 text-base leading-7 text-gray-600">
						Vel labore deleniti veniam consequuntur sunt nobis.
					</p>
				</div>
			</div>
			<div
				class="flex flex-col-reverse justify-between p-8 bg-gray-900 gap-x-16 gap-y-8 rounded-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44"
			>
				<p class="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
				<div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
					<p class="text-lg font-semibold tracking-tight text-white">
						We’re proud that our customers have made over $8 billion in total revenue.
					</p>
					<p class="mt-2 text-base leading-7 text-gray-400">
						Eu duis porta aliquam ornare. Elementum eget magna egestas.
					</p>
				</div>
			</div>
			<div
				class="flex flex-col-reverse justify-between p-8 bg-indigo-600 gap-x-16 gap-y-8 rounded-2xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28"
			>
				<p class="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
				<div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
					<p class="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
					<p class="mt-2 text-base leading-7 text-indigo-200">
						Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam
						ornare.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Content section -->
	<div class="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
		<div
			class="flex flex-col items-end justify-between max-w-2xl gap-16 mx-auto lg:mx-0 lg:max-w-none lg:flex-row"
		>
			<div class="w-full lg:max-w-lg lg:flex-auto">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					We’re always looking for awesome people to join us
				</h2>
				<p class="mt-6 text-xl leading-8 text-gray-600">
					Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non
					placerat nam arcu. Cras purus nibh cursus sit eu in id.
				</p>
				<img
					src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
					alt=""
					class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
				/>
			</div>
			<div class="w-full lg:max-w-xl lg:flex-auto">
				<h3 class="sr-only">Job openings</h3>
				<ul class="-my-8 divide-y divide-gray-100">
					<li class="py-8">
						<dl class="relative flex flex-wrap gap-x-3">
							<dt class="sr-only">Role</dt>
							<dd class="flex-none w-full text-lg font-semibold tracking-tight text-gray-900">
								<a href="#">
									Full-time designer
									<span class="absolute inset-0" aria-hidden="true" />
								</a>
							</dd>
							<dt class="sr-only">Description</dt>
							<dd class="flex-none w-full mt-2 text-base leading-7 text-gray-600">
								Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo
								voluptatum eligendi autem labore.
							</dd>
							<dt class="sr-only">Salary</dt>
							<dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$75,000 USD</dd>
							<dt class="sr-only">Location</dt>
							<dd class="flex items-center mt-4 text-base leading-7 text-gray-500 gap-x-3">
								<svg
									viewBox="0 0 2 2"
									class="h-0.5 w-0.5 flex-none fill-gray-300"
									aria-hidden="true"
								>
									<circle cx="1" cy="1" r="1" />
								</svg>
								San Francisco, CA
							</dd>
						</dl>
					</li>
					<li class="py-8">
						<dl class="relative flex flex-wrap gap-x-3">
							<dt class="sr-only">Role</dt>
							<dd class="flex-none w-full text-lg font-semibold tracking-tight text-gray-900">
								<a href="#">
									Laravel developer
									<span class="absolute inset-0" aria-hidden="true" />
								</a>
							</dd>
							<dt class="sr-only">Description</dt>
							<dd class="flex-none w-full mt-2 text-base leading-7 text-gray-600">
								Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet
								voluptates dolorum. Ut porro aut eveniet.
							</dd>
							<dt class="sr-only">Salary</dt>
							<dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$125,000 USD</dd>
							<dt class="sr-only">Location</dt>
							<dd class="flex items-center mt-4 text-base leading-7 text-gray-500 gap-x-3">
								<svg
									viewBox="0 0 2 2"
									class="h-0.5 w-0.5 flex-none fill-gray-300"
									aria-hidden="true"
								>
									<circle cx="1" cy="1" r="1" />
								</svg>
								San Francisco, CA
							</dd>
						</dl>
					</li>
					<li class="py-8">
						<dl class="relative flex flex-wrap gap-x-3">
							<dt class="sr-only">Role</dt>
							<dd class="flex-none w-full text-lg font-semibold tracking-tight text-gray-900">
								<a href="#">
									React Native developer
									<span class="absolute inset-0" aria-hidden="true" />
								</a>
							</dd>
							<dt class="sr-only">Description</dt>
							<dd class="flex-none w-full mt-2 text-base leading-7 text-gray-600">
								Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil
								omnis delectus illum est.
							</dd>
							<dt class="sr-only">Salary</dt>
							<dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$105,000 USD</dd>
							<dt class="sr-only">Location</dt>
							<dd class="flex items-center mt-4 text-base leading-7 text-gray-500 gap-x-3">
								<svg
									viewBox="0 0 2 2"
									class="h-0.5 w-0.5 flex-none fill-gray-300"
									aria-hidden="true"
								>
									<circle cx="1" cy="1" r="1" />
								</svg>
								San Francisco, CA
							</dd>
						</dl>
					</li>
				</ul>
				<div class="flex pt-8 mt-8 border-t border-gray-100">
					<a href="#" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>View all openings <span aria-hidden="true">&rarr;</span></a
					>
				</div>
			</div>
		</div>
	</div>
</main>
