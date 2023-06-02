<script>
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import TextSection from '$lib/components/shared/TextSection.svelte';
	import ListContainer from '$lib/components/shared/ListContainer.svelte';
	import ListItem from '$lib/components/shared/ListItem.svelte';
</script>

<PageHeading
	title="Member, Board of Advisors"
	description="Help us reshape education for the better by joining our Board of Advisors. Worldwide (Remote). Volunteer position."
>
	<div slot="below-heading">
		<div class="w-full mt-6 text-center">
			<a
				class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				href="{base}/volunteer/apply">Apply now</a
			>
		</div>
	</div>
</PageHeading>
<SectionHeading
	title="Job Description"
	subtitle="Updated 29th May 2023. Applications are always welcome."
/>

<TextSection level="2">
	We at Project Partners are committed to revolutionising education, transforming it into a
	meaningful and engaging journey of discovery for learners. Our unique pedagogical approach, guided
	by principles that prioritize the learner's personal development and understanding of their place
	in the world, forms the bedrock of all our initiatives.
</TextSection>

<TextSection level="2">
	In alignment with our ethos of contextual learning, peer-to-peer collaboration, global awareness,
	integrated assessment, and accessibility, we have partnered with the Ghana Commission for UNESCO
	in a groundbreaking pilot programme. This innovative venture aims to reshape education across up
	to 200 UNESCO ASPNet schools in Ghana. As we embark on this journey, the need for experienced,
	insightful guidance is ever more essential.
</TextSection>

<TextSection level="2">
	We are looking for exceptional individuals to join our Volunteer Advisory Board, a group of
	dedicated professionals who share our commitment to redefining success in education.
</TextSection>

<SectionHeading level="2">Responsibilities</SectionHeading>

<TextSection level="2">As an Advisor, you will be expected to:</TextSection>
<ListContainer level="2">
	<ListItem>Attend monthly remote board meetings.</ListItem>
	<ListItem>
		Provide expert guidance on our initiatives, helping us navigate our current challenges and
		opportunities.
	</ListItem>
	<ListItem>
		Share your expertise in areas such as teaching, teacher training, education policy, curriculum
		development, or child psychology.
	</ListItem>
	<ListItem>
		Assist in our ongoing efforts to refine and enhance our educational approach, ensuring its safe
		and impactful scalability.
	</ListItem>
</ListContainer>

<SectionHeading level="2">Who We Are Looking For</SectionHeading>

<TextSection level="2">We are seeking individuals who:</TextSection>
<ListContainer level="2">
	<ListItem>
		Have significant experience in education, with roles such as teaching, teacher training,
		education policy, curriculum development, or child psychology being especially relevant.
	</ListItem>
	<ListItem>
		Are passionate about creating meaningful, transformative learning experiences for children and
		young adults.
	</ListItem>
	<ListItem>
		Are comfortable working in a start-up environment and are ready to commit 1-2 hours per month to
		advise and guide our efforts.
	</ListItem>
	<ListItem>
		Can participate and contribute effectively in remote meetings and discussions.
	</ListItem>
</ListContainer>

<SectionHeading level="2">What We Offer</SectionHeading>
<TextSection level="2">
	While the role is voluntary, being part of our Advisory Board offers:
</TextSection>
<ListContainer level="2">
	<ListItem>
		The opportunity to directly influence the success of a groundbreaking educational initiative.
	</ListItem>
	<ListItem>
		The chance to share and utilise your expertise to make a real difference in the lives of
		students and teachers.
	</ListItem>
	<ListItem>
		Being a part of a passionate, driven team dedicated to transforming education.
	</ListItem>
</ListContainer>

<SectionHeading level="2">How to Apply</SectionHeading>

<TextSection level="2">
	If you believe you have the experience, skills, and passion we are looking for, we invite you to
	apply through the form on our jobs page. Successful candidates will be invited for an online video
	interview with one of our Trustees. We look forward to receiving your application.
</TextSection>
<TextSection level="2">
	At Project Partners, we are a 100% volunteer-led registered charity, based in England and Wales.
	Our commitment to redefining success in education stems from our firm belief that learning should
	extend beyond the classroom and into life. Together, let's create a world where every learning
	experience is a journey of discovery, empathy, and personal growth.
</TextSection>

<div class="p-5 mt-6 rounded-lg bg-indigo-50">
	<SectionHeading level="3" withMargin={false}>Equity and justice</SectionHeading>
	<TextSection level="2">
		At Project Partners, we believe that diverse perspectives enrich our collective wisdom and
		strengthen our mission to transform education. With this in mind, we are resolute in our
		commitment to providing equitable opportunities. We strive to eliminate any
		accessibility-related barriers that might restrict participation in our Advisory Board. Our aim
		is to build an inclusive and diverse board, representing a range of backgrounds, experiences,
		and ideas. Therefore, we actively encourage and support applications from individuals
		irrespective of their abilities. If you encounter any barriers in the application process, we
		warmly invite you to share these concerns with us. Rest assured, we will treat all such
		communications with utmost dignity, respect, and a genuine commitment to amend and improve our
		practices.
	</TextSection>
</div>

<div class="w-full mt-6 text-center">
	<a
		class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		href="{base}/volunteer/apply">Apply now</a
	>
</div>
