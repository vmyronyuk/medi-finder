import { z } from 'zod'

export const ConfirmRulesDtoSchema = z.object({
	confirmRules: z.boolean({ message: 'Потрібно погодитися з правилами' }),
})

export type ConfirmRulesDto = z.infer<typeof ConfirmRulesDtoSchema>
