<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	export let activeElement: string = '';

	let svg: SVGElement;
	let topLevelGroups: Map<string, SVGElement>;
	let screenWidth: number;

	const inactiveStyle = 'opacity: 0.2; cursor: pointer; transition: opacity 0.5s ease-in-out;';
	const activeStyle = 'opacity: 1; cursor: default; transition: opacity 0.5s ease-in-out;';
	const globalStyle = 'opacity: 1; cursor: pointer; transition: opacity 0.5s ease-in-out;';

	const dispatch = createEventDispatcher();

	const dispatchSetActiveGroup = (id: string) => {
		dispatch('setactivegroup', { id });
	};

	const setActiveGroup = (groupId?: string) => {
		if (!svg) {
			return;
		}

		if (groupId && !topLevelGroups.has(groupId)) {
			console.warn(`Group with id ${groupId} not found`);
			return;
		}

		topLevelGroups.forEach((el, id) => {
			if (!groupId) {
				el.setAttribute('style', globalStyle);
			} else if (id === groupId) {
				el.setAttribute('style', activeStyle);
			} else {
				el.setAttribute('style', inactiveStyle);
			}

			if (!groupId || id !== groupId) {
				el.onclick = () => {
					dispatchSetActiveGroup(id);
				};
			} else {
				el.onclick = null;
			}
		});
	};

	$: screenWidth >= 1280 ? setActiveGroup(activeElement) : setActiveGroup();

	onMount(() => {
		topLevelGroups = new Map(
			Array.from(svg.querySelectorAll('g[id]')).map((g) => [g.id, g as SVGElement])
		);

		setActiveGroup(activeElement);
	});
</script>

<svelte:window bind:innerWidth={screenWidth} />

<svg inline-src="ProjectPartnersActivities" bind:this={svg} />
