import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@walltowall/calico'
import { getRichText } from '@walltowall/helpers'

import { InteriorPageHeaderHeroImageFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import {
  MapDataToContextArgs,
  MapDataToPropsArgs,
} from '../lib/mapSlicesToComponents'
import { useCommonStyles } from '../hooks/useCommonStyles'

import { ImageWithTextOverlay } from '../components/ImageWithTextOverlay'

export type InteriorPageHeaderHeroImageProps = ReturnType<
  typeof mapDataToProps
> &
  PageTemplateEnhancerProps

export const InteriorPageHeaderHeroImage = ({
  headingHTML,
  backgroundImageFluid,
  id,
}: InteriorPageHeaderHeroImageProps) => {
  const commonStyles = useCommonStyles()

  return (
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
        variant="reducedHeight"
        textHTML={headingHTML}
        imageFluid={backgroundImageFluid}
        className={commonStyles.darkGrayGradientBackground}
      />
    </Box>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageHeaderHeroImageFragment,
  typeof mapDataToContext
>) => ({
  headingHTML: getRichText(data.primary?.heading),
  backgroundImageFluid: data.primary?.background_image?.fluid,
})

export const mapDataToContext = ({
  data,
}: MapDataToContextArgs<InteriorPageHeaderHeroImageFragment>) => {
  const hasBackgroundImage = Boolean(data.primary?.background_image?.fluid)

  return {
    bg: hasBackgroundImage ? Symbol() : 'gray20',
  }
}

export const fragment = graphql`
  fragment InteriorPageHeaderHeroImage on PrismicInteriorPageDataHeaderHeroImage {
    primary {
      heading {
        text
        html
      }
      background_image {
        fluid(maxWidth: 1000) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default InteriorPageHeaderHeroImage
