import { useTranslations } from 'next-intl'
import Link from 'next/link'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
	const t = useTranslations('Navbar')
	const hero = useTranslations('HeroSection')
	const achievements = useTranslations('AchievementsList')
	const about = useTranslations('AboutSection')
	const project = useTranslations('ProjectsSection')
	const e = useTranslations('EmailSection')

	const navLinks = [
		{
			title: t('about'),
			path: '#about',
		},
		{
			title: t('projects'),
			path: '#projects',
		},
		{
			title: t('contact'),
			path: '#contact',
		},
	]

	const heroSection = [
		hero('hello'),
		hero('podcast'),
		hero('name'),
		hero('dev'),
		hero('hire'),
		hero('download'),
	]

	const achievementsList = [
		{
			metric: achievements('projects'),
			value: '5',
			postfix: '+',
		},
		{
			prefix: '~',
			metric: achievements('users'),
			value: '30',
		},
		{
			metric: achievements('awards'),
			value: '3',
		},
		{
			metric: achievements('years'),
			value: '2',
		},
	]

	const TAB_DATA = [
		{
			title: about('skills'),
			id: 'skills',
			content: (
				<ul className='list-disc pl-2'>
					<li>
						HTML5, CSS, Sass, Less, SCSS, Styled component, Tailwind, Ant
						Design, Material UI, Bootstrap
					</li>
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
			title: about('education'),
			id: 'education',
			content: (
				<ul className='list-disc pl-2'>
					<li>{about('software')}</li>
					<li>{about('university')}</li>
				</ul>
			),
		},
		{
			title: about('experience'),
			id: 'experience',
			content: (
				<ul className='list-disc pl-2'>
					<li>
						{about('here')}:{' '}
						<Link
							href='https://docs.google.com/document/d/1r5hJuImuLxpMdWgVZT2S53ILMmIUxcR5xubW90ja31c/edit?usp=sharing'
							className='text-semibold underline text-blue-600'
						>
							{about('cv')}
						</Link>
					</li>
				</ul>
			),
		},
	]

	const aboutWords = [
		about('about'),
		about('descriptions'),
		about('skills'),
		about('education'),
		about('experience'),
	]

	const projectsData = [
		{
			id: 1,
			title: project('crypto'),
			description: project('cryptoDescription'),
			image: '/images/projects/project1.png',
			tag: [project('all'), project('web')],
			gitUrl: 'https://github.com/Dastan0307/app-crypto',
			previewUrl: 'https://app-crypto-iota.vercel.app/',
		},
		{
			id: 2,
			title: project('zooShop'),
			description: project('zooShopDescription'),
			image: '/images/projects/project6.png',
			tag: [project('all'), project('web')],
			gitUrl: 'https://github.com/Dastan0307/Zoo_Shop',
			previewUrl: 'https://zoo-shop.vercel.app/',
		},
		{
			id: 3,
			title: project('mobimarket'),
			description: project('mobimarketDescription'),
			image: '/images/projects/project3.png',
			tag: [project('all'), project('web')],
			gitUrl: 'https://github.com/Dastan0307/neobis-front-marketplace',
			previewUrl: 'https://neobis-front-marketplace-henna.vercel.app/',
		},
		{
			id: 4,
			title: project('foodOrdering'),
			description: project('foodOrderingDescription'),
			image: '/images/projects/project4.png',
			tag: [project('all'), project('mobile')],
			gitUrl: 'https://github.com/Dastan0307/Enver-Project',
			previewUrl: 'https://dastan0307.github.io/Enver-Project/',
		},
		{
			id: 5,
			title: project('neocafeBarista'),
			description: project('neocafeBaristaDescription'),
			image: '/images/projects/project5.png',
			tag: [project('all'), project('web')],
			gitUrl: 'https://github.com/Dastan0307/neocafe',
			previewUrl:
				'https://neocafe-no73n2l5l-dastan0307s-projects.vercel.app/login',
		},
		{
			id: 6,
			title: project('onlineSportsStore'),
			description: project('onlineSportsStoreDescription'),
			image: '/images/projects/project2.png',
			tag: [project('all'), project('web')],
			gitUrl: 'https://github.com/Dastan0307/Online-Sport-Shop',
			previewUrl: 'https://dastan0307.github.io/Online-Sport-Shop/',
		},
	]

	const projects = [
		project('my-projects'),
		project('all'),
		project('web'),
		project('mobile'),
	]

	const emailSection = [
		e('connect'),
		e('connectDescription'),
		e('sent'),
		e('warning'),
		e('email'),
		e('subject'),
		e('message'),
		e('send'),
	]

	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<Navbar navLinks={navLinks} />
			<div className='container mt-24 mx-auto py-4 px-12'>
				<HeroSection heroSection={heroSection} />
				<AchievementsSection achievementsList={achievementsList} />
				<AboutSection TAB_DATA={TAB_DATA} aboutWords={aboutWords} />
				<ProjectsSection projectsData={projectsData} projects={projects} />
				<EmailSection emailSection={emailSection} />
			</div>
			<Footer />
		</main>
	)
}
