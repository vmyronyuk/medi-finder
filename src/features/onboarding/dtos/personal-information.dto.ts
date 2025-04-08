import { z } from 'zod'

const stateValue = [
	'lviv',
	'ivano-frankivsk',
	'ternopil',
	'zakarpatska',
	'volyn',
	'rivne',
	'chernivtsi',
	'khmelnytskyi',
	'kyivska',
	'vinnytsia',
	'zhytomyr',
	'poltava',
	'cherkasy',
	'kirovohrad',
	'kyiv',
	'odesa',
	'mykolaiv',
	'kherson',
	'kharkiv',
	'donetsk',
	'luhansk',
	'sumy',
	'chernihiv',
	'zaporizhzhia',
	'dnipro',
] as const

export const PersonalInformationDtoSchema = z.object({
	firstName: z.string().min(1, { message: 'Ім`я обов`язкове' }),
	lastName: z.string().min(1, { message: 'Прізвище обов`язкове' }),
	middleName: z.string().min(1, { message: 'По-батькове обов`язкове' }),
	phoneNumber: z
		.string()
		.startsWith('+380', { message: 'Номер телефону повинен починатися з +380' })
		.min(13, { message: 'Некоректний номер телефону' }),
	dateOfBirth: z.string().refine(
		val => {
			const regex = /^\d{2}\/\d{2}\/\d{4}$/
			if (!regex.test(val)) return false

			const [month, day, year] = val.split('/').map(Number)
			const date = new Date(year, month - 1, day)

			return (
				date.getFullYear() === year &&
				date.getMonth() === month - 1 &&
				date.getDate() === day
			)
		},
		{ message: 'Некоректна дата (MM/DD/YYYY)' }
	),
	state: z.enum(stateValue, { message: 'Область обов`язкова' }),
	city: z.string().min(1, { message: 'Населений пункт обов`язковий' }),
	street: z.string().min(1, { message: 'Вулиця обов`язкова' }),
	houseNumber: z.string().min(1, { message: 'Номер будинку обов`язковий' }),
	room: z.string().optional(),
})

export type PersonalInformationDto = z.infer<
	typeof PersonalInformationDtoSchema
>
