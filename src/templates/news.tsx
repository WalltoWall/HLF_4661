import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { propPairsEq } from '@walltowall/helpers'
import { Box } from '@walltowall/calico'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { NewsTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap } from '../slices/PageBody'
import { useNavigation } from '../hooks/useNavigation'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { ContentCard } from '../components/ContentCard'
import { ContentCardsList } from '../components/ContentCardsList'
import { InteriorPageSidebar } from '../components/InteriorPageSidebar'
import { Text } from '../components/Text'
import { linkResolver } from '../linkResolver'
import { getType as getPageType } from './page'

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
export type NewsTemplateContext = {
  limit: number
  skip: number
  numPages: number
  currentPage: number
  total: number
}

/**
 * Props added to all slices by `mapDataToPropsEnhancer` for `NewsPageTemplate`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type NewsTemplateEnhancerProps = ReturnType<
  typeof mapDataToPropsEnhancer
>

export const NewsTemplate = ({
  data,
  location,
  pageContext,
}: PageProps<NewsTemplateQuery, NewsTemplateContext>) => {
  const siteSettings = useSiteSettings()
  const page = data?.prismicPage

  const pageTitle = page?.data?.meta_title ?? page?.data?.title?.text
  const pageDescription = page?.data?.meta_description

  const newsPosts = data.allPrismicNewsPost.nodes
  const newsPostsStartCount = pageContext.skip + 1
  const newsPostsEndCount = pageContext.skip + newsPosts.length
  const newsPostsTotalCount = pageContext.total

  const nextPageHref =
    pageContext.currentPage < pageContext.numPages
      ? `/news/${pageContext.currentPage + 1}/`
      : undefined
  const previousPageHref =
    pageContext.currentPage > 2
      ? `/news/${pageContext.currentPage - 1}/`
      : pageContext.currentPage === 2
      ? '/news/'
      : undefined

  const navigation = useNavigation()
  const newsNavigation = navigation.primary
    .find((item) => item?.primary?.link?.uid === 'news')
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
          title={pageTitle}
          description={pageDescription}
          navigationItems={newsNavigation}
        />
        <Box
          styles={{
            gridColumn: [null, null, 'span-2'],
            paddingTop: [null, null, 7],
          }}
        >
          <BoundedBox variant="narrow" nextSharesBg={true}>
            <Box styles={{ display: 'grid', gap: 4 }}>
              <Text variant="serif-20-24" styles={{ color: 'gray20' }}>
                All articles
              </Text>
              <Text variant="sans-16" styles={{ color: 'gray40' }}>
                Showing {newsPostsStartCount}&ndash;{newsPostsEndCount} of{' '}
                {newsPostsTotalCount} article{newsPostsTotalCount !== 1 && 's'}
              </Text>
            </Box>
          </BoundedBox>
          <BoundedBox variant="narrow">
            <ContentCardsList
              nextPageHref={nextPageHref}
              previousPageHref={previousPageHref}
            >
              {newsPosts.map((newsPost) => {
                const newsCategories =
                  newsPost?.data?.news_categories?.map?.(
                    (category) => category?.news_category?.document,
                  ) ?? []
                const primaryNewsCategory = newsCategories[0]

                return (
                  newsPost.url && (
                    <ContentCard
                      key={newsPost.url}
                      href={newsPost.url}
                      topLabel={primaryNewsCategory?.data?.name?.text}
                      title={newsPost.data?.title?.text}
                      excerpt={newsPost.data?.excerpt?.text}
                      date={
                        (newsPost?.data?.published_at as string) ??
                        (newsPost?.first_publication_date as string)
                      }
                      featuredImageData={
                        newsPost.data?.featured_image
                          ?.gatsbyImageData as IGatsbyImageData
                      }
                      featuredImageAlt={newsPost.data?.featured_image?.alt}
                      buttonText="Read More"
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
        getType={getPageType}
      />
    </Layout>
  )
}

export default withPrismicPreviewResolver(NewsTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
    linkResolver,
  },
])

export const query = graphql`
  query NewsTemplate($limit: Int!, $skip: Int!) {
    prismicPage(uid: { eq: "news" }) {
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

    allPrismicNewsPost(
      sort: {
        fields: [data___published_at, first_publication_date]
        order: DESC
      }
      limit: $limit
      skip: $skip
    ) {
      nodes {
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
          featured_image {
            alt
            gatsbyImageData(
              placeholder: BLURRED
              width: 400
              breakpoints: [400]
            )
          }
        }
      }
    }
  }
`
