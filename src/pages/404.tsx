import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { Layout } from '../components/Layout'
import { slicesMap } from '../slices/PageBody'
import { mapDataToPropsEnhancer, PageTemplate } from '../templates/page'
import { useSiteSettings } from '../hooks/useSiteSettings'

/**
 * Mapping of Prismic custom type API IDs to their templates. Add mappings here
 * as custom types and templates are created.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/blob/master/docs/previews.md#withUnpublishedPreview
 */
const customTypeToTemplate = {
  page: PageTemplate,
}

const sliceList = [
  { __typename: 'PageBodyHeader', id: 'header' },
  { __typename: 'PageBodyFooter', id: 'footer' },
]

export const NotFoundPage = ({ data, location }: PageProps) => {
  const siteSettings = useSiteSettings()

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
        <title>Page not found | {siteSettings.siteName}</title>
      </Helmet>
      <MapSlicesToComponents
        list={sliceList}
        map={slicesMap}
        meta={meta}
        mapDataToPropsEnhancer={mapDataToPropsEnhancer}
      />
    </Layout>
  )
}

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: customTypeToTemplate,
})

export const query = graphql`
  query NotFoundPage {
    prismicPage(uid: { eq: "404" }) {
      _previewable
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
  }
`
