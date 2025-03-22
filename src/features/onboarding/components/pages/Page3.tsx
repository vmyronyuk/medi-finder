import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useNextStep } from '../../hooks/useNextStep'

export default function Page3() {
	const { nextStep } = useNextStep(3)

	const categories = [
		{
			id: 'cold',
			name: 'Препарати для застуди',
		},
		{
			id: 'antibiotics',
			name: 'Антибіотики',
		},
		{
			id: 'heart',
			name: 'Препарати для серця',
		},
		{
			id: 'vitamins',
			name: 'Вітаміни',
		},
		{ id: 'other', name: 'Інші' },
	]

	return (
		<div className='flex flex-col gap-3'>
			<h1 className='text-2xl font-bold'>
				Оберіть категорії ліків для обміну 💊
			</h1>
			<p className='text-gray-500'>
				Виберіть категорії ліків, які ви готові обмінювати. Це дозволить
				знаходити релевантні пропозиції для обміну.
			</p>
			<div className='flex flex-col gap-2'>
				{categories.map(category => (
					<div
						key={category.id}
						className='flex items-center gap-2 font-semibold'
					>
						<Checkbox className='border-primary' />
						<p>{category.name}</p>
					</div>
				))}
			</div>
			<Button onClick={nextStep}>Ок, готово</Button>
		</div>
	)
}
