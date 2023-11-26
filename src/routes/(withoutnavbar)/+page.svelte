<script lang="ts">
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
	import StrongImage from '$lib/components/elements/strongimage/index.svelte';
	import StrongBox from '$lib/components/elements/strongbox/index.svelte';
	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import Navbar from '$lib/components/ui/navbar/index.svelte';
	import Footer from '$lib/components/ui/footer/index.svelte';

	let Player: any;
</script>

<svelte:head>
	<title>Project Partners Education</title>
</svelte:head>

<div class="h-full min-h-screen bg-black snap-start" id="videowindow">
	{#await import('$lib/components/ui/fullpagevideo/index.svelte') then { default: Player }}
		<svelte:component this={Player} />
	{/await}
</div>

<div class="max-w-screen snap-start">
	<Navbar />
	<div class="hidden w-full grid-cols-2 px-8 lg:px-36 md:px-24 sm:px-16 lg:grid">
		<div></div>
		<div class="h-24 border-b border-l rounded-bl-lg"></div>
	</div>
	<div class="px-6 mb-12 lg:px-36 md:px-24 sm:px-16 snap-proximity">
		<div class="grid items-center w-full grid-cols-1 gap-16 pt-24 lg:border-r lg:grid-cols-2">
			<StrongImage
				src="{assets}/images/IMG_0165.png"
				bgColor="ppgreen"
				alt="A happy teacher looking straight at the camera with her arms crossed"
			/>
			<div class="mx-auto lg:w-3/4">
				<h3 class="text-xl sm:text-2xl text-slate-500">Our Mission</h3>
				<h2
					class="mt-1 text-4xl font-black leading-tight sm:text-5xl sm:leading-tight font-handwriting"
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
					class="mt-1 text-4xl font-black leading-tight sm:text-5xl sm:leading-tight font-handwriting"
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
					src="{assets}/images/three-students-looking-over-shoulder.jpg"
					bgColor="pporange"
					alt="Three students looking over each other's shoulders at a Project Partners project pack"
				/>
			</div>
		</div>
		<div class="hidden w-full h-48 border-b border-l rounded-bl-lg lg:block" />
		<div class="w-full h-48 lg:border-r snap-start" />
		<div class="grid items-center w-full grid-cols-1 gap-16 lg:border-r lg:grid-cols-2">
			<StrongImage
				src="{assets}/images/IMG_0533.jpg"
				bgColor="ppblue"
				alt="A teacher and a student looking at a Project Partners project pack"
			/>
			<div class="mx-auto lg:w-3/4">
				<h3 class="text-xl sm:text-2xl text-slate-500">Our Work</h3>
				<h2
					class="mt-1 text-4xl font-black leading-tight break-normal sm:text-5xl sm:leading-tight font-handwriting"
				>
					Engaging global knowledge
				</h2>
				<p class="mt-8 text-xl leading-loose xl:text-justify sm:leading-loose sm:text-2xl">
					<span class="font-black">Our network</span> of partners is leading the way in education reform
					and is expanding worldwide in its work to ensure a sustainable impact for all.
				</p>
				<div class="mt-8 text-center lg:text-left">
					<Button
						text="Read about Project Partners in Ghana"
						href="/get-involved/institutions"
						color="ppblue"
					/>
				</div>
			</div>
		</div>
		<div class="relative hidden w-1/2 h-48 border-b border-r rounded-br-lg left-1/2 lg:block" />
		<div class="w-1/2 h-48 lg:border-r snap-start" />
		<StrongBox snap={false}>
			<div class="grid items-center w-full grid-cols-1 gap-4 text-center">
				<h3 class="text-xl sm:text-2xl text-slate-500">Get Involved</h3>
				<div class="w-full">
					<h2
						class="inline-block px-2 py-3 mt-1 text-5xl font-black leading-tight text-white bg-black rounded-sm sm:leading-tight sm:text-6xl md:text-7xl font-handwriting"
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
					<Button text="Get involved!" href="/get-involved" color="ppred" />
				</div>
			</div>
		</StrongBox>
	</div>
	<hr class="my-24 snap-start" />
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
			href: '',
			hoverColor: 'ppgreen'
		}}
		bigLink={{
			imgsrc: `${assets}/images/IMG_0034.jpg`,
			imgalt: 'A smiling teacher with his arms crossed',
			text: 'Get Involved',
			href: '/get-involved',
			hoverColor: 'ppred'
		}}
	/>
	<Footer snap={true} />
</div>
