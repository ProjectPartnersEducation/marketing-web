<script lang="ts">
	export let direction: 'left' | 'right' = 'right';
	export let text: string = 'Learn More';
	export let onClick: () => void = () => {};

	export let hidden: boolean = false;
</script>

<button
	class="learn-more {direction}"
	class:hidden
	on:click={hidden ? () => {} : onClick}
	on:keypress={hidden ? () => {} : onClick}
>
	<span class="circle" aria-hidden="true">
		<span class="icon arrow" />
	</span>
	<span class="button-text">{text}</span>
</button>

<style>
	button {
		position: relative;
		display: inline-block;
		cursor: pointer;
		outline: none;
		border: 0;
		vertical-align: middle;
		text-decoration: none;
		background: transparent;
		padding: 0;
		font-size: inherit;
		font-family: inherit;
	}

	button.hidden {
		opacity: 0;
		cursor: default;
	}

	button.learn-more {
		width: 12rem;
		height: auto;
	}

	button.learn-more .circle {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: relative;
		display: block;
		margin: 0;
		width: 3rem;
		height: 3rem;
		background: #282936;
		border-radius: 0.625rem;
		z-index: -1;
	}

	button.learn-more.left .circle {
		float: right;
	}

	button.learn-more .circle .icon {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		background: #fff;
	}

	button.learn-more .circle .icon.arrow {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		width: 1.125rem;
		height: 0.125rem;
		background: none;
	}

	button.learn-more.right .circle .icon.arrow {
		left: 0.625rem;
	}

	button.learn-more.left .circle .icon.arrow {
		right: 0.625rem;
	}

	button.learn-more .circle .icon.arrow::before {
		position: absolute;
		content: '';
		top: -0.29rem;
		width: 0.625rem;
		height: 0.625rem;
		border-top: 0.125rem solid #fff;
		border-right: 0.125rem solid #fff;
	}

	button.learn-more.right .circle .icon.arrow::before {
		right: 0.0625rem;
		transform: rotate(45deg);
	}

	button.learn-more.left .circle .icon.arrow::before {
		left: 0.0625rem;
		transform: rotate(-135deg);
	}

	button.learn-more .button-text {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0.75rem 0;
		margin: 0 0 0 1.85rem;
		color: #282936;
		font-weight: 700;
		line-height: 1.6;
		text-align: center;
		text-transform: uppercase;
	}

	button.learn-more.left .button-text {
		margin: 0 1.85rem 0 0;
	}

	button:hover .circle {
		width: 100%;
	}

	button:hover .circle .icon.arrow {
		background: #fff;
	}

	button.right:not(.hidden):hover .circle .icon.arrow {
		transform: translate(1rem, 0);
	}

	button.left:not(.hidden):hover .circle .icon.arrow {
		transform: translate(-1rem, 0);
	}

	button:hover .button-text {
		color: #fff !important;
	}
</style>
