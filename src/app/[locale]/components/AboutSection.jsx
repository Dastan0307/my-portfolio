'use client'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'

const AboutSection = ({ TAB_DATA, aboutWords }) => {
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
				<Image
					src='/images/my_foto.jpeg'
					alt='Fullstack developer | Frontend developer'
					width={500}
					height={500}
					style={{ width: 'auto', height: 'auto' }}
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>{aboutWords[0]}</h2>
					<p className='text-base lg:text-lg'>{aboutWords[1]}</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							{' '}
							{aboutWords[2]}{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}
						>
							{' '}
							{aboutWords[3]}{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('experience')}
							active={tab === 'experience'}
						>
							{' '}
							{aboutWords[4]}{' '}
						</TabButton>
					</div>
					<div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
