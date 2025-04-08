import { z } from 'zod'

export const medicamentCategoriesValue = [
	'antibiotics',
	'painkillers',
	'vitamins',
	'bads',
	'antiseptics',
	'children',
	'other',
] as const

export type MedicamentCategory = (typeof medicamentCategoriesValue)[number]

export const MedicamentCategoryDtoSchema = z.object({
	medicamentCategories: z
		.array(z.enum(medicamentCategoriesValue))
		.min(1, { message: 'Оберіть хоча б одну категорію ліків' }),
})

export type MedicamentCategoryDto = z.infer<typeof MedicamentCategoryDtoSchema>
