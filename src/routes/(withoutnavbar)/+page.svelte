<script lang="ts">
	import { assets } from '$app/paths';

	import VideoPlayer from '$lib/components/elements/video/index.svelte';
	import Button from '$lib/components/elements/button.svelte';
	import Navbar from '$lib/components/ui/navbar/index.svelte';
	import Footer from '$lib/components/ui/footer/index.svelte';
</script>

<svelte:head>
	<title>Project Partners Education</title>
</svelte:head>

<div class="h-screen bg-black snap-start" id="videowindow">
	<VideoPlayer
		videoSrc="https://storage.googleapis.com/pp-marketing-web-public/videos/Project%20Partners_Doc_temp.mp4"
		plyrOptions={{ autoplay: true, mute: true, controls: false }}
	/>
	<div class="absolute z-10 w-full text-center -translate-x-1/2 left-1/2 bottom-32 top-32">
		<img src={assets + '/logo.svg'} alt="logo" class="inline-block max-h-40" />
		<div class="mt-24">
			<Button text="Watch the whole video (3:47)" href="" color="#d01c1c" />
		</div>
	</div>
</div>

<div class="snap-start">
	<Navbar />

	<div class="mt-48 mb-12 px-36 snap-proximity">
		<div class="w-full text-center">
			<!-- <div class="w-full mt-4 text-center">
				Project Partners Education CIO is a charity registered in England & Wales, 1189396
			</div>
			<div class="w-1/2 mx-auto my-48 border-b" /> -->
			<div class="grid w-full grid-cols-[80%,20%] items-center px-10 gap-x-8">
				<div
					class="w-full px-20 py-16 text-center border-4 bg-slate-200 rounded-2xl border-slate-300"
				>
					<img src={assets + '/logo.svg'} alt="logo" class="mx-auto max-h-40" />
					<h1
						class="inline-block px-4 pb-2 mt-16 mb-8 leading-tight text-white bg-black rounded-md text-7xl font-handwriting"
					>
						The Engaging Education Charity
					</h1>
					<aside class="mt-8 text-2xl">
						Proudly partnered with the Ghana Commission for UNESCO since 2022
						<img
							src="{assets}/images/supporters/unesco-ghana-logo.png"
							alt="Logo of UNESCO Ghana"
							class="h-24 mx-auto mt-4"
						/>
					</aside>
				</div>
				<div>
					<img
						src={assets + '/images/emmanuella.png'}
						alt="An illustration of Emmanuella"
						class="mx-auto border-2 border-black"
					/>
				</div>
			</div>
		</div>
		<div class="w-full h-48 mt-48 border-t border-r rounded-tr-lg" />
		<div class="grid items-center w-full grid-cols-2 gap-16 border-r">
			<div class="relative group">
				<div
					class="absolute top-0 left-0 w-full h-full transition-all bg-black -z-10 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4"
				></div>
				<img
					src="{assets}/images/IMG_0165.png"
					class="transition-all border-8 border-black cursor-pointer hover:scale-105"
				/>
			</div>
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
					<Button text="Learn about what we do" href="/about" color="#93b195" />
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
				alt="Logo of UNESCO Ghana"
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
					<Button text="See our resources" href="/resources" color="#eeb019" />
				</div>
			</div>
			<div class="relative group">
				<div
					class="absolute top-0 left-0 w-full h-full transition-all bg-black -z-10 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4"
				></div>
				<img
					src="{assets}/images/three-students-looking-over-shoulder.jpg"
					class="transition-all border-8 border-black cursor-pointer hover:scale-105 trans"
				/>
			</div>
		</div>
		<div class="w-full h-48 border-b border-l rounded-bl-lg" />
		<div class="w-full h-48 border-r" />
		<div class="grid items-center w-full grid-cols-2 gap-16 border-r">
			<div class="relative group">
				<div
					class="absolute top-0 left-0 w-full h-full transition-all bg-black -z-10 group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4"
				></div>
				<img
					src="{assets}/images/IMG_0533.jpg"
					class="transition-all border-8 border-black cursor-pointer hover:scale-105"
				/>
			</div>
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
					<Button text="Read about our network" href="/get-involved/institutions" color="#1e87ab" />
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
					<Button text="Get involved!" href="/get-involved" color="#d01c1c" />
				</div>
			</div>
		</div>
	</div>
</div>

<Footer snap={true} />
