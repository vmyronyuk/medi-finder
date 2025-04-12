import Header from '@/features/globals/Header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative h-screen bg-background flex flex-col'>
			<Header />
			<div className='px-8 flex-1 min-h-0 overflow-hidden'>{children}</div>
		</div>
	)
}
