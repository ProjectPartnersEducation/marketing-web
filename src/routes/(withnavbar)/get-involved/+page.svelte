<script lang="ts">
	import { assets } from '$app/paths';

	import VideoPlayer from '$lib/components/elements/video/index.svelte';
	import Button from '$lib/components/elements/button.svelte';
	import ContactForm from '$lib/components/elements/contact/index.svelte';

	let showCopyAlert = false;
</script>

<section class="px-64 pb-12 mt-8 bg-slate-100">
	<div class="relative mb-40 text-center">
		<img src={assets + '/images/four-students-looking-down.jpg'} class="w-full" />

		<h1
			class="absolute top-0 left-0 inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white text-8xl font-handwriting"
		>
			Get Involved
		</h1>
		<h1
			class="absolute bottom-0 right-0 inline-block px-4 py-2 font-black text-center text-white bg-black border-4 border-white text-8xl font-handwriting"
		>
			Get Involved
		</h1>
	</div>
	<div id="donate">
		<div class="relative pb-12 border-l-2 border-l-black">
			<div class="absolute -translate-x-1/2 translate-y-1">
				<svg height="40" width="40">
					<circle cx="20" cy="20" r="20" fill="black" />
				</svg>
			</div>
			<div class="ml-12">
				<h1 class="inline text-5xl font-handwriting">Donate</h1>
				<p class="max-w-lg mt-6 text-xl">
					Your donation will help us to continue to develop free resources for students and
					educators around the world.
				</p>
			</div>
		</div>
		<div
			class="grid grid-cols-2 gap-2 px-6 py-10 bg-white border-2 rounded-tr-xl rounded-bl-xl border-l-black border-b-black border-t-slate-200 border-r-slate-200"
		>
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
						videoSrc="https://storage.googleapis.com/pp-marketing-web-public/videos/Project%20Partners_Final_Short%20Version%204k.mp4"
					/>
				</div>
				<h3 class="mt-8 text-3xl font-black">Your donation's impact</h3>
				<p class="mt-4 text-xl">
					The world needs a new model for school learning. <span class="font-black"
						>We are building it</span
					>.
				</p>
				<p class="mt-4 text-xl">
					Supporting Project Partners means supporting our work to develop and deliver:
				</p>
				<ol class="mt-4 text-xl">
					<li>Our learning materials, which are always free for everyone</li>
					<li class="mt-2">Our teacher training workshops, run by local experts</li>
					<li class="mt-2">Our global education leadership programmes</li>
					<li class="mt-2">Our public work to influence education policy</li>
				</ol>
				<h3 class="pt-4 mt-4 text-xl font-black text-center border-t">Or learn more about</h3>
				<div class="grid grid-cols-2 gap-2 pb-6 mt-4 border-b">
					<Button text="Our Methods" href="/about" />
					<Button text="Our Resources" href="/resources" />
				</div>
			</div>
		</div>
	</div>
	<div class="relative pt-64 pb-12 border-r-2 border-r-black" id="volunteer">
		<div class="absolute right-0 translate-x-1/2 translate-y-1">
			<svg height="40" width="40">
				<circle cx="20" cy="20" r="20" fill="black" />
			</svg>
		</div>
		<div class="mr-12 text-right">
			<h1 class="inline text-5xl font-handwriting">Volunteer</h1>
			<p class="max-w-lg mt-6 ml-auto text-xl">
				We are always looking for talented people to work with. If you are interested in
				contributing to our mission, please see our current open calls.
			</p>
		</div>
	</div>
	<div
		class="px-6 py-10 bg-white border-2 rounded-tl-xl rounded-br-xl border-r-black border-b-black border-t-slate-200 border-l-slate-200"
	>
		<div class="flex flex-col text-center">
			<div class="my-8 text-lg">
				<span class="text-xl font-black">We are our people.</span> We are looking for people who are
				passionate about education and global development.
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
	<div class="relative pt-64 pb-12 border-l-2 border-l-black" id="contact-us">
		<div class="absolute -translate-x-1/2 translate-y-1">
			<svg height="40" width="40">
				<circle cx="20" cy="20" r="20" fill="black" />
			</svg>
		</div>
		<div class="ml-12">
			<h1 class="inline text-5xl font-handwriting">Contact Us</h1>
			<p class="max-w-lg mt-6 text-xl">
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
	<div
		class="px-6 py-10 bg-white border-2 rounded-tl-xl rounded-br-xl border-r-black border-b-black border-t-slate-200 border-l-slate-200"
	>
		<div class="flex flex-col">
			<h3 class="mt-8 ml-32 text-3xl font-black">Contact Form</h3>
			<ContactForm />
		</div>
	</div>
</section>
