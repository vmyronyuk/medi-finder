import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'

export function ProfileHeader() {
	return (
		<div className='mt-3 flex items-center justify-between'>
			<div>
				<Heading level={2}>Привіт Тарас 👋</Heading>
				<Paragraph className='font-semibold'>Готовий ділитись?</Paragraph>
			</div>
		</div>
	)
}
