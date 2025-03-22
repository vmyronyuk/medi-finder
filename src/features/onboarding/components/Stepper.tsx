'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

type StepperProps = {
	currentStep: number
}

const Page1 = dynamic(
	() => import('@/features/onboarding/components/pages/Page1')
)

const Page2 = dynamic(
	() => import('@/features/onboarding/components/pages/Page2')
)

const Page3 = dynamic(
	() => import('@/features/onboarding/components/pages/Page3')
)

const Page4 = dynamic(
	() => import('@/features/onboarding/components/pages/Page4')
)

const Page5 = dynamic(
	() => import('@/features/onboarding/components/pages/Page5')
)

const steps = [Page1, Page2, Page3, Page4, Page5]

export function Stepper({ currentStep }: StepperProps) {
	const idx = currentStep - 1
	const CurrentStep = steps[idx] as React.FC
	return (
		<div>
			<Suspense fallback={'Loading...'}>
				<CurrentStep />
			</Suspense>
		</div>
	)
}
