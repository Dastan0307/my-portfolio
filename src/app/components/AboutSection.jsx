'use client'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
	{
		title: 'Skills',
		id:'skills',
		content: (
			<ul>
				<li>Javascript</li>
				<li>Typescript</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>Nest</li>
				<li>Jest</li>
			</ul>
		)
	},
	{
		title: 'Education',
		id:'education',
		content: (
			<ul>
				<li>OshSU</li>
				<li>Typescript</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>Nest</li>
				<li>Jest</li>
			</ul>
		)
	},
	{
		title: 'Experience',
		id:'experience',
		content: (
			<ul>
				<li>Certification</li>
				<li>Typescript</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>Nest</li>
				<li>Jest</li>
			</ul>
		)
	}
]

const AboutSection = () => {
	const [tab, setTab] = useState('skills')
	const [isPending, startTransition] = useTransition()

	const handleTabChange = id => {
		startTransition(() => {
			setTab(id)
		})
	}

	return (
		<section className='text-white'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about-image.png'
					alt='Fullstack developer'
					width={500}
					height={500}
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
					<p className='text-base lg:text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
						cupiditate libero placeat esse, mollitia, quibusdam reiciendis quia
						deleniti eaque necessitatibus eius ipsum? Earum, sed corrupti
						praesentium vel iste distinctio laborum.
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}
						>
							Education
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('experience')}
							active={tab === 'experience'}
						>
							Experience
						</TabButton>
					</div>
					<div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
