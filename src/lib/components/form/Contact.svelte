<script lang="ts">
	import TextInput from '$lib/components/form/elements/TextInput.svelte';
	import TextAreaInput from '$lib/components/form/elements/TextAreaInput.svelte';

	let agreement = false;
	let mailingList = false;

	let firstName = '';
	let lastName = '';
	let organisation = '';
	let email = '';
	let message = '';

	const accessKey = '3149ae28-80f8-4473-a6da-8677d4807356';

	const onSubmit = async (event: Event) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: data
		});

		const json = await res.json();

		if (json.success) {
			alert('Form successfully submitted');
		} else {
			alert(json.message);
		}
	};
</script>

<form
	action="https://api.web3forms.com/submit"
	method="POST"
	class="max-w-xl mx-auto mt-16 sm:mt-20"
	on:submit={onSubmit}
>
	<input type="hidden" name="access_key" value={accessKey} />
	<input type="checkbox" name="botcheck" id="" style="display: none;" />
	<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
		<TextInput
			label="First name*"
			name="first-name"
			autocomplete="given-name"
			required
			bind:value={firstName}
		/>
		<TextInput
			label="Last name"
			name="last-name"
			autocomplete="family-name"
			bind:value={lastName}
		/>
		<div class="sm:col-span-2">
			<TextInput
				label="Organisation"
				name="organisation"
				autocomplete="organization"
				bind:value={organisation}
			/>
		</div>
		<div class="sm:col-span-2">
			<TextInput
				label="Email*"
				name="email"
				autocomplete="email"
				bind:value={email}
				type="email"
				required
			/>
		</div>
		<div class="sm:col-span-2">
			<TextAreaInput
				label="Your message*"
				name="message"
				bind:value={message}
				required
				placeholder="Hi! I am messaging because...*"
			/>
		</div>
		<div class="flex gap-x-4 sm:col-span-2">
			<div class="flex items-center h-6">
				<button
					type="button"
					class="flex flex-none w-8 p-px transition-colors duration-200 ease-in-out rounded-full cursor-pointer ring-1 ring-inset ring-gray-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					class:bg-indigo-600={agreement}
					class:bg-gray-200={!agreement}
					role="switch"
					aria-checked="false"
					aria-labelledby="switch-1-label"
					name="agreement"
					on:click={() => (agreement = !agreement)}
				>
					<span class="sr-only">Agree to policies</span>
					<span
						aria-hidden="true"
						class="w-4 h-4 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow-sm ring-1 ring-gray-900/5"
						class:translate-x-3.5={agreement}
						class:translate-x-0={!agreement}
					/>
				</button>
			</div>
			<label class="text-sm leading-6 text-gray-600" id="switch-1-label" for="agreement">
				By selecting this, you agree to our
				<a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
			</label>
		</div>
		<div class="flex gap-x-4 sm:col-span-2">
			<div class="flex items-center h-6">
				<button
					type="button"
					class="flex flex-none w-8 p-px transition-colors duration-200 ease-in-out rounded-full cursor-pointer ring-1 ring-inset ring-gray-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					class:bg-indigo-600={mailingList}
					class:bg-gray-200={!mailingList}
					role="switch"
					aria-checked="false"
					aria-labelledby="switch-1-label"
					name="mailing-list"
					on:click={() => (mailingList = !mailingList)}
				>
					<span class="sr-only">Subscribe to mailing list</span>
					<span
						aria-hidden="true"
						class="w-4 h-4 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow-sm ring-1 ring-gray-900/5"
						class:translate-x-3.5={mailingList}
						class:translate-x-0={!mailingList}
					/>
				</button>
			</div>
			<label class="text-sm leading-6 text-gray-600" id="switch-1-label" for="agreement">
				Keep me updated on news and events via email.
			</label>
		</div>
	</div>
	<div class="mt-10">
		<button
			type="submit"
			class="
				block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			class:bg-indigo-600={agreement}
			class:hover:bg-indigo-500={agreement}
			class:bg-indigo-300={!agreement}
		>
			Send message</button
		>
	</div>
</form>
