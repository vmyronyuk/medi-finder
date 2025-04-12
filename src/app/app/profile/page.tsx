import { ProfileHeader } from '@/features/profile/components/ProfileHeader'
import { ProfileStats } from '@/features/profile/components/ProfileStats'
import { UserListings } from '@/features/profile/components/UserListings'
import { getUserListings } from '@/features/profile/dal'

export default async function ProfilePage() {
	const userListings = await getUserListings()
	console.log(userListings)
	return (
		<div className='flex flex-col gap-3'>
			<ProfileHeader />
			<ProfileStats />
			<UserListings listings={userListings} />
		</div>
	)
}
