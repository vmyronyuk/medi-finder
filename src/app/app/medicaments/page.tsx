import { MedicamentsPageContent } from '@/features/medicaments/components/MedicamentsPageContent'
import { getAllMedicaments } from '@/features/medicaments/dal'

export const dynamic = 'force-dynamic'

export default async function MedicamentsPage() {
	const medicaments = await getAllMedicaments()

	return <MedicamentsPageContent medicaments={medicaments} />
}
