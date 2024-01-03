import * as React from 'react'
import { PageProps } from 'gatsby'
import {
	withPrismicPreviewResolver,
	WithPrismicPreviewResolverProps,
} from 'gatsby-plugin-prismic-previews'

type PreviewPageProps = PageProps & WithPrismicPreviewResolverProps

export const PreviewPage = ({ isPrismicPreview }: PreviewPageProps) => {
	if (isPrismicPreview === false)
		return (
			<p>
				You're on the preview page, but it looks like we don't have any data to
				preview!
			</p>
		)

	return <p>Loading&hellip;</p>
}

export default withPrismicPreviewResolver(PreviewPage)
