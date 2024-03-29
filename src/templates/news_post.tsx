import * as React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { Box } from '@walltowall/calico'
import { propPairsEq } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { NewsPostTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap as pageBodySlicesMap } from '../slices/PageBody'
import { slicesMap as newsPostBodySlicesMap } from '../slices/NewsPostBody'
import { PickPartial } from '../types'
import { useNavigation } from '../hooks/useNavigation'
import { useNewsPage } from '../hooks/useNewsPage'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { Anchor } from '../components/Anchor'
import { Divider } from '../components/Divider'
import { ContentCard } from '../components/ContentCard'
import { InteriorPageSidebar } from '../components/InteriorPageSidebar'
import { BackButton } from '../components/BackButton'

import { getType as getPageType } from './page'

// Merged slices map including PageBodyHeader and PageBodyFooter.
const slicesMap = {
	...pageBodySlicesMap,
	...newsPostBodySlicesMap,
}

/**
 * Used to render the header. This practice is specific to this template.
 */
export const headerSliceList = [{ __typename: 'PageBodyHeader', id: 'header' }]

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
			previousType === 'NewsPostBodyAnchor'
				? (previousData?.primary?.id as string)
				: undefined,
		...props,
	}
}

/**
 * The v4 changes to `gatsby-source-prismic` changed the way types were named.
 * This function is used to accomodate those changes.
 */
export const getType = (data: { __typename?: string }) =>
	data.__typename?.replace('PrismicNewsPostDataBody', 'NewsPostBody') ?? ''

/**
 * Props added to all slices by `mapDataToPropsEnhancer` for `NewsPostTemplate`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type NewsPostTemplateEnhancerProps = PickPartial<
	ReturnType<typeof mapDataToPropsEnhancer>,
	'id'
>

export const NewsPostTemplate = ({
	data,
	location,
}: PageProps<NewsPostTemplateQuery>) => {
	const newsPage = useNewsPage()
	const newsPageTitle = newsPage.meta_title ?? newsPage.title
	const newsPageDescription = newsPage.meta_description

	const newsPost = data?.prismicNewsPost
	const newsPostPublishedAt =
		(newsPost?.data?.published_at as string) ??
		(newsPost?.first_publication_date as string)
	const newsPostCategories =
		newsPost?.data?.news_categories?.map?.(
			(category) => category?.news_category?.document,
		) ?? []
	const primaryNewsCategory = newsPostCategories[0]

	const navigation = useNavigation()
	const newsNavigation = navigation.primary
		.find((item) => item?.primary?.link?.uid === 'news')
		?.items?.map?.((item) => ({
			url: item?.link?.url,
			name: item?.name,
		}))

	const nextNewsPost = data?.nextPrismicNewsPost

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
				//@ts-expect-error
				list={headerSliceList}
				map={slicesMap}
				meta={meta}
				mapDataToPropsEnhancer={mapDataToPropsEnhancer}
				getType={getPageType}
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
					title={newsPageTitle}
					description={newsPageDescription}
					navigationItems={newsNavigation}
				/>
				<Box styles={{ gridColumn: [null, null, 'span-2'] }}>
					<BoundedBox nextSharesBg={true}>
						<BackButton href="/news/" styles={{ marginLeft: [-1, -5] }}>
							See all news posts
						</BackButton>
					</BoundedBox>
					<BoundedBox variant="extraNarrow" nextSharesBg={true}>
						<Box styles={{ display: 'grid', gap: 6, justifyItems: 'start' }}>
							{primaryNewsCategory && primaryNewsCategory?.url && (
								<Anchor
									href={primaryNewsCategory.url}
									styles={{ color: 'gray40' }}
								>
									<Text variant="sans-16-bold-caps">
										{primaryNewsCategory.data?.name?.text}
									</Text>
								</Anchor>
							)}
							{newsPost?.data?.title?.text && (
								<Text variant="serif-40-48" styles={{ color: 'gray10' }}>
									{newsPost?.data?.title?.text}
								</Text>
							)}
						</Box>
						<Text
							variant="sans-16"
							styles={{ color: 'gray40', marginTop: [8, 10, 12] }}
						>
							{newsPostPublishedAt}
						</Text>
					</BoundedBox>
					<MapSlicesToComponents
						//@ts-expect-error
						list={newsPost?.data?.body}
						map={slicesMap}
						meta={meta}
						mapDataToPropsEnhancer={mapDataToPropsEnhancer}
						getType={getType}
					/>
					<BoundedBox styles={{ paddingTop: [6, 7, 8] }}>
						{nextNewsPost && nextNewsPost.url && (
							<>
								<Divider styles={{ marginBottom: 8 }} />
								<ContentCard
									href={nextNewsPost.url}
									topLabel="Next Article"
									title={nextNewsPost.data?.title?.text}
									excerpt={nextNewsPost.data?.excerpt?.text}
									date={
										(nextNewsPost?.data?.published_at as string) ??
										(nextNewsPost?.first_publication_date as string)
									}
									featuredImageSrc={nextNewsPost.data?.featured_image?.url}
									featuredImageAlt={nextNewsPost.data?.featured_image?.alt}
									buttonText="Read More"
								/>
							</>
						)}
					</BoundedBox>
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

export const Head = ({ data }: HeadProps<NewsPostTemplateQuery>) => {
	const siteSettings = useSiteSettings()

	const newsPost = data?.prismicNewsPost
	const newsPostTitle = newsPost?.data?.title?.text

	const newsPostExcerpt = newsPost?.data?.excerpt?.text

	return (
		<>
			<title>
				{newsPostTitle ?? ''}
				{newsPost?.uid === 'home' ? '' : ` | ${siteSettings.siteName}`}
			</title>
			{newsPostExcerpt && <meta name="description" content={newsPostExcerpt} />}
		</>
	)
}

export default withPrismicPreview(NewsPostTemplate)

export const query = graphql`
	query NewsPostTemplate($uid: String!, $nextUID: String, $prevUID: String) {
		prismicNewsPost(uid: { eq: $uid }) {
			_previewable
			uid
			first_publication_date(formatString: "MMMM D, YYYY")
			data {
				title {
					text
				}
				published_at(formatString: "MMMM D, YYYY")
				excerpt {
					text
				}
				news_categories {
					news_category {
						document {
							... on PrismicNewsCategory {
								uid
								url
								data {
									name {
										text
									}
								}
							}
						}
					}
				}
				body {
					__typename
					... on PrismicSlice {
						id
					}
					...SlicesNewsPostBody
				}
			}
		}

		nextPrismicNewsPost: prismicNewsPost(uid: { eq: $nextUID }) {
			...NewsPostTemplatePaginatedNewsPost
		}

		prevPrismicNewsPost: prismicNewsPost(uid: { eq: $prevUID }) {
			...NewsPostTemplatePaginatedNewsPost
		}
	}

	fragment NewsPostTemplatePaginatedNewsPost on PrismicNewsPost {
		url
		first_publication_date(formatString: "MMMM D, YYYY")
		data {
			title {
				text
			}
			published_at(formatString: "MMMM D, YYYY")
			excerpt {
				text
			}
			featured_image {
				alt
				url
			}
		}
	}
`
