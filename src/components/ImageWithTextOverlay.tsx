import * as React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box, BoxProps } from '@walltowall/calico'
import { GatsbyImageContainer } from '@walltowall/siamese'

import { useCommonStyles } from '../hooks/useCommonStyles'

import { BoundedBox } from './BoundedBox'
import { HTMLContent } from './HTMLContent'
import { ButtonLink } from './ButtonLink'

const defaultElement = 'div'

const variants = {
  base: {
    boundedBoxVariant: 'wide',
    h1Variant: 'sans-32-60-caps',
    pVariant: 'serif-16-18',
    headingMarginBottom: [8, 9, 10],
    minHeight: ['10rem', '18rem'],
  },
  small: {
    boundedBoxVariant: undefined,
    h1Variant: 'sans-18-bold-caps',
    pVariant: 'serif-14-16',
    headingMarginBottom: [4, 5],
    minHeight: '10rem',
  },
} as const

type ImageWithTextOverlayProps<E extends React.ElementType> = {
  variant?: keyof typeof variants
  textHTML?: string
  buttonHref?: string
  buttonText?: string
  imageFluid?: FluidObject
  imageAlt?: string
} & BoxProps<E>

export const ImageWithTextOverlay = <
  E extends React.ElementType = typeof defaultElement
>({
  variant: variantName = 'base',
  textHTML,
  buttonHref,
  buttonText = 'Learn More',
  imageFluid,
  imageAlt,
  ...props
}: ImageWithTextOverlayProps<E>) => {
  const variant = variants[variantName]

  const commonStyles = useCommonStyles()

  return (
    <BoundedBox
      as={defaultElement}
      variant={variant.boundedBoxVariant}
      className={commonStyles.darkGrayGradientBackground}
      {...props}
      styles={{
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
          minHeight: variant.minHeight,
          gap: 8,
          position: 'relative',
        }}
      >
        {textHTML && (
          <HTMLContent
            html={textHTML}
            componentOverrides={{
              h1: (Comp) => (props) => (
                <Comp
                  as="h1"
                  variant={variant.h1Variant}
                  {...props}
                  styles={{
                    marginBottom: variant.headingMarginBottom,
                    ...props.styles,
                  }}
                />
              ),
              p: (Comp) => (props) => (
                <Comp variant={variant.pVariant} {...props} />
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
          <ButtonLink
            variant={imageFluid ? 'blue' : 'orange'}
            href={buttonHref}
            styles={{ justifySelf: 'center' }}
          >
            {buttonText}
          </ButtonLink>
        )}
      </Box>
    </BoundedBox>
  )
}