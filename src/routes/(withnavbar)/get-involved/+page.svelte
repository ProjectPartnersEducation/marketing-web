<script lang="ts">
	import { assets } from '$app/paths';

	import VideoPlayer from '$lib/components/elements/video/index.svelte';
	import Button from '$lib/components/elements/button.svelte';
	import ContactForm from '$lib/components/elements/contact/index.svelte';

	let showCopyAlert = false;
</script>

<section class="px-32 pb-12 mt-8">
	<div class="relative mx-32 mb-40 text-center">
		<img src={assets + '/images/four-students-looking-down.jpg'} class="w-full" />

		<h1
			class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white top-2 left-2 text-8xl font-handwriting"
		>
			Get Involved
		</h1>
		<h1
			class="absolute inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white bottom-2 right-2 text-8xl font-handwriting"
		>
			Get Involved
		</h1>
	</div>
	<div id="donate">
		<div class="relative border-l">
			<div class="mx-24">
				<h1 class="inline text-5xl font-handwriting">Donate</h1>
				<p class="mt-6 text-2xl leading-loose">
					Your donation will help us to continue to develop free resources for students and
					educators around the world.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 px-6 pt-24 pb-48 bg-white border-b border-l rounded-bl-lg gap-x-2">
			<div>
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
					class="mx-auto"
				/>
			</div>
			<div class="flex flex-col">
				<div>
					<VideoPlayer
						src="https://storage.googleapis.com/pp-marketing-web-public/videos/Project%20Partners_Final_Short%20Version%204k.mp4"
					/>
				</div>
				<h3 class="mt-8 text-3xl font-handwriting">Your donation's impact</h3>
				<p class="mt-4 text-xl">
					The world needs a new model for school learning. <span class="font-black"
						>We are building it</span
					>.
				</p>
				<p class="mt-4 text-xl">
					Supporting Project Partners means supporting our work to develop and deliver:
				</p>
				<ol class="mt-4 text-xl list-disc">
					<li>Our learning materials, which are always free for everyone</li>
					<li class="mt-2">Our teacher training workshops, run by local experts</li>
					<li class="mt-2">Our global education leadership programmes</li>
					<li class="mt-2">Our public work to influence education policy</li>
				</ol>
				<div class="mt-5 mb-4 border-b"></div>
				<div class="grid grid-cols-1 gap-2 pb-6 mt-4">
					<Button text="Donate Now!" action={() => {}} color="ppyellow" />
					<Button text="Institutional Donors & Partnerships" href="/get-involved/institutions" />
				</div>
			</div>
		</div>
	</div>
	<div class="relative pt-64 border-r" id="volunteer">
		<div class="mx-24">
			<h1 class="inline text-5xl font-handwriting">Work with us</h1>
			<p class="mt-6 ml-auto text-2xl leading-loose">
				We are always looking for talented people to work with. If you are interested in
				contributing to our mission, please see our current open calls.
			</p>
		</div>
	</div>
	<div class="px-6 pb-32 bg-white border-b border-r rounded-br-xl">
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
	<div class="relative pt-64 pb-12 border-l" id="contact-us">
		<div class="mx-24">
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
		</div>
	</div>
	<div class="px-6 py-10 bg-white border border-black rounded-bl-xl rounded-tr-xl rounded-br-xl">
		<div class="flex flex-col">
			<ContactForm />
		</div>
	</div>
</section>
