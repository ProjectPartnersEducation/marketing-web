<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let aboveHeadingText: string = '';
</script>

<div class="px-6 pt-24 bg-white sm:pt-32 lg:px-8">
	<div class="max-w-2xl mx-auto text-center">
		{#if aboveHeadingText}
			<p class="text-base font-semibold leading-7 text-indigo-600">
				{aboveHeadingText}
			</p>
		{/if}
		<h2 class="mt-2 text-4xl font-bold text-gray-900 sm:text-6xl font-title">
			{title}
		</h2>
		{#if description}
			<p class="mt-6 text-lg leading-8 text-gray-600 font-body">
				{description}
			</p>
		{/if}
		<slot />
		<slot name="below-heading" />
	</div>
</div>
