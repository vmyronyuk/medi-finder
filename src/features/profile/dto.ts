import { UUID } from 'crypto'

export type ListingDto = {
	id: number
	created_at: Date
	ownerId: UUID
	name: string
	category: string
	expirationDate: Date
	formOfMedicament: string | null
	number: string | null
	description: string | null
	conditionOfStorage: string | null
	state: string
	city: string
	street: string | null
	communication: string | null
}

export type ListingOwnerDto = {
	id: string
	firstName: string
	lastName: string
	middleName: string
	phoneNumber: string
}
