'use server'

import { createClient } from '@/lib/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect, unauthorized } from 'next/navigation'
import { UserListingsDto, UserListingsDtoSchema } from './dto'

export async function createNewListingAction(dto: UserListingsDto) {
	const { data, error: parseError } = UserListingsDtoSchema.safeParse(dto)

	if (parseError) {
		throw new Error(parseError.message)
	}

	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const dataToInsert = { ...data, ownerId: user.user?.id }

	const { error } = await supabase.from('medicaments').insert(dataToInsert)

	if (error) {
		throw new Error(error.message)
	} else {
		revalidatePath('/app/profile')
		revalidatePath('/app/medicaments')
		redirect('/app/profile')
	}
}
