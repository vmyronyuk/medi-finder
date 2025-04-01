import { CustomSelect } from '@/components/CustomSelect'
import { DatePicker } from '@/components/DatePicker'
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
import { Tablets } from 'lucide-react'

export default function NewMedicamentPage() {
	return (
		<div className='flex flex-col gap-3'>
			<Heading level={2}>Додавання нових ліків</Heading>
			<Paragraph className='text-gray-600'>
				<span className='font-bold'>
					Стаття 21. Реалізація лікарських засобів
				</span>
				&apos;&apos;Реалізація лікарських засобів, які підлягають відпуску за
				рецептом, дозволяється тільки через аптеки або аптечні пункти на
				підставі рецепта лікаря. Заборонено без рецепта передавати або
				реалізовувати лікарські засоби, що потребують рецептурного
				відпуску.&apos;&apos;⚠️
			</Paragraph>
			<form className='flex flex-col gap-3'>
				<div className='flex sm:flex-row items-start flex-col gap-6'>
					<div className='w-full flex flex-col gap-2'>
						<Heading level={4}>Основна інформація</Heading>
						<div className='flex flex-col gap-2'>
							<Input placeholder='Назва препарату*' />
							<div>
								<CustomSelect
									placeholder='Категорія*'
									options={medicamentsOptions}
								/>
							</div>
							<Input placeholder='Термін придатності*' />
							<DatePicker />
							<CustomSelect
								placeholder='Форма випуску'
								options={formOfMedicamentsOptions}
							/>
							<Input placeholder='Кількість' />
						</div>
						<Heading level={4} className='mt-2'>
							Адреса
						</Heading>
						<div className='flex flex-col gap-2'>
							<CustomSelect placeholder='Область*' options={oblastOptions} />
							<Input placeholder='Місто*' />
							<Input placeholder='Вулиця' />
						</div>
					</div>
					<div className='w-full flex flex-col gap-2'>
						<Heading level={4}>Додаткова інформація</Heading>
						<div className='flex flex-col gap-2'>
							<Textarea placeholder='Опис' rows={3} />
							<Textarea placeholder='Умови зберігання' rows={2} />
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2 mt-2'>
					<Heading level={4}>Бажаний спосіб зв’язку</Heading>
					<div className='flex gap-3 flex-wrap px-1'>
						<div className='flex items-center gap-2 font-semibold'>
							<Checkbox className='border-primary' />
							<span>Telegram</span>
						</div>
						<div className='flex items-center gap-2 font-semibold'>
							<Checkbox className='border-primary' />
							<span>Viber</span>
						</div>
						<div className='flex items-center gap-2 font-semibold'>
							<Checkbox className='border-primary' />
							<span>Whatsapp</span>
						</div>
						<div className='flex items-center gap-2 font-semibold'>
							<Checkbox className='border-primary' />
							<span>По телефону</span>
						</div>
						<div className='flex items-center gap-2 font-semibold'>
							<Checkbox className='border-primary' />
							<span>Електронна пошта</span>
						</div>
						<div className='flex items-center gap-2 font-semibold'>
							<Checkbox className='border-primary' />
							<span>Інше</span>
						</div>
					</div>
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

				<Button>
					Додати ліки <Tablets />
				</Button>
			</form>
		</div>
	)
}
