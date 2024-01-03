import { graphql, useStaticQuery } from 'gatsby'

import { UseNewsCategoriesQuery } from '../types.generated'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

/**
 * Returns a list of all News Categories and their information.
 */
export const useNewsCategories = () => {
	const staticData = useStaticQuery<UseNewsCategoriesQuery>(graphql`
		query UseNewsCategories {
			allPrismicNewsCategory {
				nodes {
					_previewable
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
	const queryData = useMergePrismicPreviewData(staticData)

	return (
		queryData?.allPrismicNewsCategory.nodes.map((node) => ({
			uid: node.uid,
			name: node.data?.name?.text,
		})) ?? []
	)
}
