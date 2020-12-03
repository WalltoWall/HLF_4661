import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withPreview } from 'gatsby-source-prismic'
import { propPairsEq } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'
import { Box } from '@walltowall/calico'

import { NewsPageQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap as pageBodySlicesMap } from '../slices/PageBody'
import { slicesMap as interiorPageHeaderSlicesMap } from '../slices/InteriorPageHeader'
import { slicesMap as interiorPageBodySlicesMap } from '../slices/InteriorPageBody'
import { useCommonStyles } from '../hooks/useCommonStyles'
import { PickPartial } from '../types'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { NewsPostCard } from '../components/NewsPostCard'

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
  { __typename: 'PageBodyHeroImage', id: 'hero-image' },
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

  // TODO: Clean up into a nicer helper function
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
}: PageProps<NewsPageQuery>) => {
  const siteSettings = useSiteSettings()
  const page = data?.prismicPage

  const pageTitle = page?.data?.meta_title ?? page?.data?.title?.text
  const pageDescription = page?.data?.meta_description

  const newsPosts = data.allPrismicNewsPost.nodes

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

  const commonStyles = useCommonStyles()

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
        <Box className={commonStyles.lightGrayGradientBackground}>
          <BoundedBox
            styles={{
              position: [null, 'sticky'],
              top: 0,
            }}
          >
            <Box
              styles={{
                display: 'grid',
                gap: 8,
              }}
            >
              {pageTitle && (
                <Text
                  variant="serif-40-48"
                  as="h1"
                  styles={{ color: 'gray10' }}
                >
                  {pageTitle}
                </Text>
              )}
              {pageDescription && (
                <Text
                  variant="sans-16-italic"
                  as="p"
                  styles={{ color: 'orange55' }}
                >
                  {pageDescription}
                </Text>
              )}
            </Box>
          </BoundedBox>
        </Box>
        <Box
          styles={{
            gridColumn: [null, null, 'span-2'],
            paddingTop: [null, null, 7],
            paddingBottom: [10, 13],
          }}
        >
          <BoundedBox>
            <Box as="ul" styles={{ display: 'grid', gap: [6, 8, 10] }}>
              {newsPosts.map((newsPost) => {
                const newsCategories =
                  newsPost?.data?.news_categories?.map?.(
                    (category) => category?.news_category?.document,
                  ) ?? []
                const primaryNewsCategory = newsCategories[0]

                return (
                  newsPost.url && (
                    <Box as="li">
                      <NewsPostCard
                        href={newsPost.url}
                        topLabel={primaryNewsCategory?.data?.name?.text}
                        title={newsPost.data?.title?.text}
                        excerpt={newsPost.data?.excerpt?.text}
                        date={
                          (newsPost?.data?.published_at as string) ??
                          (newsPost?.first_publication_date as string)
                        }
                        featuredImageFluid={
                          newsPost.data?.featured_image?.fluid
                        }
                        featuredImageAlt={newsPost.data?.featured_image?.alt}
                      />
                    </Box>
                  )
                )
              })}
            </Box>
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

export default withPreview(InteriorPageTemplate)

export const query = graphql`
  query NewsPage {
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
          ... on Node {
            id
          }
          ...SlicesPageBody
        }
      }
    }

    allPrismicNewsPost {
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
            fluid(maxWidth: 400) {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  }
`
