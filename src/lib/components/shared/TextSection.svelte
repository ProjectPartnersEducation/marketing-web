<script lang="ts">
	type Level = '1' | '2';

	export let level: Level = '1';

	const levels = {
		'1': 'text-xl leading-8',
		'2': 'text-base leading-7'
	};

	const baseClasses = 'mt-6 text-gray-700';

	$: levelClass = baseClasses + ' ' + levels[level];
</script>

<p class={levelClass}>
	<slot />
</p>
