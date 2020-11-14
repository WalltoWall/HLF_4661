import * as React from 'react'
import { SkipNavContent } from '@reach/skip-nav'

import { useSiteSettings } from '../hooks/useSiteSettings'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { Link } from '../components/Link'

export type PageBodyHeaderProps = PageTemplateEnhancerProps

const PageBodyHeader = ({ nextSharesBg }: PageBodyHeaderProps) => {
  const siteSettings = useSiteSettings()

  return (
    <>
      <BoundedBox
        as="header"
        nextSharesBg={nextSharesBg}
        styles={{ backgroundColor: 'black', color: 'white' }}
      >
        <Text>
          <Link href="/">{siteSettings.siteName}</Link>
        </Text>
      </BoundedBox>
      <SkipNavContent />
    </>
  )
}

export const mapDataToContext = () => ({
  bg: 'black',
})

export default PageBodyHeader
