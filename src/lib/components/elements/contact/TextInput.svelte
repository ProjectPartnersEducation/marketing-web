<script lang="ts">
	export let name = '';
	export let label = '';
	export let placeholder = '';
	export let value = '';
	export let required = false;
	export let autocomplete = 'off';
	export let error = '';
	export let type = 'text';
	export let disabled = false;
	export let additionalClasses = '';

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}

	// Generate a random ID
	const id = Math.random().toString(36).substring(2);
</script>

<div class={additionalClasses}>
	<label for={id} class="block text-xl leading-6 text-gray-900">{label}</label>
	<div class="relative mt-2 rounded-md shadow-sm">
		<input
			use:typeAction
			{name}
			{id}
			{placeholder}
			{required}
			{autocomplete}
			class="w-full rounded-md border-0 px-3.5 py-2 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
			class:pr-10={error}
			class:text-red-900={error}
			class:text-gray-900={!error}
			class:ring-red-300={error}
			class:ring-gray-300={!error}
			class:placeholder:text-red-300={error}
			class:placeholder:text-gray-300={!error}
			class:focus:ring-red-500={error}
			class:focus:ring-indigo-500={!error}
			bind:value
			{disabled}
			on:blur
			on:focus
			on:input
			aria-invalid={!!error}
			aria-describedby={error ? `${id}-error` : undefined}
		/>
		{#if error}
			<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
				<svg
					class="w-5 h-5 text-red-500"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		{/if}
	</div>
	{#if error}
		<p class="mt-2 text-sm text-red-600" id="{id}-error">{error}</p>
	{/if}
</div>
