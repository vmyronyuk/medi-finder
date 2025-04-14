'use client'

import { Error } from '@/components/form/Error'
import { Field } from '@/components/form/Field'
import { Heading } from '@/components/typography/Heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginAction } from '../actions'
import { LoginDto, LoginDtoSchema } from '../dtos/login.dto'

export function LoginForm() {
	const [loading, setLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDto>({
		mode: 'onChange',
		resolver: zodResolver(LoginDtoSchema),
	})
	const onSubmit = async (data: LoginDto) => {
		setLoading(true)
		await loginAction(data)
		redirect('/onboarding/1')
	}

	return (
		<form
			className='w-full sm:w-1/2 flex justify-center flex-col items-center gap-5 px-10 md:px-18 lg:px-32'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Heading level={1}>Вхід</Heading>
			<Field>
				<Input
					type='email'
					placeholder='Електронна пошта'
					{...register('email')}
				/>
				<Error error={errors.email} />
			</Field>
			<Field>
				<Input type='password' placeholder='Пароль' {...register('password')} />
				<Error error={errors.password} />
			</Field>
			<Button type='submit' className='w-full' loading={loading}>
				Ввійти
			</Button>
			<Button variant='link'>
				<Link href='/auth/register'>Ще не маєте акаунт?</Link>
			</Button>
		</form>
	)
}
