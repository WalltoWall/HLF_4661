import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

import { PaginationNavigation } from './PaginationNavigation'

const defaultElement = 'div'

type ContentCardsListProps<E extends React.ElementType> = {
	nextPageOnClick?: () => void
	nextPageHref?: string
	nextPageLabel?: string
	previousPageOnClick?: () => void
	previousPageHref?: string
	previousPageLabel?: string
} & BoxProps<E>

export const ContentCardsList = <
	E extends React.ElementType = typeof defaultElement,
>({
	nextPageOnClick,
	nextPageHref,
	nextPageLabel,
	previousPageOnClick,
	previousPageHref,
	previousPageLabel,
	children,
	...props
}: ContentCardsListProps<E>) => {
	return (
		<Box
			as={defaultElement}
			{...props}
			styles={{ display: 'grid', gap: [10, 13, 16] }}
		>
			<Box as="ul" styles={{ display: 'grid', gap: [8, 10, 12] }}>
				{React.Children.map(
					children,
					(child) => React.isValidElement(child) && <Box as="li">{child}</Box>,
				)}
			</Box>
			{(nextPageHref ||
				nextPageOnClick ||
				previousPageHref ||
				previousPageOnClick) && (
				<PaginationNavigation
					nextOnClick={nextPageOnClick}
					nextHref={nextPageHref}
					nextLabel={nextPageLabel}
					previousOnClick={previousPageOnClick}
					previousHref={previousPageHref}
					previousLabel={previousPageLabel}
				/>
			)}
		</Box>
	)
}
