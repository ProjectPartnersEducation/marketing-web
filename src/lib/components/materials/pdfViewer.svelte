<script context="module" lang="ts">
	declare var AdobeDC: any;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_ADOBE_API_KEY } from '$env/static/public';

	export let url: string;
	export let name: string;

	const loadAdobeDCView = () => {
		const script = document.createElement('script');
		script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
		document.body.appendChild(script);

		document.addEventListener('adobe_dc_view_sdk.ready', () => {
			showPDFFileFromURL(url, name);
		});
	};

	const showPDFFileFromURL = (fileURL: string, fileName: string) => {
		const adobeDCView = new AdobeDC.View({
			clientId: PUBLIC_ADOBE_API_KEY,
			divId: 'adobe-dc-view'
		});

		adobeDCView.previewFile(
			{
				content: { location: { url: fileURL } },
				metaData: {
					fileName: fileName
				}
			},
			{
				embedMode: 'SIZED_CONTAINER'
			}
		);
	};

	const previewFile = (fileURL: string, fileName: string) => {
		if (typeof AdobeDC !== 'undefined') {
			showPDFFileFromURL(fileURL, fileName);
			console.log('Loaded content');
		} else {
			loadAdobeDCView();
		}
	};

	onMount(() => {
		previewFile(url, name);
	});

	$: previewFile(url, name);
</script>

<div>
	<div
		id="adobe-dc-view"
		class="flex items-center justify-center w-full border-none h-screen lg:h-[calc(100vh-4rem)]"
	/>
</div>
