/**
 * Root Prismic slices file where Page Body slices are registered for use in the
 * page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'
import * as R from 'rambdax'

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

export const slicesMap = R.map((module) => {
  const component: typeof module.default & {
    mapDataToProps?: any
    mapDataToContext?: any
  } = module.default
  if ('mapDataToProps' in module)
    component.mapDataToProps = module.mapDataToProps
  if ('mapDataToContext' in module)
    component.mapDataToContext = module.mapDataToContext
  return component
}, slices)
