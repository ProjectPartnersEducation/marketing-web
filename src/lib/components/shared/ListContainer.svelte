<script lang="ts">
	type Level = '1' | '2';

	export let level: Level = '1';

	const levels = {
		'1': 'text-xl leading-8',
		'2': 'text-base'
	};

	const defaultClasses = 'mt-8 space-y-8 text-gray-600';

	$: classes = `${defaultClasses} ${levels[level]}`;
</script>

<ul class={classes}>
	<slot />
</ul>
