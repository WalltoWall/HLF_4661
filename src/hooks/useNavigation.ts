import { graphql, useStaticQuery } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import { UseNavigationQuery } from '../types.generated'

export const useNavigation = () => {
	const staticData = useStaticQuery<UseNavigationQuery>(graphql`
		query UseNavigation {
			primary: prismicNavigation(uid: { eq: "primary" }) {
				...UseNavigationData
			}
			secondary: prismicNavigation(uid: { eq: "secondary" }) {
				...UseNavigationData
			}
			footer: prismicNavigation(uid: { eq: "footer" }) {
				...UseNavigationData
			}
		}

		fragment UseNavigationData on PrismicNavigation {
			_previewable
			data {
				main {
					... on PrismicNavigationDataMainNavItem {
						id
						primary {
							name
							link {
								uid
								url
							}
						}
						items {
							name
							link {
								uid
								url
							}
						}
					}
				}
			}
		}
	`)

	const queryData = useMergePrismicPreviewData(staticData)!

	return {
		primary: queryData.primary?.data?.main ?? [],
		secondary: queryData.secondary?.data?.main ?? [],
		footer: queryData.footer?.data?.main ?? [],
	}
}
