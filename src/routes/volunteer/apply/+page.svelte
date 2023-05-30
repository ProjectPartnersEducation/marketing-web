<script>
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import TextInput from '$lib/components/form/elements/TextInput.svelte';
	import TextAreaInput from '$lib/components/form/elements/TextAreaInput.svelte';
	import allCountries from '$lib/shared/data/countries.json';
	import Page from '../../+page.svelte';

	const countryNames = allCountries.map((country) => country.Name);
	const rolesAvailable = ['Member, Board of Advisors', 'No particular role in mind'];

	let name = '';
	let email = '';
	let location = '';
	let role = '';

	let bio = '';
	let experience = '';
	let contributions = '';
	let motivation = '';
</script>

<div>
	<PageHeading
		title="Application form"
		description="Please fill out the form below to apply for a volunteer position and we'll get back to you as soon as possible."
	/>
	<div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
		<div class="px-4 py-5 sm:p-6">
			<div class="pb-5 mb-5 border-b border-gray-200">
				<h3 class="text-base font-semibold leading-6 text-gray-900">Basic Info</h3>
			</div>

			<TextInput
				label="Full name"
				required={true}
				placeholder="Please enter your full name"
				autocomplete="name"
				additionalClasses="max-w-md"
			/>
			<TextInput
				label="Email address"
				required={true}
				placeholder="your@email.com"
				autocomplete="email"
				additionalClasses="max-w-md mt-8"
			/>
			<div class="max-w-md pt-8">
				<label for="location" class="block text-sm font-semibold leading-6 text-gray-900"
					>Location</label
				>
				<select
					id="location"
					name="location"
					class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
					class:text-gray-900={location !== ''}
					class:text-gray-400={location === ''}
					bind:value={location}
				>
					<option value="" disabled selected>Please select a country</option>
					{#each countryNames as country}
						<option value={country}>{country}</option>
					{/each}
				</select>
			</div>
			<div class="max-w-md pt-8">
				<label for="location" class="block text-sm font-semibold leading-6 text-gray-900"
					>Which role are you applying for?</label
				>
				<select
					id="location"
					name="location"
					class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
					class:text-gray-900={role !== ''}
					class:text-gray-400={role === ''}
					bind:value={role}
				>
					<option value="" disabled selected class="invalid:text-red-600"
						>Please select a role</option
					>
					{#each rolesAvailable as role}
						<option value={role}>{role}</option>
					{/each}
				</select>
			</div>
			<div class="pt-12 border-gray-200">
				<div class="pb-5 mb-5 border-b border-gray-200">
					<h3 class="text-base font-semibold leading-6 text-gray-900">Application</h3>
				</div>
				<TextAreaInput
					label="In the spirit of narrative-driven learning, please share with us your story on how you became the person you are today."
					required={true}
				/>
				<TextAreaInput
					label="Please describe a notable experience in education that has shaped your perspective on learning."
					required={true}
					additionalClasses="pt-8"
				/>
				<TextAreaInput
					label="How do you envision your contributions to Project Partners and its mission of redefining success in education?"
					required={true}
					additionalClasses="pt-8"
				/>
				<TextAreaInput
					label="Finally, what motivates you to volunteer as part of our advisory board?"
					required={true}
					additionalClasses="pt-8"
				/>
			</div>
		</div>
		<div class="px-4 py-4 sm:px-6">
			<button
				type="button"
				class="rounded-md float-right bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Submit</button
			>
		</div>
	</div>
</div>
