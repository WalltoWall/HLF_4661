import * as React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box, BoxProps } from '@walltowall/calico'
import { GatsbyImageContainer } from '@walltowall/siamese'

import { useCommonStyles } from '../hooks/useCommonStyles'

import { BoundedBox } from './BoundedBox'
import { HTMLContent } from './HTMLContent'
import { ButtonLink } from './ButtonLink'

const defaultElement = 'div'

type ImageWithTextOverlayProps<E extends React.ElementType> = {
  textHTML?: string
  buttonHref?: string
  buttonText?: string
  imageFluid?: FluidObject
  imageAlt?: string
} & BoxProps<E>

export const ImageWithTextOverlay = <
  E extends React.ElementType = typeof defaultElement
>({
  textHTML,
  buttonHref,
  buttonText = 'Learn More',
  imageFluid,
  imageAlt,
  ...props
}: ImageWithTextOverlayProps<E>) => {
  const commonStyles = useCommonStyles()

  return (
    <BoundedBox
      as={defaultElement}
      variant="wide"
      {...props}
      styles={{
        backgroundColor: 'gray20',
        color: 'white',
        position: 'relative',
        ...props.styles,
      }}
    >
      {imageFluid && (
        <Box
          as={GatsbyImageContainer}
          styles={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
          }}
        >
          <GatsbyImage fluid={imageFluid} alt={imageAlt} />
        </Box>
      )}
      <Box
        styles={{
          display: 'grid',
          alignContent: 'center',
          justifyContent: 'center',
          minHeight: ['10rem', '18rem'],
          gap: 8,
          position: 'relative',
        }}
      >
        {textHTML && (
          <HTMLContent
            html={textHTML}
            componentOverrides={{
              h1: (Comp) => (props) => (
                <Comp as="h1" variant="sans-32-60-caps" {...props} />
              ),
            }}
            className={commonStyles.textShadow}
            styles={{
              textAlign: 'center',
              maxWidth: '70ch',
            }}
          />
        )}
        {buttonHref && (
          <ButtonLink href={buttonHref} styles={{ justifySelf: 'center' }}>
            {buttonText}
          </ButtonLink>
        )}
      </Box>
    </BoundedBox>
  )
}
