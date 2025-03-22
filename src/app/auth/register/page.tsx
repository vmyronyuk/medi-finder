import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function RegisterPage() {
	return (
		<form className='w-full sm:w-1/2 flex justify-center flex-col items-center gap-5 px-10 md:px-18 lg:px-32'>
			<h1 className='text-4xl font-bold'>Реєстрація</h1>
			<div className='flex flex-col gap-3 w-full'>
				<Input type='email' placeholder='Електронна пошта' />
				<Input type='password' placeholder='Пароль' />
				<Input type='password' placeholder='Підтвердити пароль' />
				<Button className='w-full'>Зареєструватися</Button>
				<Button variant='link' className='w-full' asChild>
					<Link href='/auth/login'>Вже маєте акаунт?</Link>
				</Button>
			</div>
		</form>
	)
}
