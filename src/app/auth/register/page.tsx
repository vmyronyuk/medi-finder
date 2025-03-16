import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pill } from 'lucide-react'
import Image from 'next/image'

export default function RegisterPage() {
	return (
		<div className='flex h-screen'>
			<Image
				src='/herbal-medicines.png'
				alt='background'
				width={1000}
				height={1000}
				className='object-cover w-1/2 sm:block hidden'
				priority
			/>
			<form className='w-full sm:w-1/2 flex justify-center flex-col items-center gap-5 px-10 md:px-18 lg:px-32'>
				<Pill className='w-10 h-10' />
				<h1 className='text-4xl font-bold'>Реєстрація</h1>
				<div className='flex flex-col gap-3 w-full'>
					<Input type='email' placeholder='Електронна пошта' />
					<Input type='password' placeholder='Пароль' />
					<Input type='password' placeholder='Підтвердити пароль' />
					<Button className='w-full'>Зареєструватися</Button>
				</div>
			</form>
		</div>
	)
}
