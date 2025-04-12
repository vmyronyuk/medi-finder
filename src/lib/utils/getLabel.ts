import { Option } from '@/lib/types'

export function getLabelFromValue(value: string, options: Option[]) {
	const found = options.find(option => option.value === value)
	return found?.label
}
