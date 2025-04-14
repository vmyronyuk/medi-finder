'use client'

import { CustomSelect } from '@/components/CustomSelect'
import { DatePicker } from '@/components/DatePicker'
import { Error } from '@/components/form/Error'
import { Field } from '@/components/form/Field'
import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { oblastOptions } from '@/features/medicaments/business/address'
import {
	formOfMedicamentsOptions,
	medicamentsOptions,
} from '@/features/medicaments/business/medicaments'
import { zodResolver } from '@hookform/resolvers/zod'
import { Tablets } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { createNewListingAction } from '../actions'
import { communicationOptions } from '../business/communication'
import { UserListingsDto, UserListingsDtoSchema } from '../dto'

export function ListingForm() {
	const [loading, setLoading] = useState(false)

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserListingsDto>({
		mode: 'onChange',
		defaultValues: {},
		resolver: zodResolver(UserListingsDtoSchema),
	})

	const onSubmit = async (data: UserListingsDto) => {
		setLoading(true)
		await createNewListingAction(data)
		setLoading(false)
	}

	return (
		<form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
			<div className='flex sm:flex-row items-start flex-col gap-6'>
				<div className='w-full flex flex-col gap-2'>
					<Heading level={4}>Основна інформація</Heading>
					<div className='flex flex-col gap-2'>
						<Field>
							<Input placeholder='Назва препарату*' {...register('name')} />
							<Error error={errors.name} />
						</Field>
						<Field>
							<Controller
								name='category'
								control={control}
								render={({ field }) => {
									return (
										<CustomSelect
											value={field.value}
											onChange={field.onChange}
											placeholder='Категорія*'
											options={medicamentsOptions}
										/>
									)
								}}
							/>
							<Error error={errors.category} />
						</Field>
						<Field>
							<Controller
								name='expirationDate'
								control={control}
								render={({ field }) => {
									return (
										<DatePicker
											value={field.value || undefined}
											onChange={field.onChange}
										/>
									)
								}}
							/>
							<Error error={errors.expirationDate} />
						</Field>
						<Field>
							<Controller
								name='formOfMedicament'
								control={control}
								render={({ field }) => {
									return (
										<CustomSelect
											value={field.value || ''}
											onChange={field.onChange}
											placeholder='Форма випуску'
											options={formOfMedicamentsOptions}
										/>
									)
								}}
							/>
							<Error error={errors.formOfMedicament} />
						</Field>
						<Field>
							<Input placeholder='Кількість' {...register('number')} />
							<Error error={errors.number} />
						</Field>
					</div>
					<Heading level={4} className='mt-2'>
						Адреса
					</Heading>
					<div className='flex flex-col gap-2'>
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
							<Input placeholder='Місто*' {...register('city')} />
							<Error error={errors.city} />
						</Field>
						<Field>
							<Input placeholder='Вулиця' {...register('street')} />
							<Error error={errors.street} />
						</Field>
					</div>
				</div>
				<div className='w-full flex flex-col gap-2'>
					<Heading level={4}>Додаткова інформація</Heading>
					<div className='flex flex-col gap-2'>
						<Field>
							<Textarea
								placeholder='Опис'
								rows={3}
								{...register('description')}
							/>
							<Error error={errors.description} />
						</Field>
						<Field>
							<Textarea
								placeholder='Умови зберігання'
								rows={2}
								{...register('conditionOfStorage')}
								maxLength={50}
							/>
							<Error error={errors.conditionOfStorage} />
						</Field>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-2 mt-2'>
				<Heading level={4}>Бажаний спосіб зв’язку</Heading>
				<Controller
					name='communication'
					control={control}
					render={({ field }) => {
						return (
							<CustomSelect
								value={field.value}
								onChange={field.onChange}
								placeholder='Бажаний спосіб зв’язку'
								options={communicationOptions}
							/>
						)
					}}
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<div className='flex items-center gap-2 px-1'>
					<Checkbox className='border-primary' required />
					<Paragraph className='font-bold'>
						<span className='underline'>
							Підтверджую, що цей препарат не є рецептурним
						</span>
						⚠️
					</Paragraph>
				</div>
			</div>

			<Button loading={loading}>
				Додати ліки <Tablets />
			</Button>
		</form>
	)
}
