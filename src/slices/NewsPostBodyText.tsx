import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyText,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyTextProps,
} from './InteriorPageBodyText'

export type NewsPostBodyTextProps = InteriorPageBodyTextProps

const NewsPostBodyText = (props: NewsPostBodyTextProps) => (
  <InteriorPageBodyText {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment NewsPostBodyText on PrismicNewsPostBodyText {
    primary {
      text {
        text
        html
      }
    }
  }
`

export default NewsPostBodyText
