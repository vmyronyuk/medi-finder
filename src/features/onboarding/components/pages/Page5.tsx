import { Button } from '@/components/ui/button'

export default function Page5() {
	return (
		<div className='flex flex-col gap-3 text-center'>
			<h1 className='text-2xl font-bold'>Ваш профіль готовий! 🎉</h1>
			<p className='text-gray-500'>
				Тепер ви можете почати обмінюватися ліками з іншими користувачами. Для
				цього переходьте до розділу &apos;Мій профіль&apos;
			</p>
			<Button>Перейти до профілю</Button>
		</div>
	)
}
