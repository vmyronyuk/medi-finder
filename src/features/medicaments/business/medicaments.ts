import { Option } from '@/lib/types'

export const medicamentsValue = [
	'antibiotics',
	'painkillers',
	'vitamins',
	'bads',
	'antiseptics',
	'children',
] as const

export const medicamentsOptions: Option[] = [
	{ label: 'Анбіотики', value: 'antibiotics' },
	{ label: 'Знеболювальні', value: 'painkillers' },
	{ label: 'Вітаміни', value: 'vitamins' },
	{ label: 'БАДи', value: 'bads' },
	{ label: 'Антисептики', value: 'antiseptics' },
	{ label: 'Дитячі ліки', value: 'children' },
	{ label: 'Інші', value: 'other' },
]

export const formOfMedicamentsValue = [
	'tablet',
	'syrup',
	'capsule',
	'spray',
	'cream',
	'other',
] as const

export const formOfMedicamentsOptions: Option[] = [
	{ label: 'Таблетки', value: 'tablet' },
	{ label: 'Сироп', value: 'syrup' },
	{ label: 'Капсули', value: 'capsule' },
	{ label: 'Спрей', value: 'spray' },
	{ label: 'Мазь', value: 'cream' },
	{ label: 'Інші', value: 'other' },
]
