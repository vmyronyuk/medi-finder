'use client'

import { Error } from '@/components/form/Error'
import { Field } from '@/components/form/Field'
import { Heading } from '@/components/typography/Heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signupAction } from '../actions'
import { RegisterDto, RegisterDtoSchema } from '../dtos/register.dto'

export function RegisterForm() {
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterDto>({
		mode: 'onChange',
		resolver: zodResolver(RegisterDtoSchema),
	})

	const onSubmit = async (data: RegisterDto) => {
		setLoading(true)
		await signupAction(data)
		setLoading(false)
	}

	return (
		<form
			className='w-full sm:w-1/2 flex justify-center flex-col items-center gap-5 px-10 md:px-18 lg:px-32'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Heading level={1}>Реєстрація</Heading>
			<div className='flex flex-col gap-3 w-full'>
				<Field>
					<Input
						type='email'
						placeholder='Електронна пошта'
						{...register('email')}
					/>
					<Error error={errors.email} />
				</Field>
				<Field>
					<Input
						type='password'
						placeholder='Пароль'
						{...register('password')}
					/>
					<Error error={errors.password} />
				</Field>
				<Field>
					<Input
						type='password'
						placeholder='Підтвердити пароль'
						{...register('confirmPassword')}
					/>
					<Error error={errors.confirmPassword} />
				</Field>
				<Button loading={loading} className='w-full' type='submit'>
					Зареєструватися
				</Button>
				<Button variant='link' className='w-full'>
					<Link href='/auth/login'>Вже маєте акаунт?</Link>
				</Button>
			</div>
		</form>
	)
}
