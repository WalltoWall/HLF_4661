import React from 'react'
import {
	Box,
	BoxProps,
	BaseBoxStylesProps,
	ResponsiveProp,
} from '@walltowall/calico'
import * as RA from 'fp-ts/ReadonlyArray'

import { normalizeResponsiveProp } from '../lib/normalizeResponsiveProp'

const defaultElement = 'div'

const variants = {
	base: {
		paddingLeft: [5, 8, 11, 14],
		paddingRight: [5, 8, 11, 14],
		paddingTop: [10, 13, 16],
		paddingBottom: [10, 13, 16],
	},
	narrow: {
		paddingLeft: [5, 8, 11, 14],
		paddingRight: [5, 8, 11, 14],
		paddingTop: [8, 10, 11],
		paddingBottom: [8, 10, 11],
	},
	extraNarrow: {
		paddingLeft: [5, 8, 11, 14],
		paddingRight: [5, 8, 11, 14],
		paddingTop: [6, 7, 8],
		paddingBottom: [6, 7, 8],
	},
	wide: {
		paddingLeft: [5, 8, 11, 14],
		paddingRight: [5, 8, 11, 14],
		paddingTop: [14, 17, 20],
		paddingBottom: [14, 17, 20],
	},
} as const

type BoundedBoxProps<E extends React.ElementType> = {
	children?: React.ReactNode
	variant?: keyof typeof variants
	innerMaxWidth?: BaseBoxStylesProps['maxWidth']
	nextSharesBg?: ResponsiveProp<boolean>
} & BoxProps<E>

export const BoundedBox = React.forwardRef(
	<E extends React.ElementType = typeof defaultElement>(
		{
			children,
			variant = 'base',
			innerMaxWidth,
			nextSharesBg = false,
			...props
		}: BoundedBoxProps<E>,
		ref: typeof props.ref,
	) => {
		const variantStyles = variants[variant]

		const resolvedPaddingBottom = RA.zipWith(
			normalizeResponsiveProp(nextSharesBg),
			normalizeResponsiveProp(variantStyles.paddingBottom),
			(a, b) => (a ? 0 : b),
		) as NonNullable<BoxProps['styles']>['paddingBottom']

		return (
			<Box
				as={defaultElement}
				ref={ref}
				{...props}
				styles={{
					paddingLeft: variantStyles.paddingLeft,
					paddingRight: variantStyles.paddingRight,
					paddingTop: variantStyles.paddingTop,
					paddingBottom: resolvedPaddingBottom,
					...props.styles,
				}}
			>
				<Box
					styles={{
						maxWidth: innerMaxWidth,
						width: 'full',
						marginLeft: 'auto',
						marginRight: 'auto',
						height: 'full',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{children}
				</Box>
			</Box>
		)
	},
)
