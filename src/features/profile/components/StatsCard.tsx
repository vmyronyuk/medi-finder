import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'

type StatsCardProps = {
	icon: React.ReactNode
	title: string
	description: string
}

export function StatsCard({ icon, title, description }: StatsCardProps) {
	return (
		<div className='border flex flex-col gap-2 p-5 rounded bg-accent'>
			<div className='flex items-center justify-between'>
				<Heading level={3} className='font-bold'>
					{title}
				</Heading>
				{icon}
			</div>
			<Paragraph className='font-semibold text-xl text-primary'>
				{description}
			</Paragraph>
		</div>
	)
}
