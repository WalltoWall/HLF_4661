/**
 * Root Prismic slices file where Interior Page Body slices are registered
 * for use in the interior page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'

import { reshapeSlicesMap } from '../lib/mapSlicesToComponents'

// 1. Import your slice
import * as ProjectBodyText from './ProjectBodyText'
import * as ProjectBodyTextIntro from './ProjectBodyTextIntro'
import * as ProjectBodyVideo from './ProjectBodyVideo'
import * as ProjectBodyImages from './ProjectBodyImages'
import * as ProjectBodyAnchor from './ProjectBodyAnchor'
import * as ProjectBodyDivider from './ProjectBodyDivider'
import * as ProjectBodyLinkCard from './ProjectBodyLinkCard'

// 2. Add your slice
const slices = {
  ProjectBodyText,
  ProjectBodyTextIntro,
  ProjectBodyVideo,
  ProjectBodyImages,
  ProjectBodyAnchor,
  ProjectBodyDivider,
  ProjectBodyLinkCard,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesProjectBody on PrismicProjectDataBodySlicesType {
    ...ProjectBodyText
    ...ProjectBodyTextIntro
    ...ProjectBodyVideo
    ...ProjectBodyImages
    ...ProjectBodyAnchor
    ...ProjectBodyLinkCard

    # The following slices do not have fragments:
    #...ProjectBodyDivider
  }
`

export const slicesMap = reshapeSlicesMap(slices)
