import React from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import { Box } from '@walltowall/calico'

import { Text } from './Text'
import { DevPanel } from './DevPanel'

export type LayoutProps = {
	children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<SkipNavLink>
				<Text>Skip to content</Text>
			</SkipNavLink>

			<Box
				as="main"
				styles={{
					fontFamily: 'sans',
					color: 'black',
				}}
			>
				{children}
			</Box>
			{process.env.NODE_ENV === 'development' && <DevPanel />}
		</>
	)
}
