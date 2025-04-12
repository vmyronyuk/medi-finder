import { Heading } from '@/components/typography/Heading'
import { getAllMedicaments } from '@/features/medicaments/dal'
import { ListingCard } from '@/features/profile/components/ListingCard'
import Link from 'next/link'

export default async function MedicamentsPage() {
	const medicaments = await getAllMedicaments()

	return (
		<div className='flex gap-6 h-full py-4'>
			<div className='w-4/12 overflow-y-auto'>
				{medicaments.map(medicament => (
					<Link key={medicament.id} href={`/app/medicaments/${medicament.id}`}>
						<ListingCard listing={medicament} />
					</Link>
				))}
			</div>
			<div className='w-8/12'>
				<div className='border rounded h-full p-3 flex items-center justify-center'>
					<Heading level={2}>Нічого не вибрано</Heading>
				</div>
			</div>
		</div>
	)
}
