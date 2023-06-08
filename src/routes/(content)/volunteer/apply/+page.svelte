<script lang="ts">
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import TextInput from '$lib/components/form/elements/TextInput.svelte';
	import TextAreaInput from '$lib/components/form/elements/TextAreaInput.svelte';
	import SelectInput from '$lib/components/form/elements/SelectInput.svelte';

	import allCountries from '$lib/shared/data/countries.json';

	import { isValidEmail } from '$lib/shared/utils';

	type ValidationItem = {
		test: (val: string) => boolean;
		msg: string;
	};

	const accessKey = '3149ae28-80f8-4473-a6da-8677d4807356';
	const countryNames = allCountries.map((country) => country.Name);
	const rolesAvailable = ['Member, Board of Advisors', 'No particular role in mind'];

	let values: { [key: string]: string } = {
		name: '',
		email: '',
		location: '',
		role: '',

		bio: '',
		experience: '',
		contributions: '',
		motivation: ''
	};

	const validators: { [key: string]: ValidationItem } = {
		name: { test: (val: string) => !!val, msg: 'Please enter your name' },
		email: { test: (val: string) => isValidEmail(val), msg: 'Please enter a valid email address' },
		location: { test: (val: string) => !!val, msg: 'Please specify a location' },
		role: { test: (val: string) => !!val, msg: 'Please specify a role' },
		bio: {
			test: (val: string) => !!val && val.split(' ').length > 50,
			msg: 'Please tell us a bit more (>50 words)!'
		},
		experience: {
			test: (val: string) => !!val && val.split(' ').length > 50,
			msg: 'Please tell us a bit more (>50 words)!'
		},
		contributions: {
			test: (val: string) => !!val && val.split(' ').length > 50,
			msg: 'Please tell us a bit more (>50 words)!'
		},
		motivation: {
			test: (val: string) => !!val && val.split(' ').length > 50,
			msg: 'Please tell us a bit more (>50 words)!'
		}
	};

	let errors: { [key: string]: string } = {
		name: '',
		email: '',
		location: '',
		role: '',
		bio: '',
		experience: '',
		contributions: '',
		motivation: ''
	};

	const runValidation = (showErrors: boolean) => {
		let isValid = true;
		for (const key of Object.keys(errors)) {
			if (!validators[key].test(values[key])) {
				isValid = false;
				if (showErrors) {
					errors[key] = validators[key].msg;
				}
			}
		}
		return isValid;
	};
	let formIsValid = false;

	// First we define the possible states of the form
	type FormState = 'idle' | 'loading' | 'success' | 'error';

	// Then we define the possible events that can happen to the form
	type FormEvent = 'submit' | 'success' | 'error';

	// Now we define the transitions between states based on the events
	const transition = (state: FormState, event: FormEvent) => {
		switch (state) {
			case 'idle':
				switch (event) {
					case 'submit':
						return 'loading';
					default:
						return state;
				}
			case 'loading':
				switch (event) {
					case 'success':
						return 'success';
					case 'error':
						return 'error';
					default:
						return state;
				}
			case 'success':
				switch (event) {
					case 'submit':
						return 'loading';
					default:
						return state;
				}
			case 'error':
				switch (event) {
					case 'submit':
						return 'loading';
					default:
						return state;
				}
			default:
				return state;
		}
	};

	// Now we define the initial state of the form
	let formState: FormState = 'idle';

	// Now we define the function that will handle the events
	const handleEvent = (event: FormEvent) => {
		formState = transition(formState, event);
	};

	// Now we define the function that will handle the form submission
	const onSubmit = async (event: Event) => {
		event.preventDefault();

		if (formState === 'loading' || !runValidation(true)) {
			return;
		}

		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		handleEvent('submit');

		return;

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: data
		}).catch((error) => {
			handleEvent('error');
			console.error(error);
			return;
		});

		const json = await res?.json();

		if (json.success) {
			// resetContactForm();
			handleEvent('success');
		} else {
			handleEvent('error');
			console.error(json.message);
		}
	};
</script>

<div>
	<PageHeading
		title="Application form"
		description="Please fill out the form below to apply for a volunteer position and we'll get back to you as soon as possible."
	/>
	<div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
		<form
			action="https://api.web3forms.com/submit"
			method="POST"
			class="px-4 py-5 sm:p-6"
			on:submit={onSubmit}
		>
			<input type="hidden" name="access_key" value={accessKey} />
			<input type="checkbox" name="botcheck" id="" style="display: none;" />
			<div class="pb-5 mb-5 border-b border-gray-200">
				<h3 class="text-base font-semibold leading-6 text-gray-900">Basic Info</h3>
			</div>

			<TextInput
				label="Full name"
				placeholder="Please enter your full name"
				autocomplete="name"
				additionalClasses="max-w-md"
				error={errors.name}
				on:input={() => (errors.name = '')}
				bind:value={values.name}
			/>
			<TextInput
				label="Email address"
				placeholder="your@email.com"
				autocomplete="email"
				additionalClasses="max-w-md mt-8"
				error={errors.email}
				on:input={() => (errors.email = '')}
				bind:value={values.email}
			/>
			<SelectInput
				label="Country of residence"
				options={countryNames}
				additionalClasses="max-w-md mt-8"
				error={errors.location}
				on:input={() => (errors.location = '')}
				placeholder="Please select a country"
				bind:value={values.location}
			/>
			<SelectInput
				label="Which role are you applying for?"
				options={rolesAvailable}
				additionalClasses="max-w-md mt-8"
				error={errors.role}
				on:input={() => (errors.role = '')}
				placeholder="Please select a role"
				bind:value={values.role}
			/>
			<div class="pb-5 mt-10 mb-5 border-b border-gray-200">
				<h3 class="text-base font-semibold leading-6 text-gray-900">Application</h3>
			</div>
			<TextAreaInput
				label="In the spirit of narrative-driven learning, please share with us your story on how you became the person you are today."
				error={errors.bio}
				on:input={() => (errors.bio = '')}
				bind:value={values.bio}
			/>
			<TextAreaInput
				label="Please describe a notable experience in education that has shaped your perspective on learning."
				additionalClasses="pt-8"
				error={errors.experience}
				on:input={() => (errors.experience = '')}
				bind:value={values.experience}
			/>
			<TextAreaInput
				label="How do you envision your contributions to Project Partners and its mission of redefining success in education?"
				additionalClasses="pt-8"
				error={errors.contributions}
				on:input={() => (errors.contributions = '')}
				bind:value={values.contributions}
			/>
			<TextAreaInput
				label="Finally, what motivates you to volunteer as part of our advisory board?"
				additionalClasses="pt-8"
				error={errors.motivation}
				on:input={() => (errors.motivation = '')}
				bind:value={values.motivation}
			/>
			<button
				type="submit"
				class="
				block w-full rounded-md px-3.5 py-2.5 mt-6 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
				class:bg-indigo-600={formIsValid && formState !== 'loading' && formState !== 'success'}
				class:hover:bg-indigo-500={formIsValid &&
					formState !== 'loading' &&
					formState !== 'success'}
				class:bg-indigo-300={!formIsValid || formState === 'loading' || formState === 'success'}
				disabled={formState === 'loading' || formState === 'success'}
			>
				{#if formState === 'loading'}
					Submitting...
				{:else if formState === 'success'}
					Application submitted!
				{:else}
					Submit application
				{/if}
			</button>
		</form>
	</div>
</div>
