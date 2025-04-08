'use server'

import { createClient } from '@/lib/utils/supabase/server'
import { redirect, unauthorized } from 'next/navigation'
import {
	PersonalInformationDto,
	PersonalInformationDtoSchema,
} from '../dtos/personal-information.dto'

export async function updatePersonalInfoAction(dto: PersonalInformationDto) {
	const { data, error: parseError } =
		PersonalInformationDtoSchema.safeParse(dto)

	if (parseError) {
		redirect('/error')
	}

	const supabase = await createClient()
	const { data: user } = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const finalData = {
		...data,
		dateOfBirth: new Date(data.dateOfBirth),
	}

	const { error } = await supabase.from('users').upsert([
		{
			id: user.user?.id,
			firstName: finalData.firstName,
			lastName: finalData.lastName,
			middleName: finalData.middleName,
			dateOfBirth: finalData.dateOfBirth,
			phoneNumber: finalData.phoneNumber,
			state: finalData.state,
			city: finalData.city,
			street: finalData.street,
			houseNumber: finalData.houseNumber,
			room: finalData.room,
		},
	])

	if (error) {
		throw new Error(error.message)
	}
}
