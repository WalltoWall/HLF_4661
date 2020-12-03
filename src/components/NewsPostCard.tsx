import * as React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box, BoxProps } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'

import { Text } from './Text'
import { ButtonLink } from './ButtonLink'
import { Link } from './Link'
import { Anchor } from './Anchor'

const defaultElement = 'div'

type NewsPostCardProps<E extends React.ElementType> = {
  topLabel?: string
  title?: string
  date?: string
  excerpt?: string
  href: string
  featuredImageFluid?: FluidObject
  featuredImageAlt?: string
} & BoxProps<E>

export const NewsPostCard = <
  E extends React.ElementType = typeof defaultElement
>({
  topLabel,
  title,
  excerpt,
  href,
  date,
  featuredImageFluid,
  featuredImageAlt,
  ...props
}: NewsPostCardProps<E>) => {
  return (
    <Box
      as={defaultElement}
      {...props}
      styles={{
        display: 'grid',
        gap: 6,
        gridTemplateColumns: [null, 3],
        ...props.styles,
      }}
    >
      <Box styles={{ gridColumn: [null, 'span-1'] }}>
        <Link href={href}>
          {featuredImageFluid ? (
            <GatsbyImage fluid={featuredImageFluid} alt={featuredImageAlt} />
          ) : (
            <Box
              as={AspectRatio}
              x={4}
              y={3}
              styles={{ backgroundColor: 'gray40' }}
            />
          )}
        </Link>
      </Box>
      <Box
        styles={{
          display: 'grid',
          gap: 8,
          gridColumn: [null, 'span-2'],
          paddingTop: 2,
        }}
      >
        <Box styles={{ display: 'grid', gap: 5 }}>
          {topLabel && (
            <Text variant="sans-12-caps" styles={{ color: 'gray40' }}>
              {topLabel}
            </Text>
          )}
          {title && (
            <Anchor href={href} styles={{ color: 'gray10' }}>
              <Text variant="serif-20-24">{title}</Text>
            </Anchor>
          )}
          {date && (
            <Text variant="sans-13-14" styles={{ color: 'gray40' }}>
              {date}
            </Text>
          )}
          {excerpt && (
            <Text variant="serif-14-16" styles={{ color: 'gray40' }}>
              {excerpt}
            </Text>
          )}
        </Box>
        <ButtonLink href={href} styles={{ justifySelf: 'start' }}>
          Read Article
        </ButtonLink>
      </Box>
    </Box>
  )
}
