<script lang="ts">
	import ProjectPartnersActivitiesDiagram from '$lib/components/diagrams/ProjectPartnersActivities/index.svelte';
	import ThreeStagesOfEngagedLearningDiagram from '$lib/components/diagrams/ThreeStagesOfEngagedLearning/index.svelte';
</script>

<div id="pedagogy"></div>
<div id="work"></div>
<div id="partners"></div>

<div class="mx-64 mt-32">
	<h2 class="mt-8 mb-20 text-5xl text-left font-handwriting">Our pedagogy</h2>
	<ThreeStagesOfEngagedLearningDiagram />
</div>
<hr class="my-24 mx-[25%]" />
<div class="mx-64">
	<h2 class="mt-8 mb-20 text-5xl text-left font-handwriting">The way we work</h2>
	<ProjectPartnersActivitiesDiagram />
</div>
<hr class="my-24" />
