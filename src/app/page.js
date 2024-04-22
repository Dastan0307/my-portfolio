import AboutSection from './components/AboutSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<Navbar />
			<div class='container mx-auto py-4 px-12'>
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<EmailSection />
				<Footer />
			</div>
		</main>
	)
}
