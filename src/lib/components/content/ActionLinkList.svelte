<script lang="ts">
	import Icon from '@iconify/svelte';

	type ActionLink = {
		title: string;
		description: string;
		icon: string;
		href: string;
		linkText: string;
		iconAdditionalClasses?: string;
	};

	export let items: ActionLink[] = [];
</script>

<div class="px-6 py-12 bg-white isolate sm:py-18 lg:px-8">
	<div class="max-w-lg mx-auto mt-20 space-y-16">
		{#each items as item}
			<div class="flex gap-x-6">
				<div
					class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 {item.iconAdditionalClasses ??
						'bg-indigo-600'}"
				>
					<Icon icon={item.icon} class="w-6 h-6 text-white" />
				</div>
				<div>
					<h3 class="text-base font-semibold leading-7 text-gray-900">{item.title}</h3>
					<p class="mt-2 leading-7 text-gray-600">
						{item.description}
					</p>
					<p class="mt-4">
						<a href={item.href} class="text-sm font-semibold leading-6 text-indigo-600"
							>{item.linkText}<Icon icon="solar:arrow-right-linear" class="inline w-4 h-4 ml-1" />
						</a>
					</p>
				</div>
			</div>
		{/each}
		<!-- <div class="flex gap-x-6">
			<div class="flex items-center justify-center w-10 h-10 bg-green-600 rounded-lg shrink-0">
				<Icon icon="mdi:whatsapp" class="w-6 h-6 text-white" />
			</div>
			<div>
				<h3 class="text-base font-semibold leading-7 text-gray-900">We're on WhatsApp</h3>
				<p class="mt-2 leading-7 text-gray-600">
					We can send you any of our materials in PDF format via WhatsApp. Just send us a message
					and we'll get back to you as soon as we can.
				</p>
				<p class="mt-4">
					<a
						href="https://wa.me/447914054095"
						target="_blank"
						class="text-sm font-semibold leading-6 text-indigo-600"
						>Start conversation (+44 7914 054095)<Icon
							icon="solar:arrow-right-linear"
							class="inline w-4 h-4 ml-1"
						/>
					</a>
				</p>
			</div>
		</div>
		<div class="flex gap-x-6">
			<div class="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg shrink-0">
				<Icon icon="solar:book-linear" class="w-6 h-6 text-white" />
			</div>
			<div>
				<h3 class="text-base font-semibold leading-7 text-gray-900">Printed Materials</h3>
				<p class="mt-2 leading-7 text-gray-600">
					If you are an organisation such as a school or community group, please consider applying
					to become a partner, where we can support you with printed materials.
				</p>
				<p class="mt-4">
					<a href="{base}/partnerships" class="text-sm font-semibold leading-6 text-indigo-600"
						>Partner with us<Icon icon="solar:arrow-right-linear" class="inline w-4 h-4 ml-1" />
					</a>
				</p>
			</div>
		</div>
		<div class="flex gap-x-6">
			<div class="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg shrink-0">
				<Icon icon="solar:chat-round-like-outline" class="w-6 h-6 text-white" />
			</div>
			<div>
				<h3 class="text-base font-semibold leading-7 text-gray-900">Contact Us</h3>
				<p class="mt-2 leading-7 text-gray-600">
					For any other enquiries, please contact us and we will do our best to help you.
				</p>
				<p class="mt-4">
					<a href="{base}/contact" class="text-sm font-semibold leading-6 text-indigo-600"
						>Send us a message<Icon icon="solar:arrow-right-linear" class="inline w-4 h-4 ml-1" />
					</a>
				</p>
			</div>
		</div> -->
	</div>
</div>
