/**
 * Root Prismic slices file where Interior Page Body slices are registered
 * for use in the interior page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'

import { reshapeSlicesMap } from '../lib/mapSlicesToComponents'

// 1. Import your slice
import * as NewsPostBodyText from './NewsPostBodyText'
import * as NewsPostBodyTextIntro from './NewsPostBodyTextIntro'
import * as NewsPostBodyVideo from './NewsPostBodyVideo'
import * as NewsPostBodyImages from './NewsPostBodyImages'
import * as NewsPostBodyAnchor from './NewsPostBodyAnchor'
import * as NewsPostBodyDivider from './NewsPostBodyDivider'
import * as NewsPostBodyLinkCard from './NewsPostBodyLinkCard'

// 2. Add your slice
const slices = {
  NewsPostBodyText,
  NewsPostBodyTextIntro,
  NewsPostBodyVideo,
  NewsPostBodyImages,
  NewsPostBodyAnchor,
  NewsPostBodyDivider,
  NewsPostBodyLinkCard,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesNewsPostBody on PrismicNewsPostDataBodySlicesType {
    ...NewsPostBodyText
    ...NewsPostBodyTextIntro
    ...NewsPostBodyVideo
    ...NewsPostBodyImages
    ...NewsPostBodyAnchor
    ...NewsPostBodyLinkCard

    # The following slices do not have fragments:
    #...NewsPostBodyDivider
  }
`

export const slicesMap = reshapeSlicesMap(slices)
