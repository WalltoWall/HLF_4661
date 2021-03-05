import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { UseFellowsQuery } from '../types.generated'
import { moveFirstWordToEnd } from '../lib/moveFirstWordToEnd'

/**
 * Returns a list of all fellows and their information. Fellows are sorted by
 * last name in ascending order.
 */
export const useFellows = () => {
  const queryData = useStaticQuery<UseFellowsQuery>(graphql`
    query UseFellows {
      allPrismicFellow {
        nodes {
          uid
          url
          data {
            name {
              text
            }
            cohort {
              document {
                ... on PrismicCohort {
                  uid
                  data {
                    title {
                      text
                    }
                    cohort_number
                  }
                }
              }
            }
            biography {
              text
              html
            }
            portrait {
              alt
              fluid(maxWidth: 300) {
                ...GatsbyPrismicImageFluid
              }
            }
            photo {
              alt
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  `)

  return React.useMemo(() => {
    const fellows = queryData.allPrismicFellow.nodes.map((node) => ({
      uid: node.uid,
      url: node.url,
      name: node.data?.name?.text,
      cohortUID: node.data?.cohort?.document?.uid,
      cohortTitle: node.data?.cohort?.document?.data?.title?.text,
      cohortNumber: node.data?.cohort?.document?.data?.cohort_number,
      biographyHTML: getRichText(node.data?.biography),
      portraitFluid: node.data?.portrait?.fluid,
      portraitAlt: node.data?.portrait?.alt,
      photoFluid: node.data?.photo?.fluid,
      photoAlt: node.data?.photo?.alt,
    }))

    // Fellows are sorted last-name first with ʻokina removed.
    return fellows.sort((a, b) => {
      const aName = a.name ? moveFirstWordToEnd(a.name).replace('ʻ', '') : ''
      const bName = b.name ? moveFirstWordToEnd(b.name).replace('ʻ', '') : ''

      return Intl.Collator('en').compare(aName, bName)
    })
  }, [queryData])
}
