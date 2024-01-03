import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'
import { Anchor } from './Anchor'
import { Divider } from './Divider'
import { Inline } from './Inline'
import { Text } from './Text'
import { Icon } from './Icon'

const defaultElement = 'div'

type NextButtonContentsProps = {
	children?: React.ReactNode
}

const NextButtonContents = ({ children }: NextButtonContentsProps) => (
	<Inline space={4} alignY="center">
		<Text variant="sans-16-caps">{children}</Text>
		<Icon name="triangleRight" styles={{ width: '0.5rem' }} />
	</Inline>
)

type PreviousButtonContentsProps = {
	children?: React.ReactNode
}

const PreviousButtonContents = ({ children }: PreviousButtonContentsProps) => (
	<Inline space={4} alignY="center">
		<Icon name="triangleLeft" styles={{ width: '0.5rem' }} />
		<Text variant="sans-16-caps">{children}</Text>
	</Inline>
)

type PaginationNavigationProps<E extends React.ElementType> = {
	nextOnClick?: () => void
	nextHref?: string
	nextLabel?: string
	previousOnClick?: () => void
	previousHref?: string
	previousLabel?: string
} & BoxProps<E>

export const PaginationNavigation = <
	E extends React.ElementType = typeof defaultElement,
>({
	nextOnClick,
	nextHref,
	nextLabel = 'Next Page',
	previousOnClick,
	previousHref,
	previousLabel = 'Previous Page',
	...props
}: PaginationNavigationProps<E>) => {
	return (
		<Box as={defaultElement} {...props}>
			<Divider styles={{ marginBottom: 6 }} />
			<Box
				as="ul"
				styles={{
					display: 'grid',
					gridTemplateColumns: 2,
					gap: 6,
				}}
			>
				<Box as="li" styles={{ justifySelf: 'start' }}>
					{previousOnClick && (
						<Box
							as="button"
							onClick={previousOnClick}
							styles={{
								color: 'orange55',
								transitionProperty: 'color',
								transitionDuration: 'normal',
								transitionTimingFunction: 'easeOut',
							}}
							focusStyles={{ color: 'orange50' }}
							hoverStyles={{ color: 'orange50' }}
						>
							<PreviousButtonContents>{previousLabel}</PreviousButtonContents>
						</Box>
					)}
					{previousHref && (
						<Anchor href={previousHref}>
							<PreviousButtonContents>{previousLabel}</PreviousButtonContents>
						</Anchor>
					)}
				</Box>
				<Box as="li" styles={{ justifySelf: 'end' }}>
					{nextOnClick && (
						<Box
							as="button"
							onClick={nextOnClick}
							styles={{
								color: 'orange55',
								transitionProperty: 'color',
								transitionDuration: 'normal',
								transitionTimingFunction: 'easeOut',
							}}
							focusStyles={{ color: 'orange50' }}
							hoverStyles={{ color: 'orange50' }}
						>
							<NextButtonContents>{nextLabel}</NextButtonContents>
						</Box>
					)}
					{nextHref && (
						<Anchor href={nextHref}>
							<NextButtonContents>{nextLabel}</NextButtonContents>
						</Anchor>
					)}
				</Box>
			</Box>
		</Box>
	)
}
