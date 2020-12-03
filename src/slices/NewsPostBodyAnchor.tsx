import { graphql } from 'gatsby'

import { NewsPostBodyAnchorFragment } from '../types.generated'
import { MapDataToContextArgs } from '../lib/mapSlicesToComponents'

export const NewsPostBodyAnchor = () => null

export const mapDataToContext = ({
  NextComp,
  ...rest
}: MapDataToContextArgs<NewsPostBodyAnchorFragment>) =>
  // @ts-ignore mapDataToContext is assigned in NewsPostBody.ts
  NextComp?.mapDataToContext?.({ NextComp, ...rest })

export const fragment = graphql`
  fragment NewsPostBodyAnchor on PrismicNewsPostBodyAnchor {
    primary {
      id
    }
  }
`

export default NewsPostBodyAnchor
