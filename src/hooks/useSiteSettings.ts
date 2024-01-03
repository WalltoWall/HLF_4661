import { useStaticQuery, graphql } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import { PrismicSiteSettingsQuery } from '../types.generated'

const YEAR = new Date().getFullYear().toString()

export const useSiteSettings = () => {
	const staticData = useStaticQuery<PrismicSiteSettingsQuery>(graphql`
		query PrismicSiteSettings {
			prismicSettings {
				_previewable
				data {
					site_name {
						text
					}
					site_description {
						text
					}
					site_copyright {
						text
					}
					facebook_handle {
						text
					}
					linkedin_handle {
						text
					}
					newsletter_sign_up_link {
						url
					}
				}
			}
		}
	`)
	const queryData = useMergePrismicPreviewData(staticData)

	const settings = queryData?.prismicSettings?.data

	return {
		siteName: settings?.site_name?.text,
		siteDescription: settings?.site_description?.text,
		siteCopyright: settings?.site_copyright?.text?.replace?.(/\$YEAR/g, YEAR),
		facebookHandle: settings?.facebook_handle?.text,
		facebookURL: `https://facebook.com/${settings?.facebook_handle?.text}`,
		linkedinHandle: settings?.linkedin_handle?.text,
		linkedinURL: `https://linkedin.com/company/${settings?.linkedin_handle?.text}`,
		newsletterSignUpHref: settings?.newsletter_sign_up_link?.url,
	}
}
