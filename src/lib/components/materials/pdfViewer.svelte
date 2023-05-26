<script context="module" lang="ts">
	declare var AdobeDC: any;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

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
			clientId: '6827082a606e48ea9f498ce7b3b211e0',
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
