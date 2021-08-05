import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { UseFellowsQuery } from '../types.generated'
import { moveFirstWordToEnd } from '../lib/moveFirstWordToEnd'
import { IGatsbyImageData } from 'gatsby-plugin-image'

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
              gatsbyImageData(
                placeholder: BLURRED
                width: 300
                breakpoints: [300]
              )
            }
            photo {
              alt
              gatsbyImageData(
                placeholder: BLURRED
                width: 600
                breakpoints: [600]
              )
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
      portraitData: node.data?.portrait?.gatsbyImageData as IGatsbyImageData,
      portraitAlt: node.data?.portrait?.alt,
      photoData: node.data?.photo?.gatsbyImageData as IGatsbyImageData,
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
