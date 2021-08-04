import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { getRichText, propPairsEq } from '@walltowall/helpers'
import { Box } from '@walltowall/calico'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { ProjectCategoryTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap } from '../slices/PageBody'
import { useNavigation } from '../hooks/useNavigation'
import { prettyURL } from '../lib/prettyURL'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { ContentCard } from '../components/ContentCard'
import { ContentCardsList } from '../components/ContentCardsList'
import { InteriorPageSidebar } from '../components/InteriorPageSidebar'
import { Text } from '../components/Text'

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
  { context, nextContext }: MapDataToPropsEnhancerArgs,
) => {
  let nextSharesBg

  // TODO: Clean up into a nicer helper function
  const _nsbg = propPairsEq('bg', context, nextContext)
  if (_nsbg.length === 1) nextSharesBg = _nsbg[0]
  else nextSharesBg = _nsbg.slice(0, 4) as [boolean, boolean, boolean, boolean]

  return { nextSharesBg, ...props }
}

/**
 * Context passed from `gatsby-node.js` used for pagination.
 *
 * @see https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#pass-context-to-pages
 */
export type ProjectCategoryTemplateContext = {
  limit: number
  skip: number
  numPages: number
  currentPage: number
  total: number
}

/**
 * Props added to all slices by `mapDataToPropsEnhancer` for `ProjectPageTemplate`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type ProjectCategoryTemplateEnhancerProps = ReturnType<
  typeof mapDataToPropsEnhancer
>

export const ProjectCategoryTemplate = ({
  data,
  location,
  pageContext,
}: PageProps<ProjectCategoryTemplateQuery, ProjectCategoryTemplateContext>) => {
  const siteSettings = useSiteSettings()
  const page = data?.prismicPage

  const pageTitle = page?.data?.meta_title ?? page?.data?.title?.text
  const pageDescription = page?.data?.meta_description

  const projectCategory = data?.prismicProjectCategory
  const projectCategoryName = projectCategory?.data?.name?.text

  const projects = data.allPrismicProject.nodes
  const projectsStartCount = pageContext.skip + 1
  const projectsEndCount = pageContext.skip + projects.length
  const projectsTotalCount = pageContext.total

  const nextPageHref =
    pageContext.currentPage < pageContext.numPages
      ? `${data.prismicProjectCategory?.url}${pageContext.currentPage + 1}/`
      : undefined
  const previousPageHref =
    pageContext.currentPage > 2
      ? `${data.prismicProjectCategory?.url}${pageContext.currentPage - 1}/`
      : pageContext.currentPage === 2
      ? data.prismicProjectCategory?.url
      : undefined

  const navigation = useNavigation()
  const impactNavigation = navigation.primary
    .find((item) => item?.primary?.link?.uid === 'impact')
    ?.items?.map?.((item) => ({
      url: item?.link?.url,
      name: item?.name,
    }))

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
      <Helmet>
        <title>
          {pageTitle ?? ''}
          {page?.uid === 'home' ? '' : ` | ${siteSettings.siteName}`}
        </title>
        {pageDescription && (
          <meta name="description" content={pageDescription} />
        )}
      </Helmet>
      <MapSlicesToComponents
        list={page?.data?.body}
        map={slicesMap}
        meta={meta}
        listMiddleware={slicesMiddleware}
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
        <Box
          styles={{
            gridColumn: [null, null, 'span-2'],
            paddingTop: [null, null, 7],
          }}
        >
          <BoundedBox variant="narrow" nextSharesBg={true}>
            <Box styles={{ display: 'grid', gap: 4 }}>
              {projectCategoryName && (
                <Text variant="serif-20-24" styles={{ color: 'gray20' }}>
                  {projectCategoryName}
                </Text>
              )}
              <Text variant="sans-16" styles={{ color: 'gray40' }}>
                Showing {projectsStartCount}&ndash;{projectsEndCount} of{' '}
                {projectsTotalCount} project{projectsTotalCount !== 1 && 's'}
              </Text>
            </Box>
          </BoundedBox>
          <BoundedBox variant="narrow">
            <ContentCardsList
              nextPageHref={nextPageHref}
              previousPageHref={previousPageHref}
            >
              {projects.map((project) => {
                const projectCategories =
                  project?.data?.project_categories?.map?.(
                    (category) => category?.project_category?.document,
                  ) ?? []
                const primaryProjectCategory = projectCategories[0]

                return (
                  project.url && (
                    <ContentCard
                      key={project.url}
                      href={project.url}
                      topLabel={primaryProjectCategory?.data?.name?.text}
                      title={project.data?.title?.text}
                      excerptHTML={getRichText(project.data?.description)}
                      featuredImageFluid={project.data?.featured_image?.fluid}
                      featuredImageAlt={project.data?.featured_image?.alt}
                      sublinkHref={project.data?.website_url?.url}
                      sublinkText={prettyURL(project.data?.website_url?.url)}
                    />
                  )
                )
              })}
            </ContentCardsList>
          </BoundedBox>
        </Box>
      </Box>
      <MapSlicesToComponents
        list={footerSliceList}
        map={slicesMap}
        meta={meta}
        mapDataToPropsEnhancer={mapDataToPropsEnhancer}
      />
    </Layout>
  )
}

export default withPrismicPreviewResolver(ProjectCategoryTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
    linkResolver,
  },
])

export const query = graphql`
  query ProjectCategoryTemplate($uid: String!, $limit: Int!, $skip: Int!) {
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
          ... on PrismicSliceType {
            id
          }
          ...SlicesPageBody
        }
      }
    }

    prismicProjectCategory(uid: { eq: $uid }) {
      _previewable
      uid
      url
      data {
        name {
          text
        }
      }
    }

    allPrismicProject(
      sort: { fields: [_ON_BUILD_ONLY_normalized_title], order: ASC }
      limit: $limit
      skip: $skip
      filter: {
        data: {
          project_categories: {
            elemMatch: { project_category: { uid: { in: [$uid] } } }
          }
        }
      }
    ) {
      nodes {
        url
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
          featured_image {
            alt
            fluid(maxWidth: 400) {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  }
`
