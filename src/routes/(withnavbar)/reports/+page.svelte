<script lang="ts">
	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';
	import CopyLink from '$lib/components/elements/copylink/index.svelte';

	const reports = [
		{
			id: '2021',
			text: 'Annual Report for 2020/21',
			href: '/reports/annualreport2021'
		},
		{
			id: '2122',
			text: 'Annual Report for 2021/22',
			href: '/reports/annualreport2122'
		},
		{
			id: '2223',
			text: 'Annual Report for 2022/23',
			href: '/reports/annualreport2223'
		}
	];
</script>

<svelte:head>
	<title>Our Annual Reports | Project Partners Education</title>
	<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
	<script>
		Weglot.initialize({
			api_key: 'wg_64c47c59a31aa6dfcc0b6505d462c91f0'
		});
	</script>
</svelte:head>

<StandardMargins addClass="mt-16">
	<h1 class="text-5xl font-black font-heading">Our Annual Reports</h1>
	<p class="mt-16 text-2xl leading-loose">
		Each year, the Board of Trustees publishes an Annual Report, which includes a summary of the
		activities of the charity, its financial statements and a report from the Chair of Trustees. We
		are also required to submit these reports to the Charity Commission of England and Wales, where
		they are available to the public on our <a
			href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5156327/charity-overview"
			>Charity Commission page</a
		>
	</p>
	<ul class="mt-16 space-y-8 text-2xl list-inside list-square">
		{#each reports as report}
			<li id={report.id}>
				<a href={report.href} class="underline decoration-ppyellow" target="_blank">{report.text}</a
				>
			</li>
		{/each}
	</ul>
	<p class="mt-16 text-2xl leading-loose">
		If you have any questions about our annual reports, please contact us at <CopyLink
			text="hello@projectpartners.org"
		/>
	</p></StandardMargins
>
