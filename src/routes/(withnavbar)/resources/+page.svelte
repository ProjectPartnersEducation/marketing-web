<script lang="ts">
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
</script>

<div class="px-48">
	<h1 class="relative mb-40 text-center">
		<img src={assets + '/images/class-with-hands-up.jpg'} class="w-full" />

		<h1
			class="absolute top-0 left-0 inline-block px-4 py-2 m-1 font-black text-center text-white bg-black border-4 border-white text-8xl font-handwriting"
		>
			Resources
		</h1>
		<h1
			class="absolute bottom-0 right-0 inline-block px-4 py-2 m-1 font-black text-center text-white bg-black border-4 border-white text-8xl font-handwriting"
		>
			Resources
		</h1>
	</h1>
</div>

<div class="px-48">
	<div class="grid grid-cols-3 gap-8 place-items-center">
		<a href="#learners">
			<div class="grid grid-cols-1 transition-all scale-95 cursor-pointer hover:scale-100">
				<img src="{assets}/images/one-child-thumbs-up.jpg" class="w-full border-4 border-black" />
				<div class="py-2 text-4xl text-center text-white bg-black font-handwriting">
					I want to <span class="text-[#eeb019] font-handwriting">learn</span>
				</div>
			</div>
		</a>
		<a href="#teachers">
			<div class="grid grid-cols-1 transition-all scale-95 cursor-pointer hover:scale-100">
				<img src="{assets}/images/teacher-amongst-class.jpg" class="w-full border-4 border-black" />
				<div class="py-2 text-4xl text-center text-white bg-black font-handwriting">
					I want to <span class="text-[#93b195] font-handwriting">teach</span>
				</div>
			</div>
		</a>
		<a href="#leaders">
			<div class="grid grid-cols-1 transition-all scale-95 cursor-pointer hover:scale-100">
				<img
					src="{assets}/images/one-teacher-holding-book.jpg"
					class="w-full border-4 border-black"
				/>
				<div class="py-2 text-4xl text-center text-white bg-black font-handwriting">
					I want to <span class="text-[#cea0b5] font-handwriting">lead</span>
				</div>
			</div>
		</a>
	</div>
</div>

<div class="px-32">
	<div class="h-24 border-b border-l border-r shadow-sm"></div>
</div>
<div class="px-64 pt-48" id="learners">
	<h2 class="text-5xl font-handwriting">Learn with Project Partners</h2>
	<p class="mt-8 text-2xl leading-loose">
		We want to build the world's best library of free learning resources for young people. Our
		project packs will help you develop your skills and gain confidence applying your knowledge to
		exciting, real-world problems.
	</p>
</div>
<div class="px-48 mt-16 border-black">
	<div
		class="grid grid-cols-[70%,30%] gap-x-8 border-4 border-black rounded-lg px-32 py-16 shadow-xl bg-[#fffffc]"
	>
		<div>
			<div class="grid grid-cols-[75%,25%] grid-rows-3 gap-y-2 gap-x-8">
				<h2 class="self-end row-span-3 text-black border-r-2">
					<svg inline-src="logo" class="inline-block h-16 mr-3" />
					<span class="text-4xl font-pptext"> Goes to Ghana </span>
				</h2>
				<div>
					<span class="font-mono text-2xl text-black"> PP:002 </span>
				</div>
				<div>
					<span class="px-2 text-xl italic font-black text-white bg-[#1e87ab] border border-black">
						Ages 13+
					</span>
				</div>
				<div>
					<span class="px-2 text-xl italic font-black text-white bg-[#cea0b5] border border-black">
						Mathematics
					</span>
				</div>
			</div>
			<p class="mt-8 text-3xl leading-loose text-justify text-black">
				Join Emmanuella in your new role as a mathematics expert and help the people of Ghana grow
				their businesses into a thriving community.
			</p>
			<div class="mt-8 text-center">
				<Button
					text="To the learning portal!"
					href="https://learn.projectpartners.org"
					color="#d01c1c"
				/>
			</div>
		</div>
		<div>
			<img
				src="{assets}/images/three-standing-children-discussing.jpg"
				class="w-full border-2 border-black"
			/>
		</div>
	</div>
</div>
<div class="px-48">
	<div class="max-w-sm mx-auto my-24 border-b"></div>
	<div class="text-2xl text-center align-top -translate-y-1/2 font-handwriting text-slate-500">
		<img src="{assets}/images/emmanuella.png" class="inline-block h-32 mr-3 -scale-x-100" />
		Stay tuned... many more project packs coming soon!
	</div>
</div>

<div class="px-64 pt-48" id="teachers">
	<h2 class="text-5xl font-handwriting">Teach with Project Partners</h2>
	<p class="mt-8 text-2xl leading-loose text-justify">
		Expand your teaching practice with our free resources and innovative professional development
		workshops to develop your skills as an engaging educator. We are committed to supporting the
		professional development of teachers and educators - because the future of education starts with
		you.
	</p>
</div>
<div class="px-48 mt-16 border-black">
	<div
		class="grid grid-cols-[70%,30%] gap-x-8 border-4 border-black rounded-lg px-32 py-16 shadow-xl bg-[#fffffc]"
	>
		<div>
			<div class="grid grid-cols-[75%,25%] grid-rows-3 gap-y-2 gap-x-8">
				<h2 class="self-end row-span-3 text-black border-r-2">
					<svg inline-src="logo" class="inline-block h-16 mr-3" />
					<span class="text-4xl font-pptext"> Goes to Ghana </span>
				</h2>
				<div>
					<span class="font-mono text-2xl text-black"> PP:002 </span>
				</div>
				<div>
					<span class="px-2 text-xl italic font-black text-white bg-[#1e87ab] border border-black">
						Ages 13+
					</span>
				</div>
				<div>
					<span class="px-2 text-xl italic font-black text-white bg-[#cea0b5] border border-black">
						Mathematics
					</span>
				</div>
			</div>
			<p class="mt-8 text-3xl leading-loose text-justify text-black">
				Join Emmanuella in your role as a mathematics expert and help the people of Ghana grow their
				businesses into a thriving community!
			</p>
			<div class="mt-8 text-center">
				<Button text="Let's go!" href="https://learn.projectpartners.org" color="#d01c1c" />
			</div>
		</div>
		<div>
			<img
				src="{assets}/images/three-standing-children-discussing.jpg"
				class="w-full border-2 border-black"
			/>
		</div>
	</div>
</div>

<div class="px-64 pt-48" id="leaders">
	<h2 class="text-5xl font-handwriting">Lead with Project Partners</h2>
	<p class="mt-8 text-2xl leading-loose text-justify">
		If you are a school or community leader, apply today to become a Project Partners partner school
		and receive free access to our leadership resources, which are designed to support our
		professional development workshops for your teachers and our project packs for your learners.
	</p>
	<p class="mt-8 text-2xl leading-loose text-justify">
		Or, if you work for a non-profit organisation, NGO, or government agency, <a
			href="/get-involved#contact-us">get in touch</a
		> to find out how we can work together to bring the new era of education to life.
	</p>
</div>
