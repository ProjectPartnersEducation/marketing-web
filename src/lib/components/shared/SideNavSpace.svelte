<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let tabs: any[] = [];
	export let activeTab: string = '';
	export let open: boolean = false;
</script>

<div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
	<div class="px-4 py-5 sm:px-6">
		<div class="lg:flex lg:items-center lg:justify-between">
			<div class="flex-1 min-w-0">
				<nav class="flex" aria-label="Breadcrumb">
					<ol role="list" class="flex items-center space-x-4">
						<li>
							<div>
								<a href="#" class="text-gray-400 hover:text-gray-500">
									<svg
										class="flex-shrink-0 w-5 h-5"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="sr-only">Home</span>
								</a>
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
					Project Partners Ghana 🇬🇭
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
			{#if open}
				<div class="flex mt-5 lg:ml-4 lg:mt-0">
					<span class="hidden sm:block">
						<button
							type="button"
							class="inline-flex items-center px-2 py-2 text-sm font-semibold text-red-300 bg-red-500 rounded-md shadow-sm ring-1 ring-inset ring-red-400 hover:bg-red-600"
							on:click={() => (open = false)}
						>
							<Icon icon="solar:close-circle-linear" class="w-5 h-5 text-red-900" />
						</button>
					</span>
					<span class="hidden ml-3 sm:block">
						<button
							type="button"
							class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							<Icon
								icon="solar:question-circle-linear"
								class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
							/>
							Discuss
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
							Teach This</button
						>
					</span>

					<span class="sm:ml-3">
						<button
							type="button"
							class="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							<Icon
								icon="solar:download-minimalistic-linear"
								class="-ml-0.5 mr-1.5 h-5 w-5 text-white"
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
			{:else}
				<span class="relative sm:ml-3">
					<button
						type="button"
						class="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ring-4"
						on:click={() => (open = true)}
					>
						<Icon icon="solar:alt-arrow-down-outline" class="-ml-0.5 mr-1.5 h-5 w-5 text-white" />
						View
					</button>
				</span>
			{/if}
		</div>
	</div>
	{#if open}
		<div class="flex flex-row px-4 py-5 sm:p-6" transition:slide|local>
			<div class="p-4 pr-8 basis-1/3">
				<nav class="flex flex-col flex-1" aria-label="Sidebar">
					<ul role="list" class="-mx-2 space-y-1">
						{#each tabs as tab}
							{#if 'name' in tab}
								<li>
									<span
										class="flex p-2 pl-3 text-sm font-semibold leading-6 rounded-md group gap-x-3 hover:cursor-pointer"
										class:text-indigo-600={tab.name === activeTab}
										class:bg-gray-50={tab.name === activeTab}
										class:text-gray-700={tab.name !== activeTab}
										class:hover:text-indigo-600={tab.name !== activeTab}
										class:hover:bg-gray-50={tab.name !== activeTab}
										on:click={() => {
											if (tab.name === activeTab) return;
											dispatch('tabChange', tab.name);
										}}
										on:keypress={() => {
											if (tab.name === activeTab) return;
											dispatch('tabChange', tab.name);
										}}
									>
										{tab.name}
									</span>
								</li>
							{:else}
								<div class="inset-0 flex items-center" aria-hidden="true">
									<div class="w-full border-t border-gray-300" />
								</div>
							{/if}
						{/each}
					</ul>
				</nav>
			</div>
			<div class="basis-2/3">
				<slot name="content">
					<div class="p-4">This area is for the content</div>
				</slot>
			</div>
		</div>
	{/if}
</div>
