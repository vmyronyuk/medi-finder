import { ProfileHeader } from '@/features/profile/components/ProfileHeader'
import { ProfileStats } from '@/features/profile/components/ProfileStats'
import { UserListings } from '@/features/profile/components/UserListings'

export default function ProfilePage() {
	return (
		<div className='flex flex-col gap-3'>
			<ProfileHeader />
			<ProfileStats />
			<UserListings />
		</div>
	)
}
