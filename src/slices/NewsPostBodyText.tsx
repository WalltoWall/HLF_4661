import * as React from 'react'
import { graphql } from 'gatsby'

import {
	InteriorPageBodyText,
	mapDataToProps,
	mapDataToContext,
	InteriorPageBodyTextProps,
} from './InteriorPageBodyText'

export type NewsPostBodyTextProps = InteriorPageBodyTextProps

export const NewsPostBodyText = (props: NewsPostBodyTextProps) => (
	<InteriorPageBodyText {...props} />
)

export { mapDataToProps, mapDataToContext }

export const fragment = graphql`
	fragment NewsPostBodyText on PrismicNewsPostDataBodyText {
		primary {
			text {
				text
				html
			}
		}
	}
`

export default NewsPostBodyText
