<script lang="ts">
	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';
	import CopyLink from '$lib/components/elements/copylink/index.svelte';

	const policies = [
		{
			id: 'privacy',
			text: 'Privacy Policy',
			href: '/policies/privacy'
		},
		{
			id: 'safeguarding',
			text: 'Child Safeguarding Policy',
			href: '/policies/safeguarding'
		},
		{
			id: 'edi',
			text: 'Equality, Diversity and Inclusion Policy',
			href: '/policies/edi'
		}
	];
</script>

<svelte:head>
	<title>Our Policies| Project Partners Education</title>
	<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
	<script>
		Weglot.initialize({
			api_key: 'wg_64c47c59a31aa6dfcc0b6505d462c91f0'
		});
	</script>
</svelte:head>

<StandardMargins addClass="mt-16">
	<h1 class="text-5xl font-black font-handwriting">Our Policies</h1>
	<ul class="mt-16 space-y-8 text-2xl list-inside list-square">
		{#each policies as policy}
			<li id={policy.id}>
				<a href={policy.href} class="underline decoration-ppyellow" target="_blank">{policy.text}</a
				>
			</li>
		{/each}
	</ul>
	<p class="mt-16 text-2xl leading-loose">
		The Executive Team, under supervision of the Board of Trustees, is responsible for ensuring that
		the charity has appropriate policies and procedures in place to govern its activities. The
		policies and procedures are reviewed and updated on a regular basis. Our key policies and
		procedures are available to download by clicking on the links above.
	</p>
	<p class="mt-16 text-2xl leading-loose">
		If you have any questions about our policies, please contact us at <CopyLink
			additionalClasses="underline decoration-ppyellow"
			text="hello@projectpartners.org"
		></CopyLink>
	</p></StandardMargins
>
