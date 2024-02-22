<script lang="ts">
	export let progress: number;
	export let intervalPeriod: number;

	export let bgColor: string = 'bg-indigo-500';
</script>

<div
	class="w-full h-full transition-all ease-linear {bgColor}"
	style="transform: scaleY({progress}); transform-origin: 0 100%; transition-duration: {intervalPeriod}ms;"
/>
