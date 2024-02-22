<script lang="ts">
	import { base } from '$app/paths';

	import subscribeUserToMailingList from '$lib/scripts/subscribeToMailingList';
	import { contactFormContent, resetContactForm } from './contactStore';
	import TextInput from '$lib/components/elements/contact/TextInput.svelte';
	import TextAreaInput from '$lib/components/elements/contact/TextAreaInput.svelte';
	import CopyLink from '$lib/components/elements/copylink/index.svelte';

	const accessKey = '109e9b32-79a4-4b32-bac5-5d4c40e6bc65';

	let formSwitches = {
		agreement: false,
		ageOrConsent: false,
		mailingList: false
	};

	const isValidEmail = (email: string) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const requiredItemsValidators: { [key: string]: any } = {
		firstName: (item: string) => !!item,
		email: (item: string) => isValidEmail(item),
		message: (item: string) => !!item,
		agreement: (item: boolean) => item,
		ageOrConsent: (item: boolean) => item
	};

	let errors = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		agreement: '',
		ageOrConsent: ''
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

	// Now we define the function that will validate the form data
	const validateFormData = (displayErrors: boolean = false) => {
		if (displayErrors && !$contactFormContent.firstName) {
			errors.firstName = 'Please enter your first name';
		}

		if (displayErrors && !$contactFormContent.email) {
			errors.email = 'Please enter your email address';
		} else if (displayErrors && !isValidEmail($contactFormContent.email)) {
			errors.email = 'Please check your email address';
		}

		if (displayErrors && !$contactFormContent.message) {
			errors.message = 'Please enter a message';
		}

		if (displayErrors && !formSwitches.agreement) {
			errors.agreement = 'Please read and agree to our Privacy Policy';
		}

		if (displayErrors && !formSwitches.ageOrConsent) {
			errors.ageOrConsent =
				'Please confirm that you are over 18 or that you have parental consent to submit this form';
		}

		// Now loop through all form elements, check if they are required and if they are, check if they are valid
		let allValid = true;
		for (const [key, value] of Object.entries({
			...$contactFormContent,
			...formSwitches
		})) {
			if (key in requiredItemsValidators) {
				if (!requiredItemsValidators[key](value)) {
					allValid = false;
				}
			}
		}

		formIsValid = allValid;
		return allValid;
	};

	const subscribe = async (firstName: string, lastName: string | null, email: string) => {
		try {
			await subscribeUserToMailingList(firstName, lastName, email);
			status = 'You have been successfully added';
		} catch (e: any) {
			console.error(e);
		}
	};

	// Now we define the function that will handle the form submission
	const onSubmit = async (event: Event) => {
		event.preventDefault();

		if (formState === 'loading' || !validateFormData(true)) {
			return;
		}

		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		handleEvent('submit');

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
			resetContactForm();
			handleEvent('success');
		} else {
			handleEvent('error');
			console.error(json.message);
		}

		if (formSwitches.mailingList && data.get('first-name') && data.get('email')) {
			const { firstName, lastName, email } = {
				firstName: data.get('first-name') as string,
				lastName: data.get('last-name') as string,
				email: data.get('email') as string
			};

			await subscribe(firstName, lastName, email).catch((e: any) => {
				console.error(e);
			});
		}
	};

	$: thereAreErrors = !Object.values(errors).every((x) => x === '');
</script>

<form
	action="https://api.web3forms.com/submit"
	method="POST"
	class="mt-16 sm:mt-20"
	on:submit={onSubmit}
