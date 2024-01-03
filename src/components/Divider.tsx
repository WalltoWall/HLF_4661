import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

const defaultElement = 'hr'

export type DividerProps<E extends React.ElementType> = BoxProps<E>

export const Divider = <E extends React.ElementType = typeof defaultElement>(
	props: DividerProps<E>,
) => (
	<Box
		as={defaultElement}
		{...props}
		styles={{
			borderWidth: 'none',
			borderTopWidth: '1px',
			borderStyle: 'solid',
			color: 'gray85',
			borderColor: 'currentColor',
			...props.styles,
		}}
	/>
)
