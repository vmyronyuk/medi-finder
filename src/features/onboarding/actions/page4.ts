'use server'

import { createClient } from '@/lib/utils/supabase/server'
import { unauthorized } from 'next/navigation'
import {
	ConfirmRulesDto,
	ConfirmRulesDtoSchema,
} from '../dtos/confirm-rules.dto'

export async function updateConfirmRulesAction(dto: ConfirmRulesDto) {
	const { data, error: parseError } = ConfirmRulesDtoSchema.safeParse(dto)

	if (parseError) {
		throw new Error(parseError.message)
	}

	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { error } = await supabase
		.from('users')
		.update([
			{
				confirmRules: data.confirmRules,
				onboardingFinished: true,
			},
		])
		.eq('id', user.user?.id)

	if (error) {
		throw new Error(error.message)
	}
}
