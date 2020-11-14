import React from 'react'

import { useSiteSettings } from '../hooks/useSiteSettings'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { PageTemplateEnhancerProps } from '../templates/page'

export type PageBodyFooter = PageTemplateEnhancerProps

const PageBodyFooter = ({ nextSharesBg }: PageBodyFooter) => {
  const siteSettings = useSiteSettings()

  return (
    <BoundedBox
      as="footer"
      nextSharesBg={nextSharesBg}
      styles={{
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <Text>{siteSettings.siteCopyright}</Text>
    </BoundedBox>
  )
}

export const mapDataToContext = () => ({
  bg: 'black',
})

export default PageBodyFooter
