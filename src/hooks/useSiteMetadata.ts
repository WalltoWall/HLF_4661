import { useStaticQuery, graphql } from 'gatsby'

import { UseSiteMetadataQuery } from '../types.generated'

export const useSiteMetadata = () => {
	const queryData = useStaticQuery<UseSiteMetadataQuery>(graphql`
		query UseSiteMetadata {
			site {
				siteMetadata {
					title
					titleShort
					description
					siteUrl
				}
			}
		}
	`)

	const settings = queryData.site?.siteMetadata

	return {
		title: settings?.title,
		titleShort: settings?.titleShort,
		description: settings?.description,
		siteUrl: settings?.siteUrl,
	}
}
