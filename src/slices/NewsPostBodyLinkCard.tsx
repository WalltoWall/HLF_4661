import * as React from 'react'
import { graphql } from 'gatsby'

import {
	InteriorPageBodyLinkCard,
	mapDataToProps,
	mapDataToContext,
	InteriorPageBodyLinkCardProps,
} from './InteriorPageBodyLinkCard'

export type NewsPostBodyLinkCardProps = InteriorPageBodyLinkCardProps

export const NewsPostBodyLinkCard = (props: NewsPostBodyLinkCardProps) => (
	<InteriorPageBodyLinkCard {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
	fragment NewsPostBodyLinkCard on PrismicNewsPostDataBodyLinkCard {
		primary {
			link_title {
				text
			}
			link {
				url
			}
		}
	}
`

export default NewsPostBodyLinkCard
