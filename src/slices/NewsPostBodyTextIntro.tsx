import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyTextIntro,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyTextIntroProps,
} from './InteriorPageBodyTextIntro'

export type NewsPostBodyTextIntroProps = InteriorPageBodyTextIntroProps

export const NewsPostBodyTextIntro = (props: NewsPostBodyTextIntroProps) => (
  <InteriorPageBodyTextIntro {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment NewsPostBodyTextIntro on PrismicNewsPostDataBodyTextIntro {
    primary {
      introductory_text {
        text
        html
      }
    }
  }
`

export default NewsPostBodyTextIntro
