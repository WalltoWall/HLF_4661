/**
 * Root Prismic slices file where Page Body slices are registered for use in the
 * page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'

import { reshapeSlicesMap } from '../lib/mapSlicesToComponents'

// 1. Import your slice
import * as PageBodyFooter from './PageBodyFooter'
import * as PageBodyHeader from './PageBodyHeader'
import * as PageBodyText from './PageBodyText'
import * as PageBodyImages from './PageBodyImages'
import * as PageBodyHeroImage from './PageBodyHeroImage'
import * as PageBodyQuoteSlideshow from './PageBodyQuoteSlideshow'
import * as PageBodyLearningExcursionMap from './PageBodyLearningExcursionMap'

// 2. Add your slice
const slices = {
  PageBodyFooter,
  PageBodyHeader,
  PageBodyText,
  PageBodyImages,
  PageBodyHeroImage,
  PageBodyQuoteSlideshow,
  PageBodyLearningExcursionMap,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesPageBody on PrismicPageBodySlicesType {
    ...PageBodyImages
    ...PageBodyText
    ...PageBodyHeroImage
    ...PageBodyQuoteSlideshow
    ...PageBodyLearningExcursionMap

    # The following slices do not have fragments:
    #...PageBodyFooter
    #...PageBodyHeader
  }
`

export const slicesMap = reshapeSlicesMap(slices)
