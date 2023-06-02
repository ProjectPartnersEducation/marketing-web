<script>
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import TextSection from '$lib/components/shared/TextSection.svelte';
	import ListContainer from '$lib/components/shared/ListContainer.svelte';
	import ListItem from '$lib/components/shared/ListItem.svelte';
</script>

<div>
	<PageHeading
		title="Donate"
		description="Project Partners is a small charity with a mission to make learning fun and engaging for all children. We are entirely volunteer-led and rely on donations to continue our work."
	/>

	<div class="grid grid-cols-2 mt-6">
		<div>
			<SectionHeading title="Why Donate?" withMargin={false} />
			<TextSection level="2">
				We believe that every child deserves a quality education. That's why we're committed to
				making our learning resources available to everyone, regardless of their financial
				situation. Your donation will help us continue to provide free access to our learning
				resources and support our mission to make learning fun and engaging for all children.
			</TextSection>
			<SectionHeading title="Your impact" level="2">
				<div slot="subtitle">
					We work with our partners on <a
						href="{base}/initiatives"
						target="_blank"
						class="underline decoration-indigo-600">well-defined initiatives</a
					> which further our charitable aims across Ghana and the UK. Your donation will be used:
				</div>
			</SectionHeading>
			<ListContainer level="2">
				<ListItem>To run Project Partners Maths programmes in schools and community groups</ListItem
				>
				<ListItem
					>To develop new free learning resources that engage learners with the world around us</ListItem
				>
				<ListItem
					>To run teacher training workshops and support schools in transitioning to a more engaging
					curriculum</ListItem
				>
				<ListItem
					>To work with governments that aspire to a future of optimism and respect for their young
					population</ListItem
				>
			</ListContainer>
		</div>
		<div>
			<script src="https://donorbox.org/widget.js"></script>
			<iframe
				src="https://donorbox.org/embed/project-partners-giving?default_interval=o"
				name="donorbox"
				allow="payment"
				seamless={true}
				title="Project Partners Giving"
				frameborder="0"
				scrolling="no"
				height="900px"
				width="100%"
				class="mx-auto max-w-[423px]"
			/>
		</div>
	</div>
</div>

<SectionHeading level="2">Other ways to support us</SectionHeading>
