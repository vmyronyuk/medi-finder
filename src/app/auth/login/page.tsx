import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pill } from 'lucide-react'
import Image from 'next/image'

export default function LoginPage() {
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
				<h1 className='text-4xl font-bold'>Login</h1>
				<Input type='email' placeholder='Email' />
				<Input type='password' placeholder='Password' />
				<Button className='w-full'>Login</Button>
			</form>
		</div>
	)
}
