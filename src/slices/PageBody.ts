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

// 2. Add your slice
const slices = {
  PageBodyFooter,
  PageBodyHeader,
  PageBodyText,
  PageBodyImages,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesPageBody on PrismicPageBodySlicesType {
    ...PageBodyImages
    ...PageBodyText

    # The following slices do not have fragments:
    #...PageBodyFooter
    #...PageBodyHeader
  }
`

export const slicesMap = reshapeSlicesMap(slices)
