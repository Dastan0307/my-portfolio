'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

const LocalSwitcher = () => {
	const [isPending, startTransition] = useTransition()	
	const router = useRouter()
	const localActive = useLocale()
  
	const onSelectChange = e => {
		const nextLocale = e.target.value
		startTransition(() => {
			router.replace(`/${nextLocale}`)
		})
	}

	return (
		<label className='rounded border-none focus:outline-none focus:border-transparent'>
			<select
				defaultValue={localActive}
				className='bg-transparent py-1'
				onChange={onSelectChange}
				disabled={isPending}
			>
				<option value='en' className='text-black'>English</option>
				<option value='id' className='text-black'>Русский</option>
			</select>
		</label>
	)
}

export default LocalSwitcher
