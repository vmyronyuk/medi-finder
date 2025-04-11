import Header from '@/features/globals/Header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative min-h-screen bg-background'>
			<Header />
			<div className='px-8'>{children}</div>
		</div>
	)
}
