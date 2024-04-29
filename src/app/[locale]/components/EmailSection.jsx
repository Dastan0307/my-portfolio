'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import GithubIcon from '../../../public/github-icon.svg'
import GithubIcon from '../../../../public/github-icon.svg'
import LinkedinIcon from '../../../../public/linkedin-icon.svg'

const EmailSection = ({ emailSection }) => {
	const [emailSubmitted, setEmailSubmitted] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		}
		console.log(data)
		setEmailSubmitted(true)
		// const JSONdata = JSON.stringify(data)
		// const endpoint = '/api/send'

		// // Form the request for sending data to the server.
		// const options = {
		// 	// The method is POST because we are sending data.
		// 	method: 'POST',
		// 	// Tell the server we're sending JSON.
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	// Body of the request is the JSON data we created above.
		// 	body: JSONdata,
		// }

		// const response = await fetch(endpoint, options)
		// const resData = await response.json()

		// if (response.status === 200) {
		// 	console.log('Message sent.')
		// 	setEmailSubmitted(true)
		// }
	}

	return (
		<section
			id='contact'
			className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
			<div className='z-10'>
				<h5 className='text-xl font-bold text-white my-2'>
					{emailSection[0]}
				</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					{' '}
					{emailSection[1]}
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link href='https://github.com/Dastan0307'>
						<Image src={GithubIcon} alt='Github Icon' />
					</Link>
					<Link href='https://www.linkedin.com/in/dastan-nurgazy-uulu-33aa512a0/'>
						<Image src={LinkedinIcon} alt='Linkedin Icon' />
					</Link>
				</div>
			</div>
			<div>
				{emailSubmitted ? (
					<p className='text-green-500 text-sm mt-2'>
						{emailSection[2]}
					</p>
				) : (
					<form className='flex flex-col' onSubmit={handleSubmit}>
						<div className='mb-6'>
							<label
								htmlFor='email'
								className='text-white block mb-2 text-sm font-medium'
							>
								<p className='text-red-400 mb-1'>
								{emailSection[3]}
								</p>
								{emailSection[4]}
							</label>
							<input
								name='email'
								type='email'
								id='email'
								required
								className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
								placeholder='user@google.com'
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='subject'
								className='text-white block text-sm mb-2 font-medium'
							>
								{emailSection[5]}
							</label>
							<input
								name='subject'
								type='text'
								id='subject'
								required
								className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
								placeholder='Just saying hi'
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='message'
								className='text-white block text-sm mb-2 font-medium'
							>
								{emailSection[6]}
							</label>
							<textarea
								name='message'
								id='message'
								className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
								placeholder='Message...'
								required
							/>
						</div>
						<button
							type='submit'
							className='bg-blue-700 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
						>
							{emailSection[7]}
						</button>
					</form>
				)}
			</div>
		</section>
	)
}

export default EmailSection
