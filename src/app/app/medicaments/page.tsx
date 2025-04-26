import { Heading } from '@/components/typography/Heading'
import { MedicamentsList } from '@/features/medicaments/components/MedicamentsList'
import { getAllMedicaments } from '@/features/medicaments/dal'
import { Suspense } from 'react'

function Loading() {
	return (
		<div className='flex gap-6 h-full py-4'>
			<div className='w-full sm:w-4/12 overflow-y-auto'>
				<div className='animate-pulse'>
					<div className='h-4 bg-gray-200 rounded w-3/4 mb-4'></div>
					<div className='h-4 bg-gray-200 rounded w-1/2 mb-4'></div>
					<div className='h-4 bg-gray-200 rounded w-5/6'></div>
				</div>
			</div>
		</div>
	)
}

export default async function MedicamentsPage() {
	const medicaments = await getAllMedicaments()

	return (
		<Suspense fallback={<Loading />}>
			<div className='flex gap-6 h-full py-4'>
				<div className='w-full sm:w-4/12 overflow-y-auto'>
					<MedicamentsList medicaments={medicaments} />
				</div>
				<div className='sm:block hidden  w-[1px] h-full bg-muted-foreground'></div>
				<div className='sm:block hidden sm:w-8/12 overflow-y-auto'>
					<div className='border rounded h-full p-3 flex items-center justify-center'>
						<Heading level={2}>Нічого не вибрано</Heading>
					</div>
				</div>
			</div>
		</Suspense>
	)
}
