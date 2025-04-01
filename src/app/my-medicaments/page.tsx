import { Button } from '@/components/ui/button'
import { Tablets } from 'lucide-react'
import Link from 'next/link'

export default function MyMedicamentsPage() {
	return (
		<div className='py-3'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-bold'>Мої медикаменти</h1>
				<Button asChild>
					<Link className='flex items-center gap-3' href='/my-medicaments/new'>
						<span>Додати ліки</span>
						<Tablets />
					</Link>
				</Button>
			</div>
		</div>
	)
}
