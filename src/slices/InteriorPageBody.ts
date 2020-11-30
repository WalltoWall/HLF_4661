/**
 * Root Prismic slices file where Interior Page Body slices are registered
 * for use in the interior page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'

import { reshapeSlicesMap } from '../lib/mapSlicesToComponents'

// 1. Import your slice
import * as InteriorPageBodyText from './InteriorPageBodyText'
import * as InteriorPageBodyTextIntro from './InteriorPageBodyTextIntro'
import * as InteriorPageBodyVideo from './InteriorPageBodyVideo'
import * as InteriorPageBodyCohortSchedule from './InteriorPageBodyCohortSchedule'

// 2. Add your slice
const slices = {
  InteriorPageBodyText,
  InteriorPageBodyTextIntro,
  InteriorPageBodyVideo,
  InteriorPageBodyCohortSchedule,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesInteriorPageBody on PrismicInteriorPageBodySlicesType {
    ...InteriorPageBodyText
    ...InteriorPageBodyTextIntro
    ...InteriorPageBodyVideo
    ...InteriorPageBodyCohortSchedule
  }
`

export const slicesMap = reshapeSlicesMap(slices)
