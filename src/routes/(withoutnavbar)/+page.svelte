<script lang="ts">
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
	import StrongImage from '$lib/components/elements/strongimage/index.svelte';
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

<div class="snap-start">
	<Navbar />
	<div class="grid grid-cols-[25%,75%] w-full px-36">
		<div></div>
		<div class="h-24 border-b border-l rounded-bl-lg"></div>
	</div>
	<div class="mb-12 px-36 snap-proximity">
		<div class="grid items-center w-full grid-cols-2 gap-16 pt-24 border-r">
			<StrongImage
				src="{assets}/images/IMG_0165.png"
				bgColor="ppgreen"
				alt="A happy teacher looking straight at the camera with her arms crossed"
			/>
			<div class="w-3/4 mx-auto">
				<h3 class="text-2xl text-slate-500">Our Mission</h3>
				<h2 class="mt-1 text-5xl font-black leading-tight font-handwriting">
					The new era of better education
				</h2>
				<p class="mt-8 text-2xl leading-loose text-justify">
					<span class="font-black">Our mission</span> is to transform the school learning environment
					into a space where curiosity, creativity, and collaboration come first.
				</p>
				<div class="mt-8">
					<Button text="Learn about what we do" href="/about" color="ppgreen" />
				</div>
				<div class="inline-block pt-8 mt-8 border-t">
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
		<div class="relative w-full h-48 border-b border-r rounded-br-lg">
			<img
				src={assets + '/images/corn-image.png'}
				alt="Illustration of growing corn"
				class="absolute bottom-6 right-12 h-36"
			/>
		</div>
		<div class="w-full h-48 border-l" />
		<div class="grid items-center w-full grid-cols-2 gap-16 border-l">
			<div class="w-3/4 mx-auto">
				<h3 class="text-2xl text-slate-500">Our Resources</h3>
				<h2 class="mt-1 text-5xl font-black leading-tight font-handwriting">
					Where life comes to learning
				</h2>
				<p class="mt-8 text-2xl leading-loose text-justify">
					<span class="font-black">Our resources</span> are used by learners, teachers, and education
					leaders, freely available digitally or through in-person activities
				</p>
				<div class="mt-8">
					<Button text="Browse our resources" href="/resources" color="pporange" />
				</div>
			</div>
			<StrongImage
				src="{assets}/images/three-students-looking-over-shoulder.jpg"
				bgColor="pporange"
				alt="Three students looking over each other's shoulders at a Project Partners project pack"
			/>
		</div>
		<div class="w-full h-48 border-b border-l rounded-bl-lg" />
		<div class="w-full h-48 border-r" />
		<div class="grid items-center w-full grid-cols-2 gap-16 border-r">
			<StrongImage
				src="{assets}/images/IMG_0533.jpg"
				bgColor="ppblue"
				alt="A teacher and a student looking at a Project Partners project pack"
			/>
			<div class="w-3/4 mx-auto">
				<h3 class="text-2xl text-slate-500">Our Network</h3>
				<h2 class="mt-1 text-5xl font-black leading-tight font-handwriting">
					Engaging global knowledge
				</h2>
				<p class="mt-8 text-2xl leading-loose text-justify">
					<span class="font-black">Our network</span> of partners is leading the way in education reform
					and is expanding worldwide in its work to ensure a sustainable impact for all.
				</p>
				<div class="mt-8">
					<Button text="Read about our network" href="/get-involved/institutions" color="ppblue" />
				</div>
			</div>
		</div>
		<div class="relative w-1/2 h-48 border-b border-r rounded-br-lg left-1/2" />
		<div class="w-1/2 h-48 border-r" />
		<div
			class="grid items-center w-full grid-cols-1 gap-16 py-32 border-2 rounded-lg shadow-2xl border-slate-600 bg-[#fcfcff] snap-center"
		>
			<div class="w-3/4 mx-auto text-center">
				<h3 class="text-2xl text-slate-500">Get Involved</h3>
				<h2
					class="py-2 mt-1 font-black leading-tight text-white bg-black text-7xl font-handwriting"
				>
					Let's make this happen
				</h2>
				<p class="mt-8 text-2xl leading-loose text-justify">
					We are proud to work with people who are passionate about education reform. Our work is
					only just beginning, and we need your help to bring the new era of school learning to
					life.
				</p>
				<p class="mt-8 text-2xl leading-loose text-justify indent-8">
					Whether you're an individual or already part of a wider team, your support will help us to
					continue to develop our resources, and to reach more people. There are many ways for you
					to get involved and we'd love to hear from you.
				</p>
				<div class="mt-8">
					<Button text="Get involved!" href="/get-involved" color="ppred" />
				</div>
			</div>
		</div>
	</div>
</div>

<Footer snap={true} />
