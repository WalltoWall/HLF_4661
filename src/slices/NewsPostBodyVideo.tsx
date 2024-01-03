import * as React from 'react'
import { graphql } from 'gatsby'

import {
	InteriorPageBodyVideo,
	mapDataToProps,
	mapDataToContext,
	InteriorPageBodyVideoProps,
} from './InteriorPageBodyVideo'

export type NewsPostBodyVideoProps = InteriorPageBodyVideoProps

export const NewsPostBodyVideo = (props: NewsPostBodyVideoProps) => (
	<InteriorPageBodyVideo {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
	fragment NewsPostBodyVideo on PrismicNewsPostDataBodyVideo {
		primary {
			video {
				embed_url
				thumbnail_url
				thumbnail_height
				thumbnail_width
			}
			poster {
				alt
				gatsbyImageData(
					placeholder: BLURRED
					width: 800
					breakpoints: [360, 720, 800]
				)
			}
		}
	}
`

export default NewsPostBodyVideo
