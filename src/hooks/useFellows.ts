import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { UseFellowsQuery } from '../types.generated'
import { removeFirstWord } from '../lib/removeFirstWord'

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
      name: node.data?.name?.text,
      cohortUID: node.data?.cohort?.document?.uid,
      cohortTitle: node.data?.cohort?.document?.data?.title?.text,
      biographyHTML: getRichText(node.data?.biography),
      portraitFluid: node.data?.portrait?.fluid,
      portraitAlt: node.data?.portrait?.alt,
      photoFluid: node.data?.photo?.fluid,
      photoAlt: node.data?.photo?.alt,
    }))

    // Fellows are sorted using their full name with the first word removed and
    // ʻokina removed.
    return fellows.sort((a, b) => {
      const aName = a.name ? removeFirstWord(a.name).replace('ʻ', '') : ''
      const bName = b.name ? removeFirstWord(b.name).replace('ʻ', '') : ''

      return Intl.Collator('en').compare(aName, bName)
    })
  }, [queryData])
}
