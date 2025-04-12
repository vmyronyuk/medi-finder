import { createClient } from '@/lib/utils/supabase/server'
import { ListingDto, ListingOwnerDto } from '../profile/dto'

export async function getAllMedicaments() {
	const supabase = await createClient()
	const data = await supabase.from('medicaments').select('*')

	return data.data as ListingDto[]
}

export async function getMedicamentOwner(ownerId: string) {
	const supabase = await createClient()
	const data = await supabase.from('users').select('*').eq('id', ownerId)

	return data.data as ListingOwnerDto[]
}
