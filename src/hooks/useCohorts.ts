import { graphql, useStaticQuery } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import { UseCohortsQuery } from '../types.generated'

/**
 * Returns a list of all cohorts and their information. Cohorts are sorted by
 * last name in ascending order.
 */
export const useCohorts = () => {
	const staticData = useStaticQuery<UseCohortsQuery>(graphql`
		query UseCohorts {
			allPrismicCohort {
				nodes {
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
	`)

	const queryData = useMergePrismicPreviewData(staticData)

	return (
		queryData?.allPrismicCohort.nodes
			.map((node) => ({
				uid: node.uid,
				title: node.data?.title?.text,
				number: node.data?.cohort_number,
			}))
			.sort((a, b) => (a.number ?? Infinity) - (b.number ?? Infinity)) ?? []
	)
}
