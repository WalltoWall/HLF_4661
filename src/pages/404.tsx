import * as React from 'react'
import { HeadProps, PageProps, graphql } from 'gatsby'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { NotFoundPageQuery } from '../types.generated'
import { slicesMap } from '../slices/PageBody'
import { mapDataToPropsEnhancer, slicesMiddleware } from '../templates/page'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { getType as getPageType } from '../templates/page'

import { Layout } from '../components/Layout'

export const NotFoundPage = ({
	data,
	location,
}: PageProps<NotFoundPageQuery>) => {
	const page = data?.prismicPage

	console.log('404')

	/**
	 * Metadata made available in a slice's `mapDataToProps` and
	 * `mapDataToContext` functions.
	 *
	 * @see https://github.com/angeloashmore/react-map-to-components#maptocomponents
	 */
	const meta = React.useMemo(
		() => ({
			rootData: data,
			location,
		}),
		[data, location],
	)

	return (
		<Layout>
			<MapSlicesToComponents
				list={page?.data?.body}
				map={slicesMap}
				meta={meta}
				listMiddleware={slicesMiddleware}
				mapDataToPropsEnhancer={mapDataToPropsEnhancer}
				getType={getPageType}
			/>
		</Layout>
	)
}

export const Head = ({ data }: HeadProps<NotFoundPageQuery>) => {
	const siteSettings = useSiteSettings()
	const page = data?.prismicPage

	return (
		<>
			<title>
				{page?.data?.meta_title ?? page?.data?.title?.text ?? 'Page not found'}{' '}
				| {siteSettings.siteName}
			</title>
			{page?.data?.meta_description && (
				<meta name="description" content={page?.data?.meta_description} />
			)}
		</>
	)
}

export default withPrismicUnpublishedPreview(NotFoundPage)

export const query = graphql`
	query NotFoundPage {
		prismicPage(uid: { eq: "404" }) {
			_previewable
			data {
				title {
					text
				}
				meta_title
				meta_description
				body {
					__typename
					... on PrismicSlice {
						id
					}
					...SlicesPageBody
				}
			}
		}
	}
`
