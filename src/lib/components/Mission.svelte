<script>
	export const title = 'Our mission';
	export const text1 =
		'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.';
	export const text2 =
		'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.';

	export const stats = [
		{
			title: '£0',
			subtitle: 'The cost to access our digital resources'
		},
		{
			title: '200',
			subtitle: 'Partner schools around the world'
		},
		{
			title: '46,000',
			subtitle: 'New users annually'
		}
	];
</script>

<div class="py-32 bg-white">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
			<div class="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
				<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
					<p class="text-xl leading-8 text-gray-600">
						{text1}
					</p>
					<p class="max-w-xl mt-10 text-base leading-7 text-gray-700">
						{text2}
					</p>
				</div>
				<div class="lg:flex lg:flex-auto lg:justify-center">
					<dl class="w-64 space-y-8 xl:w-80">
						{#each stats as stat}
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">{stat.subtitle}</dt>
								<dd class="text-5xl font-semibold tracking-tight text-gray-900">{stat.title}</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>
	</div>
</div>
