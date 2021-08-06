import * as React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { undefIfEmpty } from '@walltowall/helpers'
import { AspectRatio } from '@walltowall/siamese'
import { Box, BoxProps } from '@walltowall/calico'
import clsx from 'clsx'

import { useCommonStyles } from '../hooks/useCommonStyles'

import { BoundedBox } from './BoundedBox'
import { Text } from './Text'
import { Anchor } from './Anchor'

const defaultElement = 'aside'

type InteriorPageSidebarNavigationItem = {
  url?: string
  name?: string
}

type InteriorPageSidebarProps<E extends React.ElementType> = {
  title?: string
  description?: string
  imageData?: IGatsbyImageData
  imageAlt?: string
  navigationItems?: InteriorPageSidebarNavigationItem[]
} & BoxProps<E>

export const InteriorPageSidebar = <
  E extends React.ElementType = typeof defaultElement,
>({
  title,
  description,
  imageData,
  imageAlt,
  navigationItems = [],
  className,
  ...props
}: InteriorPageSidebarProps<E>) => {
  const commonStyles = useCommonStyles()

  return (
    <Box
      as={defaultElement}
      className={clsx(commonStyles.lightGrayGradientBackground, className)}
      {...props}
    >
      {imageData && (
        <>
          <Box
            as={AspectRatio}
            x={16}
            y={9}
            styles={{ display: [null, null, 'none'] }}
          >
            <Box
              as={GatsbyImage}
              image={imageData}
              alt={imageAlt ?? ''}
              styles={{ width: 'full', height: 'full' }}
            />
          </Box>
          <Box
            as={GatsbyImage}
            image={imageData}
            alt={imageAlt ?? ''}
            styles={{
              display: ['none', null, 'block'],
            }}
          />
        </>
      )}
      <BoundedBox styles={{ position: [null, 'sticky'], top: 0 }}>
        <Box styles={{ display: 'grid', gap: 8 }}>
          {title && (
            <Text variant="serif-40-48" as="h1" styles={{ color: 'gray10' }}>
              {title}
            </Text>
          )}
          {description && (
            <Text
              variant="sans-16-italic"
              as="p"
              styles={{ color: 'orange55' }}
            >
              {description}
            </Text>
          )}
          {undefIfEmpty(navigationItems) && (
            <Box
              as="ul"
              styles={{
                borderWidth: 'none',
                borderTopWidth: '1px',
                borderColor: 'gray80',
                borderStyle: 'solid',
              }}
            >
              {navigationItems.map(
                (navigationItem) =>
                  navigationItem.url && (
                    <Box
                      key={navigationItem.url}
                      as="li"
                      styles={{
                        borderWidth: 'none',
                        borderBottomWidth: '1px',
                        borderColor: 'gray80',
                        borderStyle: 'solid',
                      }}
                    >
                      <Anchor
                        href={navigationItem.url}
                        styles={{
                          display: 'block',
                          color: 'gray40',
                          paddingBottom: 5,
                          paddingTop: 5,
                        }}
                      >
                        <Text variant="sans-16-caps">
                          {navigationItem.name}
                        </Text>
                      </Anchor>
                    </Box>
                  ),
              )}
            </Box>
          )}
        </Box>
      </BoundedBox>
    </Box>
  )
}
