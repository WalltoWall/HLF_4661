import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withPreview } from 'gatsby-source-prismic'
import { propPairsEq } from '@walltowall/helpers'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { InteriorPageTemplateQuery } from '../types.generated'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { slicesMap as pageBodySlicesMap } from '../slices/PageBody'
import { slicesMap as interiorPageHeaderSlicesMap } from '../slices/InteriorPageHeader'

import { Layout } from '../components/Layout'
import { useSiteSettings } from '../hooks/useSiteSettings'

// Merged slices map including PageBodyHeader and PageBodyFooter.
const slicesMap = {
  ...pageBodySlicesMap,
  ...interiorPageHeaderSlicesMap,
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
          {page?.data?.meta_title ?? page?.data?.title?.text ?? ''}
          {page?.uid === 'home' ? '' : ` | ${siteSettings.siteName}`}
        </title>
        {page?.data?.meta_description && (
          <meta name="description" content={page?.data?.meta_description} />
        )}
      </Helmet>
      <MapSlicesToComponents
        list={page?.data?.header}
        map={slicesMap}
        meta={meta}
        listMiddleware={slicesMiddleware}
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
      }
    }
  }
`
