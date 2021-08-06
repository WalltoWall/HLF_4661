import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { NotFoundPageQuery } from '../types.generated'
import { slicesMap } from '../slices/PageBody'
import {
  mapDataToPropsEnhancer,
  PageTemplate,
  slicesMiddleware,
} from '../templates/page'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { NewsPostTemplate } from '../templates/news_post'
import { ProjectTemplate } from '../templates/project'
import { InteriorPageTemplate } from '../templates/interior_page'

import { Layout } from '../components/Layout'
import { linkResolver } from '../linkResolver'

export const NotFoundPage = ({
  data,
  location,
}: PageProps<NotFoundPageQuery>) => {
  const siteSettings = useSiteSettings()
  const page = data?.prismicPage

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
          {page?.data?.meta_title ??
            page?.data?.title?.text ??
            'Page not found'}{' '}
          | {siteSettings.siteName}
        </title>
        {page?.data?.meta_description && (
          <meta name="description" content={page?.data?.meta_description} />
        )}
      </Helmet>
      <MapSlicesToComponents
        list={page?.data?.body}
        map={slicesMap}
        meta={meta}
        listMiddleware={slicesMiddleware}
        mapDataToPropsEnhancer={mapDataToPropsEnhancer}
      />
    </Layout>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
      interior_page: InteriorPageTemplate,
      news_post: NewsPostTemplate,
      project: ProjectTemplate,
    }),
  },
])

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
          ... on PrismicSliceType {
            id
          }
          ...SlicesPageBody
        }
      }
    }
  }
`
