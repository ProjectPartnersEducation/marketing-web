<script lang="ts">
	import { fade } from 'svelte/transition';
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
	import ContactForm from '$lib/components/elements/contact/index.svelte';
	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
	import BigTopImage from '$lib/components/elements/bigtopimage/index.svelte';
	import StandardMargins from '$lib/components/elements/standardmargins/index.svelte';
	import CopyLink from '$lib/components/elements/copylink/index.svelte';

	let showOutlineOnDonorbox = false;
	let showFadeOut = false;
</script>

<svelte:head>
	<title>Get Involved | Project Partners Education</title>
	<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
	<script>
		Weglot.initialize({
			api_key: 'wg_64c47c59a31aa6dfcc0b6505d462c91f0'
		});
	</script>
</svelte:head>

{#if showFadeOut}
	<div
		class="fixed z-10 w-full h-full bg-black opacity-50"
		transition:fade={{ duration: 150 }}
		on:click={() => {
			showFadeOut = false;
			showOutlineOnDonorbox = false;
		}}
	/>
{/if}
<BigTopImage imgSrc={assets + '/images/four-students-looking-down.png'} text="Get Involved" />
<div class="px-6 xl:px-48 lg:px-32 md:px-24 sm:px-12">
	<div class="hidden w-3/4 border-b border-r pb-36 rounded-br-xl lg:block" />
	<div class="hidden w-3/4 pb-32 border-l lg:block" />
	<div id="donate">
		<div class="relative lg:border-l">
			<div class="mx-6 lg:mx-32 md:mx-24 sm:mx-12">
				<h1 class="inline text-5xl font-black font-heading">Your donation</h1>
				<p class="mt-8 text-2xl leading-loose text-justify">
					The world needs a new model for school learning.
				</p>
				<p class="mt-4 text-2xl leading-loose text-justify">
					Together with our global partners, <span class="font-black">we are building it</span>.
				</p>
				<p class="mt-4 text-2xl leading-loose text-justify">
					Supporting Project Partners means supporting our work to develop and deliver innovative
					learning resources to students and educators around the world. Our resources are always
					free to use and open-source wherever possible, and we are committed to ensuring that they
					are accessible to all.
				</p>
			</div>
		</div>
		<div
			class="grid px-6 pt-24 pb-48 bg-white rounded-bl-lg lg:border-b lg:border-l lg:grid-cols-2 gap-x-2"
		>
			<button
				id="donationbox"
				class="z-20 cursor-default"
				on:click={() => {
					showOutlineOnDonorbox = false;
					showFadeOut = false;
				}}
			>
				<script src="https://donorbox.org/widget.js"></script>
				<iframe
					title="Donation Form"
					src="https://donorbox.org/embed/project-partners-giving"
					name="donorbox"
					allow="payment"
					seamless
					frameborder="0"
					scrolling="no"
					style="max-height:none!important;margin:auto!important;"
					class="max-w-full transition-transform sm:min-w-[423px]"
					class:shadow-lg={showOutlineOnDonorbox}
					class:scale-105={showOutlineOnDonorbox}
				/>
			</button>
			<div class="flex flex-col max-w-full">
				<h3 class="mt-8 text-4xl font-black font-heading">Your impact</h3>
				<p class="mt-4 text-xl leading-loose text-justify">
					Watch the video below to hear about what your donation can help us to achieve.
				</p>
				<div class="py-8">
					{#await import('$lib/components/elements/video/index.svelte') then { default: Player }}
						<svelte:component
							this={Player}
							src="https://stream.mux.com/seYkmmBQjHdQeP4h2bCJnOvcynMvrTu02ZUIZHTg7h7U.m3u8"
						/>
					{/await}
				</div>
				<p class="mb-4 text-xl leading-loose text-justify">
					Your generosity will directly fund our global mission and we thank you for considering to
					make your donation recur every month.
				</p>
				<div class="mb-4 border-b"></div>
				<div class="flex flex-wrap justify-center gap-4 pb-6 mt-4 flex-0">
					<Button
						text="Donate Now!"
						action={() => {
							showOutlineOnDonorbox = true;
							showFadeOut = true;
						}}
						href="#donationbox"
						color="ppblue"
						big={true}
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="relative xl:border-r pt-36" id="volunteer">
		<div class=" lg:px-16">
			<h1 class="inline text-5xl font-black font-heading">Work with us</h1>
			<p class="mt-6 ml-auto text-2xl leading-loose">
				We are always looking for talented people to work with. If you are interested in
				contributing to our mission, please see our current open calls.
			</p>
		</div>
		<div class="pb-16 lg:px-16">
			<div class="grid lg:grid-cols-[66%,34%] gap-8 mt-8 place-items-center">
				<h2 class="text-4xl font-black justify-self-start lg:col-span-2 font-heading">
					Why Project Partners?
				</h2>
				<div>
					<h3 class="text-3xl font-black font-heading">Our Impact</h3>
					<ol class="grid grid-cols-1 gap-4 mt-4">
						<li class="text-xl leading-loose text-justify">
							In the modern world, it is vital that school leavers are armed with a balance of
							strong STEM skills and creative thinking. We say that everyone learns best when their
							natural curiosity and sense of achievement are amplified.
						</li>
						<li class="text-xl leading-loose text-justify">
							Our engaged learning model means that learners leave school with a passion for
							learning and the confidence to apply their knowledge to real-world problems.
						</li>
						<li class="text-xl leading-loose text-justify">
							By supporting us, you are directly supporting the development of a new, innovative
							model for education that will benefit learners, their communities, and their economies
							around the world.
						</li>
					</ol>
				</div>
				<img src="{assets}/images/two-children-reading.jpg" class="border-4 border-black" />
			</div>
			<div class="hidden mx-64 my-16 border-b lg:block"></div>
			<div class="grid lg:grid-cols-[34%,66%] gap-8 mt-8 place-items-center">
				<img src="{assets}/images/corn-image.png" class="order-2 max-h-64 lg:order-1" />
				<div class="order-1 lg:order-2">
					<h3 class="text-3xl font-black font-heading">Our Values</h3>
					<ol class="grid grid-cols-1 gap-2 mt-4">
						<li class="text-xl leading-loose text-justify">
							<span class="font-black">We are ambitious</span> - we won't stop until we have achieved
							our goal of transforming education for all school learners around the world.
						</li>
						<li class="text-xl leading-loose text-justify">
							<span class="font-black">We are innovative</span> - we are pushing for a new model of school
							education that is evidence-based and augmentative.
						</li>
						<li class="text-xl leading-loose text-justify">
							<span class="font-black">We are engaged</span> - we are committed to responding to and
							platforming the voices of our beneficiaries, including criticism and alternative viewpoints.
						</li>
						<li class="text-xl leading-loose text-justify">
							<span class="font-black">We are accessible</span> - we prioritise how easy it is for our
							beneficiaries to use our products and services, not how easy they are for us to build.
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<div class="px-6 pb-32 bg-white xl:border-r">
		<div class="flex flex-col text-center">
			<div class="my-16 text-2xl leading-loose text-justify">
				<span class="font-black">We are our people.</span> We are looking for people who are
				passionate about education and global development. We're a remote-first, international team
				and we always welcome speculative applications at <CopyLink
					text="hello@projectpartners.org"
				/> Or, you can browse our open volunteer positions below.
			</div>
			<div>
				<Button
					text="See our Current Openings"
					href="https://projectpartners.jobspage.co/"
					color="ppyellow"
					target="_blank"
				/>
			</div>
		</div>
	</div>
	<div class="hidden grid-cols-2 xl:grid">
		<div></div>
		<div class="py-24 border-t border-l rounded-tl"></div>
	</div>
	<div id="contact-us">
		<StrongBox>
			<h1 class="inline text-5xl font-black font-heading">Contact Us</h1>
			<p class="mt-6 text-2xl leading-loose">
				If you have any questions, comments, or feedback, please get in touch with us using the form
				below. You can also email us at <CopyLink text="hello@projectpartners.org" />
			</p>
			<div class="flex flex-col">
				<ContactForm />
			</div>
		</StrongBox>
	</div>
</div>

<hr class="my-24" />
<StrongLinks
	link1={{
		imgsrc: `${assets}/images/IMG_0459.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'See our resources',
		href: '/resources',
		hoverColor: 'ppyellow'
	}}
	link2={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'Two children looking at a book',
		text: 'Case Study: Ghana',
		href: '/about/ghana-case-study',
		hoverColor: 'ppgreen'
	}}
	bigLink={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'Read about us',
		href: '/about',
		hoverColor: 'ppred'
	}}
/>
