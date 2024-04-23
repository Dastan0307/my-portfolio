'use client'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'
import Link from 'next/link'

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-2'>
          <li>HTML5, CSS, Sass, Less, SCSS, Styled component, Tailwind, Ant Design, Material UI, Bootstrap</li>
          <li>JavaScript, Typescript, Python, JQuery, ООP</li>
          <li>React, Next, Node.js, Nest, Jest, Websocket</li>
          <li>Redux, Redux Toolkit, RTK query, useContext, useReducer</li>
          <li>Git, GitHub, GitLab</li>
          <li>MongoDB, mongoose, Firebase, MySQL(basic level)</li>
          <li>Slack, Discord, Jira, Trello, Scrum</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pl-2'>
				<li>Software for computing machinery and automated systems.</li>
        <li>Osh State University, Osh Kyrgyzstan</li>
			</ul>
		),
	},
	{
		title: 'Experience ',
		id: 'experience',
		content: (
			<ul className='list-disc pl-2'>
				<li>About my experience can look here: <Link href='https://docs.google.com/document/d/1DPD6DDEGBA1VjtFB5Xgw-LpBOFkFlx82G4woHS7QbRc/edit?usp=sharing' className='text-semibold underline text-blue-600'>My work experience </Link></li>
			</ul>
		),
	},
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
		<section className='text-white' id='about'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image src='/images/my_foto.jpeg' width={500} height={500} />
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base lg:text-lg'>
						I am a Fullstack developer with over +1.5 years of experience. My
						professional journey started with a wide range of responsibilities,
						but over time I started to delve deeper into Frontend development. I
						am attracted by the ability to create impressive user interfaces and
						improve user experience. I strive for self-development and am always
						ready to take on the challenge of complex tasks. My ability to learn
						quickly and make independent decisions helps me to solve any task
						effectively. I am a team player and love working in a team where
						everyone contributes and we build awesome applications together. I
						am also experienced in mentoring and code review. I love sharing my
						knowledge with others and helping them grow in the web development
						field. I am passionate about kickboxing, running, and computer
						games. These hobbies help me maintain a work/leisure balance and
						find inspiration for new projects. 
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}
						>
							{' '}
							Education{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('experience')}
							active={tab === 'experience'}
						>
							{' '}
							Experience{' '}
						</TabButton>
					</div>
					<div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
