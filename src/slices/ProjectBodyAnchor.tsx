import { graphql } from 'gatsby'

import { ProjectBodyAnchorFragment } from '../types.generated'
import { MapDataToContextArgs } from '../lib/mapSlicesToComponents'

export const ProjectBodyAnchor = () => null

export const mapDataToContext = ({
  NextComp,
  ...rest
}: MapDataToContextArgs<ProjectBodyAnchorFragment>) =>
  // @ts-ignore mapDataToContext is assigned in ProjectBody.ts
  NextComp?.mapDataToContext?.({ NextComp, ...rest })

export const fragment = graphql`
  fragment ProjectBodyAnchor on PrismicProjectDataBodyAnchor {
    primary {
      id
    }
  }
`

export default ProjectBodyAnchor
