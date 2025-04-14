'use client'

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
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ListingDto } from '../dto'
import { deleteListingAction } from '../listings/actions'
import { communicationOptions } from '../listings/business/communication'

type ListingCardProps = {
	listing: ListingDto
	isProfile?: boolean
	pageId?: string
}

export function ListingCard({
	listing,
	isProfile = false,
	pageId,
}: ListingCardProps) {
	const deleteListingHandler = async (id: number) => {
		await deleteListingAction(id)
	}

	return (
		<div
			key={listing.id}
			className={`${
				pageId && pageId === String(listing.id)
					? 'bg-secondary/75'
					: 'bg-secondary'
			} border rounded shadow-md p-3.5 space-y-2 dark:bg-card dark:border-muted relative`}
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
				<Badge>{getLabelFromValue(listing.category, medicamentsOptions)}</Badge>
				{listing.formOfMedicament && (
					<Badge>
						{getLabelFromValue(
							listing.formOfMedicament,
							formOfMedicamentsOptions
						)}
					</Badge>
				)}
				{isProfile && listing.conditionOfStorage && (
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
				{isProfile && listing.street && (
					<Badge variant='outline'>вул. {listing.street}</Badge>
				)}
			</div>

			{listing.communication && (
				<div className='flex flex-wrap gap-2'>
					<Badge variant='default'>
						{getLabelFromValue(listing.communication, communicationOptions)}
					</Badge>
				</div>
			)}

			{isProfile && listing.description && (
				<Paragraph className='text-sm text-muted-foreground leading-relaxed'>
					{listing.description}
				</Paragraph>
			)}

			{isProfile && (
				<div className='flex justify-end gap-3 pt-2 border-t'>
					<Button
						variant='destructive'
						onClick={() => deleteListingHandler(listing.id)}
					>
						Видалити
					</Button>
					<Button
						variant={'outline'}
						className='bg-accent text-accent-foreground'
					>
						Передано
					</Button>
					<Link href={`/medicaments/${listing.id}`}>
						<Button variant='default'>Переглянути</Button>
					</Link>
				</div>
			)}

			{!isProfile && (
				<div className='absolute bottom-3 right-3'>
					<Link href={`/app/medicaments/${listing.id}`}>
						<Button variant='default' className='w-9 h-9 rounded-full'>
							<ArrowRight />
						</Button>
					</Link>
				</div>
			)}
		</div>
	)
}
