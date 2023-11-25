<script lang="ts">
	import { fade } from 'svelte/transition';
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
	import ContactForm from '$lib/components/elements/contact/index.svelte';
	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
	import BigTopImage from '$lib/components/elements/bigtopimage/index.svelte';

	let showCopyAlert = false;
	let showOutlineOnDonorbox = false;
	let showFadeOut = false;
</script>

<svelte:head>
	<title>Get Involved | Project Partners Education</title>
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
<section class="px-32 pb-12 mt-8">
	<div class="mx-32">
		<!-- <img src={assets + '/images/four-students-looking-down.jpg'} class="w-full" />

		<h1
			class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white top-2 left-2 text-8xl font-handwriting"
		>
			Get Involved
		</h1>
		<h1
			class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white bottom-2 right-2 text-8xl font-handwriting"
		>
			Get Involved
		</h1> -->
		<BigTopImage imgSrc={assets + '/images/four-students-looking-down.jpg'} text="Get Involved" />
	</div>
	<div class="w-3/4 border-b border-r pb-36 rounded-br-xl" />
	<div class="w-3/4 pb-32 border-l" />
	<div id="donate">
		<div class="relative border-l">
			<div class="mx-32">
				<h1 class="inline text-5xl font-handwriting">Donate</h1>
				<p class="mt-6 text-2xl leading-loose text-justify">
					The world needs a new model for school learning. Together with our global partners, <span
						class="font-black">we are building it</span
					>.
				</p>
				<p class="mt-6 text-2xl leading-loose text-justify">
					Supporting Project Partners means supporting our work to develop and deliver innovative
					learning resources to students and educators around the world. Our resources are always
					free to use and open-source wherever possible, and we are committed to ensuring that they
					are accessible to all.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 px-6 pt-24 pb-48 bg-white border-b border-l rounded-bl-lg gap-x-2">
			<div
				id="donationbox"
				class="z-20"
				on:click={() => {
					showFadeOut = false;
				}}
			>
				<script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
				<iframe
					title="Donation Form"
					src="https://donorbox.org/embed/project-partners-giving"
					name="donorbox"
					allowpaymentrequest="allowpaymentrequest"
					seamless
					frameborder="0"
					scrolling="no"
					style="max-width: 1000px; min-width: 423px; max-height:none!important"
					class="mx-auto transition-transform"
					class:shadow-lg={showOutlineOnDonorbox}
					class:scale-105={showOutlineOnDonorbox}
				/>
			</div>
			<div class="flex flex-col">
				<h3 class="mt-8 text-4xl font-handwriting">Your donation's impact</h3>
				<p class="mt-4 text-xl leading-loose text-justify">
					Watch the video below to see our Chair of Trustees, Jonny, explain what your donation can
					help us to achieve.
				</p>
				<div class="py-8">
					{#await import('$lib/components/elements/video/index.svelte') then { default: Player }}
						<svelte:component
							this={Player}
							src="https://storage.googleapis.com/pp-marketing-web-public/videos/Project%20Partners_Final_Short%20Version%204k.mp4"
						/>
					{/await}
				</div>
				<div class="mb-4 border-b"></div>
				<div class="flex justify-center gap-4 pb-6 mt-4 flex-0">
					<Button
						text="Donate Now!"
						action={() => {
							showOutlineOnDonorbox = true;
							showFadeOut = true;
						}}
						color="ppyellow"
					/>
					<Button text="Institutional Donors & Partnerships" href="/get-involved/institutions" />
				</div>
			</div>
		</div>
	</div>
	<div class="relative border-r pt-36" id="volunteer">
		<div class="mx-32">
			<h1 class="inline text-5xl font-handwriting">Work with us</h1>
			<p class="mt-6 ml-auto text-2xl leading-loose">
				We are always looking for talented people to work with. If you are interested in
				contributing to our mission, please see our current open calls.
			</p>
		</div>
	</div>
	<div class="px-6 pb-32 bg-white border-r">
		<div class="flex flex-col text-center">
			<div class="my-16 text-2xl">
				<span class="font-black">We are our people.</span> We are looking for people who are passionate
				about education and global development.
			</div>
			<div>
				<Button
					text="See our Current Openings"
					href="https://projectpartners.jobspage.co/"
					target="_blank"
				/>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2">
		<div></div>
		<div class="py-24 border-t border-l rounded-tl"></div>
	</div>
	<div id="contact-us" class="px-32">
		<StrongBox>
			<h1 class="inline text-5xl font-handwriting">Contact Us</h1>
			<p class="mt-6 text-2xl leading-loose">
				If you have any questions, comments, or feedback, please get in touch with us using the form
				below. You can also email us at <span
					class="underline cursor-pointer"
					on:click={() => {
						navigator.clipboard.writeText('hello@projectpartners.org');
						showCopyAlert = true;
					}}
					on:keypress={() => {
						navigator.clipboard.writeText('hello@projectpartners.org');
						showCopyAlert = true;
					}}>hello@projectpartners.org</span
				>.
				{#if showCopyAlert}
					<span
						class="inline-flex items-center px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full"
						>Copied!</span
					>
				{/if}
			</p>
			<div class="flex flex-col">
				<ContactForm />
			</div>
		</StrongBox>
	</div>
</section>

<hr class="my-24" />
<StrongLinks
	link1={{
		imgsrc: `${assets}/images/IMG_0459.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'See our resources',
		href: '',
		hoverColor: 'ppyellow'
	}}
	link2={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'Two children looking at a book',
		text: 'Case Study: Project Partners in Ghana',
		href: '',
		hoverColor: 'ppblue'
	}}
	bigLink={{
		imgsrc: `${assets}/images/IMG_0034.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'Get Involved',
		href: '',
		hoverColor: 'ppred'
	}}
/>
