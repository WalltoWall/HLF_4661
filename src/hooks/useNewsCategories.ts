import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { UseNewsCategoriesQuery } from '../types.generated'

/**
 * Returns a list of all News Categories and their information.
 */
export const useNewsCategories = () => {
  const queryData = useStaticQuery<UseNewsCategoriesQuery>(graphql`
    query UseNewsCategories {
      allPrismicNewsCategory {
        nodes {
          uid
          data {
            name {
              text
            }
          }
        }
      }
    }
  `)

  return React.useMemo(
    () =>
      queryData.allPrismicNewsCategory.nodes.map((node) => ({
        uid: node.uid,
        name: node.data?.name?.text,
      })),
    [queryData],
  )
}
