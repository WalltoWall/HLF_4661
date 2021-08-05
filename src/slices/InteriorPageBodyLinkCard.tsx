import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@walltowall/calico'
import { isInternal } from '@walltowall/helpers'

import { InteriorPageBodyLinkCardFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { getURLHost } from '../lib/getURLHost'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { Anchor } from '../components/Anchor'
import { Inline } from '../components/Inline'
import { Icon } from '../components/Icon'
import { ButtonLink } from '../components/ButtonLink'

export type InteriorPageBodyLinkCardProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const InteriorPageBodyLinkCard = ({
  title,
  href,
  nextSharesBg,
  id,
}: InteriorPageBodyLinkCardProps) => {
  const siteMetadata = useSiteMetadata()

  const isExternal = href ? !isInternal(href) : true
  const host = getURLHost((isExternal ? href : siteMetadata?.siteUrl) ?? '')

  return (
    <BoundedBox
      as="section"
      variant="narrow"
      nextSharesBg={nextSharesBg}
      id={id}
      styles={{ backgroundColor: 'white' }}
    >
      <Box
        styles={{
          backgroundColor: 'gray95',
          padding: [6, 8],
          display: 'grid',
          gap: [8, 10],
          justifyItems: 'start',
          maxWidth: '30rem',
        }}
      >
        <Box styles={{ display: 'grid', gap: 4 }}>
          <Text variant="sans-13-14-caps" styles={{ color: 'gray40' }}>
            Related Link
          </Text>
          <Box styles={{ display: 'grid', gap: 4, justifyItems: 'start' }}>
            {href && title && (
              <Anchor href={href} styles={{ color: 'gray10' }}>
                <Text variant="serif-20-24">{title}</Text>
              </Anchor>
            )}
            {href && (
              <Anchor href={href} styles={{ color: 'gray40' }}>
                <Inline space={2} alignY="center">
                  <Text variant="serif-14-16">{host}</Text>
                  {isExternal && (
                    <Icon name="external" styles={{ width: '0.75rem' }} />
                  )}
                </Inline>
              </Anchor>
            )}
          </Box>
        </Box>
        {href && <ButtonLink href={href}>Open Link</ButtonLink>}
      </Box>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageBodyLinkCardFragment,
  typeof mapDataToContext
>) => ({
  title: data.primary?.link_title?.text,
  href: data.primary?.link?.url,
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment InteriorPageBodyLinkCard on PrismicInteriorPageDataBodyLinkCard {
    primary {
      link_title {
        text
      }
      link {
        url
      }
    }
  }
`

export default InteriorPageBodyLinkCard
