'use server'

import { createClient } from '@/lib/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { LoginDto, LoginDtoSchema } from './dtos/login.dto'
import { RegisterDto, RegisterDtoSchema } from './dtos/register.dto'

export async function loginAction(dto: LoginDto) {
	const { data, error: parseError } = LoginDtoSchema.safeParse(dto)

	if (parseError) {
		redirect('/error')
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: data.email,
		password: data.password,
	})

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function signupAction(dto: RegisterDto) {
	const { data, error: parseError } = RegisterDtoSchema.safeParse(dto)

	if (parseError) {
		redirect('/error')
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
	})

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function logoutAction() {
	const supabase = await createClient()

	const { error } = await supabase.auth.signOut()

	if (error) {
		redirect('/error')
	}

	redirect('/auth/login')
}
