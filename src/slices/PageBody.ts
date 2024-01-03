/**
 * Root Prismic slices file where Page Body slices are registered for use in the
 * page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'

import { reshapeSlicesMap } from '../lib/mapSlicesToComponents'

// 1. Import your slice
import * as PageBodyCallsToAction from './PageBodyCallsToAction'
import * as PageBodyFellowsGrid from './PageBodyFellowsGrid'
import * as PageBodyFooter from './PageBodyFooter'
import * as PageBodyHeader from './PageBodyHeader'
import * as PageBodyHeadshotQuote from './PageBodyHeadshotQuote'
import * as PageBodyHeroImage from './PageBodyHeroImage'
import * as PageBodyHeroImageCarousel from './PageBodyHeroImageCarousel'
import * as PageBodyImageCarousel from './PageBodyImageCarousel'
import * as PageBodyLearningExcursionMap from './PageBodyLearningExcursionMap'
import * as PageBodyLinkCollection from './PageBodyLinkCollection'
import * as PageBodyQuoteSlideshow from './PageBodyQuoteSlideshow'
import * as PageBodySearch from './PageBodySearch'
import * as PageBodyText from './PageBodyText'

// 2. Add your slice
const slices = {
	PageBodyCallsToAction,
	PageBodyFellowsGrid,
	PageBodyFooter,
	PageBodyHeader,
	PageBodyHeadshotQuote,
	PageBodyHeroImage,
	PageBodyHeroImageCarousel,
	PageBodyImageCarousel,
	PageBodyLearningExcursionMap,
	PageBodyLinkCollection,
	PageBodyQuoteSlideshow,
	PageBodySearch,
	PageBodyText,
}

// 3. Add your slice fragment
export const fragment = graphql`
	fragment SlicesPageBody on PrismicPageDataBody {
		...PageBodyCallsToAction
		...PageBodyHeadshotQuote
		...PageBodyHeroImage
		...PageBodyHeroImageCarousel
		...PageBodyImageCarousel
		...PageBodyLearningExcursionMap
		...PageBodyLinkCollection
		...PageBodyQuoteSlideshow
		...PageBodyText

		# The following slices do not have fragments:
		#...PageBodyFooter
		#...PageBodyHeader
		#...PageBodyFellowsGrid
		#...PageBodySearch
	}
`

export const slicesMap = reshapeSlicesMap(slices)
