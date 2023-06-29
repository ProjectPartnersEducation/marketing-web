<script>
	import ListContainer from '$lib/components/shared/ListContainer.svelte';
	import ListItem from '$lib/components/shared/ListItem.svelte';
	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import TextSection from '$lib/components/shared/TextSection.svelte';
</script>

<PageHeading
	title="Framework"
	description="At the core of our work lies the Project Partners Pedagogical Principles. These principles encompass the unique and innovative pedagogical approach we use to make education engaging, meaningful, and globally relevant."
	aboveHeadingText="Our pedagogical principles"
/>

<PageIntroSummary
	subtitle="Discover our transformative pedagogical model, where we demonstrate the principles and practical applications that are redefining success in education."
	menuItems={[
		{
			title: 'Our Principles',
			desc: 'Five key principles guide all our operations and initiatives. They represent our philosophy of education, which we support our partners to adopt.',
			linkText: 'Read more',
			href: '#principles'
		},
		{
			title: 'How We Implement Them',
			desc: 'Find out how we implement our philosophy in our curriculum and teaching methods, creating an engaging and culturally inclusive learning environment.',
			linkText: 'Read more',
			href: '#implementation'
		},
		{
			title: 'FAQs',
			desc: "Here you'll find answers to common questions about our pedagogical framework and how to implement it.",
			linkText: 'Read more',
			href: '#faqs'
		}
	]}
/>

<SectionHeading
	title="Our pedagogical principles"
	subtitle="Our pedagogical principles are the foundation of our work. They are the guiding principles that inform our curriculum, teaching methods, and assessment practices."
	id="principles"
/>
<ListContainer>
	<ListItem>
		<SectionHeading level="2" title="1. Contextual and Collaborative Learning" withMargin={false} />
		<TextSection level="2">
			At the core of our approach is the belief that learning should not be a passive activity but a
			dynamic, engaging process. By rooting learning in engaging narratives that provide context for
			new topics, students are able to see the real-world applications of what they're learning.
			Moreover, we emphasise the importance of collaboration and peer teaching. Working together,
			students develop communication skills, empathy, and a deeper understanding of the material.
			<br />
			<br />
			For example, in a mathematics lesson, students might work on a project to plan a community event,
			applying their maths skills to budgeting, scheduling, and logistics. The context makes the learning
			meaningful, and the collaboration adds a layer of interpersonal skills development.
		</TextSection>
	</ListItem>
	<ListItem>
		<SectionHeading
			level="2"
			title="2. Facilitative Role of Teachers and Professional Development"
			withMargin={false}
		/>
		<TextSection level="2">
			We see teachers not as mere transmitters of knowledge, but as guides and facilitators in the
			learning journey. Teachers are encouraged to support student learning, promote creativity, and
			ensure a safe and effective environment. Simultaneously, we believe in the importance of
			professional development for teachers, helping them adopt innovative pedagogical approaches
			and maintain their well-being.
			<br />
			<br />
			For instance, instead of lecturing about a topic, a teacher might introduce a problem or scenario
			related to the topic, and then guide students as they explore and seek solutions. This facilitative
			approach makes learning more active and student-driven.
		</TextSection>
	</ListItem>
	<ListItem>
		<SectionHeading
			level="2"
			title="3. Global Awareness and Cultural Sensitivity"
			withMargin={false}
		/>
		<TextSection level="2">
			Our educational practices aim to foster awareness of local and global challenges. By
			incorporating real-world issues into the curriculum, students gain a broader understanding of
			their role in the world. Furthermore, by reflecting a wide range of cultures, settings, and
			characters in learning materials, we promote cultural awareness and respect for diversity.
			<br />
			<br />
			For example, a science project might involve researching and proposing solutions to a global environmental
			issue. This not only develops science skills but also fosters global awareness and critical thinking.
		</TextSection>
	</ListItem>
	<ListItem>
		<SectionHeading
			level="2"
			title="4. Integrative Assessment Practices as Evidence for Success"
			withMargin={false}
		/>
		<TextSection level="2">
			Assessments in our model serve dual purposes. They are tools for learning as well as measures
			of knowledge. We integrate both formative and summative assessments into the learning process,
			providing students with feedback that helps them grow. At the same time, we guide our
			practices based on research and feedback, ensuring that our approach remains relevant and
			effective.
			<br />
			<br />
			For instance, a teacher might assess a group project not only based on the final product but also
			on individual contributions, problem-solving processes, and group dynamics. This comprehensive
			approach provides a fuller picture of each student's learning progress.
		</TextSection>
	</ListItem>
	<ListItem>
		<SectionHeading
			level="2"
			title="5. Scalability and Accessibility in Technology Usage"
			withMargin={false}
		/>
		<TextSection level="2">
			We aim for maximum accessibility and scalability, minimising dependency on technology to avoid
			creating disparities among different populations. Our goal is to use technology to enhance
			learning without becoming a barrier, ensuring that quality education reaches every learner.
			<br />
			<br />
			For example, we provide both online and printed materials, making our resources accessible to students
			regardless of their access to technology. This approach allows us to reach a wider audience and
			reduce inequalities in education.
		</TextSection>
	</ListItem>
</ListContainer>

<!-- Understanding these principles is the first step towards transforming your educational environment. In the following section, we will guide you on how to implement these principles effectively in your school or organisation. -->

<SectionHeading
	title="How we implement them"
	subtitle="We measure ourselves by our actions, not our words. Here, we illustrate how we bring our principles life through our educational approach and practices."
	id="implementation"
/>

<SectionHeading title="Frequently asked questions" id="faqs" />
