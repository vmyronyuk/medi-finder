import { ProfileHeader } from '@/features/profile/components/ProfileHeader'
import { ProfileStats } from '@/features/profile/components/ProfileStats'
import { UserListings } from '@/features/profile/components/UserListings'
import { getUserData, getUserListings } from '@/features/profile/dal'

export default async function ProfilePage() {
	const userListings = await getUserListings()
	const userData = await getUserData()
	const currentUserData = userData[0]

	return (
		<div className='flex flex-col gap-3'>
			<ProfileHeader />
			<ProfileStats user={currentUserData} listings={userListings.length} />
			<UserListings listings={userListings} />
		</div>
	)
}
