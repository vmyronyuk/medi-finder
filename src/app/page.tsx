import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (user) {
		redirect('/app/profile')
	}
}
