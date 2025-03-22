import Logo from '@/components/Logo/Logo'
import Image from 'next/image'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex h-screen relative'>
			<Image
				src='/herbal-medicines.png'
				alt='background'
				width={1000}
				height={1000}
				className='object-cover w-1/2 sm:block hidden'
				priority
			/>
			<div className='absolute sm:left-1/2 left-5 pl-0 sm:pl-5 top-3'>
				<Logo />
			</div>
			{children}
		</div>
	)
}
