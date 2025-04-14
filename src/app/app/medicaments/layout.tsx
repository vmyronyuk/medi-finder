import ListingsFilter from '@/features/medicaments/components/Filter'

export default function MedicamentsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-screen flex flex-col'>
			<ListingsFilter />
			<div className='px-4 sm:px-8 flex-1 min-h-0 overflow-hidden'>
				{children}
			</div>
		</div>
	)
}
