import { BriefcaseMedical, User } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='bg-primary text-primary-foreground py-6 border-b px-8 flex items-center justify-between backdrop-blur'>
			<Link
				href={'/app/medicaments'}
				className='font-semibold flex items-center gap-3'
			>
				<span className='text-2xl'>MediFinder</span>
				<BriefcaseMedical className='w-7 h-7' />
			</Link>
			<div className='flex items-center gap-6'>
				<Link href={'/app/medicaments'}>Доступні ліки</Link>
				<Link href={'/app/profile'}>Мої ліки</Link>
			</div>
			<User className='w-7 h-7' />
		</header>
	)
}
