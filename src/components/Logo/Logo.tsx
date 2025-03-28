import { BriefcaseMedical } from 'lucide-react'

export default function Logo() {
	return (
		<h2 className='text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent'>
			<span>
				Medi<span className='text-transparent'>Finder</span>
			</span>
			<BriefcaseMedical className='w-7 h-7 mt-1 text-green-800' />
		</h2>
	)
}
