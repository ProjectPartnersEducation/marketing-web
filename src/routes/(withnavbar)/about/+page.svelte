<script lang="ts">
	import ProjectPartnersActivitiesDiagram from '$lib/components/diagrams/ProjectPartnersActivities/index.svelte';
	import ThreeStagesOfEngagedLearningDiagram from '$lib/components/diagrams/ThreeStagesOfEngagedLearning/index.svelte';
</script>

<div id="pedagogy"></div>
<div id="work"></div>
<div id="partners"></div>

<div class="w-3/4 mx-auto">
	<h1 class="mt-8 mb-40 text-5xl font-black text-left">Our pedagogy</h1>
	<ThreeStagesOfEngagedLearningDiagram />
</div>
<hr class="my-24 mx-[25%]" />
<h1 class="mb-40 text-5xl font-black text-center">The way we work</h1>
<div class="w-3/4 mx-auto">
	<ProjectPartnersActivitiesDiagram />
</div>
<hr class="my-24" />
