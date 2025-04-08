'use server'

import { createClient } from '@/lib/utils/supabase/server'
import { unauthorized } from 'next/navigation'
import {
	MedicamentCategoryDto,
	MedicamentCategoryDtoSchema,
} from '../dtos/medicament-category.dto'

export async function updateMedicamentCategoriesAction(
	dto: MedicamentCategoryDto
) {
	const { data, error: parseError } = MedicamentCategoryDtoSchema.safeParse(dto)

	if (parseError) {
		throw new Error(parseError.message)
	}

	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { error } = await supabase
		.from('users')
		.update([
			{
				medicamentCategories: data.medicamentCategories,
			},
		])
		.eq('id', user.user?.id)

	if (error) {
		throw new Error(error.message)
	}
}
