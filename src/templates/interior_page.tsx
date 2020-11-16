import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withPreview } from 'gatsby-source-prismic'
import { propPairsEq } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'
import { Box } from '@walltowall/calico'

import { InteriorPageTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { slicesMap as pageBodySlicesMap } from '../slices/PageBody'
import { slicesMap as interiorPageHeaderSlicesMap } from '../slices/InteriorPageHeader'
import { slicesMap as interiorPageBodySlicesMap } from '../slices/InteriorPageBody'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'

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
 * Props added to all slices by `mapDataToPropsEnhancer` for `InteriorPageTemplate`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type InteriorPageTemplateEnhancerProps = ReturnType<
  typeof mapDataToPropsEnhancer
>

export const InteriorPageTemplate = ({
  data,
  location,
}: PageProps<InteriorPageTemplateQuery>) => {
  const siteSettings = useSiteSettings()
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
        list={page?.data?.header}
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
          gap: 8,
          gridTemplateColumns: [null, '3'],
        }}
      >
        <BoundedBox styles={{ paddingRight: 0 }}>
          <Box
            styles={{
              display: 'grid',
              gap: 8,
              position: [null, 'sticky'],
              top: 8,
            }}
          >
            {pageTitle && (
              <Text variant="serif-40-48" as="h1" styles={{ color: 'gray10' }}>
                {pageTitle}
              </Text>
            )}
            {pageDescription && (
              <Text
                variant="sans-16-italic"
                as="p"
                styles={{ color: 'orange55', maxWidth: '30ch' }}
              >
                {pageDescription}
              </Text>
            )}
          </Box>
        </BoundedBox>
        <Box
          styles={{
            gridColumn: 'span-2',
            paddingTop: [null, 5, 7],
            paddingBottom: [4, 5, 7],
          }}
        >
          <MapSlicesToComponents
            list={page?.data?.body}
            map={slicesMap}
            meta={meta}
            mapDataToPropsEnhancer={mapDataToPropsEnhancer}
          />
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
          ... on Node {
            id
          }
          ...SlicesInteriorPageHeader
        }
        body {
          __typename
          ... on Node {
            id
          }
          ...SlicesInteriorPageBody
        }
      }
    }
  }
`
