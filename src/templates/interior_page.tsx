import * as React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { propPairsEq } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'
import { Box } from '@walltowall/calico'

import { InteriorPageTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap as pageBodySlicesMap } from '../slices/PageBody'
import { slicesMap as interiorPageHeaderSlicesMap } from '../slices/InteriorPageHeader'
import { slicesMap as interiorPageBodySlicesMap } from '../slices/InteriorPageBody'
import { useNavigation } from '../hooks/useNavigation'
import { PickPartial } from '../types'

import { Layout } from '../components/Layout'
import { InteriorPageSidebar } from '../components/InteriorPageSidebar'
import { getType as getPageType } from './page'

// Merged slices map including PageBodyHeader and PageBodyFooter.
const slicesMap = {
	...pageBodySlicesMap,
	...interiorPageHeaderSlicesMap,
	...interiorPageBodySlicesMap,
}

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
]

/**
 * Used to render the footer. This practice is specific to this template.
 */
export const footerSliceList = [{ __typename: 'PageBodyFooter', id: 'footer' }]

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

	const _nsbg = propPairsEq('bg', context, nextContext)
	if (_nsbg.length === 1) nextSharesBg = _nsbg[0]
	else nextSharesBg = _nsbg.slice(0, 4) as [boolean, boolean, boolean, boolean]

	return {
		nextSharesBg,
		id:
			previousType === 'InteriorPageBodyAnchor'
				? (previousData?.primary?.id as string)
				: undefined,
		...props,
	}
}

/**
 * The v4 changes to `gatsby-source-prismic` changed the way types were named.
 * This function is used to accomodate those changes.
 */
const getInteriorPageBodyType = (data: { __typename?: string }) =>
	data.__typename?.replace('PrismicInteriorPageDataBody', 'InteriorPageBody') ??
	''

const getInteriorPageHeaderType = (data: { __typename?: string }) =>
	data.__typename?.replace(
		'PrismicInteriorPageDataHeader',
		'InteriorPageHeader',
	) ?? ''

/**
 * Props added to all slices by `mapDataToPropsEnhancer` for `InteriorPageTemplate`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type InteriorPageTemplateEnhancerProps = PickPartial<
	ReturnType<typeof mapDataToPropsEnhancer>,
	'id'
>

export const InteriorPageTemplate = ({
	data,
	location,
}: PageProps<InteriorPageTemplateQuery>) => {
	const page = data?.prismicInteriorPage

	const pageTitle = page?.data?.meta_title ?? page?.data?.title?.text
	const pageDescription = page?.data?.meta_description

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

	const navigation = useNavigation()
	const parentPageOrSelfURL = page?.data?.parent?.document?.url ?? page?.url
	const siblingPages = navigation.primary
		.find((item) => item?.primary?.link?.url === parentPageOrSelfURL)
		?.items?.map?.((item) => ({
			url: item?.link?.url,
			name: item?.name,
		}))

	return (
		<Layout>
			<MapSlicesToComponents
				//@ts-ignore
				list={page?.data?.header}
				map={slicesMap}
				meta={meta}
				listMiddleware={slicesMiddleware}
				mapDataToPropsEnhancer={mapDataToPropsEnhancer}
				getType={getInteriorPageHeaderType}
			/>
			<Box
				styles={{
					backgroundColor: 'white',
					maxWidth: 'xlarge',
					marginLeft: 'auto',
					marginRight: 'auto',
					display: 'grid',
					gridTemplateColumns: [null, null, 3],
				}}
			>
				<InteriorPageSidebar
					title={pageTitle}
					description={pageDescription}
					navigationItems={siblingPages}
				/>
				<Box
					styles={{
						gridColumn: [null, null, 'span-2'],
						paddingTop: [null, null, 7],
						paddingBottom: [10, 13],
					}}
				>
					<MapSlicesToComponents
						//@ts-expect-error
						list={page?.data?.body}
						map={slicesMap}
						meta={meta}
						mapDataToPropsEnhancer={mapDataToPropsEnhancer}
						getType={getInteriorPageBodyType}
					/>
				</Box>
			</Box>
			<MapSlicesToComponents
				//@ts-expect-error
				list={footerSliceList}
				map={slicesMap}
				meta={meta}
				mapDataToPropsEnhancer={mapDataToPropsEnhancer}
				getType={getPageType}
			/>
		</Layout>
	)
}

export const Head = ({ data }: HeadProps<InteriorPageTemplateQuery>) => {
	const siteSettings = useSiteSettings()
	const page = data?.prismicInteriorPage

	const pageTitle = page?.data?.meta_title ?? page?.data?.title?.text
	const pageDescription = page?.data?.meta_description

	return (
		<>
			<title>
				{pageTitle ?? ''}
				{page?.uid === 'home' ? '' : ` | ${siteSettings.siteName}`}
			</title>
			{pageDescription && <meta name="description" content={pageDescription} />}
		</>
	)
}

export default withPrismicPreviewResolver(InteriorPageTemplate)

export const query = graphql`
	query InteriorPageTemplate($uid: String!) {
		prismicInteriorPage(uid: { eq: $uid }) {
			_previewable
			...PrismicInteriorPageParentRecursive
			data {
				title {
					text
				}
				meta_title
				meta_description
				header {
					__typename
					... on PrismicSlice {
						id
					}
					...SlicesInteriorPageHeader
				}
				body {
					__typename
					... on PrismicSlice {
						id
					}
					...SlicesInteriorPageBody
				}
			}
		}
	}
`
