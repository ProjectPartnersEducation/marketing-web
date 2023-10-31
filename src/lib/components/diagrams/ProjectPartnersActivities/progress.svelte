<script lang="ts">
	export let progress: number;
	export let intervalPeriod: number;
</script>

<div
	class="w-full h-full transition-all ease-linear bg-indigo-500"
	style="transform: scaleY({progress}); transform-origin: 0 100%; transition-duration: {intervalPeriod}ms;"
/>
