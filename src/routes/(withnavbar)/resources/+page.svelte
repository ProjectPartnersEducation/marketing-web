<script lang="ts">
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
	import StrongLinks from '$lib/components/elements/stronglinks/index.svelte';
	import BigTopImage from '$lib/components/elements/bigtopimage/index.svelte';
	import Image from '$lib/components/elements/image/index.svelte';
</script>

<svelte:head>
	<title>Our Resources | Project Partners Education</title>
</svelte:head>

<BigTopImage
	imgSrc="cloudinary://v1706103733/img/IMG_0114_2_daf365.png"
	alt="A happy child standing amongst their classmates holding a book with their hand up"
	text="Resources"
/>

<div class="px-6 mt-8 xl:px-48 lg:px-32 md:px-24 sm:px-12">
	<div class="grid gap-8 md:grid-cols-3 place-items-center">
		<a href="#learners">
			<div
				class="grid grid-cols-2 transition-all scale-95 cursor-pointer md:grid-cols-1 hover:scale-100"
			>
				<Image
					src="cloudinary://v1706103297/img/one-child-thumbs-up_o5w3i7.jpg"
					alt="A young person holding a book with her thumbs up"
					addClass="w-full border-4 border-black"
				/>
				<div
					class="flex flex-col items-center justify-center py-2 text-4xl text-center text-white bg-black font-heading"
				>
					I want to <span class="text-ppyellow font-heading">learn</span>
				</div>
			</div>
		</a>
		<a href="#teachers">
			<div
				class="grid grid-cols-2 transition-all scale-95 cursor-pointer md:grid-cols-1 hover:scale-100"
			>
				<Image
					src="cloudinary://v1706103307/img/teacher-amongst-class_tziwln.jpg"
					alt="A teacher in front of his class"
					addClass="w-full border-4 border-black"
				/>
				<div
					class="flex flex-col items-center justify-center py-2 text-4xl text-center text-white bg-black font-heading"
				>
					I want to <span class="text-ppgreen font-heading">teach</span>
				</div>
			</div>
		</a>
		<a href="#leaders">
			<div
				class="grid grid-cols-2 transition-all scale-95 cursor-pointer md:grid-cols-1 hover:scale-100"
			>
				<Image
					src="cloudinary://v1706103314/img/one-teacher-holding-book_blkyaf.jpg"
					alt="A teacher holding a book"
					addClass="w-full border-4 border-black"
				/>
				<div
					class="flex flex-col items-center justify-center py-2 text-4xl text-center text-white bg-black font-heading"
				>
					I want to <span class="text-pppink font-heading">lead</span>
				</div>
			</div>
		</a>
	</div>
</div>

<div class="hidden px-32 lg:block">
	<div class="h-24 border-b border-l border-r shadow-sm"></div>
</div>
<div class="px-8 pt-48 xl:px-64 lg:px-48 md:px-24 sm:px-16" id="learners">
	<h2 class="text-5xl font-black font-heading">Learn with Project Partners</h2>
	<p class="mt-8 text-2xl leading-loose text-justify">
		We want to build the world's best library of free learning resources for young people. Our
		project packs will help you develop your skills and gain confidence applying your knowledge to
		exciting, real-world problems.
	</p>
</div>
<div class="px-6 mt-16 border-black xl:px-48 lg:px-32 md:px-16 sm:px-12">
	<div
		class="grid grid-cols-1 md:grid-cols-[70%,30%] gap-x-8 border-4 border-black rounded-sm xl:px-32 lg:px-24 md:px-16 sm:px-12 px-6 py-16 shadow-xl bg-[#fffffc]"
	>
		<div class="w-full">
			<div class="grid md:grid-cols-[75%,25%] grid-rows-3 gap-y-2 gap-x-8">
				<h2 class="self-end row-span-3 text-black border-r-2">
					<svg inline-src="logo" class="inline-block h-16 mr-3" />
					<span class="text-4xl font-pptext"> Goes to Ghana </span>
				</h2>
				<div>
					<span class="font-mono text-2xl text-black"> PP:002 </span>
				</div>
				<div>
					<span class="px-2 text-xl italic font-black text-white border border-black bg-ppblue">
						Ages 11+
					</span>
				</div>
				<div>
					<span class="px-2 text-xl italic font-black text-white border border-black bg-pppink">
						Mathematics
					</span>
				</div>
			</div>
			<p class="mt-8 text-2xl leading-loose text-justify text-black">
				Join Emmanuella in your new role as a mathematics expert and help the people of Ghana grow
				their businesses into a thriving community.
			</p>
		</div>
		<div class="w-full mt-6 md:mt-0">
			<Image
				src="cloudinary://v1706103499/img/three-standing-children-discussing_jnnedf.jpg"
				alt="Three children standing discussing an open book"
				addClass="w-full border-2 border-black"
			/>
		</div>
		<div class="mt-8 text-center md:col-span-2">
			<Button
				text="To the learning portal!"
				href="https://shop.projectpartners.org"
				color="ppyellow"
				target="_blank"
			/>
		</div>
	</div>
