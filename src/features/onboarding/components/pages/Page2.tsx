import { CustomSelect } from '@/components/CustomSelect'
import { Error } from '@/components/form/Error'
import { Field } from '@/components/form/Field'
import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { oblastOptions } from '@/features/medicaments/business/address'
import { useNextStep } from '@/features/onboarding/hooks/useNextStep'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { updatePersonalInfoAction } from '../../actions/page2'
import {
	PersonalInformationDto,
	PersonalInformationDtoSchema,
} from '../../dtos/personal-information.dto'
export default function Page2() {
	const [loading, setLoading] = useState(false)

	const { nextStep } = useNextStep(2)
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<PersonalInformationDto>({
		mode: 'onChange',
		resolver: zodResolver(PersonalInformationDtoSchema),
	})

	const onSubmit = async (data: PersonalInformationDto) => {
		setLoading(true)
		await updatePersonalInfoAction(data)
		nextStep()
	}

	return (
		<div className='flex flex-col gap-3 text-center'>
			<Heading level={2}>Заповніть ваш профіль 😊</Heading>
			<Paragraph className='text-gray-500'>
				Щоб почати використовувати платформу, вам потрібно вказати кілька
				основних даних
			</Paragraph>
			<form
				className='flex flex-col gap-3 px-2 py-2 text-left'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading level={3} className='text-left'>
					Особисті дані
				</Heading>
				<div className='flex gap-3'>
					<Field>
						<Input type='text' placeholder="Ім'я" {...register('firstName')} />
						<Error error={errors.firstName} />
					</Field>
					<Field>
						<Input
							type='text'
							placeholder='Прізвище'
							{...register('lastName')}
						/>
						<Error error={errors.lastName} />
					</Field>
				</div>
				<Field>
					<Input
						type='text'
						placeholder='По батькові'
						{...register('middleName')}
					/>
					<Error error={errors.middleName} />
				</Field>
				<Field>
					<Input
						type='text'
						placeholder='Номер телефону'
						{...register('phoneNumber')}
					/>
					<Error error={errors.phoneNumber} />
				</Field>
				<Field>
					<Input
						type='text'
						placeholder='Дата народження'
						{...register('dateOfBirth')}
					/>
					<Error error={errors.dateOfBirth} />
				</Field>
				<Heading level={3} className='text-left'>
					Місце проживання
				</Heading>
				<div className='flex flex-col gap-3'>
					<Field>
						<Controller
							name='state'
							control={control}
							render={({ field }) => (
								<CustomSelect
									value={field.value}
									onChange={field.onChange}
									placeholder='Область'
									options={oblastOptions}
								/>
							)}
						/>
						<Error error={errors.state} />
					</Field>
					<Field>
						<Input
							type='text'
							placeholder='Населений пункт'
							{...register('city')}
						/>
						<Error error={errors.city} />
					</Field>
					<div className='flex gap-3'>
						<Field>
							<Input type='text' placeholder='Вулиця' {...register('street')} />
							<Error error={errors.street} />
						</Field>
						<Field>
							<Input
								type='text'
								placeholder='Будинок'
								{...register('houseNumber')}
							/>
							<Error error={errors.houseNumber} />
						</Field>
						<Field>
							<Input type='text' placeholder='Квартира' {...register('room')} />
							<Error error={errors.room} />
						</Field>
					</div>
				</div>
				<Button loading={loading} type='submit'>
					Підтвердити інформацію
				</Button>
			</form>
		</div>
	)
}
