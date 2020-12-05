import * as React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box, BoxProps } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'
import ConditionalWrap from 'conditional-wrap'

import { Text } from './Text'
import { ButtonLink } from './ButtonLink'
import { Link } from './Link'
import { Anchor } from './Anchor'
import { HTMLContent } from './HTMLContent'

const defaultElement = 'div'

type ContentCardProps<E extends React.ElementType> = {
  topLabel?: string
  title?: string
  date?: string
  excerpt?: string
  excerptHTML?: string
  href?: string
  buttonText?: string
  featuredImageFluid?: FluidObject
  featuredImageAlt?: string
  sublinkHref?: string
  sublinkText?: string
} & BoxProps<E>

export const ContentCard = <
  E extends React.ElementType = typeof defaultElement
>({
  topLabel,
  title,
  excerpt,
  excerptHTML,
  href,
  date,
  buttonText = 'Learn More',
  featuredImageFluid,
  featuredImageAlt,
  sublinkHref,
  sublinkText,
  ...props
}: ContentCardProps<E>) => {
  return (
    <Box
      as={defaultElement}
      {...props}
      styles={{
        display: 'grid',
        gap: [4, 6],
        gridTemplateColumns: [null, 3],
        alignItems: 'start',
        ...props.styles,
      }}
    >
      <Box
        styles={{ gridColumn: [null, 'span-1'], maxWidth: ['20rem', 'none'] }}
      >
        <ConditionalWrap
          condition={Boolean(href)}
          wrap={(children) => <Link href={href!}>{children}</Link>}
        >
          {featuredImageFluid ? (
            <GatsbyImage fluid={featuredImageFluid} alt={featuredImageAlt} />
          ) : (
            <Box
              as={AspectRatio}
              x={4}
              y={3}
              styles={{ backgroundColor: 'gray95' }}
            />
          )}
        </ConditionalWrap>
      </Box>
      <Box
        styles={{
          display: 'grid',
          gap: [6, 8],
          gridColumn: [null, 'span-2'],
          paddingTop: 2,
        }}
      >
        <Box styles={{ display: 'grid', gap: 5, justifyItems: 'start' }}>
          {topLabel && (
            <Text variant="sans-12-caps" styles={{ color: 'gray40' }}>
              {topLabel}
            </Text>
          )}
          {title && (
            <ConditionalWrap
              condition={Boolean(href)}
              wrap={(children) => (
                <Anchor href={href!} styles={{ color: 'gray10' }}>
                  {children}
                </Anchor>
              )}
            >
              <Text variant="serif-20-24">{title}</Text>
            </ConditionalWrap>
          )}
          {sublinkHref && (
            <Anchor href={sublinkHref}>
              <Text variant="serif-14-16">{sublinkText}</Text>
            </Anchor>
          )}
          {date && (
            <Text variant="sans-13-14" styles={{ color: 'gray40' }}>
              {date}
            </Text>
          )}
          {excerptHTML && (
            <HTMLContent
              html={excerptHTML}
              componentOverrides={{
                p: (Comp) => (props) => (
                  <Comp variant="serif-14-16" {...props} />
                ),
              }}
              styles={{ color: 'gray40' }}
            />
          )}
          {excerpt && (
            <Text as="p" variant="serif-14-16" styles={{ color: 'gray40' }}>
              {excerpt}
            </Text>
          )}
        </Box>
        {href && (
          <ButtonLink href={href} styles={{ justifySelf: 'start' }}>
            {buttonText}
          </ButtonLink>
        )}
      </Box>
    </Box>
  )
}
