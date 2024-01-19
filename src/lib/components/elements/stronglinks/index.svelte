<script lang="ts">
	type LinkInfo = {
		imgsrc: string;
		imgalt: string;
		text: string;
		href: string;
		hoverColor?: string | PPColors;
	};

	export let link1: LinkInfo;
	export let link2: LinkInfo;
	export let bigLink: LinkInfo;

	enum PPColors {
		pppink = '#cea0b5',
		ppgreen = '#93b195',
		ppyellow = '#eeb019',
		pporange = '#f3a061',
		ppblue = '#1e87ab',
		ppred = '#d01c1c'
	}

	link1.hoverColor = PPColors[link1.hoverColor as keyof typeof PPColors] || link1.hoverColor;
	link2.hoverColor = PPColors[link2.hoverColor as keyof typeof PPColors] || link2.hoverColor;
	bigLink.hoverColor = PPColors[bigLink.hoverColor as keyof typeof PPColors] || bigLink.hoverColor;
</script>

<div class="grid grid-cols-2 gap-8 mx-8 lg:mx-64 md:mx-32 sm:mx-16 xl:auto-rows-fr">
	<a href={link1.href} class="col-span-2 xl:col-span-1">
		<div
			class="relative grid grid-cols-2 transition-transform bg-black border-4 border-black cursor-pointer group hover:scale-105"
		>
			<div>
				<img src={link1.imgsrc} alt={link1.imgalt} class="w-full h-auto" />
				<div class="w-1/2 h-auto fade-right"></div>
			</div>
			<div class="flex items-center justify-center px-2">
				<h3
					class="xl:text-6xl md:text-5xl text-4xl text-center text-white transition-colors font-handwriting group-hover:text-[var(--tc)]"
					style="--tc: {link1.hoverColor}"
				>
					{link1.text}
				</h3>
			</div>
		</div>
	</a>
	<a href={link2.href} class="col-span-2 xl:col-span-1">
		<div
			class="relative grid grid-cols-2 transition-transform bg-black border-4 border-black cursor-pointer group hover:scale-105"
		>
			<div class="flex items-center justify-center px-2">
				<h3
					class="xl:text-6xl md:text-5xl text-4xl text-center text-white font-handwriting group-hover:text-[var(--tc)]"
					style="--tc: {link2.hoverColor}"
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
		class="flex items-center py-8 justify-center col-span-2 text-white transition-transform bg-black font-handwriting font-black xl:text-6xl md:text-5xl text-4xl hover:scale-105 hover:text-[var(--tc)]"
		style="--tc: {bigLink.hoverColor}"
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
