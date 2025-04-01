import { Heading } from '@/components/typography/Heading'
import { Button } from '@/components/ui/button'
import { useNextStep } from '@/features/onboarding/hooks/useNextStep'
export default function Page1() {
	const { nextStep } = useNextStep(1)
	return (
		<div className='flex flex-col gap-3 text-center'>
			<Heading level={2} className='text-2xl font-bold'>
				Вітаємо в MediFinder 👋
			</Heading>
			<p className='text-gray-500'>
				Давайте налаштуємо ваш профіль, щоб ви могли почати безпечно
				обмінюватися ліками.
			</p>
			<Button onClick={nextStep}>Пройти налаштування профілю</Button>
		</div>
	)
}
