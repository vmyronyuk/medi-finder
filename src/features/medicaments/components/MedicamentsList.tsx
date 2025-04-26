'use client'

import { ListingCard } from '@/features/profile/components/ListingCard'
import { ListingDto } from '@/features/profile/dto'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

type MedicamentsListProps = {
	medicaments: ListingDto[]
}

function MedicamentsListComponent({ medicaments }: MedicamentsListProps) {
	const searchParams = useSearchParams()

	const category = searchParams.get('category')
	const expirationDate = searchParams.get('expirationDate')
	const name = searchParams.get('name')
	const state = searchParams.get('state')
	const formOfMedicament = searchParams.get('formOfMedicament')
	const number = searchParams.get('number')

	let filteredMedicaments = medicaments

	if (
		category ||
		expirationDate ||
		name ||
		state ||
		formOfMedicament ||
		number
	) {
		filteredMedicaments = medicaments.filter(medicament => {
			return (
				(!category || medicament.category === category) &&
				(!expirationDate ||
					String(medicament.expirationDate) === expirationDate) &&
				(!name || medicament.name === name || medicament.name.includes(name)) &&
				(!state || medicament.state === state) &&
				(!formOfMedicament ||
					medicament.formOfMedicament === formOfMedicament) &&
				(!number || String(medicament.number) === number)
			)
		})
	}

	return (
		<div className='h-full flex flex-col gap-3'>
			{filteredMedicaments.map(medicament => (
				<Link key={medicament.id} href={`/app/medicaments/${medicament.id}`}>
					<ListingCard listing={medicament} />
				</Link>
			))}
		</div>
	)
}

function MedicamentsListLoading() {
	return (
		<div className='h-full flex flex-col gap-3'>
			<div className='animate-pulse'>
				<div className='h-24 bg-gray-200 rounded mb-3'></div>
				<div className='h-24 bg-gray-200 rounded mb-3'></div>
				<div className='h-24 bg-gray-200 rounded'></div>
			</div>
		</div>
	)
}

export function MedicamentsList({ medicaments }: MedicamentsListProps) {
	return (
		<Suspense fallback={<MedicamentsListLoading />}>
			<MedicamentsListComponent medicaments={medicaments} />
		</Suspense>
	)
}
