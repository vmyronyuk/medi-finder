import { z } from 'zod'

export const LoginDtoSchema = z.object({
	email: z
		.string({ message: 'Електронна пошта обов`язкова' })
		.email({ message: 'Некоректна електронна пошта' }),
	password: z
		.string({ message: 'Пароль обов`язковий' })
		.min(8, { message: 'Мінімальна довжина паролю - 8 символів' }),
})

export type LoginDto = z.infer<typeof LoginDtoSchema>
