'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = ({ heroSection }) => {
	return (
		<section className='lg:py-16'>
			<div className='grid grid-cols-1 sm:grid-cols-12'>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
				>
					<h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
							{heroSection[0]}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								heroSection[2],
								1000,
								`Fullstack ${heroSection[3]}`,
								1000,
								`Frontend ${heroSection[3]}`,
								1000,
								`Backend ${heroSection[3]}`,
								1000,
							]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
						{heroSection[1]}
					</p>
					<div>
						<Link
							href='/#contact'
							className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'
						>
							{heroSection[4]}
						</Link>
						<Link
							href='https://docs.google.com/document/d/1r5hJuImuLxpMdWgVZT2S53ILMmIUxcR5xubW90ja31c/edit?usp=sharing'
							className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'
						>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
								{heroSection[5]}
							</span>
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='col-span-4 place-self-center mt-4 lg:mt-5 mb-5'
				>
					<div className='relative rounded-full w-300 h-300 lg:w-[400px] lg:h-[400px]'>
						<Image
							src='/images/my-foto3.png'
							alt='Full stack developer | Frontend Developer'
							style={{ width: 'auto', height: 'auto' }}
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden rounded-tl-full rounded-tr-none rounded-br-full rounded-bl-full'
							width={300}
							height={300}
							priority={true}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection
