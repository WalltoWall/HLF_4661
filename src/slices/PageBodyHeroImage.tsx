import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'

import { PageBodyHeroImageFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import {
  MapDataToContextArgs,
  MapDataToPropsArgs,
} from '../lib/mapSlicesToComponents'

import { ImageWithTextOverlay } from '../components/ImageWithTextOverlay'

export type PageBodyHeroImageProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const PageBodyHeroImage = ({
  textHTML,
  buttonText = 'Learn More',
  buttonHref,
  backgroundImageFluid,
  backgroundImageAlt,
  id,
}: PageBodyHeroImageProps) => (
  <Box
    as="section"
    id={id}
    styles={{
      maxWidth: 'xlarge',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <ImageWithTextOverlay
      textHTML={textHTML}
      buttonHref={buttonHref}
      buttonText={buttonText}
      imageFluid={backgroundImageFluid}
      imageAlt={backgroundImageAlt}
    />
  </Box>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyHeroImageFragment, typeof mapDataToContext>) => ({
  textHTML: getRichText(data.primary?.text),
  buttonText: undefIfEmpty(data.primary?.button_text?.text),
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
