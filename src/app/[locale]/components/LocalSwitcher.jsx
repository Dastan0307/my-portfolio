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
		<label className='border-2 rounded'>
			<select
				defaultValue={localActive}
				className='bg-transparent py-2'
				onChange={onSelectChange}
				disabled={isPending}
			>
				<option value='en'>English</option>
				<option value='id'>Русский</option>
			</select>
		</label>
	)
}

export default LocalSwitcher
