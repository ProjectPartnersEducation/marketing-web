<script>
	export const timelineData = [
		{
			date: '2021-08',
			title: 'Founded company',
			description:
				'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.'
		},
		{
			date: '2021-12',
			title: 'Secured $63m in funding',
			description:
				'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.'
		},
		{
			date: '2022-01',
			title: 'Launched product',
			description:
				'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.'
		},
		{
			date: '2022-03',
			title: 'Raised $100m in funding',
			description:
				'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.'
		}
	];
</script>

<div class="px-6 mx-auto -mt-8 max-w-7xl lg:px-8">
	<div
		class="grid max-w-2xl grid-cols-1 gap-8 mx-auto overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
	>
		{#each timelineData as { date, title, description }}
			<div>
				<time
					datetime={date}
					class="flex items-center text-sm font-semibold leading-6 text-indigo-600"
				>
					<svg viewBox="0 0 4 4" class="flex-none w-1 h-1 mr-4" aria-hidden="true">
						<circle cx="2" cy="2" r="2" fill="currentColor" />
					</svg>
					{new Date(date).toLocaleDateString('en-GB', {
						month: 'long',
						year: 'numeric'
					})}
					<div
						class="absolute w-screen h-px -ml-2 -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
						aria-hidden="true"
					/>
				</time>
				<p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
					{title}
				</p>
				<p class="mt-1 text-base leading-7 text-gray-600">
					{description}
				</p>
			</div>
		{/each}
	</div>
</div>
