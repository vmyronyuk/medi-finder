import { HandHeart, HeartPulse, Loader, Megaphone } from 'lucide-react'
import { StatsCard } from './StatsCard'

export function ProfileStats() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 border-b-2 pb-6'>
			<StatsCard
				title='Ти створив'
				description='10 оголошень'
				icon={<Megaphone className='w-8 h-8' />}
			/>
			<StatsCard
				title='Ти успішно завершив'
				description='7 обмінів'
				icon={<HeartPulse className='w-8 h-8' />}
			/>
			<StatsCard
				title='Активних оголошень'
				description='3'
				icon={<Loader className='w-8 h-8' />}
			/>
			<StatsCard
				title='Днів на сайті'
				description='132'
				icon={<HandHeart className='w-8 h-8' />}
			/>
		</div>
	)
}
