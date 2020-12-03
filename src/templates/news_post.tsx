import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { useStyles } from 'react-treat'
import { Helmet } from 'react-helmet-async'
import { withPreview } from 'gatsby-source-prismic'
import { propPairsEq } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'
import { Box } from '@walltowall/calico'

import { NewsPostTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap as pageBodySlicesMap } from '../slices/PageBody'
import { slicesMap as newsPostBodySlicesMap } from '../slices/NewsPostBody'
import { PickPartial } from '../types'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'

import * as styleRefs from './news_post.treat'
import { Anchor } from '../components/Anchor'
import { Divider } from '../components/Divider'
import { NewsPostCard } from '../components/NewsPostCard'
import GatsbyImage from 'gatsby-image'

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

  // TODO: Clean up into a nicer helper function
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
  const siteSettings = useSiteSettings()
  const newsPost = data?.prismicNewsPost

  const newsPostTitle = newsPost?.data?.title?.text
  const newsPostPublishedAt =
    (newsPost?.data?.published_at as string) ??
    (newsPost?.first_publication_date as string)
  const newsPostExcerpt = newsPost?.data?.excerpt?.text
  const newsPostFeaturedImageFluid = newsPost?.data?.featured_image?.fluid
  const newsPostFeaturedImageAlt = newsPost?.data?.featured_image?.alt

  const newsCategories =
    newsPost?.data?.news_categories?.map?.(
      (category) => category?.news_category?.document,
    ) ?? []
  const primaryNewsCategory = newsCategories[0]

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

  const styles = useStyles(styleRefs)

  return (
    <Layout>
      <Helmet>
        <title>
          {newsPostTitle ?? ''}
          {newsPost?.uid === 'home' ? '' : ` | ${siteSettings.siteName}`}
        </title>
        {newsPostExcerpt && (
          <meta name="description" content={newsPostExcerpt} />
        )}
      </Helmet>
      <MapSlicesToComponents
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
          gap: [null, null, 8],
          gridTemplateColumns: [null, null, 3],
        }}
      >
        <Box
          className={styles.lightGrayGradientBackground}
          styles={{
            paddingBottom: [2, null, 16],
          }}
        >
          {newsPostFeaturedImageFluid && (
            <GatsbyImage
              fluid={newsPostFeaturedImageFluid}
              alt={newsPostFeaturedImageAlt}
            />
          )}
        </Box>
        <Box styles={{ gridColumn: [null, null, 'span-2'] }}>
          <BoundedBox nextSharesBg={true}>
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
            list={newsPost?.data?.body}
            map={slicesMap}
            meta={meta}
            mapDataToPropsEnhancer={mapDataToPropsEnhancer}
          />
          <BoundedBox styles={{ paddingTop: [6, 7, 8] }}>
            <Divider styles={{ marginBottom: 8 }} />
            {nextNewsPost && nextNewsPost.url && (
              <NewsPostCard
                href={nextNewsPost.url}
                topLabel="Next Article"
                title={nextNewsPost.data?.title?.text}
                excerpt={nextNewsPost.data?.excerpt?.text}
                date={
                  (nextNewsPost?.data?.published_at as string) ??
                  (nextNewsPost?.first_publication_date as string)
                }
                featuredImageFluid={nextNewsPost.data?.featured_image?.fluid}
                featuredImageAlt={nextNewsPost.data?.featured_image?.alt}
              />
            )}
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

export default withPreview(NewsPostTemplate)

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
        featured_image {
          alt
          fluid(maxWidth: 400) {
            ...GatsbyPrismicImageFluid
          }
        }
        body {
          __typename
          ... on Node {
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
        fluid(maxWidth: 400) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`
