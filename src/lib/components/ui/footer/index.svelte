<script>
	import { assets } from '$app/paths';

	export let snap = false;
</script>

<div class="grid grid-cols-5 px-48 pt-24 pb-20" class:snap-end={snap}>
	<div class="col-span-5 mx-24 mb-8 border-b"></div>
	<div class="grid grid-cols-1">
		<h4 class="text-xl font-black cursor-pointer hover:underline">
			<a class="font-black" href="/about">About</a>
		</h4>
		<ul class="mt-4">
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/about#pedagogy">What is engaging education?</a>
			</li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/about#work">Our work</a>
			</li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/about/team">Meet the team</a>
			</li>
		</ul>
	</div>
	<div class="grid grid-cols-1">
		<h4 class="text-xl font-black cursor-pointer hover:underline">
			<a class="font-black" href="/resources">Resources</a>
		</h4>
		<ul class="mt-4">
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/resources#learners">For learners</a>
			</li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/resources#teachers">For teachers</a>
			</li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/resources#leaders">For leaders</a>
			</li>
		</ul>
	</div>
	<div class="grid grid-cols-1">
		<h4 class="text-xl font-black">Legal</h4>
		<ul class="mt-4">
			<li class="mt-4 text-lg cursor-pointer hover:underline"><a href="/policies">Policies</a></li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/reports">Annual reports</a>
			</li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/governance">Governance</a>
			</li>
		</ul>
	</div>
	<div class="grid grid-cols-1">
		<h4 class="text-xl font-black cursor-pointer hover:underline">
			<a class="font-black" href="/get-involved">Get Involved</a>
		</h4>
		<ul class="mt-4">
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/get-involved#donate">Donate</a>
			</li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/get-involved#volunteer">Volunteer</a>
			</li>
			<li class="mt-4 text-lg cursor-pointer hover:underline">
				<a href="/get-involved#contact-us">Contact us</a>
			</li>
		</ul>
	</div>
	<div class="">
		<img src={assets + '/logo.svg'} alt="logo" class="w-full" />
		<h4 class="px-2 mt-4 text-center text-white bg-black text-md font-handwriting">
			The Engaging Education Charity
		</h4>
		<ul class="mt-4">
			<li class="mt-4 text-md">Project Partners Education CIO</li>
			<li class="text-md">A charity registered in England and Wales, 1189396</li>
		</ul>
	</div>
	<div class="col-span-5 pt-8 mt-8 text-center border-t">
		&copy; {new Date().getFullYear()} Project Partners Education CIO
	</div>
</div>
