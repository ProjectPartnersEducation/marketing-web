<script>
	import { assets } from '$app/paths';

	import ContactForm from '$lib/components/elements/contact/index.svelte';
	import CopyLink from '$lib/components/elements/copylink/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
</script>

<svelte:head>
	<title>Institutional Supporters | Project Partners Education</title>
</svelte:head>

<div class="hidden grid-cols-3 px-64 lg:grid">
	<div class="col-span-2 py-16 border-b-2 border-r-2 rounded-br-lg"></div>
</div>
<div class="px-6 xl:px-64 lg:px-36 md:px-24 sm:px-12">
	<div
		class="grid items-center gap-1 py-32 rounded-bl-lg lg:grid-cols-2 lg:px-16 lg:border-b lg:border-l"
	>
		<h1 class="mb-24 text-6xl lg:col-span-2 font-handwriting">Institutional Supporters</h1>
		<img src="{assets}/images/three-smiling-children.jpg" class="w-full border-4 border-black" />
		<div class="grid grid-cols-1 py-4 text-xl leading-loose text-justify lg:px-4 gap-y-4 gap-x-8">
			<p>
				Project Partners is an ambitious and innovative new charity with a mission to transform
				education for all school learners around the globe.
			</p>
			<p>
				Our institutional supporters are absolutely vital to our goal: a world where all learners
				are engaged and empowered.
			</p>
			<p>
				Your support will help us with the ongoing development of our resources and reach more
				learners and their communities around the world, no matter where they are.
			</p>
		</div>
	</div>
	<div class="rounded-br-lg lg:px-16 lg:py-48 lg:border-b lg:border-r">
		<h2 class="py-2 text-4xl text-center text-white bg-black font-handwriting">
			We are proudly supported by
		</h2>
		<h3 class="mt-16 text-2xl font-black">Our Government Partners</h3>
		<div class="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4 place-items-center">
			<img class=" max-h-24" src="{assets}/images/supporters/unesco-ghana-logo.png" />
			<img class=" max-h-24" src="{assets}/images/supporters/ges-logo.png" />
			<img class=" max-h-24" src="{assets}/images/supporters/nacca-logo.png" />
			<img class=" max-h-24" src="{assets}/images/supporters/ntc-logo.jpg" />
		</div>
		<h3 class="mt-16 text-2xl font-black">Our NGO Partners</h3>
		<div class="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 place-items-center">
			<img class=" max-h-24" src="{assets}/images/supporters/brightside-logo.png" />
			<img class=" max-h-24" src="{assets}/images/supporters/rotary-club-logo.png" />
		</div>
	</div>
	<div class="py-16 lg:px-16 lg:border-l">
		<div class="grid lg:grid-cols-[66%,34%] gap-8 mt-8 place-items-center">
			<h2 class="text-4xl justify-self-start lg:col-span-2 font-handwriting">
				Why Project Partners?
			</h2>
			<div>
				<h3 class="text-3xl font-handwriting">Our Impact</h3>
				<ol class="grid grid-cols-1 gap-4 mt-4">
					<li class="text-xl leading-loose text-justify">
						In the modern world, it is vital that school leavers are armed with a balance of strong
						STEM skills and creative thinking. We say that everyone learns best when their natural
						curiosity and sense of achievement are amplified.
					</li>
					<li class="text-xl leading-loose text-justify">
						Our engaged learning model means that learners leave school with a passion for learning
						and the confidence to apply their knowledge to real-world problems.
					</li>
					<li class="text-xl leading-loose text-justify">
						By supporting us, you are directly supporting the development of a new, innovative model
						for education that will benefit learners, their communities, and their economies around
						the world.
					</li>
				</ol>
			</div>
			<img src="{assets}/images/two-children-reading.jpg" class="border-4 border-black" />
		</div>
		<div class="hidden mx-64 my-16 border-b lg:block"></div>
		<div class="grid lg:grid-cols-[34%,66%] gap-8 mt-8 place-items-center">
			<img src="{assets}/images/corn-image.png" class="order-2 max-h-64 lg:order-1" />
			<div class="order-1 lg:order-2">
				<h3 class="text-3xl font-handwriting">Our Values</h3>
				<ol class="grid grid-cols-1 gap-2 mt-4">
					<li class="text-xl leading-loose text-justify">
						<span class="font-black">We are ambitious</span> - we won't stop until we have achieved our
						goal of transforming education for all school learners around the world.
					</li>
					<li class="text-xl leading-loose text-justify">
						<span class="font-black">We are innovative</span> - we are pushing for a new model of school
						education that is evidence-based and augmentative.
					</li>
					<li class="text-xl leading-loose text-justify">
						<span class="font-black">We are engaged</span> - we are committed to responding to and platforming
						the voices of our beneficiaries, including criticism and alternative viewpoints.
					</li>
					<li class="text-xl leading-loose text-justify">
						<span class="font-black">We are accessible</span> - we prioritise how easy it is for our
						beneficiaries to use our products and services, not how easy they are for us to build.
					</li>
				</ol>
			</div>
		</div>
	</div>
	<div class="hidden grid-cols-2 lg:grid">
		<div class="pb-16 border-b-2 border-l-2 rounded-bl-lg"></div>
		<div />
		<div class="py-16 border-r-2"></div>
	</div>
</div>
<div class="xl:px-48 lg:px-36 md:px-24 sm:px-12">
	<StrongBox>
		<div class="w-full text-center">
			<h2 class="inline-block px-4 py-3 text-6xl text-white bg-black rounded-sm font-handwriting">
				Let's make this happen.
			</h2>
		</div>
		<p class="mt-8 text-xl leading-loose">
			Please use the contact form below to get in touch with us about institutional sponsorships,
			partnerships, or any other way you would like to support us.
		</p>
		<p class="mt-8 text-xl leading-loose">
			If you believe in a future where all learners are engaged and empowered, then we would love to
			hear from you. You can also email us directly at
			<CopyLink text="hello@projectpartners.org" additionalClasses="underline text-ppblue" />
		</p>
		<p class="mt-4 leading-loose text-md text-slate-500">
			If you would like to support us as an individual, please visit our <a
				href="/get-involved"
				class="underline cursor-pointer">Get Involved</a
			> page.
		</p>
		<ContactForm />
	</StrongBox>
</div>
