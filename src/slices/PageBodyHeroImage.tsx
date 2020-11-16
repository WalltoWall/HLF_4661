import * as React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { GatsbyImageContainer } from '@walltowall/siamese'
import { getRichText } from '@walltowall/helpers'

import { PageBodyHeroImageFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import {
  MapDataToContextArgs,
  MapDataToPropsArgs,
} from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type PageBodyHeroImageProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const PageBodyHeroImage = ({
  textHTML,
  buttonText,
  buttonHref,
  backgroundImageFluid,
  backgroundImageAlt,
  nextSharesBg,
}: PageBodyHeroImageProps) => (
  <BoundedBox
    as="section"
    nextSharesBg={nextSharesBg}
    styles={{
      backgroundColor: 'gray20',
      color: 'white',
      maxWidth: 'xlarge',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
    }}
  >
    {backgroundImageFluid && (
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
        <GatsbyImage fluid={backgroundImageFluid} alt={backgroundImageAlt} />
      </Box>
    )}
    <Box
      styles={{
        height: 'full',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: ['7rem', '10rem'],
      }}
    >
      {textHTML && (
        <HTMLContent
          html={textHTML}
          styles={{ position: 'relative', textAlign: 'center' }}
        />
      )}
    </Box>
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyHeroImageFragment, typeof mapDataToContext>) => ({
  textHTML: getRichText(data.primary?.text),
  buttonText: data.primary?.button_text?.text,
  buttonHref: data.primary?.button_link?.url,
  backgroundImageFluid: data.primary?.background_image?.fluid,
  backgroundImageAlt: data.primary?.background_image?.alt,
})

export const mapDataToContext = ({
  data,
}: MapDataToContextArgs<PageBodyHeroImageFragment>) => {
  const hasBackgroundImage = Boolean(data.primary?.background_image?.fluid)

  return {
    bg: hasBackgroundImage ? Symbol() : 'gray20',
  }
}

export const fragment = graphql`
  fragment PageBodyHeroImage on PrismicPageBodyHeroImage {
    primary {
      text {
        text
        html
      }
      button_text {
        text
      }
      button_link {
        url
      }
      background_image {
        alt
        fluid(maxWidth: 1000) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default PageBodyHeroImage