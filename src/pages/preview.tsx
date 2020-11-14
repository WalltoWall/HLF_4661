import * as React from 'react'
import { PageProps } from 'gatsby'
import {
  withPreviewResolver,
  WithPreviewResolverProps,
} from 'gatsby-source-prismic'

import { linkResolver } from '../linkResolver'

type PreviewPageProps = PageProps & WithPreviewResolverProps

export const PreviewPage = ({ isPreview }: PreviewPageProps) => {
  if (isPreview === false)
    return (
      <p>
        You're on the preview page, but it looks like we don't have any data to
        preview!
      </p>
    )

  return <p>Loading&hellip;</p>
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
  //@ts-ignore
  linkResolver,
})
