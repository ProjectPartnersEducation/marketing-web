<script lang="ts">
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
	import StrongImage from '$lib/components/elements/strongimage/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import Navbar from '$lib/components/ui/navbar/index.svelte';
	import Footer from '$lib/components/ui/footer/index.svelte';
</script>

<svelte:head>
	<title>Project Partners Education</title>
	<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
	<script>
		Weglot.initialize({
			api_key: 'wg_64c47c59a31aa6dfcc0b6505d462c91f0'
		});
	</script>
</svelte:head>

<div class="max-w-screen snap-start">
	<Navbar />
	<div class="px-6 mb-12 lg:px-36 md:px-24 sm:px-16 snap-proximity">
		<div class="grid items-center w-full grid-cols-1 gap-16 pt-24 lg:border-r lg:grid-cols-2">
			<StrongImage
				src="cloudinary://v1705927413/img/IMG_0165_bxrqlm.png"
				bgColor="ppgreen"
				href="/about"
				alt="A happy teacher looking straight at the camera with her arms crossed"
			/>
			<div class="mx-auto lg:w-3/4">
				<h3 class="text-xl sm:text-2xl text-slate-500">Our Mission</h3>
				<h2
					class="mt-1 text-4xl font-black leading-tight sm:text-5xl sm:leading-tight font-heading"
				>
					The new era of better education
				</h2>
				<p class="mt-8 text-xl leading-loose xl:text-justify sm:leading-loose sm:text-2xl">
					<span class="font-black">Our mission</span> is to transform the school learning environment
					into a space where curiosity, creativity, and collaboration come first.
				</p>
				<div class="mt-8 text-center lg:text-left">
					<Button text="Learn about what we do" href="/about" color="ppgreen" />
				</div>
				{#if false}
					<div class="inline-block pt-8 mt-8 lg:border-t">
						<span class="inline-block align-middle"
							>[1]: <a
								href="https://issuu.com/projectpartnersedu"
								target="_blank"
								class="underline hover:text-slate-500"
								>"Project Partners: Towards Fully-Engaged Learning", 2023</a
							></span
						>
						<svg inline-src="open-in-new" class="inline-block h-4 align-middle" />
					</div>
				{/if}
			</div>
		</div>
		<div class="relative hidden w-full h-48 rounded-br-lg lg:border-b lg:border-r lg:block">
			<img
				src={assets + '/images/corn-image.png'}
				alt="Illustration of growing corn"
				class="absolute bottom-6 right-12 h-36"
			/>
		</div>
		<div class="w-full h-48 lg:border-l snap-start" />
		<div class="grid items-center w-full grid-cols-1 gap-16 lg:border-l lg:grid-cols-2">
			<div class="order-2 mx-auto lg:w-3/4 lg:order-1">
				<h3 class="text-xl sm:text-2xl text-slate-500">Our Resources</h3>
				<h2
					class="mt-1 text-4xl font-black leading-tight sm:text-5xl sm:leading-tight font-heading"
				>
					Where life comes to learning
				</h2>
				<p class="mt-8 text-xl leading-loose xl:text-justify sm:leading-loose sm:text-2xl">
					<span class="font-black">Our resources</span> are used by learners, teachers, and education
					leaders, freely available digitally or through in-person activities
				</p>
				<div class="mt-8 text-center lg:text-left">
					<Button text="Browse our resources" href="/resources" color="pporange" />
				</div>
			</div>
			<div class="order-1 lg:order-2">
				<StrongImage
					src="cloudinary://v1706041791/img/three-students-looking-over-shoulder_cdhfju.jpg"
					bgColor="pporange"
					href="/resources"
					alt="Three students looking over each other's shoulders at a Project Partners project pack"
				/>
			</div>
		</div>
		<div class="hidden w-full h-48 border-b border-l rounded-bl-lg lg:block" />
		<div class="w-full h-48 lg:border-r snap-start" />
		<div class="grid items-center w-full grid-cols-1 gap-16 lg:border-r lg:grid-cols-2">
			<StrongImage
				src="cloudinary://v1706041791/img/IMG_0290_ngcuci.png"
				bgColor="ppblue"
				href="/about/ghana-case-study"
				alt="A teacher and a student looking at a Project Partners project pack"
			/>
			<div class="mx-auto lg:w-3/4">
				<h3 class="text-xl sm:text-2xl text-slate-500">Our Work</h3>
				<h2
					class="mt-1 text-4xl font-black leading-tight break-normal sm:text-5xl sm:leading-tight font-heading"
				>
					Engaging global knowledge
				</h2>
				<p class="mt-8 text-xl leading-loose xl:text-justify sm:leading-loose sm:text-2xl">
					<span class="font-black">Our work</span> with our network partners is leading the way in education
					reform and is expanding worldwide in its work to ensure a sustainable impact for all.
				</p>
				<div class="mt-8 text-center lg:text-left">
					<Button
						text="Read about Project Partners in Ghana"
						href="/about/ghana-case-study"
						color="ppblue"
					/>
				</div>
			</div>
		</div>
		<div class="relative hidden w-1/2 h-48 border-b border-r rounded-br-lg left-1/2 lg:block" />
		<div class="w-1/2 h-48 lg:border-r" />
		<div class="w-full px-6 border-b lg:px-36 md:px-24 sm:px-16"></div>
		<div class="py-16 lg:px-16 lg:py-24">
			<h2 class="py-2 text-4xl font-black text-center underline font-heading">
				We are proudly supported by
			</h2>
			<h3 class="mt-16 text-2xl font-black">Our Government Partners</h3>
			<div class="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4 place-items-center">
				<img
					class=" max-h-24"
					src="{assets}/images/supporters/unesco-ghana-logo.png"
					alt="The logo of the Ghana Commission for UNESCO"
				/>
				<img
					class=" max-h-24"
					src="{assets}/images/supporters/ges-logo.png"
					alt="The logo of the Ghana Education Service"
				/>
				<img
					class=" max-h-24"
					src="{assets}/images/supporters/nacca-logo.png"
					alt="The logo of the National Council for Curriculum and Assessment"
				/>
				<img
					class=" max-h-24"
					src="{assets}/images/supporters/ntc-logo.jpg"
					alt="The logo of the National Teaching Council"
				/>
			</div>
			<h3 class="mt-16 text-2xl font-black">Our NGO Partners</h3>
			<div class="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 place-items-center">
				<img
					class=" max-h-24"
					src="{assets}/images/supporters/brightside-logo.png"
					alt="The logo of the Brightside Trust"
				/>
				<img
					class=" max-h-24"
					src="{assets}/images/supporters/rotary-club-logo.png"
					alt="The logo of the Rotary Club"
				/>
			</div>
		</div>
		<div class="w-full px-6 border-b lg:px-36 md:px-24 sm:px-16"></div>
		<div class="w-1/2 h-48 lg:border-r snap-start" />
	</div>
	<div class="lg:px-36 md:px-24 sm:px-16">
		<StrongBox snap={false}>
			<div class="grid items-center w-full grid-cols-1 gap-4 text-center">
				<h3 class="text-xl sm:text-2xl text-slate-500">Get Involved</h3>
				<div class="w-full">
					<h2
						class="inline-block px-2 py-3 mt-1 text-5xl font-black leading-tight text-white bg-black rounded-sm sm:leading-tight sm:text-6xl md:text-7xl font-heading"
					>
						Let's make this happen.
					</h2>
				</div>
				<p
					class="mt-8 text-xl leading-loose text-left xl:text-justify sm:leading-loose sm:text-2xl"
				>
					We are proud to work with people who are passionate about education reform. Our work is
					only just beginning, and we need your help to bring the new era of school learning to
					life.
				</p>
				<p
					class="mt-8 text-xl leading-loose text-left xl:text-justify sm:leading-loose sm:text-2xl"
				>
					Whether you're an individual or already part of a wider team, your support will help us to
					continue to develop our resources, and to reach more people. There are many ways for you
					to get involved and we'd love to hear from you.
				</p>
				<div class="mt-8">
					<Button text="Get involved!" href="/get-involved" color="ppred" big={true} />
				</div>
			</div>
		</StrongBox>
	</div>
	<hr class="my-24 snap-start" />
	<StrongLinks
		link1={{
			imgsrc: `cloudinary://v1706050229/img/IMG_0459_bkjyzw.jpg`,
			imgalt: 'A smiling teacher with his arms crossed',
			text: 'See our resources',
			href: '/resources',
			hoverColor: 'ppyellow'
		}}
		link2={{
			imgsrc: `cloudinary://v1706050214/img/IMG_0034_bwy8cq.jpg`,
			imgalt: 'Two children looking at a book',
			text: 'Read about us',
			href: '/about',
			hoverColor: 'ppgreen'
		}}
		bigLink={{
			imgsrc: `cloudinary://v1706050214/img/IMG_0034_bwy8cq.jpg`,
			imgalt: 'A smiling teacher with his arms crossed',
			text: 'Get Involved',
			href: '/get-involved',
			hoverColor: 'ppred'
		}}
	/>
	<Footer snap={true} />
</div>
