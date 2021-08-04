import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyLinkCard,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyLinkCardProps,
} from './InteriorPageBodyLinkCard'

export type ProjectBodyLinkCardProps = InteriorPageBodyLinkCardProps

export const ProjectBodyLinkCard = (props: ProjectBodyLinkCardProps) => (
  <InteriorPageBodyLinkCard {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment ProjectBodyLinkCard on PrismicProjectDataBodyLinkCard {
    primary {
      link_title {
        text
      }
      link {
        url
      }
    }
  }
`

export default ProjectBodyLinkCard
