<script lang="ts">
	import { assets } from '$app/paths';

	import VideoPlayer from '$lib/components/elements/video/index.svelte';
	import Button from '$lib/components/elements/button.svelte';
	import AltButton from '$lib/components/elements/button2.svelte';
	import Button2 from '$lib/components/elements/button2.svelte';
</script>

<img
	src={assets + '/logo.svg'}
	alt="logo"
	class="absolute left-0 right-0 z-10 mx-auto top-32 max-h-40"
/>

<div class="relative bg-slate-200">
	<VideoPlayer
		videoSrc={`${assets}/videos/Project Partners_Doc_temp.mp4`}
		plyrOptions={{ autoplay: true, mute: true }}
	/>
	<div class="absolute mx-auto -translate-x-1/2 left-1/2 bottom-8">
		<Button text="Watch the whole video (3:47)" href="" color="#d01c1c" />
	</div>
</div>

<div class="my-48 px-36">
	<div class="w-full text-center">
		<h3 class="text-2xl text-slate-500">Introducing...</h3>
		<div class="w-full mt-8 max-h-40">
			<img src={assets + '/logo.svg'} alt="logo" class="mx-auto max-h-40" />
		</div>
		<div class="w-full mt-4 text-center">
			Project Partners Education CIO is a charity registered in England & Wales, 1189396
		</div>
		<div class="w-1/2 mx-auto my-48 border-b" />
		<div class="grid w-full grid-cols-[80%,20%] items-center px-10">
			<div class="w-full px-20 text-center">
				<h1 class="pb-2 leading-tight text-white bg-black rounded-md text-7xl font-handwriting">
					We are the engaging education charity.
				</h1>
				<aside class="mt-8 text-2xl">
					Proudly partnered with the Ghana Commission for UNESCO since 2022
					<img
						src={assets + '/images/unesco_ghana_logo.png'}
						alt="Logo of UNESCO Ghana"
						class="h-24 mx-auto mt-4"
					/>
				</aside>
			</div>
			<div>
				<img
					src={assets + '/images/emmanuella.png'}
					alt="An illustration of Emmanuella"
					class="mx-auto"
				/>
			</div>
		</div>
	</div>
	<div class="w-full h-48 mt-48 border-t border-r rounded-tr-lg" />
	<div class="grid items-center w-full grid-cols-2 gap-16 border-r">
		<div>
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
			<p class="mt-8 text-2xl leading-9 text-justify">
				We all learn best when we are active, engaged, and working together.
			</p>
			<p class="mt-4 text-2xl leading-9 text-justify">
				<span class="font-black">Our mission</span> is to transform the school learning environment into
				a space where curiosity, creativity, and collaboration are the number one priority.
			</p>
			<div class="mt-8">
				<Button text="What is engaged learning?" href="/about" color="#93b195" />
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
			<p class="mt-8 text-2xl leading-9 text-justify">
				Our learning philosophy is embedded within our growing library of free learning resources,
				which are available to everyone.
			</p>
			<p class="mt-4 text-2xl leading-9 text-justify">
				<span class="font-black">Our resources</span> are designed to be used by learners, teachers,
				and leaders, and are available on our learning portal.
			</p>
			<div class="mt-8">
				<Button text="Visit our learning portal" href="/resources" color="#eeb019" />
			</div>
		</div>
		<div>
			<img
				src="{assets}/images/two-student-holding-books.jpg"
				class="transition-all border-8 border-black cursor-pointer hover:scale-105"
			/>
		</div>
	</div>
	<div class="w-full h-48 border-b border-l rounded-bl-lg" />
	<div class="w-full h-48 border-r" />
	<div class="grid items-center w-full grid-cols-2 gap-16 border-r">
		<div>
			<img
				src="{assets}/images/IMG_0533.jpg"
				class="transition-all border-8 border-black cursor-pointer hover:scale-105"
			/>
		</div>
		<div class="w-3/4 mx-auto">
			<h3 class="text-2xl text-slate-500">Our Partners</h3>
			<h2 class="mt-1 text-5xl font-black leading-tight font-handwriting">
				Engaging indigenous knowledge
			</h2>
			<p class="mt-8 text-2xl leading-9 text-justify">
				We work with people who are already leading the way in education, and who are passionate
				about making a difference.
			</p>
			<p class="mt-4 text-2xl leading-9 text-justify">
				<span class="font-black">Our partners</span> help us ensure that our work is sustainable and
				impactful for all.
			</p>
			<div class="mt-8">
				<Button text="Read about our partnerships" href="/resources" color="#1e87ab" />
			</div>
		</div>
	</div>
	<div class="relative w-1/2 h-48 border-b border-r rounded-br-lg left-1/2" />
	<div class="w-1/2 h-48 border-r" />
	<div
		class="grid items-center w-full grid-cols-1 gap-16 py-32 border-2 rounded-lg shadow-2xl border-slate-600 bg-[#fcfcff]"
	>
		<div class="w-3/4 mx-auto text-center">
			<h3 class="text-2xl text-slate-500">Support Us</h3>
			<h2 class="mt-1 text-6xl font-black leading-tight font-handwriting">
				Let's make this happen
			</h2>
			<p class="mt-8 text-2xl leading-9 text-justify">
				We're proud to work with people who are passionate about making a difference. Our work is
				only just beginning, and we need your help to bring the new era of education to life.
			</p>
			<p class="mt-4 text-2xl leading-9 text-justify">
				<span class="font-black">Your support</span> will help us to continue to develop our resources,
				and to reach more people. There are many ways you can support us, and we'd love to hear from
				you.
			</p>
			<div class="mt-8">
				<Button text="Find out how you can get involved" href="/get-involved" color="#d01c1c" />
			</div>
		</div>
	</div>
</div>