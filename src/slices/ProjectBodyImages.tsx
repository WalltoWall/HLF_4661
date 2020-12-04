import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyImages,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyImagesProps,
} from './InteriorPageBodyImages'

export type ProjectBodyImagesProps = InteriorPageBodyImagesProps

export const ProjectBodyImages = (props: ProjectBodyImagesProps) => (
  <InteriorPageBodyImages {...props} />
)

ProjectBodyImages.Image = InteriorPageBodyImages.Image

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment ProjectBodyImages on PrismicProjectBodyImages {
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

export default ProjectBodyImages
