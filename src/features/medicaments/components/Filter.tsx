'use client'

import { CustomSelect } from '@/components/CustomSelect'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { uk } from 'date-fns/locale'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { oblastOptions } from '../business/address'
import {
	formOfMedicamentsOptions,
	medicamentsOptions,
} from '../business/medicaments'

export default function ListingsFilter() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const [category, setCategory] = useState(searchParams.get('category') || '')
	const [expirationDate, setExpirationDate] = useState(
		searchParams.get('expirationDate') || ''
	)
	const [name, setName] = useState(searchParams.get('name') || '')
	const [state, setState] = useState(searchParams.get('state') || '')
	const [formOfMedicament, setFormOfMedicament] = useState(
		searchParams.get('formOfMedicament') || ''
	)
	const [number, setNumber] = useState(searchParams.get('number') || '')

	useEffect(() => {
		const params = new URLSearchParams()

		if (category) params.set('category', category)
		if (expirationDate) params.set('expirationDate', expirationDate)
		if (name) params.set('name', name)
		if (state) params.set('state', state)
		if (formOfMedicament) params.set('formOfMedicament', formOfMedicament)
		if (number) params.set('number', number)

		router.push(`?${params.toString()}`)
	}, [category, expirationDate, name, state, formOfMedicament, number])

	return (
		<div className='flex gap-3 my-3 px-4 sm:px-8 overflow-x-auto'>
			<Popover>
				<PopoverTrigger asChild className='w-[10rem]'>
					<Button variant={'outline'} className='bg-accent'>
						Назва препарату
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[16rem] p-0' align='start'>
					<Input
						placeholder='Назва препарату'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger asChild className='w-[10rem]'>
					<Button variant={'outline'} className='bg-accent'>
						Область
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[16rem] p-0' align='start'>
					<CustomSelect
						placeholder='Область'
						value={state}
						onChange={setState}
						options={oblastOptions}
					/>
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger asChild className='w-[10rem]'>
					<Button variant={'outline'} className='bg-accent'>
						Категорія
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[16rem] p-0' align='start'>
					<CustomSelect
						placeholder='Категорія'
						options={medicamentsOptions}
						value={category}
						onChange={setCategory}
					/>
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger asChild className='w-[10rem]'>
					<Button variant={'outline'} className='bg-accent'>
						Форма випуску
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[16rem] p-0' align='start'>
					<CustomSelect
						placeholder='Форма випуску'
						options={formOfMedicamentsOptions}
						value={formOfMedicament}
						onChange={setFormOfMedicament}
					/>
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger asChild className='w-[10rem]'>
					<Button variant={'outline'} className='bg-accent'>
						Придатно до
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[16rem] p-0' align='start'>
					<Calendar
						locale={uk}
						mode='single'
						selected={expirationDate ? new Date(expirationDate) : undefined}
						onSelect={date => date && setExpirationDate(date.toISOString())}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger asChild className='w-[10rem]'>
					<Button variant={'outline'} className='bg-accent'>
						Кількість
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[16rem] p-0' align='start'>
					<Input
						placeholder='Кількість'
						value={number}
						onChange={e => setNumber(e.target.value)}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
