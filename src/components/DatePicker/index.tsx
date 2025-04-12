'use client'

import { format } from 'date-fns'
import { uk } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'

import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '../ui/input'

export type DatePickerProps = {
	value?: Date
	onChange?: (value: Date) => void
}

export function DatePicker({ value, onChange }: DatePickerProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className='relative'>
					<Input
						className='cursor-pointer'
						readOnly
						value={
							value
								? format(value, 'dd.MM.yyyy', { locale: uk })
								: 'Придатно до'
						}
					></Input>
					<CalendarIcon className='absolute right-2 top-2.5 size-5' />
				</div>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					locale={uk}
					mode='single'
					selected={value}
					onSelect={date => date && onChange?.(date)}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
