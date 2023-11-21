<script lang="ts">
	import { assets } from '$app/paths';

	import Button from '$lib/components/elements/button.svelte';
	import ContactForm from '$lib/components/elements/contact/index.svelte';

	let firstName = '';
	let email = '';
	let status = '';
	let error = '';

	const subscribe = async () => {
		try {
			await subscribeUser('5738426', 'YdChNgNnCmnRW7F6-0e8Bg', firstName, email);
			status = 'You have been successfully added';
		} catch (e) {
			if (e.message.includes('Invalid') || e.message.includes('Missing required parameters')) {
				error = 'There was an issue with your input';
			} else {
				error = 'There was an issue with the server or you are offline';
			}
		}
	};

	async function subscribeUser(formId, apiKey, firstName, email) {
		// Validate input
		if (!formId || !apiKey || !email) {
			throw new Error('Missing required parameters');
		}
		if (email && !/.+@.+\..+/.test(email)) {
			throw new Error('Invalid email address');
		}

		// Prepare payload
		const payload = {
			api_key: apiKey,
			email: email
		};
		if (firstName) {
			payload.first_name = firstName;
		}

		// Send request
		try {
			const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(payload)
			})
				.then((res) => res.json())
				.then((res) => {
					console.log(res);

					return res;
				});

			// Check for errors
			if (!response.ok) {
				throw new Error(`Server error: ${response.status}`);
			}

			return await response.json();
		} catch (error) {
			throw new Error(`Network error: ${error.message}`);
		}
	}
</script>

<svelte:head>
	<title>Our Resources | Project Partners Education</title>
