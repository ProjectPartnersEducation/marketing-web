<script lang="ts">
	export let text: string;
	export let href: string = '#';
	export let target: string = '';
	export let color: PPColors | string = '#1e87ab';
	export let textColor: string = '#ffffff';
	export let big = false;
	export let action: () => void = () => {};

	enum PPColors {
		pppink = '#cea0b5',
		ppgreen = '#93b195',
		ppyellow = '#eeb019',
		pporange = '#f3a061',
		ppblue = '#1e87ab',
		ppred = '#d01c1c'
	}

	color = PPColors[color as keyof typeof PPColors] || color;
</script>

<a
	style="--clr: {color}; --textclr: {textColor}"
	class="inline-flex items-center max-w-full gap-3 py-3 pl-5 pr-6 overflow-hidden font-black tracking-wide break-words transition-colors duration-300 bg-black border-8 rounded-sm decoration-0 button"
	class:text-xl={!big}
	class:text-3xl={big}
	{href}
	{target}
	on:click={action}
>
	<span
		class="relative grid w-6 h-6 overflow-hidden bg-white rounded-full button__icon-wrapper shrink-0 place-items-center"
	>
		<svg
			width="10"
			class="button__icon-svg"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 15"
		>
			<path
				fill="currentColor"
				d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
			/>
		</svg>

		<svg
			class="button__icon-svg button__icon-svg--copy"
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			fill="none"
			viewBox="0 0 14 15"
		>
			<path
				fill="currentColor"
				d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
			/>
		</svg>
	</span>
	{text}
</a>

<style>
	.button {
		color: var(--textclr);
		border-color: var(--clr);
		box-sizing: border-box;
	}

	.button__icon-wrapper {
		color: var(--clr);
	}

	.button:hover {
		background-color: var(--clr);
	}

	.button:hover .button__icon-wrapper {
		color: var(--clr);
	}

	.button__icon-svg--copy {
		position: absolute;
		transform: translate(-150%, 150%);
	}

	.button:hover .button__icon-svg:first-child {
		transition: transform 0.3s ease-in-out;
		transform: translate(150%, -150%);
	}

	.button:hover .button__icon-svg--copy {
		transition: transform 0.3s ease-in-out 0.1s;
		transform: translate(0);
	}
</style>