</div>
<div class="px-6 xl:px-48 lg:px-32 md:px-24 sm:px-12">
	<div class="max-w-sm mx-auto my-24 border-b"></div>
	<div
		class="flex flex-row flex-1 text-2xl place-content-center place-items-center font-heading text-slate-500"
	>
		<Image
			src="cloudinary://v1706103843/img/emmanuella_nc5ami.png"
			alt="A cartoon drawing of Emmanualla, a Ghanaian woman"
			addClass="inline-block h-32 mr-3 justify-self-end"
		/>
		<div class="justify-self-start">Stay tuned... many more project packs coming soon!</div>
	</div>
</div>

<div class="px-6 pt-48 xl:px-64 lg:px-32 md:px-24 sm:px-12" id="teachers">
	<h2 class="text-5xl font-black font-heading">Teach with Project Partners</h2>
	<p class="mt-8 text-2xl leading-loose md:text-justify">
		Expand your teaching practice with our free resources and innovative professional development
		courses to develop your skills as an engaging educator. We are committed to supporting the
		professional development of teachers and educators - because the future of education starts with
		excellent teachers.
	</p>
	<div class="mx-32 my-16 border-b"></div>
	<div class="text-2xl font-black text-center">Want to teach with our project packs?</div>
	<div class="mt-4 text-2xl leading-loose text-center">
		Find all of our teaching resources (and more!) on our <a
			href="https://shop.projectpartners.org/"
			class="font-heading"
			target="_blank">Learning Portal</a
		><svg inline-src="open-in-new" class="inline-block h-8 ml-2 -translate-y-1" />
	</div>
	<div class="mx-32 my-16 border-b"></div>
	<h3 class="mt-16 text-3xl font-black">Our Professional Courses</h3>
	<p class="mt-4 text-2xl leading-loose md:text-justify">
		We are currently working with the National Teaching Council of Ghana to develop a series of
		professional courses for teachers and educators. For teachers in Ghana, these will count towards
		the annual teaching license renewal requirements and are designed to help teachers develop the
		skills to be an engaging educator.
	</p>
	<div class="grid gap-8 mt-8 md:grid-cols-2 place-items-center">
		<div class="order-2 md:order-1">
			<h4 class="text-2xl font-black">What are the benefits?</h4>
			<ul class="mt-4 text-2xl leading-loose list-inside list-square md:text-justify">
				<li>Develop your skills as an engaging educator</li>
				<li>Gain recognition for your professional development</li>
				<li>Count towards your annual teaching license renewal</li>
				<li>Learn from local and international experts</li>
				<li>Understand how to use our learning resources</li>
				<li>Gain access to our global network of education leaders</li>
			</ul>
		</div>
		<Image
			src="cloudinary://v1706103629/img/IMG_0533_a3y3s8.png"
			alt="A teacher explaining a concept in a book to a student"
			addClass="order-1 border-4 border-black md:order-2"
		/>
	</div>
	<div class="mx-32 my-16 border-b"></div>
	<p class="text-2xl leading-loose text-justify">
		Our professional courses for teachers are currently being reviewed by our expert advisors and
		are not yet open for registration. If you would like to be notified when they are ready, or
		involved in its design, please register your interest below and we will be in touch.
	</p>
	<div class="w-full gap-4 mt-8 text-center">
		<Button
			text="Register your interest today"
			href="https://projectpartners.thinkific.com/courses/creative-maths-ghana"
			color="ppgreen"
			target="_blank"
		/>
	</div>
</div>

<div class="px-6 pt-48 xl:px-64 lg:px-48 md:px-24 sm:px-12" id="leaders">
	<h2 class="text-5xl font-black font-heading">Lead with Project Partners</h2>
	<p class="mt-8 text-2xl leading-loose text-justify">
		If you are a school or community leader, we are committed to supporting you in your work to
		transform your school or community into a space where curiosity, creativity, and collaboration
		are the number one priority.
	</p>
	<h3 class="mt-8 text-3xl font-black">The Engaging Educators Network</h3>
	<p class="mt-4 text-2xl leading-loose text-justify">
		Join a community of individuals dedicated to reshaping the educational landscape in line with
		The Engaging Education Code. The Engaging Educators Network is a space for sharing ideas,
		learning from others, and taking actionable steps towards a more engaging learning environment.
	</p>
	<div class="w-full mt-8 text-center">
		<Button
			text="Join The Engaging Educators Network"
			color="pppink"
			href="https://projectpartners.thinkific.com/products/communities/engaging-educators-network"
			target="_blank"
		/>
	</div>
</div>
<hr class="my-24" />
<StrongLinks
	link1={{
		imgsrc: `cloudinary://v1706050229/img/IMG_0459_bkjyzw.jpg`,
		imgalt: 'A smiling teacher with his arms crossed',
		text: 'Read about us',
		href: '/about',
		hoverColor: 'ppyellow'
	}}
	link2={{
		imgsrc: `cloudinary://v1706050214/img/IMG_0034_bwy8cq.jpg`,
		imgalt: 'Two children looking at a book',
		text: 'Case Study: Ghana',
		href: '/about/ghana-case-study',
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
