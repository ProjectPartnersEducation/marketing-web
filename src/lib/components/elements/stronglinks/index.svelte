<script lang="ts">
	type LinkInfo = {
		imgsrc: string;
		imgalt: string;
		text: string;
		href: string;
		hoverColor?: string;
	};

	export let link1: LinkInfo;
	export let link2: LinkInfo;
	export let bigLink: LinkInfo;
</script>

<div class="grid grid-cols-2 gap-8 mx-8 lg:mx-64 md:mx-32 sm:mx-16 auto-rows-fr">
	<a href={link1.href}>
		<div
			class="relative grid grid-cols-2 transition-transform bg-black border-4 border-black cursor-pointer group hover:scale-105"
		>
			<div>
				<img src={link1.imgsrc} alt={link1.imgalt} class="w-full h-auto" />
				<div class="w-1/2 h-auto fade-right"></div>
			</div>
			<div class="flex items-center justify-center px-2">
				<h3
					class="text-6xl text-center text-white transition-colors font-handwriting group-hover:text-{link1.hoverColor}"
				>
					{link1.text}
				</h3>
			</div>
		</div>
	</a>
	<a href={link2.href}>
		<div
			class="relative grid grid-cols-2 transition-transform bg-black border-4 border-black cursor-pointer group hover:scale-105"
		>
			<div class="flex items-center justify-center px-2">
				<h3
					class="text-4xl text-center text-white font-handwriting group-hover:text-{link2.hoverColor}"
				>
					{link2.text}
				</h3>
			</div>
			<div class="relative">
				<img src={link2.imgsrc} alt={link2.imgalt} class="w-full h-auto" />
				<div class="w-1/2 h-auto fade-left"></div>
			</div>
		</div>
	</a>
	<a
		href={bigLink.href}
		class="flex items-center justify-center col-span-2 text-white transition-transform bg-black font-handwriting text-8xl hover:scale-105 hover:text-{bigLink.hoverColor}"
	>
		{bigLink.text}
	</a>
</div>

<style>
	.fade-right {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to right, transparent, transparent, rgba(0, 0, 0, 1));
	}
	.fade-left {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to left, transparent, transparent, rgba(0, 0, 0, 1));
	}
</style>
