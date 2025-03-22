import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useNextStep } from '../../hooks/useNextStep'

export default function Page4() {
	const { nextStep } = useNextStep(4)

	return (
		<div className='flex flex-col gap-3 text-center'>
			<h1 className='text-2xl font-bold'>Ознайомтесь з правилами безпеки </h1>
			<p className='text-gray-500'>
				Щоб забезпечити безпечний обмін ліками, ми просимо вас ознайомитися з
				нашими правилами.
			</p>
			<div className='flex flex-col gap-2 text-left'>
				{rules.map(rule => (
					<div className='flex flex-col gap-2' key={rule.title}>
						<h3 className='text-lg font-bold'>{rule.title}</h3>
						{rule.description && (
							<p className='font-bold'>✅ {rule.description}</p>
						)}
						<p className='font-semibold'>⛔ {rule.additional}</p>
					</div>
				))}
			</div>
			<div className='flex items-center gap-2 text-left'>
				<Checkbox />
				<p className='font-semibold'>Я ознайомився з правилами і приймаю їх</p>
			</div>
			<Button onClick={nextStep}>Завершити налаштування</Button>
		</div>
	)
}

const rules = [
	{
		title: 'Легальність ліків',
		description:
			'Обмін дозволений тільки для сертифікованих лікарських засобів, офіційно зареєстрованих в Україні.',
		additional:
			'Заборонено передавати наркотичні, психотропні та інші препарати, що підлягають контролю державних органів.',
	},
	{
		title: 'Стан та термін придатності',
		description:
			'Ліки повинні бути в заводському пакуванні та мати неушкоджену інструкцію (якщо вона є). Термін придатності препарату має становити щонайменше 3 місяці до закінчення.',
		additional:
			'Заборонено передавати прострочені, відкриті або пошкоджені препарати.',
	},
	{
		title: 'Особисті дані та конфіденційність',
		description:
			'Всі операції обміну повинні відбуватися через платформу, без передачі особистих даних третім особам.',
		additional:
			'Заборонено вимагати від інших користувачів паспортні дані, адреси або інші чутливі дані.',
	},
	{
		title: 'Безпека отримання ліків',
		description:
			'Рекомендується здійснювати обмін через поштові сервіси або особисті зустрічі у безпечних громадських місцях.',
		additional:
			'Заборонено вимагати оплату за передані ліки – обмін є безкоштовним.',
	},
	{
		title: 'Відповідальність користувачів',
		description:
			'Користувач самостійно несе відповідальність за достовірність інформації про препарати, які він передає або отримує.',
		additional:
			'Платформа не несе відповідальності за можливі побічні ефекти або неправильне використання отриманих ліків.',
	},
	{
		title: 'Порушення правил',
		additional:
			'За порушення будь-якого з вищевказаних правил користувач може бути заблокований без можливості відновлення акаунта.',
	},
]
