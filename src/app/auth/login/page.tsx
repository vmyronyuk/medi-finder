import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function LoginPage() {
	return (
		<form className='w-full sm:w-1/2 flex justify-center flex-col items-center gap-5 px-10 md:px-18 lg:px-32'>
			<h1 className='text-4xl font-bold'>Вхід</h1>
			<Input type='email' placeholder='Електронна пошта' />
			<Input type='password' placeholder='Пароль' />
			<Button className='w-full' asChild>
				<Link href='/onboarding/1'>Ввійти</Link>
			</Button>
			<Button variant='link' className='w-full p-0' asChild>
				<Link href='/auth/register'>Ще не маєте акаунт?</Link>
			</Button>
		</form>
	)
}
