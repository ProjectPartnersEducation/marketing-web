<script lang="ts">
	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';

	export let title: string;
</script>

<StandardMargins addClass="space-y-8">
	<div class="mt-8">
		<a href="/about/team" class="text-2xl underline">Back to Team</a>
	</div>
	<div>
		<h2 class="text-xl text-slate-600">Introducing</h2>
		<h1 class="text-4xl font-black">{title}</h1>
	</div>
	<!-- <div class="flex flex-row flex-wrap">
		<div class="max-w-xl">
			<img src="{assets}/images/team/ts.jpg" alt="" class="w-full" />
		</div>
	</div> -->
</StandardMargins>
