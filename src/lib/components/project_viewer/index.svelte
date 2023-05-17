<script lang="ts">
	export let url: string;
	export let title: string = 'Project Viewer';
</script>

<iframe src={url} class="w-full h-screen" allow="autoplay" {title} />
