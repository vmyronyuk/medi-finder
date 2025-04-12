import { Heading } from '@/components/typography/Heading'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { ListingDto } from '../dto'
import { ListingCard } from './ListingCard'

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
						<ListingCard key={listing.id} listing={listing} isProfile />
					))}
			</div>
		</div>
	)
}
