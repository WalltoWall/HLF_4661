import * as React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { propPairsEq } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { SearchPageQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap } from '../slices/PageBody'
import { PickPartial } from '../types'

import { Layout } from '../components/Layout'
import { linkResolver } from '../linkResolver'

/**
 * `listMiddleware` for `react-map-slices-to-components`. Add or modify slices
 * for the page here.
 *
 * @see https://github.com/WalltoWall/react-map-slices-to-components#change-the-list-of-slices
 */
// prettier-ignore
export const slicesMiddleware = <T,>(list: T[]) => [
  { __typename: 'PageBodyHeader', id: 'header' },
  ...list,
  { __typename: 'PageBodySearch', id: 'search' },
  { __typename: 'PageBodyFooter', id: 'footer' },
]

/**
 * `mapDataToPropsEnhancer` for `react-map-slices-to-components`. Props defined
 * here are added to all slices.
 *
 * @see https://github.com/WalltoWall/react-map-slices-to-components#providing-global-enhancers
 */
export const mapDataToPropsEnhancer = (
	props: object | undefined,
	{
		context,
		nextContext,
		previousType,
		previousData,
	}: MapDataToPropsEnhancerArgs,
) => {
	let nextSharesBg

	// TODO: Clean up into a nicer helper function
	const _nsbg = propPairsEq('bg', context, nextContext)
	if (_nsbg.length === 1) nextSharesBg = _nsbg[0]
	else nextSharesBg = _nsbg.slice(0, 4) as [boolean, boolean, boolean, boolean]

	return {
		nextSharesBg,
		id:
			previousType === 'PageBodyAnchor'
				? (previousData?.primary?.id as string)
				: undefined,
		...props,
	}
}

/**
 * Props added to all slices by `mapDataToPropsEnhancer` for `SearchPage`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type SearchPageEnhancerProps = PickPartial<
	ReturnType<typeof mapDataToPropsEnhancer>,
	'id'
>

export const SearchPage = ({ data, location }: PageProps<SearchPageQuery>) => {
	const page = data?.prismicPage

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
				//@ts-ignore
				list={page?.data?.body}
				map={slicesMap}
				meta={meta}
				listMiddleware={slicesMiddleware}
				mapDataToPropsEnhancer={mapDataToPropsEnhancer}
			/>
		</Layout>
	)
}

export const Head = ({ data }: HeadProps<SearchPageQuery>) => {
	const siteSettings = useSiteSettings()
	const page = data?.prismicPage

	const pageTitle = page?.data?.meta_title ?? page?.data?.title?.text
	const pageDescription = page?.data?.meta_description

	return (
		<>
			<title>
				{pageTitle ?? ''} | {siteSettings.siteName}
			</title>
			{pageDescription && <meta name="description" content={pageDescription} />}
		</>
	)
}

export default withPrismicPreview(SearchPage, [
	{
		repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
		linkResolver,
	},
])

export const query = graphql`
	query SearchPage {
		prismicPage(uid: { eq: "search" }) {
			_previewable
			...PrismicPageParentRecursive
			data {
				title {
					text
				}
				meta_title
				meta_description
				body {
					__typename
					... on PrismicSliceType {
						id
					}
					...SlicesPageBody
				}
			}
		}
	}
`
