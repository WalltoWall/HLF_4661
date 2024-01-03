import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { InteriorPageBodyTextIntroFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type InteriorPageBodyTextIntroProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

export const InteriorPageBodyTextIntro = ({
	textHTML,
	nextSharesBg,
}: InteriorPageBodyTextIntroProps) => (
	<BoundedBox
		as="section"
		variant="narrow"
		nextSharesBg={nextSharesBg}
		styles={{ backgroundColor: 'white' }}
	>
		{textHTML && (
			<HTMLContent
				html={textHTML}
				componentOverrides={{
					p: (Comp) => (props) => <Comp variant="serif-20-24" {...props} />,
				}}
				styles={{ color: 'gray20' }}
			/>
		)}
	</BoundedBox>
)

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<
	InteriorPageBodyTextIntroFragment,
	typeof mapDataToContext
>) => ({
	textHTML: getRichText(data.primary?.introductory_text),
})

export const mapDataToContext = () => ({
	bg: 'white',
})

export const fragment = graphql`
	fragment InteriorPageBodyTextIntro on PrismicInteriorPageDataBodyTextIntro {
		primary {
			introductory_text {
				text
				html
			}
		}
	}
`

export default InteriorPageBodyTextIntro
