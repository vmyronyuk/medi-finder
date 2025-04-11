import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function UserListings() {
	return (
		<div className='flex flex-col gap-3 mt-6'>
			<div className='flex justify-between items-center'>
				<Heading level={2}>Твої оголошення</Heading>
				<Button>
					<Link href={'profile/new'} className='flex items-center gap-2'>
						Додати ліки <Plus />
					</Link>
				</Button>
			</div>
			<div className='border rounded px-3 py-2 bg-secondary'>
				<div className='flex flex-col gap-1'>
					<div className='flex justify-between items-center'>
						<Heading level={3}>Парацетамол</Heading>
						<Paragraph className='text-muted-foreground font-semibold text-sm'>
							28.06.2025
						</Paragraph>
					</div>
					<div className='flex gap-1 flex-wrap'>
						<Badge>Знеболювальні</Badge>
						<Badge>Таблетки</Badge>
					</div>
					<div className='flex gap-1 flex-wrap'>
						<Badge variant={'outline'}>Львівська</Badge>
						<Badge variant={'outline'}>Жовква</Badge>
					</div>
					<div>
						<Badge variant={'outline'}>Telegram</Badge>
					</div>
					<div className='flex gap-2 self-end'>
						<Button variant={'destructive'}>Видалити</Button>
						<Button>Перейти до оголошення</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
