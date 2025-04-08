import { Error } from '@/components/form/Error'
import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { medicamentsOptions } from '@/features/medicaments/business/medicaments'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { updateMedicamentCategoriesAction } from '../../actions/page3'
import {
	MedicamentCategory,
	MedicamentCategoryDto,
	MedicamentCategoryDtoSchema,
} from '../../dtos/medicament-category.dto'
import { useNextStep } from '../../hooks/useNextStep'

export default function Page3() {
	const [loading, setLoading] = useState(false)
	const { nextStep } = useNextStep(3)

	const {
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<MedicamentCategoryDto>({
		resolver: zodResolver(MedicamentCategoryDtoSchema),
		mode: 'onChange',
	})

	const onSubmit = async (data: MedicamentCategoryDto) => {
		setLoading(true)
		await updateMedicamentCategoriesAction(data)
		nextStep()
	}

	return (
		<div className='flex flex-col gap-3'>
			<Heading level={2}>Оберіть категорії ліків для обміну 💊</Heading>
			<Paragraph className='text-gray-500'>
				Виберіть категорії ліків, які ви готові обмінювати. Це дозволить
				знаходити релевантні пропозиції для обміну.
			</Paragraph>
			<form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
				{medicamentsOptions.map(category => {
					const isChecked = getValues('medicamentCategories')?.includes(
						category.value as MedicamentCategory
					)
					return (
						<div
							key={category.value}
							className='flex items-center gap-2 font-semibold'
						>
							<Checkbox
								checked={isChecked}
								onCheckedChange={checked => {
									const current = getValues('medicamentCategories') || []
									if (checked) {
										setValue('medicamentCategories', [
											// @ts-expect-error also shit error
											...current,
											// @ts-expect-error shit error
											category.value,
										])
									} else {
										setValue(
											'medicamentCategories',
											current.filter(val => val !== category.value)
										)
									}
								}}
								className='border-primary'
							/>
							<p>{category.label}</p>
						</div>
					)
				})}
				{errors.medicamentCategories && (
					<Error error={errors.medicamentCategories[0]} />
				)}
				<Button loading={loading} type='submit'>
					Ок, готово
				</Button>
			</form>
		</div>
	)
}
