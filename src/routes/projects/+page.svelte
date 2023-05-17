<script>
	import Icon from '@iconify/svelte';
	import ProjectViewer from '$lib/components/project_viewer/index.svelte';
</script>

<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
	<div class="px-6 py-24 bg-white sm:py-32 lg:px-8">
		<div class="max-w-2xl mx-auto text-center">
			<p class="text-base font-semibold leading-7 text-indigo-600">
				All of our materials are free forever
			</p>
			<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Projects for learners
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Our projects are designed to be used by learners independently, with minimal supervision.
				They are designed to be used in a variety of contexts, including in the classroom, at home,
				or in an after-school club.
			</p>
			<div class="p-4 mt-4 rounded-md bg-blue-50">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg
							class="w-5 h-5 text-blue-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="flex-1 ml-3 md:flex md:justify-between">
						<p class="text-sm text-blue-700">
							Our materials are also accessible in other formats that are more suitable for
							low-internet regions
						</p>
						<p class="mt-3 text-sm md:ml-6 md:mt-0">
							<a href="#" class="font-medium text-blue-700 whitespace-nowrap hover:text-blue-600">
								Find out more
								<span aria-hidden="true"> &rarr;</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
		<div class="px-4 py-5 sm:px-6">
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
					<h2
						class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
					>
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
							<Icon
								icon="solar:question-circle-linear"
								class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							/>
							Get Help
						</button>
					</span>

					<span class="hidden ml-3 sm:block">
						<button
							type="button"
							class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							<Icon
								icon="solar:chat-round-call-linear"
								class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							/>
							Teach</button
						>
					</span>

					<span class="sm:ml-3">
						<button
							type="button"
							class="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							<Icon
								icon="solar:download-minimalistic-linear"
								class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							/>
							Download
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
						<div class="inset-0 flex items-center" aria-hidden="true">
							<div class="w-full border-t border-gray-300" />
						</div>
						<li>
							<a
								href="#"
								class="flex p-2 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3"
							>
								<svg
									class="w-6 h-6 text-gray-400 shrink-0 group-hover:text-indigo-600"
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
								Build your skills
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="basis-2/3">
				<ProjectViewer
					url="https://drive.google.com/file/d/1a9UZYsRL9yYCq4XZDdtSkE3kHMr9pr-S/preview"
				/>
			</div>
		</div>
	</div>
</div>