>
	<input type="hidden" name="access_key" value={accessKey} />
	<input type="checkbox" name="botcheck" id="" style="display: none;" />
	<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
		<TextInput
			label="First name*"
			name="first-name"
			autocomplete="given-name"
			error={errors.firstName}
			disabled={formState === 'loading' || formState === 'success'}
			bind:value={$contactFormContent.firstName}
			on:input={() => {
				errors.firstName = '';
				validateFormData();
			}}
		/>
		<TextInput
			label="Last name"
			name="last-name"
			autocomplete="family-name"
			disabled={formState === 'loading' || formState === 'success'}
			bind:value={$contactFormContent.lastName}
		/>
		<div class="sm:col-span-2">
			<TextInput
				label="Organisation"
				name="organisation"
				autocomplete="organization"
				disabled={formState === 'loading' || formState === 'success'}
				bind:value={$contactFormContent.organisation}
			/>
		</div>
		<div class="sm:col-span-2">
			<TextInput
				label="Email*"
				name="email"
				autocomplete="email"
				error={errors.email}
				disabled={formState === 'loading' || formState === 'success'}
				bind:value={$contactFormContent.email}
				on:input={() => {
					errors.email = '';
					validateFormData();
				}}
			/>
		</div>
		<div class="sm:col-span-2">
			<TextAreaInput
				label="Your message*"
				name="message"
				error={errors.message}
				disabled={formState === 'loading' || formState === 'success'}
				placeholder="Hi! I am messaging because..."
				bind:value={$contactFormContent.message}
				on:input={() => {
					errors.message = '';
					validateFormData();
				}}
			/>
		</div>
		<div class="flex gap-x-4 sm:col-span-2">
			<div class="flex items-center h-6">
				<button
					type="button"
					class="flex flex-none w-8 p-px transition-colors duration-200 ease-in-out rounded-full cursor-pointer ring-1 ring-inset ring-gray-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ppblue disabled:cursor-not-allowed disabled:opacity-50"
					class:bg-ppblue={formSwitches.agreement}
					class:bg-gray-200={!formSwitches.agreement}
					class:outline={errors.agreement}
					class:outline-red-500={errors.agreement}
					class:outline-2={errors.agreement}
					class:outline-offset-2={errors.agreement}
					role="switch"
					aria-checked="false"
					aria-labelledby="switch-1-label"
					name="agreement"
					disabled={formState === 'loading' || formState === 'success'}
					on:click={() => {
						if (formState === 'loading') {
							return;
						}
						formSwitches.agreement = !formSwitches.agreement;
						errors.agreement = '';
						validateFormData();
					}}
				>
					<span class="sr-only">Agree to policies</span>
					<span
						aria-hidden="true"
						class="w-4 h-4 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow-sm ring-1 ring-gray-900/5"
						class:translate-x-3.5={formSwitches.agreement}
						class:translate-x-0={!formSwitches.agreement}
					/>
				</button>
			</div>
			<label class="text-lg leading-6 text-gray-600" id="switch-1-label" for="agreement">
				By selecting this, you agree to our
				<a href="{base}/policies/privacy" target="_blank" class="font-semibold text-ppblue"
					>privacy&nbsp;policy</a
				>.
			</label>
		</div>
		<div class="flex gap-x-4 sm:col-span-2">
			<div class="flex items-center h-6">
				<button
					type="button"
					class="flex flex-none w-8 p-px transition-colors duration-200 ease-in-out rounded-full cursor-pointer ring-1 ring-inset ring-gray-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ppblue disabled:cursor-not-allowed disabled:opacity-50"
					class:bg-ppblue={formSwitches.ageOrConsent}
					class:bg-gray-200={!formSwitches.ageOrConsent}
					class:outline={errors.ageOrConsent}
					class:outline-red-500={errors.ageOrConsent}
					class:outline-2={errors.ageOrConsent}
					class:outline-offset-2={errors.ageOrConsent}
					role="switch"
					aria-checked="false"
					aria-labelledby="switch-1-label"
					name="age-or-consent"
					disabled={formState === 'loading' || formState === 'success'}
					on:click={() => {
						if (formState === 'loading') {
							return;
						}
						formSwitches.ageOrConsent = !formSwitches.ageOrConsent;
						errors.ageOrConsent = '';
						validateFormData();
					}}
				>
					<span class="sr-only">Agree to policies</span>
					<span
						aria-hidden="true"
						class="w-4 h-4 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow-sm ring-1 ring-gray-900/5"
						class:translate-x-3.5={formSwitches.ageOrConsent}
						class:translate-x-0={!formSwitches.ageOrConsent}
					/>
				</button>
			</div>
			<label class="text-lg leading-6 text-gray-600" id="switch-1-label" for="age-or-consent">
				I am over 18 years old or have parental consent to submit this form.
			</label>
		</div>
		<div class="flex gap-x-4 sm:col-span-2">
			<div class="flex items-center h-6">
				<button
					type="button"
					class="flex flex-none w-8 p-px transition-colors duration-200 ease-in-out rounded-full cursor-pointer ring-1 ring-inset ring-gray-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ppblue disabled:cursor-not-allowed disabled:opacity-50"
					class:bg-ppblue={formSwitches.mailingList}
					class:bg-gray-200={!formSwitches.mailingList}
					role="switch"
					aria-checked="false"
					aria-labelledby="switch-1-label"
					name="mailing-list"
					disabled={formState === 'loading' || formState === 'success'}
					on:click={() => {
						if (formState === 'loading') {
							return;
						}
						formSwitches.mailingList = !formSwitches.mailingList;
					}}
				>
					<span class="sr-only">Subscribe to mailing list</span>
					<span
						aria-hidden="true"
						class="w-4 h-4 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow-sm ring-1 ring-gray-900/5"
						class:translate-x-3.5={formSwitches.mailingList}
						class:translate-x-0={!formSwitches.mailingList}
					/>
				</button>
			</div>
			<label class="text-lg leading-6 text-gray-600" id="switch-1-label" for="agreement">
				Keep me updated on news and events via email.
			</label>
		</div>
	</div>
	{#if thereAreErrors}
		<div class="p-4 mt-5 rounded-sm bg-red-50">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="w-5 h-5 text-red-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-xl text-red-800">
						Oops! Please check you've filled in all the information correctly.
					</h3>
					<div class="my-2 text-red-800">
						<ul class="space-y-1 list-inside list-square">
							{#each Object.values(errors) as error}
								{#if error}
									<li>
										{error}
									</li>
								{/if}
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	{/if}
	<div class="mt-10">
		<button
			type="submit"
			class="
				block w-full rounded-sm px-3.5 py-2.5 text-center text-xl font-semibold opacity-100 bg-ppblue text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ppblue disabled:cursor-not-allowed"
			class:hover:shadow-md={formIsValid && formState !== 'loading' && formState !== 'success'}
			class:hover:shadow-[#27ACD9]={formIsValid &&
				formState !== 'loading' &&
				formState !== 'success'}
			class:opacity-50={!formIsValid || formState === 'loading' || formState === 'success'}
			disabled={formState === 'loading' || formState === 'success'}
		>
			{#if formState === 'loading'}
				Sending...
			{:else if formState === 'success'}
				Message sent
			{:else}
				Send message
			{/if}
		</button>
	</div>
	{#if formState === 'success'}
		<div class="p-4 mt-4 rounded-md bg-green-50">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="w-5 h-5 text-green-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<p class="text-xl font-medium text-green-800">Thank you, we will get back to you soon!</p>
				</div>
			</div>
		</div>
	{:else if formState === 'error'}
		<div class="p-4 mt-5 rounded-md bg-red-50">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="w-5 h-5 text-red-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-xl font-medium text-red-800">Your message was not sent</h3>
					<div class="mt-2 text-xl text-red-700">
						<p>
							We're sorry! Please check your internet connection or, if the error persists, please
							email us instead at <CopyLink text="hello@projectpartners.org" />
						</p>
					</div>
				</div>
			</div>
		</div>
	{/if}
</form>
