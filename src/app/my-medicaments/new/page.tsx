import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tablets } from 'lucide-react'

export default function NewMedicamentPage() {
	return (
		<div className='container px-5 flex flex-col gap-3 mx-auto'>
			<h2 className='text-2xl font-bold'>Додавання нових ліків</h2>
			<p>
				<span className='font-semibold'>
					Стаття 21. Реалізація лікарських засобів
				</span>{' '}
				&apos;&apos;Реалізація лікарських засобів, які підлягають відпуску за
				рецептом, дозволяється тільки через аптеки або аптечні пункти на
				підставі рецепта лікаря. Заборонено без рецепта передавати або
				реалізовувати лікарські засоби, що потребують рецептурного
				відпуску.&apos;&apos;
			</p>
			<form className='flex flex-col gap-3'>
				<div className='flex sm:flex-row items-start flex-col gap-6'>
					<div className='w-full flex flex-col gap-2'>
						<h3 className='text-lg font-semibold'>Основна інформація</h3>
						<div className='flex flex-col gap-2'>
							<Input placeholder='Назва препарату*' />
							<Input placeholder='Категорія*' />
							<Input placeholder='Термін придатності*' />
							<Input placeholder='Форма випуску' />
							<Input placeholder='Кількість' />
						</div>
						<h3 className='text-lg font-semibold mt-2'>Адреса</h3>
						<div className='flex flex-col gap-2'>
							<Input placeholder='Область*' />
							<Input placeholder='Місто*' />
							<Input placeholder='Вулиця' />
						</div>
						<div className='flex flex-col gap-2 mt-2'>
							<h3 className='text-lg font-semibold'>Бажаний спосіб зв’язку</h3>
							<div className='flex gap-3 flex-wrap px-1'>
								<div className='flex items-center gap-2 font-semibold'>
									<Checkbox className='border-primary' />
									<p>Telegram</p>
								</div>
								<div className='flex items-center gap-2 font-semibold'>
									<Checkbox className='border-primary' />
									<p>Viber</p>
								</div>
								<div className='flex items-center gap-2 font-semibold'>
									<Checkbox className='border-primary' />
									<p>Whatsapp</p>
								</div>
								<div className='flex items-center gap-2 font-semibold'>
									<Checkbox className='border-primary' />
									<p>По телефону</p>
								</div>
								<div className='flex items-center gap-2 font-semibold'>
									<Checkbox className='border-primary' />
									<p>Електронна пошта</p>
								</div>
								<div className='flex items-center gap-2 font-semibold'>
									<Checkbox className='border-primary' />
									<p>Інше</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-1'>
							<div className='flex items-center gap-2 px-1'>
								<Checkbox className='border-primary' required />
								<p className='font-bold'>
									<span className='underline'>
										Підтверджую, що цей препарат не є рецептурним
									</span>
									⚠️
								</p>
							</div>
						</div>
					</div>
					<div className='w-full flex flex-col gap-2'>
						<h3 className='text-lg font-semibold'>Додаткова інформація</h3>
						<div className='flex flex-col gap-2'>
							<Textarea placeholder='Опис' rows={3} />
							<Textarea placeholder='Умови зберігання' rows={2} />
						</div>
					</div>
				</div>

				<Button>
					Додати ліки <Tablets />
				</Button>
			</form>
		</div>
	)
}
