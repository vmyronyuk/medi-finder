import { cn } from '@/lib/utils'

type HeadingProps = {
	children: React.ReactNode
	level: 1 | 2 | 3 | 4
	className?: string
}

export function Heading({ children, className, level }: HeadingProps) {
	switch (level) {
		case 1:
			return <h1 className={cn('text-3xl font-bold', className)}>{children}</h1>
		case 2:
			return <h2 className={cn('text-2xl font-bold', className)}>{children}</h2>
		case 3:
			return (
				<h3 className={cn('text-xl font-semibold', className)}>{children}</h3>
			)
		case 4:
			return (
				<h4 className={cn('text-lg font-semibold', className)}>{children}</h4>
			)
	}
}
