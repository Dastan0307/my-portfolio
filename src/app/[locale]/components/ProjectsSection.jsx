'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
	{
		id: 1,
		title: 'Crypto App',
		description: 'Project Crypto is a web application for tracking cryptocurrency prices with charts and the ability to add.',
		image: '/images/projects/project1.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/Dastan0307/app-crypto',
		previewUrl: 'https://app-crypto-iota.vercel.app/',
	},
	{
		id: 2,
		title: 'Zoo shop',
		description: 'Zoo Shop is an online pet store. We have a wide range of grooming products, toys and food for your pets. The user-friendly interface makes it easy to select and order the products you need to take care of your pet.',
		image: '/images/projects/project6.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/Dastan0307/Zoo_Shop',
		previewUrl: 'https://zoo-shop.vercel.app/',
	},
	{
		id: 3,
		title: 'Mobi Market',
		description: 'Mobile market clone with admin panel ',
		image: '/images/projects/project3.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/Dastan0307/neobis-front-marketplace',
		previewUrl: 'https://neobis-front-marketplace-henna.vercel.app/',
	},
	{
		id: 4,
		title: 'Food Ordering Application',
		description: 'Project 4 description',
		image: '/images/projects/project4.png',
		tag: ['All', 'Mobile'],
		gitUrl: 'https://github.com/Dastan0307/Enver-Project',
		previewUrl: 'https://dastan0307.github.io/Enver-Project/',
	},
	{
		id: 5,
		title: 'Neocafe Baista',
		description: 'It is an app for baristas in a coffee establishment . Warning: If you are not registered, you can not get in. ',
		image: '/images/projects/project5.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/Dastan0307/neocafe',
		previewUrl: 'https://neocafe-no73n2l5l-dastan0307s-projects.vercel.app/login',
	},
	{
		id: 6,
		title: 'Online sports store',
		description: 'Online Sportsmagazine is an online platform for buying sports equipment and footwear.',
		image: '/images/projects/project2.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/Dastan0307/Online-Sport-Shop',
		previewUrl: 'https://dastan0307.github.io/Online-Sport-Shop/',
	},
]

const ProjectsSection = () => {
	const [tag, setTag] = useState('All')
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const handleTagChange = newTag => {
		setTag(newTag)
	}

	const filteredProjects = projectsData.filter(project =>
		project.tag.includes(tag)
	)

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	}

	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
				My Projects
			</h2>
			<div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
				<ProjectTag
					onClick={handleTagChange}
					name='All'
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Web'
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Mobile'
					isSelected={tag === 'Mobile'}
				/>
			</div>
			<ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default ProjectsSection
