import { Error } from '@/components/form/Error'
import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { updateConfirmRulesAction } from '../../actions/page4'
import { rules } from '../../business/rules'
import {
	ConfirmRulesDto,
	ConfirmRulesDtoSchema,
} from '../../dtos/confirm-rules.dto'
import { useNextStep } from '../../hooks/useNextStep'

export default function Page4() {
	const [loading, setLoading] = useState(false)
	const { nextStep } = useNextStep(4)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ConfirmRulesDto>({
		mode: 'onChange',
		resolver: zodResolver(ConfirmRulesDtoSchema),
	})

	const onClick = async (data: ConfirmRulesDto) => {
		setLoading(true)
		await updateConfirmRulesAction(data)
		nextStep()
	}

	return (
		<div className='flex flex-col gap-3 text-center'>
			<Heading level={2}>Ознайомтесь з правилами безпеки </Heading>
			<Paragraph className='text-gray-500'>
				Щоб забезпечити безпечний обмін ліками, ми просимо вас ознайомитися з
				нашими правилами.
			</Paragraph>
			<div className='flex flex-col gap-2 text-left'>
				{rules.map(rule => (
					<div className='flex flex-col gap-2' key={rule.title}>
						<Heading level={3} className='text-lg font-bold'>
							{rule.title}
						</Heading>
						{rule.description && (
							<Paragraph className='font-bold'>✅ {rule.description}</Paragraph>
						)}
						<Paragraph className='font-semibold'>
							⛔ {rule.additional}
						</Paragraph>
					</div>
				))}
			</div>
			<form
				className='flex flex-col gap-2 text-left'
				onSubmit={handleSubmit(onClick)}
			>
				<div className='flex items-center gap-2 text-left'>
					<Controller
						name='confirmRules'
						control={control}
						render={({ field }) => (
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						)}
					/>
					<Paragraph className='font-bold'>
						Я ознайомився з правилами і приймаю їх
					</Paragraph>
				</div>
				<Error error={errors.confirmRules} />

				<Button loading={loading} type='submit'>
					Завершити налаштування
				</Button>
			</form>
		</div>
	)
}
