import Header from '@/features/globals/Header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative bg-background'>
			<Header />
			<div className='px-4 sm:px-8 flex-1 min-h-0 overflow-hidden'>
				{children}
			</div>
		</div>
	)
}