</svelte:head>

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
					I want to <span class="text-ppyellow font-handwriting">learn</span>
				</div>
			</div>
		</a>
		<a href="#teachers">
			<div class="grid grid-cols-1 transition-all scale-95 cursor-pointer hover:scale-100">
				<img src="{assets}/images/teacher-amongst-class.jpg" class="w-full border-4 border-black" />
				<div class="py-2 text-4xl text-center text-white bg-black font-handwriting">
					I want to <span class="text-ppgreen font-handwriting">teach</span>
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
					I want to <span class="text-pppink font-handwriting">lead</span>
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
					<span class="px-2 text-xl italic font-black text-white border border-black bg-ppblue">
						Ages 13+
					</span>
				</div>
				<div>
					<span class="px-2 text-xl italic font-black text-white border border-black bg-pppink">
						Mathematics
					</span>
				</div>
			</div>
			<p class="mt-8 text-3xl leading-loose text-justify text-black">
				Join Emmanuella in your new role as a mathematics expert and help the people of Ghana grow
				their businesses into a thriving community.
			</p>
		</div>
		<div>
			<img
				src="{assets}/images/three-standing-children-discussing.jpg"
				class="w-full border-2 border-black"
			/>
		</div>
		<div class="col-span-2 mt-8 text-center">
			<Button
				text="To the learning portal!"
				href="https://learn.projectpartners.org"
				color="ppred"
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
	<div class="mx-32 my-16 border-b"></div>
	<div class="text-4xl font-black text-center">Teaching with our project packs?</div>
	<div class="mt-4 text-2xl text-center">
		Find all of our teaching resources (and more!) on our <a
			href="https://learn.projectpartners.org/teachers"
			class="font-handwriting"
			target="_blank">Learning Portal</a
		><svg inline-src="open-in-new" class="inline-block h-8 ml-2 -translate-y-1" />
	</div>
	<div class="mx-32 my-16 border-b"></div>
	<h3 class="mt-16 text-3xl font-black">Our Professional Certifications</h3>
	<p class="mt-4 text-2xl leading-loose text-justify">
		We are currently working with the National Teaching Council of Ghana to develop a series of
		professional certifications for teachers and educators. These certifications will count towards
		your annual teaching license renewal and are designed to help you develop your skills as an
		engaging educator.
	</p>
	<div class="grid grid-cols-2 gap-8 mt-8 place-items-center">
		<div>
			<h4 class="text-2xl font-black">What are the benefits?</h4>
			<ul class="mt-4 text-2xl leading-loose text-justify list-disc list-inside">
				<li>Develop your skills as an engaging educator</li>
				<li>Gain recognition for your professional development</li>
				<li>Count towards your annual teaching license renewal</li>
				<li>Learn from local and international experts</li>
				<li>Understand how to use our learning resources</li>
				<li>Gain access to our global network of education leaders</li>
			</ul>
		</div>
		<img src="{assets}/images/teacher-with-students-happy.jpg" class="border-4 border-black" />
	</div>
	<div class="mx-32 my-16 border-b"></div>
	<p class="text-2xl leading-loose text-justify">
		Our professional certifications for teachers are on our roadmap but are not available yet. If
		you would like to be notified when they are ready, or involved in its design, please register
		your interest below and we will be in touch.
	</p>
	<form
		class="flex flex-1 w-full gap-4 mt-8 place-items-center"
		on:submit|preventDefault={subscribe}
	>
		<input
			type="text"
			placeholder="First Name*"
			required
			class="w-full p-4 text-xl border-2 border-black rounded-md placeholder:text-xl focus:border-ppblue"
			bind:value={firstName}
		/>
		<input
			type="email"
			placeholder="Email Address*"
			required
			class="w-full p-4 text-xl border-2 border-black rounded-md placeholder:text-xl focus:border-ppblue"
			bind:value={email}
		/>
		<button type="submit">
			<Button text="Register interest" />
		</button>
	</form>
	<div class="col-span-2">
		{#if status}
			<div class="text-green-500">
				{status}
			</div>
		{/if}
		{#if error}
			<div class="text-red-500">
				{error}
			</div>
		{/if}
	</div>
	<div class="mt-8 text-2xl leading-loose">
		If you register your interest with the above form, we will only use your email address to
		contact you about our professional certifications. For more information, please see our <a
			href="#"
			class="font-black">Privacy Policy</a
		>.
	</div>
</div>

<div class="px-64 pt-48" id="leaders">
	<h2 class="text-5xl font-handwriting">Lead with Project Partners</h2>
	<p class="mt-8 text-2xl leading-loose text-justify">
		If you are a school or community leader, you are warmly invited to join our global Project
		Partners Network. We are committed to supporting you in your work to transform your school or
		community into a space where curiosity, creativity, and collaboration are the number one
		priority.
	</p>
	<p class="mt-8 text-2xl leading-loose text-justify text-slate-500">
		If you are a non-profit organisation, NGO, or government agency, please visit our <a
			href="/get-involved/institutions"
			class="underline"
		>
			Institutional Supporters
		</a> page to discover how we can work together.
	</p>
	<h3 class="mt-8 text-3xl font-black">Project Partners Network</h3>
	<p class="mt-4 text-2xl leading-loose text-justify">
		Join a community of individuals dedicated to reshaping the educational landscape in line with
		the Engaging Education Code. The Project Partners Network is a space for sharing ideas, learning
		from others, and taking actionable steps towards a more engaging learning environment.
	</p>
	<h3 class="inline-block px-2 mt-8 text-3xl text-white bg-black font-handwriting">
		The Engaging Education Code
	</h3>
	<p class="mt-4 text-2xl leading-loose text-justify">
		The code is a voluntary standard defining our approach towards a more interactive and engaging
		educational experience in schools, clubs, and homes. It lays down guiding principles that
		emphasise curiosity, creativity, and collaborative engagement in the learning process. While
		adherence to the code symbolises a commitment to these principles, it's a flexible framework
		that is continuously refined by the Project Partners Network community.
		<!-- Through a democratic process, specifically during our Annual General Meetings, members have the
		opportunity to alter and update the code, ensuring it remains relevant and effective in pursuing
		our shared goals. -->
	</p>
	<a href="/resources/apply" class="inline-block mt-4">
		<Button text="Apply to join" href="/resources/apply" />
	</a>
	<!-- <div>
		<div data-canny></div>
		<script>
			!(function (w, d, i, s) {
				function l() {
					if (!d.getElementById(i)) {
						var f = d.getElementsByTagName(s)[0],
							e = d.createElement(s);
						(e.type = 'text/javascript'),
							(e.async = !0),
							(e.src = 'https://canny.io/sdk.js'),
							f.parentNode.insertBefore(e, f);
					}
				}
				if ('function' != typeof w.Canny) {
					var c = function () {
						c.q.push(arguments);
					};
					(c.q = []),
						(w.Canny = c),
						'complete' === d.readyState
							? l()
							: w.attachEvent
							? w.attachEvent('onload', l)
							: w.addEventListener('load', l, !1);
				}
			})(window, document, 'canny-jssdk', 'script');
		</script>
		<script>
			Canny('render', {
				boardToken: '537b069e-6570-7dce-292d-272c097ddfcf',
				basePath: null, // See step 2
				ssoToken: null, // See step 3,
				theme: 'light' // options: light [default], dark, auto
			});
		</script>
	</div> -->
	<!-- <div class="grid grid-cols-2 gap-8 mt-8 place-items-center">
		<img src="{assets}/images/teacher-with-students-happy.jpg" class="border-4 border-black" />
		<div>
			<h4 class="text-2xl font-black">What are the benefits?</h4>
			<ul class="mt-4 text-2xl leading-loose text-justify list-disc list-inside">
				<li>Get support improving student and staff well-being</li>
				<li>Support in developing your school or community</li>
				<li>Access to our professional development workshops</li>
				<li>Access to our learning resources</li>
				<li>Access to our global network of education leaders</li>
			</ul>
		</div>
	</div>
	<div class="mx-32 my-16 border-b"></div>
	<ContactForm /> -->
</div>
