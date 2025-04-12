import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { oblastOptions } from '@/features/medicaments/business/address'
import {
	formOfMedicamentsOptions,
	medicamentsOptions,
} from '@/features/medicaments/business/medicaments'
import { getLabelFromValue } from '@/lib/utils/getLabel'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { ListingDto } from '../dto'
import { communicationOptions } from '../listings/business/communication'

type UserListingsProps = {
	listings: ListingDto[]
}

export function UserListings({ listings }: UserListingsProps) {
	return (
		<div className='flex flex-col gap-3 mt-6'>
			<div className='flex justify-between items-center'>
				<Heading level={2}>Твої оголошення</Heading>
				<Link href='/app/profile/new'>
					<Button className='inline-flex items-center gap-2'>
						Додати ліки
						<Plus />
					</Button>
				</Link>
			</div>
			<div className='space-y-6'>
				{listings &&
					listings.length > 0 &&
					listings.map(listing => (
						<div
							key={listing.id}
							className='bg-secondary border rounded shadow-md p-3.5 space-y-2 dark:bg-card dark:border-muted'
						>
							<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-primary pb-2'>
								<Heading level={3} className='text-xl font-bold text-primary'>
									{listing.name}
								</Heading>
								<Paragraph className='text-sm text-muted-foreground'>
									<span className='font-semibold'>
										{new Date(listing.expirationDate).toLocaleDateString()}
									</span>
								</Paragraph>
							</div>

							<div className='flex flex-wrap gap-2'>
								<Badge>
									{getLabelFromValue(listing.category, medicamentsOptions)}
								</Badge>
								{listing.formOfMedicament && (
									<Badge>
										{getLabelFromValue(
											listing.formOfMedicament,
											formOfMedicamentsOptions
										)}
									</Badge>
								)}
								{listing.conditionOfStorage && (
									<Badge variant='destructive'>
										Умови зберігання: {listing.conditionOfStorage}
									</Badge>
								)}
							</div>

							<div className='flex flex-wrap gap-2'>
								<Badge variant='outline'>
									{getLabelFromValue(listing.state, oblastOptions)}
								</Badge>
								<Badge variant='outline'>{listing.city}</Badge>
								{listing.street && (
									<Badge variant='outline'>вул. {listing.street}</Badge>
								)}
							</div>

							{listing.communication && (
								<div className='flex flex-wrap gap-2'>
									<Badge variant='default'>
										{getLabelFromValue(
											listing.communication,
											communicationOptions
										)}
									</Badge>
								</div>
							)}

							{listing.description && (
								<Paragraph className='text-sm text-muted-foreground leading-relaxed'>
									{listing.description}
								</Paragraph>
							)}

							<div className='flex justify-end gap-3 pt-2 border-t'>
								<Button variant='destructive'>Видалити</Button>
								<Link href={`/medicaments/${listing.id}`}>
									<Button variant='default'>Переглянути</Button>
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
