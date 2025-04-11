import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page5() {
	return (
		<div className='flex flex-col gap-3 text-center'>
			<Heading level={2}>Ваш профіль готовий! 🎉</Heading>
			<Paragraph className='text-gray-500'>
				Тепер ви можете почати обмінюватися ліками з іншими користувачами. Для
				цього переходьте до розділу &apos;Мій профіль&apos;
			</Paragraph>
			<Button>
				<Link href='/app/profile'>Перейти до профілю</Link>
			</Button>
		</div>
	)
}
