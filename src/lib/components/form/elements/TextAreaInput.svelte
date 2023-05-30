<script lang="ts">
	export let name = '';
	export let label = '';
	export let placeholder = '';
	export let value = '';
	export let required = false;
	export let error = '';
	export let disabled = false;
	export let additionalClasses = '';

	// Generate a random ID
	const id = Math.random().toString(36).substring(2);
</script>

<div class={additionalClasses}>
	<label for={id} class="block text-sm font-semibold leading-6 text-gray-900">{label}</label>
	<div class="relative mt-2 rounded-md shadow-sm">
		<textarea
			{name}
			{id}
			{placeholder}
			{required}
			{disabled}
			class="w-full rounded-md border-0 px-3.5 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
			class:text-red-900={error}
			class:text-gray-900={!error}
			class:ring-red-300={error}
			class:ring-gray-300={!error}
			class:placeholder:text-gray-300={!error}
			class:focus:ring-red-500={error}
			class:focus:ring-indigo-500={!error}
			rows="4"
			bind:value
			on:blur
			on:focus
			on:input
			aria-invalid={!!error}
			aria-describedby={error ? `${id}-error` : undefined}
		/>
	</div>
	{#if error}
		<p class="mt-2 text-sm text-red-600" id="{id}-error">{error}</p>
	{/if}
</div>
