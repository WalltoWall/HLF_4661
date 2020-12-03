import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyImages,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyImagesProps,
} from './InteriorPageBodyImages'

export type NewsPostBodyImagesProps = InteriorPageBodyImagesProps

const NewsPostBodyImages = (props: NewsPostBodyImagesProps) => (
  <InteriorPageBodyImages {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment NewsPostBodyImages on PrismicNewsPostBodyImages {
    items {
      image {
        alt
        url
        fluid(maxWidth: 800) {
          ...GatsbyPrismicImageFluid
        }
      }
      caption {
        html
        text
      }
    }
  }
`

export default NewsPostBodyImages
