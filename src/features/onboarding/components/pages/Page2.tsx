import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNextStep } from '@/features/onboarding/hooks/useNextStep'
export default function Page2() {
	const { nextStep } = useNextStep(2)
	return (
		<div className='flex flex-col gap-3 text-center'>
			<h1 className='text-2xl font-bold'>Заповніть ваш профіль 😊</h1>
			<p className='text-gray-500'>
				Щоб почати використовувати платформу, вам потрібно вказати кілька
				основних даних
			</p>
			<form className='flex flex-col gap-3 px-2 py-2'>
				<h3 className='text-md text-left font-bold'>Особисті дані</h3>
				<div className='flex gap-3'>
					<Input type='text' placeholder="Ім'я" />
					<Input type='text' placeholder='Прізвище' />
				</div>
				<Input type='email' placeholder='По батькові' />
				<Input type='text' placeholder='Номер телефону' />
				<Input type='text' placeholder='Дата народження' />
				<h3 className='text-md text-left font-bold'>Місце проживання</h3>
				<div className='flex flex-col gap-3'>
					<Input type='text' placeholder='Область' />
					<Input type='text' placeholder='Населений пункт' />
					<div className='flex gap-3'>
						<Input type='text' placeholder='Вулиця' />
						<Input type='text' placeholder='Будинок' />
						<Input type='text' placeholder='Квартира' />
					</div>
				</div>
				<Button onClick={nextStep}>Підтвердити інформацію</Button>
			</form>
		</div>
	)
}
