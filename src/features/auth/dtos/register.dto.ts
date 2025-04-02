import { z } from 'zod'

export const RegisterDtoSchema = z
	.object({
		email: z.string({ message: 'Електронна пошта обов`язкова' }).email(),
		password: z
			.string({ message: 'Пароль обов`язковий' })
			.min(8, { message: 'Мінімальна довжина паролю - 8 символів' }),
		confirmPassword: z
			.string({ message: 'Підтвердити пароль обов`язковий' })
			.min(8, { message: 'Мінімальна довжина паролю - 8 символів' }),
	})
	.superRefine((data, ctx) => {
		if (data.password !== data.confirmPassword) {
			ctx.addIssue({
				path: ['confirmPassword'],
				message: 'Паролі не співпадають',
				code: z.ZodIssueCode.custom,
			})
		}
	})

export type RegisterDto = z.infer<typeof RegisterDtoSchema>
