import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyText,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyTextProps,
} from './InteriorPageBodyText'

export type ProjectBodyTextProps = InteriorPageBodyTextProps

export const ProjectBodyText = (props: ProjectBodyTextProps) => (
  <InteriorPageBodyText {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment ProjectBodyText on PrismicProjectDataBodyText {
    primary {
      text {
        text
        html
      }
    }
  }
`

export default ProjectBodyText
