import { graphql } from 'gatsby'

import { PageBodyAnchorFragment } from '../types.generated'
import { MapDataToContextArgs } from '../lib/mapSlicesToComponents'

export const PageBodyAnchor = () => null

export const mapDataToContext = ({
  NextComp,
  ...rest
}: MapDataToContextArgs<PageBodyAnchorFragment>) =>
  // @ts-ignore mapDataToContext is assigned in PageBody.ts
  NextComp?.mapDataToContext?.({ NextComp, ...rest })

export const fragment = graphql`
  fragment PageBodyAnchor on PrismicPageDataBodyAnchor {
    primary {
      id
    }
  }
`

export default PageBodyAnchor
