<script lang="ts">
	import Icon from '@iconify/svelte';
	import { base, assets } from '$app/paths';
	import { page } from '$app/stores';

	type MenuItem = {
		name: string;
		href: string;
		icon: string;
		color: string;
		hoverColor: string;
		comingSoon?: boolean;
	};

	export let sticky = false;
	let previousY: number;
	let currentY: number;
	let clientHeight: number;

	const calculateScroll = (y: number) => {
		const direction = !previousY || previousY < currentY ? 'down' : 'up';
		previousY = y;

		return direction;
	};

	$: scrollDirection = calculateScroll(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;

	let justClicked = false;
	const registerClick = () => {
		justClicked = true;
		setTimeout(() => {
			justClicked = false;
		}, 1);
	};

	const menuItems = [
		{
			name: 'About',
			href: 'about'
		},
		{
			name: 'Resources',
			href: 'resources'
		}
	];

	const extendedMenuItems = [
		{
			heading: 'About',
			items: [
				{
					title: 'Framework',
					href: 'framework',
					icon: 'solar:stars-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500'
				},
				{
					title: 'Publications',
					href: 'publications',
					icon: 'solar:clipboard-list-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500'
				},
				{
					title: 'Initiatives',
					href: 'initiatives',
					icon: 'solar:benzene-ring-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500'
				},
				{
					title: 'Team',
					href: 'team',
					icon: 'solar:user-hand-up-broken',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500',
					comingSoon: true
				}
			]
		},
		{
			heading: 'For Learners',
			items: [
				{
					title: 'Projects',
					href: 'projects',
					icon: 'solar:backpack-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500'
				},
				{
					title: 'Skills',
					href: 'skills',
					icon: 'solar:bolt-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500',
					comingSoon: true
				},
				{
					title: 'Discuss',
					href: 'discuss',
					icon: 'solar:chat-round-line-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500'
				}
			]
		},
		{
			heading: 'For Leaders',
			items: [
				{
					title: 'Training',
					href: 'training',
					icon: 'solar:presentation-graph-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500',
					comingSoon: true
				},
				{
					title: 'Lesson Plans',
					href: 'lesson-plans',
					icon: 'solar:file-check-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500',
					comingSoon: true
				},
				{
					title: 'Parents & Guardians',
					href: 'parents-and-guardians',
					icon: 'solar:user-heart-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500'
				},
				{
					title: 'Schools & Clubs',
					href: 'schools-and-clubs',
					icon: 'solar:square-academic-cap-linear',
					color: 'text-gray-400',
					hoverColor: 'text-gold-500'
				}
			]
		},
		{
			heading: 'Get Involved',
			items: [
				{
					title: 'Partnerships',
					href: 'partnerships',
					icon: 'solar:filters-linear',
					color: 'text-blue-400',
					hoverColor: 'text-blue-500'
				},
				{
					title: 'Volunteer',
					href: 'volunteer',
					icon: 'solar:heart-shine-linear',
					color: 'text-red-400',
					hoverColor: 'text-red-500'
				},
				{
					title: 'Donate',
					href: 'donate',
					icon: 'solar:confetti-linear',
					color: 'text-green-400',
					hoverColor: 'text-green-500'
				},
				{
					title: 'Events',
					href: 'events',
					icon: 'solar:bell-linear',
					color: 'text-yellow-400',
					hoverColor: 'text-yellow-500',
					comingSoon: true
				}
			]
		}
	];

	const menuHighlightItems = {};

	const callToAction = {
		name: 'Support Us',
		href: 'support-us'
	};

	let mobileMenuOpen = false;
</script>

<svelte:window bind:scrollY={currentY} />

<header
	class="inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out backdrop-blur-sm transform-gpu"
	class:relative={!sticky}
	class:fixed={sticky}
	class:-translate-y-full={sticky && offscreen}
	bind:clientHeight
>
	<nav
		class="relative flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8 group"
		aria-label="Global"
		on:click={registerClick}
		on:keypress={registerClick}
	>
		<div class="flex lg:flex-1 s">
			<a href="{base}/" class="-m-1.5 p-1.5">
				<span class="sr-only">Project Partners</span>
				<img class="w-auto h-14" src="{assets}/logo.png" alt="Project Partners Logo" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
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
					href={`${base}/${item.href}`}
					class="text-lg leading-6 text-gray-900 hover:text-indigo-400"
					class:text-indigo-600={$page.route.id === `/${item.href}`}>{item.name}</a
				>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href={`${base}/${callToAction.href}`} class="text-lg leading-6 text-gray-900"
				>{callToAction.name} <span aria-hidden="true">&rarr;</span></a
			>
		</div>
		{#if !justClicked}
			<div
				class="absolute inset-x-0 top-0 pt-16 transition-opacity duration-200 transform scale-0 -translate-y-1 bg-white shadow-lg opacity-0 -z-10 ring-1 ring-gray-900/5 group-hover:scale-100 ease group-hover:opacity-100 group-hover:translate-y-0"
			>
				<div
					class="grid grid-cols-1 px-6 py-10 mx-auto max-w-7xl gap-x-8 gap-y-10 lg:grid-cols-1 lg:px-8"
				>
					<div class="grid grid-cols-4 gap-x-6 sm:gap-x-8">
						{#each extendedMenuItems as extendedMenuItem}
							<div>
								<h3 class="text-sm font-medium leading-6 text-gray-500">
									{extendedMenuItem.heading}
								</h3>
								<div class="flow-root mt-6">
									<div class="-my-2">
										{#each extendedMenuItem.items as item}
											<a
												href={`${base}/${item.href}`}
												class="flex py-2 text-sm leading-6 text-gray-900 rounded-sm gap-x-4 hover:bg-indigo-50"
											>
												<Icon icon={item.icon} class="flex-none w-6 h-6 ml-2 {item.color}" />
												{item.title}
												{#if item.comingSoon}
													<span
														class="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 rounded-full bg-purple-50 ring-1 ring-inset ring-purple-700/10"
														>Coming soon</span
													>
												{/if}
											</a>
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</nav>

	{#if mobileMenuOpen}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-50" />
			<div
				class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Project Partners</span>
						<img class="w-auto h-8" src="{assets}/logo.png" alt="Project Partners Logo" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click={() => {
							mobileMenuOpen = false;
						}}
					>
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
							{#each extendedMenuItems as itemGroup}
								<h3
									class="block px-3 py-2 -mx-3 leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
								>
									{itemGroup.heading}
								</h3>
								{#each itemGroup.items as item}
									<a
										href={`${base}/${item.href}`}
										class="flex px-3 py-2 -mx-3 text-base leading-6 text-gray-900 rounded-lg hover:bg-gray-50"
									>
										<Icon icon={item.icon} class="flex-none w-6 h-6 pr-2 {item.color}" />
										{item.title}
									</a>
								{/each}
							{/each}
						</div>
						<div class="py-6">
							<a
								href={callToAction.href}
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900 hover:bg-gray-50"
								>{callToAction.name}</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
