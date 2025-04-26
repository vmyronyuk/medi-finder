import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { oblastOptions } from '@/features/medicaments/business/address'
import {
	formOfMedicamentsOptions,
	medicamentsOptions,
} from '@/features/medicaments/business/medicaments'
import { MedicamentsList } from '@/features/medicaments/components/MedicamentsList'
import {
	getAllMedicaments,
	getMedicamentOwner,
} from '@/features/medicaments/dal'
import { communicationOptions } from '@/features/profile/listings/business/communication'
import { getLabelFromValue } from '@/lib/utils/getLabel'
import {
	CalendarClock,
	ChartBarStacked,
	Hourglass,
	MapPinHouse,
	Phone,
	Pill,
	SquarePen,
	Tally3,
} from 'lucide-react'
import { redirect } from 'next/navigation'

type Params = Promise<{ id: string[] }>

export default async function MedicamentPage({ params }: { params: Params }) {
	const { id } = await params
	const medicaments = await getAllMedicaments()
	const currentMedicament = medicaments.find(
		medicament => medicament.id === Number(id)
	)

	if (!currentMedicament) {
		redirect('/app/medicaments')
	}

	const owner = await getMedicamentOwner(currentMedicament.ownerId)
	const medOwner = owner[0]

	return (
		<div className='flex gap-6 h-full py-4'>
			<div className=' sm:block hidden sm:w-4/12 overflow-y-auto'>
				<MedicamentsList medicaments={medicaments} />
			</div>
			<div className='sm:block hidden w-[1px] h-full bg-muted-foreground'></div>
			<div className='w-full sm:w-8/12'>
				{currentMedicament ? (
					<div className='border rounded h-full p-5 bg-secondary shadow-md space-y-3 overflow-y-auto'>
						<Heading level={2} className='border-b pb-2'>
							{currentMedicament.name}
						</Heading>

						<div className='grid grid-cols-2 gap-4'>
							<div>
								<Paragraph className='text-secondary-foreground flex items-center gap-1'>
									Категорія
									<ChartBarStacked className='w-4 h-4' />
								</Paragraph>
								<Paragraph className='font-semibold text-lg'>
									{getLabelFromValue(
										currentMedicament.category,
										medicamentsOptions
									)}
								</Paragraph>
							</div>
							{currentMedicament.formOfMedicament && (
								<div>
									<Paragraph className='text-secondary-foreground flex items-center gap-1'>
										Форма
										<Pill className='w-4 h-4' />
									</Paragraph>
									<Paragraph className='font-semibold'>
										{getLabelFromValue(
											currentMedicament.formOfMedicament,
											formOfMedicamentsOptions
										)}
									</Paragraph>
								</div>
							)}
							{currentMedicament.expirationDate && (
								<div>
									<Paragraph className='text-secondary-foreground flex items-center gap-1'>
										Придатний до
										<CalendarClock className='w-4 h-4' />
									</Paragraph>
									<Paragraph className='font-semibold'>
										{new Date(
											currentMedicament.expirationDate
										).toLocaleDateString()}
									</Paragraph>
								</div>
							)}
							{currentMedicament.number && (
								<div>
									<Paragraph className='text-secondary-foreground flex items-center gap-1'>
										Кількість
										<Tally3 className='w-4 h-4' />
									</Paragraph>
									<Paragraph className='font-semibold'>
										{currentMedicament.number}
									</Paragraph>
								</div>
							)}
						</div>

						{currentMedicament.description && (
							<div>
								<Paragraph className='text-secondary-foreground flex items-center gap-1'>
									Опис
									<SquarePen className='w-4 h-4' />
								</Paragraph>
								<Paragraph className='font-semibold'>
									{currentMedicament.description}
								</Paragraph>
							</div>
						)}

						<div>
							<Paragraph className='text-secondary-foreground flex items-center gap-1'>
								Адреса
								<MapPinHouse className='w-4 h-4' />
							</Paragraph>
							<Paragraph className='font-semibold'>
								{getLabelFromValue(currentMedicament.state, oblastOptions)},{' '}
								{currentMedicament.city}, {currentMedicament.street ?? '—'}
							</Paragraph>
						</div>

						{currentMedicament.conditionOfStorage && (
							<div>
								<Paragraph className='text-secondary-foreground flex items-center gap-1'>
									Умови зберігання
									<Hourglass className='w-4 h-4' />
								</Paragraph>
								<Paragraph className='font-semibold'>
									{currentMedicament.conditionOfStorage}
								</Paragraph>
							</div>
						)}

						{currentMedicament.communication && (
							<div>
								<Paragraph className='text-secondary-foreground flex items-center gap-1'>
									Бажаний спосіб зв’язку
									<Phone className='w-4 h-4' />
								</Paragraph>
								<Paragraph className='font-semibold'>
									{getLabelFromValue(
										currentMedicament.communication,
										communicationOptions
									)}
								</Paragraph>
							</div>
						)}

						<div className='border-t pt-2 space-y-3'>
							<Heading level={3}>Інформація про контактну особу</Heading>
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
								<div>
									<Paragraph className='text-secondary-foreground'>
										Ім’я
									</Paragraph>
									<Paragraph className='font-semibold'>
										{medOwner.firstName}
									</Paragraph>
								</div>

								<div>
									<Paragraph className='text-secondary-foreground'>
										Прізвище
									</Paragraph>
									<Paragraph className='font-semibold'>
										{medOwner.lastName}
									</Paragraph>
								</div>

								<div>
									<Paragraph className='text-secondary-foreground'>
										По батькові
									</Paragraph>
									<Paragraph className='font-semibold'>
										{medOwner.middleName}
									</Paragraph>
								</div>
							</div>
							<div>
								<Paragraph className='text-secondary-foreground'>
									Телефон
								</Paragraph>
								<Paragraph className='font-semibold'>
									{medOwner.phoneNumber}
								</Paragraph>
							</div>
						</div>
					</div>
				) : (
					<div className='border rounded h-full p-3 flex items-center justify-center text-muted-foreground'>
						Нічого не вибрано
					</div>
				)}
			</div>
		</div>
	)
}
