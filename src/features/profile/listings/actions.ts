'use server'

import { createClient } from '@/lib/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect, unauthorized } from 'next/navigation'
import { getUserData } from '../dal'
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

	const userData = await getUserData()

	const currentUserData = userData[0]

	await supabase
		.from('users')
		.update({ listingsCreated: currentUserData.listingsCreated + 1 })
		.eq('id', user.user?.id)

	if (error) {
		throw new Error(error.message)
	} else {
		revalidatePath('/app/profile')
		revalidatePath('/app/medicaments')
		redirect('/app/profile')
	}
}

export async function confirmListingAction(id: number) {
	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { error } = await supabase.from('medicaments').delete().eq('id', id)

	const userData = await getUserData()

	const currentUserData = userData[0]

	await supabase
		.from('users')
		.update({ confirmedListings: currentUserData.confirmedListings + 1 })
		.eq('id', user.user?.id)

	if (error) {
		throw new Error(error.message)
	}

	revalidatePath('/app/profile')
	revalidatePath('/app/medicaments')
	redirect('/app/profile')
}

export async function deleteListingAction(id: number) {
	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { error } = await supabase.from('medicaments').delete().eq('id', id)

	if (error) {
		throw new Error(error.message)
	}

	revalidatePath('/app/profile')
	revalidatePath('/app/medicaments')
	redirect('/app/profile')
}
