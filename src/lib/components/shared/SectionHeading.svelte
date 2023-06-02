<script lang="ts">
	export let title: string | null = null;
	export let subtitle: string | null = null;
	export let id: string | null = null;
	export let level: '1' | '2' | '3' = '1';
	export let withMargin = true;

	const headingLevels = {
		'1': 'text-2xl sm:text-3xl',
		'2': 'text-xl sm:text-2xl',
		'3': 'text-lg sm:text-md font-semibold leading-7'
	};

	const subheadingLevels = {
		'1': 'text-lg leading-8',
		'2': 'text-base leading-7',
		'3': 'text-sm leading-6'
	};

	const headingBaseClasses = 'font-bold tracking-tight text-gray-900';
	const subheadingBaseClasses = 'text-gray-600';

	const headingMargin = withMargin ? 'mt-12 lg:mt-24' : '';
	const subheadingMargin = withMargin ? 'mt-6' : '';

	$: headingClass = headingBaseClasses + ` ${headingLevels[level]} ${headingMargin}`;
	$: subheadingClass = subheadingBaseClasses + ` ${subheadingLevels[level]} ${subheadingMargin}`;
</script>

<h1 class={headingClass} {id}>
	{#if title}
		{title}
	{:else}
		<slot name="title" />
		<slot />
	{/if}
</h1>
<p class={subheadingClass}>
	{#if subtitle}
		{subtitle}
	{:else}
		<slot name="subtitle" />
	{/if}
</p>
