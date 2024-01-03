import * as React from 'react'
import {
	useBoxStyles,
	UseBoxStylesProps,
	UsePseudoBoxStylesProps,
	usePseudoBoxStyles,
} from '@walltowall/calico'
import clsx from 'clsx'

import { Link, LinkProps } from './Link'
import { Text } from './Text'

const variants = {
	blue: {
		backgroundColor: 'blue10',
		focusBackgroundColor: 'orange50',
		color: 'white',
	},
	orange: {
		backgroundColor: 'orange55',
		focusBackgroundColor: 'orange50',
		color: 'white',
	},
} as const

type ButtonLinkProps = LinkProps & {
	variant?: keyof typeof variants
	styles?: UseBoxStylesProps
	focusStyles?: UsePseudoBoxStylesProps<':focus'>
	hoverStyles?: UsePseudoBoxStylesProps<':hover'>
}

export const ButtonLink = ({
	children,
	variant: variantName = 'blue',
	styles,
	focusStyles,
	hoverStyles,
	className,
	...props
}: ButtonLinkProps) => {
	const variant = variants[variantName]

	const cx = clsx(
		useBoxStyles({
			color: variant.color,
			backgroundColor: variant.backgroundColor,
			paddingLeft: 8,
			paddingRight: 8,
			paddingBottom: 2.5,
			paddingTop: 2.5,
			transitionProperty: 'backgroundColor',
			transitionDuration: 'normal',
			transitionTimingFunction: 'easeOut',
			...styles,
		}),
		usePseudoBoxStyles(
			{ backgroundColor: variant.focusBackgroundColor, ...focusStyles },
			':focus',
		),
		usePseudoBoxStyles(
			{ backgroundColor: variant.focusBackgroundColor, ...hoverStyles },
			':hover',
		),
		className,
	)

	return (
		<Link {...props} className={cx}>
			<Text variant="sans-13-14-bold-caps" styles={{ textAlign: 'center' }}>
				{children}
			</Text>
		</Link>
	)
}
