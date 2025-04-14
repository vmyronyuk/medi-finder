import { createClient } from '@/lib/utils/supabase/server'
import { unauthorized } from 'next/navigation'
import { ListingDto } from './dto'

export async function getUserListings() {
	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const result = await supabase
		.from('medicaments')
		.select('*')
		.eq('ownerId', '' + user.user?.id)

	console.log(result)

	return result.data as ListingDto[]
}

export async function getUserData() {
	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const result = await supabase
		.from('users')
		.select('*')
		.eq('id', '' + user.user?.id)

	return result.data as UserDto[]
}

export type UserDto = {
	firstName: string
	lastName: string
	middleName: string
	phoneNumber: string
	state: string
	city: string
	street: string
	created_at: Date
	listingsCreated: number
	confirmedListings: number
}
