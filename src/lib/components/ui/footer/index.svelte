<script>
	import { assets } from '$app/paths';
</script>

<div
	class="grid justify-around grid-cols-2 px-8 pt-24 pb-20 space-y-12 gap-x-4 md:px-16 lg:px-32 xl:px-48 lg:grid-cols-5 lg:justify-normal"
>
	<div class="col-span-2 mb-12 border-b lg:col-span-5"></div>
	<div class="grid grid-cols-1">
		<h4 class="text-2xl font-black cursor-pointer hover:underline">
			<a class="font-black" href="/about">About</a>
		</h4>
		<ul class="mt-4 space-y-4">
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/about#principles">Our principles</a>
			</li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/about#work">Our activities</a>
			</li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/about#team">Our team</a>
			</li>
		</ul>
	</div>
	<div class="grid grid-cols-1">
		<h4 class="text-2xl font-black cursor-pointer hover:underline">
			<a class="font-black" href="/resources">Resources</a>
		</h4>
		<ul class="mt-4 space-y-4">
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/resources#learners">For learners</a>
			</li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/resources#teachers">For teachers</a>
			</li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/resources#leaders">For leaders</a>
			</li>
		</ul>
	</div>
	<div class="grid grid-cols-1">
		<h4 class="text-2xl font-black">Legal</h4>
		<ul class="mt-4 space-y-4">
			<li class="text-xl cursor-pointer hover:underline"><a href="/policies">Policies</a></li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/reports">Annual reports</a>
			</li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/governance">Governance</a>
			</li>
		</ul>
	</div>
	<div class="grid grid-cols-1">
		<h4 class="text-2xl font-black cursor-pointer hover:underline">
			<a class="font-black" href="/get-involved">Get Involved</a>
		</h4>
		<ul class="mt-4 space-y-4">
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/get-involved#donate">Donate</a>
			</li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/get-involved#volunteer">Volunteer</a>
			</li>
			<li class="text-xl cursor-pointer hover:underline">
				<a href="/get-involved#contact-us">Contact us</a>
			</li>
		</ul>
	</div>
	<div class="col-span-2 mb-12 border-b md:mb-24 lg:hidden"></div>
	<div class="col-span-2 lg:col-span-1">
		<img src={assets + '/logo.svg'} alt="logo" class="w-full max-h-16" />
		<h4
			class="px-2 mt-4 text-sm font-black text-center text-white bg-black rounded-sm font-heading"
		>
			The Engaging Education Charity
		</h4>
		<ul class="mt-4 space-y-4">
			<li class="mt-4 text-md">
				Project Partners Education CIO is a charity registered in England and Wales, 1189396.
				Established in 2020.
			</li>
		</ul>
	</div>
	<div
		class="grid grid-cols-4 col-span-2 pt-16 mt-16 text-center border-t lg:col-span-5 place-items-center"
	>
		<div></div>
		<img src="{assets}/images/ncvo.png" alt="The logo of NCVO" class="max-h-16 md:max-h-32" />
		<img
			src="{assets}/images/fraud-pledge.svg"
			alt="A logo showing a pledge to tackle fraud"
			class="max-h-16 md:max-h-32"
		/>
		<div></div>
	</div>
	<div class="col-span-2 pt-8 mt-8 text-center lg:col-span-5">
		&copy; {new Date().getFullYear()} Project Partners Education CIO
	</div>
</div>
