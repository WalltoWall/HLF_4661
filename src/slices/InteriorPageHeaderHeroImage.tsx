import * as React from 'react'
import { useStyles } from 'react-treat'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { GatsbyImageContainer } from '@walltowall/siamese'

import { InteriorPageHeaderHeroImageFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import {
  MapDataToContextArgs,
  MapDataToPropsArgs,
} from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'

import * as styleRefs from './InteriorPageHeaderHeroImage.treat'

export type InteriorPageHeaderHeroImageProps = ReturnType<
  typeof mapDataToProps
> &
  PageTemplateEnhancerProps

export const InteriorPageHeaderHeroImage = ({
  heading,
  backgroundImageFluid,
  nextSharesBg,
}: InteriorPageHeaderHeroImageProps) => {
  const styles = useStyles(styleRefs)

  return (
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
          <GatsbyImage fluid={backgroundImageFluid} alt="" />
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
        {heading && (
          <Text
            as="p"
            variant="sans-32-60-caps"
            className={styles.textShadow}
            styles={{ position: 'relative', textAlign: 'center' }}
          >
            {heading}
          </Text>
        )}
      </Box>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageHeaderHeroImageFragment,
  typeof mapDataToContext
>) => ({
  heading: data.primary?.heading?.text,
  backgroundImageFluid: data.primary?.background_image?.fluid,
})

export const mapDataToContext = ({
  data,
}: MapDataToContextArgs<InteriorPageHeaderHeroImageFragment>) => {
  const hasBackgroundImage = Boolean(data.primary?.background_image?.fluid)

  return {
    bg: hasBackgroundImage ? Symbol() : 'blue10',
  }
}

export const fragment = graphql`
  fragment InteriorPageHeaderHeroImage on PrismicInteriorPageHeaderHeroImage {
    primary {
      heading {
        text
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
