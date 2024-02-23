import { graphql, useStaticQuery } from 'gatsby'
import { getRichText } from '@walltowall/helpers'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import { UseFellowsQuery } from '../types.generated'
import { moveFirstWordToEnd } from '../lib/moveFirstWordToEnd'

/**
 * Returns a list of all fellows and their information. Fellows are sorted by
 * last name in ascending order.
 */
export const useFellows = () => {
	const staticData = useStaticQuery<UseFellowsQuery>(graphql`
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
							url
						}
						photo {
							alt
							url
						}
					}
				}
			}
		}
	`)

	const queryData = useMergePrismicPreviewData(staticData)

	const fellows =
		queryData?.allPrismicFellow.nodes.map((node) => ({
			uid: node.uid,
			url: node.url,
			name: node.data?.name?.text,
			cohortUID: node.data?.cohort?.document?.uid,
			cohortTitle: node.data?.cohort?.document?.data?.title?.text,
			cohortNumber: node.data?.cohort?.document?.data?.cohort_number,
			biographyHTML: getRichText(node.data?.biography),
			portraitSrc: node.data?.portrait?.url,
			portraitAlt: node.data?.portrait?.alt,
			photoSrc: node.data?.photo?.url,
			photoAlt: node.data?.photo?.alt,
		})) ?? []

	// Fellows are sorted last-name first with ʻokina removed.
	return fellows.sort((a, b) => {
		const aName = a.name ? moveFirstWordToEnd(a.name).replace('ʻ', '') : ''
		const bName = b.name ? moveFirstWordToEnd(b.name).replace('ʻ', '') : ''

		return Intl.Collator('en').compare(aName, bName)
	})
}
