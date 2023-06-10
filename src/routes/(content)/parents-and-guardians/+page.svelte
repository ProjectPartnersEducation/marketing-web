<script>
	import { base } from '$app/paths';

	import PageHeading from '$lib/components/shared/PageHeading.svelte';
	import PageIntroSummary from '$lib/components/shared/PageIntroSummary.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
	import TextSection from '$lib/components/shared/TextSection.svelte';
	import ListContainer from '$lib/components/shared/ListContainer.svelte';
	import ListItem from '$lib/components/shared/ListItem.svelte';
</script>

<PageHeading
	title="Parents and guardians"
	description="At the heart of our work lies a belief in the transformative power of contextual, 
    collaborative learning. We understand the critical role that you, as a parent or guardian, have in your child's educational 
    journey. Whether your child is directly involved in our programmes or using our resources, your understanding and involvement 
    can significantly enhance their learning outcomes."
/>
<PageIntroSummary
	subtitle="We provide insight into our pedagogy, explain its benefits, and offer practical ways you can support your child 
    as they navigate their learning experience with us."
	menuItems={[
		{
			title: 'Understanding Our Approach',
			desc: 'Dive into our unique approach to teaching and learning, which prioritises context, collaboration, and global awareness.',
			linkText: 'Read more',
			href: '#approach'
		},
		{
			title: "Enhancing Your Child's Learning Journey",
			desc: "Learn about how you can support your child's learning experience and facilitate their growth.",
			linkText: 'Read more',
			href: '#learning-journey'
		},
		{
			title: 'Engaging with Us',
			desc: 'Explore the different ways you can connect with us, get your questions answered, and become a part of our community.',
			linkText: 'Read more',
			href: '#engaging-with-us'
		}
	]}
/>

<SectionHeading title="Understanding Our Approach" id="approach" />
<TextSection>
	Our teaching style is all about making learning enjoyable, practical, and life-changing. We
	believe that the best way to learn isn't just to memorise facts, but to understand them in the
	context of the real world and how they might relate to us as individuals: our lives, our
	communities, and our planet.
</TextSection>
<ListContainer>
	<ListItem>
		<b class="font-bold">Learning from Life</b>: We believe that the best learning connects to the
		real world and the student's life. This means we design our programs to use examples and
		activities that feel real and relevant. We call this the principle of "contextual learning".
	</ListItem>
	<ListItem>
		<b class="font-bold">Learning Together</b>: Learning isn't just an individual thing – it’s
		something we do together. We encourage students to work in teams, share ideas, and learn from
		one another. This not only makes learning more fun, it also helps build important skills like
		working well with others. We call this the principle of "collaborative learning".
	</ListItem>
	<ListItem>
		<b class="font-bold">Learning About Our World</b>: We live in a world where cultures and
		countries are more connected than ever. That's why our programs include lessons about different
		cultures around the world, so students can understand and appreciate the beauty of our diverse
		world. We call this the principle of "global awareness".
	</ListItem>
	<ListItem>
		<b class="font-bold">Learning for Everyone</b>: We want everyone to be able to learn with us.
		That's why we provide our materials in different formats, like digital and printed versions, and
		try to make sure they work without relying too much on technology. We call this the principle of
		"scalable accessibility".
	</ListItem>
	<ListItem>
		<b class="font-bold">Learning and Growing</b>: We believe that learning isn't just about getting
		the right answer. We focus on how to give feedback that helps students understand how they can
		improve and grow without affecting their confidence and enjoyment. We call this the principle of
		"integrated assessment".
	</ListItem>
</ListContainer>
<TextSection>
	To delve deeper into our approach to learning, you can explore our
	<a href="{base}/framework" class="underline decoration-indigo-600">Framework</a> page. It provides
	a more in-depth view of these principles and offers practical examples of how these are applied in
	our programmes.
</TextSection>

<SectionHeading title="Enhancing Your Child's Learning Journey" id="learning-journey" />
<TextSection>
	As a parent or guardian, your support can significantly enhance your child's learning experience.
	Our approach to teaching embeds traditional lessons within vibrant stories. You can help bring
	these stories alive and make learning more enjoyable. Your role extends beyond reviewing homework
	or attending parent-teacher meetings. It's about inspiring curiosity, helping them develop new
	skills, and illustrating how these lessons apply to everyday life. You're a crucial partner in
	making education a more engaging and relatable journey for your child. Let's explore how you can
	contribute:
</TextSection>
<ListContainer>
	<ListItem>
		<b class="font-bold">Dive into Learning Stories Together</b>: We all love a good story! So,
		imagine learning as an adventure with interesting characters and exciting challenges. You can
		join this adventure by asking your child about the learning stories they are covering in class.
		Get to know the characters, their journey, and how your child is helping them.
	</ListItem>
	<ListItem>
		<b class="font-bold">Bringing Lessons into Real Life</b>: What's the best way to understand
		something? By seeing it in action! So, take your child's lessons beyond the books. For example,
		when they're learning fractions, you could cook together, halving or doubling a recipe. Or when
		they're learning about plants, start a little garden project at home.
	</ListItem>
	<ListItem>
		<b class="font-bold">Helping with Skill Building</b>: Thinking, problem-solving, and working
		together - these are skills for life, not just for school. So, you can help your child develop
		these skills. This might be by asking tricky questions that make them think, or setting up fun
		challenges for them to solve.
	</ListItem>
	<ListItem>
		<b class="font-bold">Promoting Learning with Others</b>: In our classroom, learning isn't a solo
		journey; it's a team sport. So, encourage your child to work with others. This could be group
		school projects or family activities that need everyone to work together. From building a tree
		house to planning a family picnic, there's always something to learn together!
	</ListItem>
	<ListItem>
		<b class="font-bold">Encouraging Patience</b>: Just as a seed needs time and care to grow into a
		strong, fruitful plant, your child will need patience and support to adapt to a new way of
		learning. In the beginning, they might feel unfamiliar and unsure, but that's a normal part of
		any learning journey. Offer them reassurance, remind them that learning takes time, and
		celebrate their progress, no matter how small it may seem. In this nurturing environment, your
		child will be more likely to grow their confidence, resilience, and joy for learning.
	</ListItem>
</ListContainer>

<SectionHeading title="Engaging with us" id="engaging-with-us" />
<TextSection>
	Our teaching style is all about making learning enjoyable, practical, and life-changing. We
	believe that the best way to learn isn't just to memorise facts, but to understand them in the
	context of the real world and how they might relate to us as individuals: our lives, our
	communities, and our planet.
</TextSection>
