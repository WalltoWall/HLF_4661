import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { UseNewsPageQuery } from '../types.generated'

/**
 * Returns meta information about the News page.
 */
export const useNewsPage = () => {
  const queryData = useStaticQuery<UseNewsPageQuery>(graphql`
    query UseNewsPage {
      prismicPage(uid: { eq: "news" }) {
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
  `)
  const page = queryData.prismicPage

  return React.useMemo(
    () => ({
      title: page?.data?.title?.text,
      meta_title: page?.data?.meta_title,
      meta_description: page?.data?.meta_description,
      body: page?.data?.body,
    }),
    [page],
  )
}
