/**
 * Root Prismic slices file where Interior Page Header slices are registered
 * for use in the interior page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'

import { reshapeSlicesMap } from '../lib/mapSlicesToComponents'

// 1. Import your slice
import * as InteriorPageHeaderHeroImage from './InteriorPageHeaderHeroImage'

// 2. Add your slice
const slices = {
	InteriorPageHeaderHeroImage,
}

// 3. Add your slice fragment
export const fragment = graphql`
	fragment SlicesInteriorPageHeader on PrismicInteriorPageDataHeader {
		...InteriorPageHeaderHeroImage
	}
`

export const slicesMap = reshapeSlicesMap(slices)
