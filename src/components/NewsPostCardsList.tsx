import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

const defaultElement = 'ul'

type NewsPostCardsListProps<E extends React.ElementType> = BoxProps<E>

export const NewsPostCardsList = <
  E extends React.ElementType = typeof defaultElement
>({
  children,
  ...props
}: NewsPostCardsListProps<E>) => {
  return (
    <Box
      as={defaultElement}
      {...props}
      styles={{ display: 'grid', gap: [6, 8, 10], ...props.styles }}
    >
      {React.Children.map(
        children,
        (child) => React.isValidElement(child) && <Box as="li">{child}</Box>,
      )}
    </Box>
  )
}
