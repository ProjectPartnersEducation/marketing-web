<script>
	import Icon from '@iconify/svelte';
	import Disqus from '$lib/components/shared/DisqusComments/Disqus.svelte';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
</script>

<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
	<PageHeading
		title="Discuss"
		aboveHeadingText="Share and learn with others"
		description="We're here to help you get the most out of your learning experience. If you have any
				questions, please join our community and ask away!"
	/>

	<div class="px-4 py-5 mt-10 sm:px-6">
		<div class="lg:flex lg:items-center lg:justify-between">
			<div class="flex-1 min-w-0">
				<nav class="flex" aria-label="Breadcrumb">
					<ol role="list" class="flex items-center space-x-4">
						<li>
							<div class="flex">
								<a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700"
									>Project Packs</a
								>
							</div>
						</li>
						<li>
							<div class="flex items-center">
								<svg
									class="flex-shrink-0 w-5 h-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clip-rule="evenodd"
									/>
								</svg>
								<a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
									>Maths</a
								>
							</div>
						</li>
					</ol>
				</nav>
				<h2 class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:">
					Project Partners Ghana
				</h2>
				<div class="flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
					<div class="flex items-center mt-2 text-sm text-gray-500">
						<Icon
							icon="solar:accessibility-outline"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
						/>
						Ages 14-16
					</div>
				</div>
			</div>
			<div class="flex mt-5 lg:ml-4 lg:mt-0">
				<span class="hidden sm:block">
					<button
						type="button"
						class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<svg
							class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
							/>
						</svg>
						Edit
					</button>
				</span>

				<span class="hidden ml-3 sm:block">
					<button
						type="button"
						class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<svg
							class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
							/>
							<path
								d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
							/>
						</svg>
						View
					</button>
				</span>

				<span class="sm:ml-3">
					<button
						type="button"
						class="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<svg
							class="-ml-0.5 mr-1.5 h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
						Publish
					</button>
				</span>

				<!-- Dropdown -->
				<div class="relative ml-3 sm:hidden">
					<button
						type="button"
						class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
						id="mobile-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
					>
						More
						<svg
							class="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<!--
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-200"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      -->
					<div
						class="absolute right-0 z-10 w-48 py-1 mt-2 -mr-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="mobile-menu-button"
						tabindex="-1"
					>
						<!-- Active: "bg-gray-100", Not Active: "" -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabindex="-1"
							id="mobile-menu-item-0">Edit</a
						>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabindex="-1"
							id="mobile-menu-item-1">View</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-row px-4 py-5 sm:p-6">
		<div class="p-4 pr-8 basis-1/3">
			<nav class="flex flex-col flex-1" aria-label="Sidebar">
				<ul role="list" class="-mx-2 space-y-1">
					<li>
						<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-indigo-600 rounded-md bg-gray-50 group gap-x-3"
						>
							Complete Pack
						</a>
					</li>
					<div class="inset-0 flex items-center" aria-hidden="true">
						<div class="w-full border-t border-gray-300" />
					</div>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Introduction</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 1: The Trotro Mate</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 2: Coconut Seller</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 3: Corn Farming</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 4: The Architect's Office</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 5: Engineer</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 6: Chop Bar</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 7: Football Manager</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 8: Retail Business</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 9: Property Manager</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>Project 10: The Investor</a
						>
					</li>
				</ul>
			</nav>
		</div>
		<div class="basis-2/3">
			<Disqus />
		</div>
	</div>
</div>
