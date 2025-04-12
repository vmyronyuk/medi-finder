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
