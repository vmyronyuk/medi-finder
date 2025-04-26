import { MedicamentsPageContent } from '@/features/medicaments/components/MedicamentsPageContent'
import { getAllMedicaments } from '@/features/medicaments/dal'

export default async function MedicamentsPage() {
	const medicaments = await getAllMedicaments()

	return <MedicamentsPageContent medicaments={medicaments} />
}
