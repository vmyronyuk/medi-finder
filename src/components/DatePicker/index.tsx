'use client'

import { format } from 'date-fns'
import { uk } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '../ui/input'

export function DatePicker() {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className='relative'>
					<Input
						className='cursor-pointer'
						value={
							date ? format(date, 'dd.MM.yyyy', { locale: uk }) : 'Оберіть дату'
						}
					></Input>
					<CalendarIcon className='absolute right-2 top-2.5 size-5' />
				</div>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					locale={uk}
					mode='single'
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
