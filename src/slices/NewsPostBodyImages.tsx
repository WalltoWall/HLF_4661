import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyImages,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyImagesProps,
} from './InteriorPageBodyImages'

export type NewsPostBodyImagesProps = InteriorPageBodyImagesProps

export const NewsPostBodyImages = (props: NewsPostBodyImagesProps) => (
  <InteriorPageBodyImages {...props} />
)

NewsPostBodyImages.Image = InteriorPageBodyImages.Image

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment NewsPostBodyImages on PrismicNewsPostDataBodyImages {
    items {
      image {
        alt
        url
        gatsbyImageData(placeholder: BLURRED, width: 700, breakpoints: [700])
      }
      caption {
        html
        text
      }
    }
  }
`

export default NewsPostBodyImages
