<script lang="ts">
	export let id: string = '';
	export let name: string = '';
	export let label: string = '';
	export let value: string = '';
	export let placeholder: string = '';
	export let options: string[] = [];
	export let required: boolean = false;
	export let error: string = '';
	export let disabled: boolean = false;
	export let additionalClasses: string = '';
</script>

<div class={additionalClasses}>
	<label for={id} class="block text-lg leading-6 text-gray-900">{label}</label>
	<select
		{name}
		{id}
		{required}
		class="w-full rounded-md border-0 px-3.5 py-2 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-lg sm:leading-6 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
		class:pr-10={error}
		class:text-red-900={error}
		class:text-gray-900={!error && value !== ''}
		class:ring-red-300={error}
		class:ring-gray-300={!error}
		class:focus:ring-red-500={error}
		class:focus:ring-indigo-500={!error}
		class:text-gray-400={!error && value === ''}
		bind:value
		{disabled}
		on:blur
		on:focus
		on:input
		aria-invalid={!!error}
		aria-describedby={error ? `${id}-error` : undefined}
	>
		<option value="" disabled selected>{placeholder}</option>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	{#if error}
		<p class="mt-2 text-sm text-red-600" id="{id}-error">{error}</p>
	{/if}
</div>
