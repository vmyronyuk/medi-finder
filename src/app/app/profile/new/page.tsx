import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { ListingForm } from '@/features/profile/listings/components/ListingForm'

export default function NewMedicamentPage() {
	return (
		<div className='flex flex-col gap-3'>
			<Heading level={2}>Додавання нових ліків</Heading>
			<Paragraph className='text-gray-600'>
				<span className='font-bold'>
					Стаття 21. Реалізація лікарських засобів
				</span>
				&apos;&apos;Реалізація лікарських засобів, які підлягають відпуску за
				рецептом, дозволяється тільки через аптеки або аптечні пункти на
				підставі рецепта лікаря. Заборонено без рецепта передавати або
				реалізовувати лікарські засоби, що потребують рецептурного
				відпуску.&apos;&apos;⚠️
			</Paragraph>
			<ListingForm />
		</div>
	)
}
