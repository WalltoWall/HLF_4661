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
  fragment ProjectBodyImages on PrismicProjectDataBodyImages {
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

export default ProjectBodyImages
