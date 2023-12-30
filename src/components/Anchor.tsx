import React from 'react'
import {
	useBoxStyles,
	UseBoxStylesProps,
	UsePseudoBoxStylesProps,
	usePseudoBoxStyles,
} from '@walltowall/calico'
import clsx from 'clsx'

import { Link, LinkProps } from './Link'

export type AnchorProps = LinkProps & {
	styles?: UseBoxStylesProps
	focusStyles?: UsePseudoBoxStylesProps<':focus'>
	hoverStyles?: UsePseudoBoxStylesProps<':hover'>
}

export const Anchor = ({
	styles,
	focusStyles,
	hoverStyles,
	className,
	...props
}: AnchorProps) => {
	const cx = clsx(
		useBoxStyles({
			color: 'orange55',
			transitionProperty: 'color',
			transitionDuration: 'fast',
			...styles,
		}),
		usePseudoBoxStyles({ color: 'orange50', ...focusStyles }, ':focus'),
		usePseudoBoxStyles({ color: 'orange50', ...hoverStyles }, ':hover'),
		className,
	)

	if (props.children === 'Stuart Coleman') console.log(props.href)

	return <Link {...props} className={cx} />
}
