<script lang="ts">
	let agreement = false;
	let mailingList = false;

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
		<div>
			<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900"
				>First name*</label
			>
			<div class="mt-2.5">
				<input
					type="text"
					name="first-name"
					id="first-name"
					autocomplete="given-name"
					class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		<div>
			<label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900"
				>Last name</label
			>
			<div class="mt-2.5">
				<input
					type="text"
					name="last-name"
					id="last-name"
					autocomplete="family-name"
					class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		<div class="sm:col-span-2">
			<label for="organisation" class="block text-sm font-semibold leading-6 text-gray-900"
				>Organisation</label
			>
			<div class="mt-2.5">
				<input
					type="text"
					name="organisation"
					id="organisation"
					autocomplete="organization"
					class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		<div class="sm:col-span-2">
			<label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email*</label>
			<div class="mt-2.5">
				<input
					type="email"
					name="email"
					id="email"
					autocomplete="email"
					class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		<div class="sm:col-span-2">
			<label for="message" class="block text-sm font-semibold leading-6 text-gray-900"
				>Hi! I am messaging because...*</label
			>
			<div class="mt-2.5">
				<textarea
					name="message"
					id="message"
					rows="4"
					class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
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
