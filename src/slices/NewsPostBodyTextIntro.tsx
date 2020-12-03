import * as React from 'react'
import { graphql } from 'gatsby'

import {
  InteriorPageBodyTextIntro,
  mapDataToProps,
  mapDataToContext,
  InteriorPageBodyTextIntroProps,
} from './InteriorPageBodyTextIntro'

export type NewsPostBodyTextIntroProps = InteriorPageBodyTextIntroProps

const NewsPostBodyTextIntro = (props: NewsPostBodyTextIntroProps) => (
  <InteriorPageBodyTextIntro {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
  fragment NewsPostBodyTextIntro on PrismicNewsPostBodyTextIntro {
    primary {
      introductory_text {
        text
        html
      }
    }
  }
`

export default NewsPostBodyTextIntro
