import { graphql, useStaticQuery } from 'gatsby'

import { UseNavigationQuery } from '../types.generated'

export const useNavigation = () => {
  const queryData = useStaticQuery<UseNavigationQuery>(graphql`
    query UseNavigation {
      primary: prismicNavigation(uid: { eq: "primary" }) {
        ...UseNavigationData
      }
      secondary: prismicNavigation(uid: { eq: "secondary" }) {
        ...UseNavigationData
      }
    }

    fragment UseNavigationData on PrismicNavigation {
      data {
        main {
          ... on PrismicNavigationMainNavItem {
            id
            primary {
              name
              link {
                url
              }
            }
            items {
              name
              link {
                url
              }
            }
          }
        }
      }
    }
  `)

  return {
    primary: queryData.primary?.data?.main ?? [],
    secondary: queryData.secondary?.data?.main ?? [],
  }
}
