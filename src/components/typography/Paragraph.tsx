import { cn } from '@/lib/utils'

type ParagraphProps = {
	children: React.ReactNode
	className?: string
}

export function Paragraph({ children, className }: ParagraphProps) {
	return (
		<p className={cn('text-base text-foreground', className)}>{children}</p>
	)
}
