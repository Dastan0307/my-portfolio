import { useTranslations } from 'next-intl'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'


export default function Home() {
	const t = useTranslations("Navbar")
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
	
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<Navbar navLinks={navLinks} />
			<div className='container mt-24 mx-auto py-4 px-12'>
				<HeroSection />
				<AchievementsSection />
				<AboutSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	)
}
