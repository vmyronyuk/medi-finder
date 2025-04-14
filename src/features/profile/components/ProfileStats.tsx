import { HandHeart, HeartPulse, Loader, Megaphone } from 'lucide-react'
import { UserDto } from '../dal'
import { StatsCard } from './StatsCard'

type ProfileStatsProps = {
	user: UserDto
	listings: number
}

export function ProfileStats({ user, listings }: ProfileStatsProps) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 border-b-2 pb-6'>
			<StatsCard
				title='Ти створив'
				description={`${user.listingsCreated} оголошень`}
				icon={
					<div className='bg-muted p-2 border rounded-full'>
						<Megaphone className='w-6 h-6 text-indigo-800' />
					</div>
				}
			/>
			<StatsCard
				title='Ти успішно завершив'
				description={`${String(user.confirmedListings)} обмінів`}
				icon={
					<div className='bg-muted p-2 border rounded-full'>
						<HeartPulse className='w-6 h-6 text-red-600' />
					</div>
				}
			/>
			<StatsCard
				title='Активних оголошень'
				description={String(listings)}
				icon={
					<div className='bg-muted p-2 border rounded-full'>
						<Loader className='w-6 h-6 text-sky-400' />
					</div>
				}
			/>
			<StatsCard
				title='Днів на сайті'
				description={String(
					new Date().getDate() - new Date(user.created_at).getDate()
				)}
				icon={
					<div className='bg-muted p-2 border rounded-full'>
						<HandHeart className='w-6 h-6 text-rose-500' />
					</div>
				}
			/>
		</div>
	)
}
