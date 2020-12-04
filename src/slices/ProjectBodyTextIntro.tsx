import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyTextIntro,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyTextIntroProps,
} from './InteriorPageBodyTextIntro'

export type ProjectBodyTextIntroProps = InteriorPageBodyTextIntroProps

export const ProjectBodyTextIntro = (props: ProjectBodyTextIntroProps) => (
  <InteriorPageBodyTextIntro {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment ProjectBodyTextIntro on PrismicProjectBodyTextIntro {
    primary {
      introductory_text {
        text
        html
      }
    }
  }
`

export default ProjectBodyTextIntro
