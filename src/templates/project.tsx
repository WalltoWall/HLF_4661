import * as React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { Box } from '@walltowall/calico'
import { getRichText, propPairsEq, undefIfEmpty } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { ProjectTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { useNavigation } from '../hooks/useNavigation'
import { slicesMap as pageBodySlicesMap } from '../slices/PageBody'
import { slicesMap as projectBodySlicesMap } from '../slices/ProjectBody'
import { prettyURL } from '../lib/prettyURL'
import { PickPartial } from '../types'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { Anchor } from '../components/Anchor'
import { Divider } from '../components/Divider'
import { ContentCard } from '../components/ContentCard'
import { InteriorPageSidebar } from '../components/InteriorPageSidebar'
import { BackButton } from '../components/BackButton'

import { ProjectBodyText } from '../slices/ProjectBodyText'
import { LinkCollection } from '../components/LinkCollection'

// Merged slices map including PageBodyHeader and PageBodyFooter.
const slicesMap = {
	...pageBodySlicesMap,
	...projectBodySlicesMap,
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
			previousType === 'ProjectBodyAnchor'
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
	data.__typename?.replace('PrismicProjectDataBody', 'ProjectBody') ?? ''

/**
 * Props added to all slices by `mapDataToPropsEnhancer` for `ProjectTemplate`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type ProjectTemplateEnhancerProps = PickPartial<
	ReturnType<typeof mapDataToPropsEnhancer>,
	'id'
>

export const ProjectTemplate = ({
	data,
	location,
}: PageProps<ProjectTemplateQuery>) => {
	const page = data?.prismicPage
	const pageTitle = page?.data?.meta_title ?? page?.data?.title?.text
	const pageDescription = page?.data?.meta_description

	const navigation = useNavigation()
	const impactNavigation = navigation.primary
		.find((item) => item?.primary?.link?.uid === 'impact')
		?.items?.map?.((item) => ({
			url: item?.link?.url,
			name: item?.name,
		}))

	const project = data?.prismicProject
	const projectTitle = project?.data?.title?.text
	const projectWebsiteHref = project?.data?.website_url?.url
	const projectInvolvedFellows = project?.data?.involved_fellows

	const projectCategories =
		project?.data?.project_categories?.map?.(
			(category) => category?.project_category?.document,
		) ?? []
	const primaryProjectCategory = projectCategories[0]

	const nextProject = data?.nextPrismicProject

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
					navigationItems={impactNavigation}
				/>
				<Box styles={{ gridColumn: [null, null, 'span-2'] }}>
					<BoundedBox nextSharesBg={true}>
						<BackButton
							href="/impact/projects/"
							styles={{ marginLeft: [-1, -5] }}
						>
							See all projects
						</BackButton>
					</BoundedBox>
					<BoundedBox variant="extraNarrow" nextSharesBg={true}>
						<Box styles={{ display: 'grid', gap: 6, justifyItems: 'start' }}>
							{primaryProjectCategory && primaryProjectCategory?.url && (
								<Anchor
									href={primaryProjectCategory.url}
									styles={{ color: 'gray40' }}
								>
									<Text variant="sans-16-bold-caps">
										{primaryProjectCategory.data?.name?.text}
									</Text>
								</Anchor>
							)}
							{project?.data?.title?.text && (
								<Text variant="serif-40-48" styles={{ color: 'gray10' }}>
									{project?.data?.title?.text}
								</Text>
							)}
							{projectWebsiteHref && (
								<Anchor href={projectWebsiteHref}>
									<Text variant="serif-16-18">
										{prettyURL(projectWebsiteHref)}
									</Text>
								</Anchor>
							)}
						</Box>
					</BoundedBox>
					{undefIfEmpty(project?.data?.body) ? (
						<MapSlicesToComponents
							//@ts-expect-error
							list={project?.data?.body}
							map={slicesMap}
							meta={meta}
							mapDataToPropsEnhancer={mapDataToPropsEnhancer}
							getType={getType}
						/>
					) : (
						<ProjectBodyText
							textHTML={getRichText(project?.data?.description)}
							nextSharesBg={Boolean(undefIfEmpty(projectInvolvedFellows))}
						/>
					)}
					{projectInvolvedFellows && undefIfEmpty(projectInvolvedFellows) && (
						<BoundedBox>
							<Box styles={{ display: 'grid', gap: [4, 6] }}>
								<Text variant="sans-16-bold-caps" styles={{ color: 'gray20' }}>
									Involved Fellows
								</Text>
								<LinkCollection styles={{ padding: [5, 8] }}>
									{projectInvolvedFellows.map((item) => (
										<LinkCollection.Link
											key={item?.involved_fellow?.document?.uid}
											variant="small"
											label={item?.label?.text}
											name={item?.involved_fellow?.document?.data?.name?.text}
											description={
												item?.involved_fellow?.document?.data?.cohort?.document
													?.data?.title?.text
											}
											href={item?.involved_fellow?.document?.url}
											thumbnailSrc={
												item?.involved_fellow?.document?.data?.portrait?.url
											}
											thumbnailAlt={
												item?.involved_fellow?.document?.data?.portrait?.alt
											}
										/>
									))}
								</LinkCollection>
							</Box>
						</BoundedBox>
					)}
					<BoundedBox styles={{ paddingTop: [6, 7, 8] }}>
						{nextProject && nextProject.url && (
							<>
								<Divider styles={{ marginBottom: 8 }} />
								<ContentCard
									href={nextProject.url}
									topLabel="Next Project"
									title={nextProject.data?.title?.text}
									excerptHTML={getRichText(nextProject.data?.description)}
									featuredImageSrc={nextProject.data?.featured_image?.url}
									featuredImageAlt={nextProject.data?.featured_image?.alt}
									sublinkHref={nextProject.data?.website_url?.url}
									sublinkText={prettyURL(nextProject.data?.website_url?.url)}
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
			/>
		</Layout>
	)
}

export const Head = ({ data }: HeadProps<ProjectTemplateQuery>) => {
	const siteSettings = useSiteSettings()

	const project = data?.prismicProject
	const projectTitle = project?.data?.title?.text

	return (
		<>
			<title>
				{projectTitle ?? ''}
				{project?.uid === 'home' ? '' : ` | ${siteSettings.siteName}`}
			</title>
		</>
	)
}

export default withPrismicPreview(ProjectTemplate)

export const query = graphql`
	query ProjectTemplate($uid: String!, $nextUID: String, $prevUID: String) {
		prismicProject(uid: { eq: $uid }) {
			_previewable
			uid
			data {
				title {
					text
				}
				description {
					text
					html
				}
				website_url {
					url
				}
				involved_fellows {
					label {
						text
					}
					involved_fellow {
						document {
							... on PrismicFellow {
								uid
								url
								data {
									name {
										text
									}
									cohort {
										document {
											... on PrismicCohort {
												data {
													title {
														text
													}
												}
											}
										}
									}
									portrait {
										alt
										url
									}
								}
							}
						}
					}
				}
				project_categories {
					project_category {
						document {
							... on PrismicProjectCategory {
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
					...SlicesProjectBody
				}
			}
		}

		nextPrismicProject: prismicProject(uid: { eq: $nextUID }) {
			...ProjectTemplatePaginatedProject
		}

		prevPrismicProject: prismicProject(uid: { eq: $prevUID }) {
			...ProjectTemplatePaginatedProject
		}

		prismicPage(uid: { eq: "projects" }) {
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
					... on PrismicSlice {
						id
					}
					...SlicesPageBody
				}
			}
		}
	}

	fragment ProjectTemplatePaginatedProject on PrismicProject {
		url
		first_publication_date(formatString: "MMMM D, YYYY")
		data {
			title {
				text
			}
			description {
				text
				html
			}
			website_url {
				url
			}
			featured_image {
				alt
				url
			}
		}
	}
`
