'use client'

import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { BriefcaseMedical, User } from 'lucide-react'
import Link from 'next/link'
import { logoutAction } from '../auth/actions'

export default function Header() {
	const logoutHandler = async () => {
		await logoutAction()
	}

	return (
		<header className='text-primary-foreground py-4 border-b px-8 flex items-center justify-between backdrop-blur bg-primary/90 sticky top-0 z-50'>
			<Link
				href={'/app/medicaments'}
				className='font-semibold flex items-center gap-3'
			>
				<span className='text-2xl hidden sm:block'>MediFinder</span>
				<BriefcaseMedical className='w-7 h-7' />
			</Link>
			<div className='flex items-center gap-6'>
				<Link href={'/app/medicaments'}>Доступні ліки</Link>
				<Link href={'/app/profile'}>Мої ліки</Link>
			</div>
			<Popover>
				<PopoverTrigger>
					<User className='w-7 h-7 cursor-pointer' />
				</PopoverTrigger>
				<PopoverContent className='max-w-[15rem]'>
					<Button
						variant={'destructive'}
						className='w-full'
						onClick={logoutHandler}
					>
						Вийти з аккаунту
					</Button>
				</PopoverContent>
			</Popover>
		</header>
	)
}
