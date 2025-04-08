import { Option } from '@/lib/types'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../ui/select'

type CustomSelectProps = {
	placeholder: string
	options: Option[]
	value: string
	onChange?: (value: string) => void
}

export function CustomSelect({
	placeholder,
	options,
	value,
	onChange,
}: CustomSelectProps) {
	return (
		<div className='relative'>
			<Select value={value} onValueChange={onChange}>
				<SelectTrigger>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{options.map((value, index) =>
						value.isHeader ? (
							<SelectGroup key={`group-${index}`}>
								<SelectLabel>{value.label}</SelectLabel>
							</SelectGroup>
						) : (
							<SelectItem key={value.value} value={value.value}>
								{value.label}
							</SelectItem>
						)
					)}
				</SelectContent>
			</Select>
		</div>
	)
}
