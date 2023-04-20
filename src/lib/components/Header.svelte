<script>
	const menuItems = [
		{
			name: 'About',
			href: '#',
			current: false
		},
		{
			name: 'Resources',
			href: '#',
			current: false
		},
		{
			name: 'Publications',
			href: '#',
			current: false
		}
	];

	const callToAction = {
		name: 'Support Us',
		href: '#'
	};
</script>

<header class="absolute inset-x-0 top-0 z-50 group">
	<nav class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Project Partners</span>
				<img class="w-auto h-14" src="/logo.png" alt="Project Partners Logo" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each menuItems as item}
				<a
					href={item.href}
					class="text-lg font-semibold leading-6 text-gray-900 {item.current
						? 'text-indigo-600'
						: ''}">{item.name}</a
				>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href={callToAction.href} class="text-lg font-semibold leading-6 text-gray-900"
				>{callToAction.name} <span aria-hidden="true">&rarr;</span></a
			>
		</div>
		<div
			class="absolute inset-x-0 top-0 pt-16 transition duration-200 -translate-y-1 bg-white shadow-lg opacity-0 -z-10 ring-1 ring-gray-900/5 group-hover:block ease group-hover:opacity-100 group-hover:translate-y-0"
		>
			<div
				class="grid grid-cols-1 px-6 py-10 mx-auto max-w-7xl gap-x-8 gap-y-10 lg:grid-cols-2 lg:px-8"
			>
				<div class="grid grid-cols-2 gap-x-6 sm:gap-x-8">
					<div>
						<h3 class="text-sm font-medium leading-6 text-gray-500">Engagement</h3>
						<div class="flow-root mt-6">
							<div class="-my-2">
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
										/>
									</svg>
									About
								</a>
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
										/>
									</svg>
									Customers
								</a>
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
										/>
									</svg>
									Press
								</a>
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
										/>
									</svg>
									Careers
								</a>
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
										/>
									</svg>
									Privacy
								</a>
							</div>
						</div>
					</div>
					<div>
						<h3 class="text-sm font-medium leading-6 text-gray-500">Resources</h3>
						<div class="flow-root mt-6">
							<div class="-my-2">
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
										/>
									</svg>
									Community
								</a>
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
										/>
									</svg>
									Partners
								</a>
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
										/>
									</svg>
									Guides
								</a>
								<a href="#" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
									<svg
										class="flex-none w-6 h-6 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
										/>
									</svg>
									Webinars
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
					<h3 class="sr-only">Recent posts</h3>
					<article
						class="relative flex flex-col max-w-2xl isolate gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
					>
						<div class="relative flex-none">
							<img
								class="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
								src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
								alt=""
							/>
							<div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
						</div>
						<div>
							<div class="flex items-center gap-x-4">
								<time datetime="2023-03-16" class="text-sm leading-6 text-gray-600"
									>Mar 16, 2023</time
								>
								<a
									href="#"
									class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
									>Marketing</a
								>
							</div>
							<h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
								<a href="#">
									<span class="absolute inset-0" />
									Boost your conversion rate
								</a>
							</h4>
							<p class="mt-2 text-sm leading-6 text-gray-600">
								Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad
								deserunt cupidatat est magna Lorem.
							</p>
						</div>
					</article>
					<article
						class="relative flex flex-col max-w-2xl isolate gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
					>
						<div class="relative flex-none">
							<img
								class="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
								src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
								alt=""
							/>
							<div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
						</div>
						<div>
							<div class="flex items-center gap-x-4">
								<time datetime="2023-03-10" class="text-sm leading-6 text-gray-600"
									>Mar 10, 2023</time
								>
								<a
									href="#"
									class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
									>Sales</a
								>
							</div>
							<h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
								<a href="#">
									<span class="absolute inset-0" />
									How to use search engine optimization to drive sales
								</a>
							</h4>
							<p class="mt-2 text-sm leading-6 text-gray-600">
								Optio cum necessitatibus dolor voluptatum provident commodi et.
							</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-50" />
		<div
			class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Project Partners</span>
					<img class="w-auto h-8" src="/logo.png" alt="Project Partners Logo" />
				</a>
				<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
					<span class="sr-only">Close menu</span>
					<svg
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flow-root mt-6">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="py-6 space-y-2">
						{#each menuItems as item}
							<a
								href={item.href}
								class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
								>{item.name}</a
							>
						{/each}
					</div>
					<div class="py-6">
						<a
							href={callToAction.href}
							class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>{callToAction.name}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
