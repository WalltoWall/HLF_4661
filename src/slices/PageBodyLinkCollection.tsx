import * as React from 'react'
import { graphql } from 'gatsby'
import { undefIfEmpty } from '@walltowall/helpers'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import { PageBodyLinkCollectionFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { LinkCollection } from '../components/LinkCollection'

export type PageBodyLinkCollectionProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

export const PageBodyLinkCollection = ({
	children,
	nextSharesBg,
	id,
}: PageBodyLinkCollectionProps) => (
	<BoundedBox
		as="section"
		nextSharesBg={nextSharesBg}
		id={id}
		styles={{
			backgroundColor: 'white',
			maxWidth: 'xlarge',
			marginLeft: 'auto',
			marginRight: 'auto',
		}}
	>
		<LinkCollection>{children}</LinkCollection>
	</BoundedBox>
)

PageBodyLinkCollection.Link = LinkCollection.Link

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<
	PageBodyLinkCollectionFragment,
	typeof mapDataToContext
>) => ({
	children: data.items?.map?.(
		(item) =>
			item?.link?.url && (
				<PageBodyLinkCollection.Link
					key={item?.link?.url}
					href={item?.link?.url}
					name={item?.name?.text}
					description={item?.description?.text}
					buttonText={undefIfEmpty(item?.button_text?.text)}
					thumbnailData={item?.thumbnail?.gatsbyImageData as IGatsbyImageData}
					thumbnailAlt={item?.thumbnail?.alt}
				/>
			),
	),
})

export const mapDataToContext = () => ({
	bg: 'white',
})

export const fragment = graphql`
	fragment PageBodyLinkCollection on PrismicPageDataBodyLinkCollection {
		items {
			name {
				text
			}
			description {
				text
			}
			link {
				url
			}
			button_text {
				text
			}
			thumbnail {
				alt
				gatsbyImageData(placeholder: BLURRED, width: 400, breakpoints: [400])
			}
		}
	}
`

export default PageBodyLinkCollection
