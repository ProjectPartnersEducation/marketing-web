<script lang="ts">
	import Icon from '@iconify/svelte';
	import Link from '$lib/components/shared/Link.svelte';

	interface MenuItem {
		title: string;
		desc: string;
		linkText: string | null;
		href: string | null;
	}

	export let title: string = 'On this page';
	export let subtitle: string;
	export let menuItems: MenuItem[] = [];
</script>

<div class="pt-24 lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-36">
	<div class="lg:col-span-5">
		<h2 class="text-2xl font-bold leading-10 text-gray-900">{title}</h2>
		<p class="mt-4 text-base leading-7 text-gray-600">
			{subtitle}
		</p>
	</div>
	<div class="mt-10 lg:col-span-7 lg:mt-0">
		<dl class="space-y-10">
			{#each menuItems as item}
				<div>
					<dt class="text-base font-semibold leading-7 text-gray-900">{item.title}</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600">
						{item.desc}
					</dd>
					{#if item.linkText && item.href}
						<Link text={item.linkText} href={item.href} />
					{/if}
				</div>
			{/each}
		</dl>
	</div>
</div>
