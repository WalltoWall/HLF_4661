import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'
import { Anchor } from './Anchor'
import { Divider } from './Divider'
import { Inline } from './Inline'
import { Text } from './Text'
import { Icon } from './Icon'

const defaultElement = 'div'

type PaginationNavigationProps<E extends React.ElementType> = {
  nextHref?: string
  nextLabel?: string
  previousHref?: string
  previousLabel?: string
} & BoxProps<E>

export const PaginationNavigation = <
  E extends React.ElementType = typeof defaultElement
>({
  nextHref,
  nextLabel = 'Next Page',
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
          {previousHref && (
            <Anchor href={previousHref}>
              <Inline space={4} alignY="center">
                <Icon name="triangleLeft" styles={{ width: '0.5rem' }} />
                <Text variant="sans-16-caps">{previousLabel}</Text>
              </Inline>
            </Anchor>
          )}
        </Box>
        <Box as="li" styles={{ justifySelf: 'end' }}>
          {nextHref && (
            <Anchor href={nextHref}>
              <Inline space={4} alignY="center">
                <Text variant="sans-16-caps">{nextLabel}</Text>
                <Icon name="triangleRight" styles={{ width: '0.5rem' }} />
              </Inline>
            </Anchor>
          )}
        </Box>
      </Box>
    </Box>
  )
}
