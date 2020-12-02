import { graphql } from 'gatsby'

import { InteriorPageBodyAnchorFragment } from '../types.generated'
import { MapDataToContextArgs } from '../lib/mapSlicesToComponents'

export const InteriorPageBodyAnchor = () => null

export const mapDataToContext = ({
  NextComp,
  ...rest
}: MapDataToContextArgs<InteriorPageBodyAnchorFragment>) =>
  // @ts-ignore mapDataToContext is assigned in InteriorPageBody.ts
  NextComp?.mapDataToContext?.({ NextComp, ...rest })

export const fragment = graphql`
  fragment InteriorPageBodyAnchor on PrismicInteriorPageBodyAnchor {
    primary {
      id
    }
  }
`

export default InteriorPageBodyAnchor
