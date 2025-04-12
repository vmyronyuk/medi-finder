import { oblastValue } from '@/features/medicaments/business/address'
import { formOfMedicamentsValue } from '@/features/medicaments/business/medicaments'
import { z } from 'zod'

const categoryValue = [
	'antibiotics',
	'painkillers',
	'vitamins',
	'bads',
	'antiseptics',
	'children',
	'other',
] as const

const communicationValue = [
	'phone',
	'telegram',
	'viber',
	'whatsapp',
	'email',
	'other',
] as const

export const UserListingsDtoSchema = z.object({
	name: z.string().min(1, { message: 'Назва препарату обов`язкова' }),
	category: z.enum(categoryValue, { message: 'Категорія обов`язкова' }),
	expirationDate: z
		.date({ message: 'Дата придатності обов`язкова' })
		.nullable(),
	formOfMedicament: z.enum(formOfMedicamentsValue).optional(),
	number: z.string().optional(),
	description: z.string().optional(),
	conditionOfStorage: z.string().optional(),
	state: z.enum(oblastValue, { message: 'Область обов`язкова' }),
	city: z.string().min(1, { message: 'Населений пункт обов`язковий' }),
	street: z.string().optional(),
	communication: z.enum(communicationValue, {
		message: 'Спосіб зв`язку обов`язковий',
	}),
})

export type UserListingsDto = z.infer<typeof UserListingsDtoSchema>
